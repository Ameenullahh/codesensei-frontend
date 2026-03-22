import React, { useState, useEffect } from 'react';
import RippleButton from './RippleButton';

export default function ProfileModal({ isOpen, onClose, onSaveSuccess }) {
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('Python');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    if (isOpen) {
      const storedStr = localStorage.getItem('userProfile');
      if (storedStr) {
        try {
          const stored = JSON.parse(storedStr);
          setUsername(stored.username || '');
          setLanguage(stored.language || 'Python');
          setTopic(stored.topic || '');
        } catch(e) {}
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!username.trim()) return;
    localStorage.setItem('userProfile', JSON.stringify({ username, language, topic }));
    if (onSaveSuccess) {
      onSaveSuccess();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-surface-container-low border border-[#a855f7]/30 rounded-2xl w-full max-w-md overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
        <div className="p-6 border-b border-[#a855f7]/20 flex justify-between items-center bg-[#131313]">
          <h2 className="text-xl font-headline font-bold text-[#a855f7]">User Profile</h2>
          <button onClick={onClose} className="text-on-surface-variant hover:text-[#a855f7] transition-colors material-symbols-outlined leading-none">
            close
          </button>
        </div>
        <div className="p-6 space-y-6 bg-[#0a0a0a]">
          <div className="space-y-2">
            <label className="text-xs font-label uppercase tracking-widest text-[#b9cacb]/70">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter your alias"
              className="w-full bg-[#131313] border border-outline-variant/30 focus:border-[#a855f7] rounded-lg px-4 py-3 text-sm text-[#e1fdff] outline-none transition-all placeholder:text-on-surface-variant/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-label uppercase tracking-widest text-[#b9cacb]/70">Coding Language</label>
            <div className="relative">
              <select 
                value={language}
                onChange={e => setLanguage(e.target.value)}
                className="w-full bg-[#131313] border border-outline-variant/30 focus:border-[#a855f7] rounded-lg px-4 py-3 text-sm text-[#e1fdff] outline-none transition-all appearance-none"
              >
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C++">C++</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-label uppercase tracking-widest text-[#b9cacb]/70">Focus Topic</label>
            <input 
              type="text" 
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. Arrays, Recursion, System Design"
              className="w-full bg-[#131313] border border-outline-variant/30 focus:border-[#a855f7] rounded-lg px-4 py-3 text-sm text-[#e1fdff] outline-none transition-all placeholder:text-on-surface-variant/30"
            />
          </div>
        </div>
        <div className="p-6 border-t border-[#a855f7]/10 bg-[#131313]">
          <RippleButton 
            onClick={handleSave}
            className="w-full py-4 bg-[#a855f7] text-on-primary font-headline font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95 transition-all"
          >
            Save Configuration
          </RippleButton>
        </div>
      </div>
    </div>
  );
}
