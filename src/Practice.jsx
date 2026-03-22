import ProfileModal from './ProfileModal';
import React, { useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import RippleButton from './RippleButton';
import LiveCounter from './LiveCounter';

export default function Practice({ setPage }) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState('editor');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState('python');
  
  const [questionText, setQuestionText] = useState('Loading question...');
  const [editorContent, setEditorContent] = useState('def detect_villain_energy(signature):\n    # Scan for unusual flux in chakra patterns\n    power_level = signature.get(\'mana_output\', 0)\n    if power_level > 9000:\n        return "VILLAIN_DETECTED"\n    return "NEUTRAL_ENTITY"\n');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "SENSEI", text: "Your syntax for energy detection is precise. However, consider how a Uchiha signature might bypass standard chakra scans. Can you optimize for ocular interference?", time: "09:41 AM" },
    { sender: "YOU", text: "Adding Ocular Flux Filter to line 4 now. Should I use a recursive scan for that?", time: "09:42 AM" }
  ]);
  
  const selectedMentor = JSON.parse(localStorage.getItem('selectedMentor')) || { name: 'Kakashi.js', world: 'Elite Mentor', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7XhC1SQjVv2dTWpc0Khby5lgu_TB8iUDKByAgSkgQfBlOXnsipKsP-O78jQUVZs4RvA-uAlseCiKlKBA8vuvPQ5aliRfqAhBXtShDWlu1xNZdQS4Ab2xMD0fWQOU_XQTOcAoaEJQC_wMF-kDiEJzQklLxNmLJWtZlSVtR_eswORpg-iZgI_cPAOspdYWjAEj71sSIqi2CN1Megl4uOpQWNMfRnRjHwne-vA9XvjIPvJMaB8R66NcgGZMBWaHztvMIFC3sVEphgw' };

  React.useEffect(() => {
    let isMounted = true;
    setQuestionText('Loading question...');
    fetch(`https://codesensei-backend-production.up.railway.app/question/demo123/${language}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setQuestionText(data.question || data.text || JSON.stringify(data));
      })
      .catch(err => {
        if (isMounted) setQuestionText('Failed to load question. Please ensure the backend API is running at https://codesensei-backend-production.up.railway.app');
      });
    return () => { isMounted = false; };
  }, [language]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://codesensei-backend-production.up.railway.app/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: editorContent,
          language,
          mentor: selectedMentor.name,
          user_id: "demo123"
        })
      });
      const data = await response.json();
      const feedback = data.feedback || data.message || JSON.stringify(data);
      
      setMessages(prev => [...prev, {
        sender: "SENSEI",
        text: feedback,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        sender: "SENSEI",
        text: "Error connecting to mentor API. Ensure https://codesensei-backend-production.up.railway.app is listening for POST /submit.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const chatEndRef = React.useRef(null);
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-background text-on-surface font-body overflow-hidden">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col py-6 bg-[#0e0e0e] w-64 border-r-0 z-40">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
          <div>
            <h2 
              className="text-xl font-bold text-[#a855f7] font-headline tracking-tighter uppercase cursor-pointer"
              onClick={() => setPage('Landing')}
            >
              Sensei AI
            </h2>
            <p className="text-[10px] text-on-surface-variant font-label tracking-widest uppercase opacity-60">Level 42 Coder</p>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all font-inter text-sm tracking-wide nav-glow-sweep" onClick={(e) => { e.preventDefault(); setPage('WorldSelect'); }}>
            <span className="material-symbols-outlined">cyclone</span>
            <span>Anime World</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all font-inter text-sm tracking-wide nav-glow-sweep" onClick={(e) => { e.preventDefault(); setPage('WorldSelect'); }}>
            <span className="material-symbols-outlined">electric_bolt</span>
            <span>Marvel Universe</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all font-inter text-sm tracking-wide nav-glow-sweep" onClick={(e) => { e.preventDefault(); setPage('WorldSelect'); }}>
            <span className="material-symbols-outlined">auto_awesome</span>
            <span>DC Realm</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all font-inter text-sm tracking-wide nav-glow-sweep" onClick={(e) => { e.preventDefault(); setPage('WorldSelect'); }}>
            <span className="material-symbols-outlined">castle</span>
            <span>Westeros</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#1c1b1b] text-[#a855f7] border-l-4 border-[#a855f7] shadow-[0_0_15px_rgba(168, 85, 247,0.2)] font-inter text-sm tracking-wide nav-glow-sweep" onClick={(e) => { e.preventDefault(); }}>
            <span className="material-symbols-outlined">code</span>
            <span>Editor</span>
          </a>
        </nav>

      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 h-screen flex flex-col relative overflow-hidden">
        {/* TopAppBar */}
        <header className="h-20 w-full flex justify-between items-center px-8 bg-[#131313]/80 backdrop-blur-xl z-30">
          <div className="flex items-center gap-12">
            <div 
              className="text-2xl font-bold tracking-tighter text-[#a855f7] drop-shadow-[0_0_8px_rgba(168, 85, 247,0.5)] font-headline cursor-pointer"
              onClick={() => setPage('Landing')}
            >
              CodeSensei
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="text-[#b9cacb] font-medium hover:text-[#a855f7] transition-colors duration-300" onClick={(e) => { e.preventDefault(); setPage('WorldSelect'); }}>Worlds</a>
              <a href="#" className="text-[#e1fdff] border-b-2 border-[#a855f7] pb-1 hover:text-[#a855f7] transition-colors duration-300" onClick={(e) => { e.preventDefault(); setPage('Practice'); }}>Practice</a>
              </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
          <LiveCounter className="hidden lg:flex" />
          </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsProfileModalOpen(true)}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpQYXMnbbzXpY-vxnYj1nEDcqPx7ImiERP7kiRn2p2q3bPHJMIzvfbazSjFHsM8ayH9NEj8Q8UDlfWDPCAIAyQ14BOJAdF-rd0kKqB-cdLva2Ry0oAyzshXrpxChkAX96QFFo8cVo8VoPIPxJhQA23niDzxdYrTzPRD0EVADRA8ssa2FN-BzkMMfr5AOPEWQZ0QokObJSXEXEyOuYinhvNxrlGSuGFFy2IQE4YojGOLOCAfD2ZK-d4qD7yuuqX3YiZSfAx5OGhig" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

                {/* Editor & Chat Container */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden w-full">
          {/* Mobile Tab Switcher */}
          <div className="lg:hidden flex w-full border-b border-outline-variant/10 bg-[#131313] shrink-0 z-20">
            <button 
              className={`flex-1 py-3 font-headline text-sm font-bold transition-colors ${mobileTab === 'editor' ? 'text-primary border-b-2 border-primary-container bg-surface-container-high/30' : 'text-on-surface-variant'}`}
              onClick={() => setMobileTab('editor')}
            >
              Editor
            </button>
            <button 
              className={`flex-1 py-3 font-headline text-sm font-bold transition-colors ${mobileTab === 'chat' ? 'text-primary border-b-2 border-primary-container bg-surface-container-high/30' : 'text-on-surface-variant'}`}
              onClick={() => setMobileTab('chat')}
            >
              Chat
            </button>
          </div>

          {/* Code Editor Section (60%) */}
          <section className={`w-full lg:w-[60%] flex-col border-r border-outline-variant/10 bg-[#0a0a0a] ${mobileTab === "editor" ? "flex" : "hidden lg:flex"} h-full min-h-[400px] lg:min-h-0 pb-16 lg:pb-0`}>
            {/* Editor Header */}
            <div className="h-auto min-h-[56px] py-2 lg:py-0 px-4 lg:px-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-container-lowest border-b border-outline-variant/5">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="hidden sm:inline text-[10px] font-label uppercase tracking-widest text-on-surface-variant/60">Language:</span>
                <div className="relative flex-1 sm:flex-none">
                  <select 
                    className="w-full bg-surface-container-low text-primary text-sm px-4 py-1.5 rounded border border-outline-variant/20 focus:ring-1 focus:ring-primary-container/40 outline-none "
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="cpp">C++</option>
                  </select>
                  </div>
              </div>

            </div>

            {/* Editor Body */}
            <div className="p-4 border-b border-outline-variant/10 bg-surface-container-low text-sm text-on-surface-variant leading-relaxed shadow-inner">
              <span className="font-bold text-[#a855f7] mr-2">Mission:</span> {questionText}
            </div>
            <div className="flex-1 relative font-mono text-sm overflow-hidden bg-[#1e1e1e]">
              <Editor
                height="100%"
                language={language}
                theme="vs-dark"
                value={editorContent}
                onChange={setEditorContent}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 20 },
                }}
              />
              
              {/* Glowing Submit Button */}
              <RippleButton 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="fixed lg:absolute bottom-[3.5rem] lg:bottom-10 right-0 lg:right-10 left-0 lg:left-auto w-full lg:w-auto px-8 py-4 bg-primary-container text-on-primary font-headline font-bold text-lg lg:rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 z-[100] pulse-glow disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? 'Analyzing...' : 'Submit Code'}
                {!isSubmitting && <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>}
              </RippleButton>
            </div>
          </section>

          {/* AI Mentor Chat Section (40%) */}
          <section className={`w-full lg:w-[40%] flex-col bg-surface-container-low/30 backdrop-blur-sm ${mobileTab === "chat" ? "flex" : "hidden lg:flex"} h-full`}>
            {/* Chat Header */}
            <div className="p-6 border-b border-outline-variant/5 flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-primary-container/40 p-1">
                  <img src={selectedMentor.image} alt="AI Mentor" className="w-full h-full rounded-full bg-surface-container-high" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary-container rounded-full border-4 border-[#131313]"></div>
              </div>
              <div>
                <h3 className="font-headline font-bold text-primary tracking-tight">{selectedMentor.name}</h3>
                <p className="text-xs text-on-surface-variant font-label tracking-wide">{selectedMentor.world} • Online</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 max-w-[85%] ${msg.sender === 'YOU' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`flex-1 p-4 rounded-xl ${msg.sender === 'YOU' ? 'rounded-tr-none bg-primary-container/10 border-r-2 border-primary-container text-right' : 'rounded-tl-none bg-surface-container-high border-l-2 border-primary-container'}`}>
                    <p className={`text-sm leading-relaxed whitespace-pre-line ${msg.sender === 'YOU' ? 'text-primary' : 'text-on-surface'}`}>{msg.text}</p>
                    <span className={`text-[9px] font-label mt-2 block uppercase tracking-tighter ${msg.sender === 'YOU' ? 'text-primary-container/40' : 'text-on-surface-variant/40'}`}>
                      {msg.time} • {msg.sender}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-6 bg-surface-container-low border-t border-outline-variant/5">
              <div className="relative group">
                <input type="text" className="w-full bg-surface-container-lowest text-sm px-6 py-4 rounded-xl border-b-2 border-outline-variant focus:border-primary-container outline-none transition-all pr-[48px]" placeholder="Ask Sensei for guidance..." />
                <RippleButton style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }} className=" text-primary-container hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">send</span>
                </RippleButton>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Note: Celebration Overlay omitted for brevity, logic could be conditionally rendered based on state */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} onSaveSuccess={() => setIsProfileModalOpen(false)} />
</div>
  ); }