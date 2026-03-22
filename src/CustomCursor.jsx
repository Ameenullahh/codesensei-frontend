import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        body * {
          cursor: none !important;
        }
      `}</style>
      <div
        className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full bg-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.8)] mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] w-8 h-8 rounded-full border border-[#a855f7]/50 shadow-[0_0_20px_rgba(168,85,247,0.2)] mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
