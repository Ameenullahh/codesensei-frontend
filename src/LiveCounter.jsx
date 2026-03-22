import React, { useState, useEffect } from 'react';

export default function LiveCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const target = 1155;
    let startTime;
    
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(target * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="flex items-center gap-2 border border-[#a855f7]/30 bg-[#a855f7]/10 px-3 py-1 rounded-full whitespace-nowrap mr-2">
      <span className="material-symbols-outlined text-[#a855f7] text-[14px]">terminal</span>
      <span className="text-[10px] font-bold text-[#a855f7] tracking-widest uppercase">
        {count.toLocaleString()} Sessions Active
      </span>
    </div>
  );
}
