import React, { useState } from 'react';

export default function RippleButton({ children, onClick, className, ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate ripple diameter to cover the button
    const size = Math.max(rect.width, rect.height) * 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    if (onClick) onClick(e);
  };

  const handleRippleEnd = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <button
      className={`relative overflow-hidden ${className || ''}`}
      {...props}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-[#a855f7] opacity-40 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: 'translate(-50%, -50%) scale(0)',
          }}
          onAnimationEnd={() => handleRippleEnd(ripple.id)}
        />
      ))}
    </button>
  );
}
