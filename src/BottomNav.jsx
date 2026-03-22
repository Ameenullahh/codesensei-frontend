import React from 'react';

export default function BottomNav({ page, setPage }) {
  const tabs = [
    { id: 'WorldSelect', icon: 'cyclone', label: 'Worlds' },
    { id: 'Practice', icon: 'code', label: 'Practice' },
    { id: 'Leaderboard', icon: 'emoji_events', label: 'Ranks' },
    { id: 'Archive', icon: 'inventory_2', label: 'Archive' }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 w-full bg-[#0e0e0e]/95 backdrop-blur-md border-t border-[#a855f7]/20 flex justify-around items-center py-3 z-[60]">
      {tabs.map((tab) => {
        const isActive = page === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setPage(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-[#a855f7] scale-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'text-[#b9cacb]/60 hover:text-[#a855f7]/80'
            }`}
          >
            <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
            <span className="text-[10px] font-label tracking-widest uppercase">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
