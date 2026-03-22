import ProfileModal from './ProfileModal';
import React, { useState } from 'react';
import RippleButton from './RippleButton';
import TiltCard from './TiltCard';
import LiveCounter from './LiveCounter';

export default function WorldSelect({ setPage }) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [mobileFactionIdx, setMobileFactionIdx] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const factions = ['Anime', 'Marvel', 'DC Universe', 'Game of Thrones'];
  return (
    <div className="bg-background text-on-surface font-body selection:bg-[#a855f7] selection:text-on-primary w-full max-w-[100vw] overflow-x-hidden" data-mode="connect">

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside className={`fixed left-0 top-0 h-full flex flex-col py-6 bg-[#0e0e0e] border-r-0 font-inter text-sm tracking-wide z-[70] transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 ${isSidebarExpanded ? "w-64" : "w-[60px]"}`}>

        <div className={`mb-10 ${isSidebarExpanded ? "px-6" : "px-0 text-center"}`}>
          <h1
            className="text-xl font-bold text-[#a855f7] cursor-pointer"
            onClick={() => setPage('Landing')}
          >
            {isSidebarExpanded ? "Sensei AI" : "S"}
          </h1>
          {isSidebarExpanded && <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Level 42 Coder</p>}
        </div>

        <div className="flex justify-center mb-4">
          <button onClick={() => setIsSidebarExpanded(!isSidebarExpanded)} className="text-[#b9cacb] hover:text-[#a855f7] transition-all duration-300 p-2 leading-none">
            <span className="material-symbols-outlined">{isSidebarExpanded ? 'chevron_left' : 'menu'}</span>
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          <a href="#" className={`flex items-center gap-4 min-h-[44px] ${isSidebarExpanded ? "px-6" : "px-3 justify-center"} py-3 bg-[#1c1b1b] text-[#a855f7] border-l-4 border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all`} onClick={(e) => {
            e.preventDefault();
            document.getElementById('anime')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="material-symbols-outlined">cyclone</span>
            {isSidebarExpanded && <span>Anime World</span>}
          </a>
          <a href="#" className={`flex items-center gap-4 min-h-[44px] ${isSidebarExpanded ? "px-6" : "px-3 justify-center"} py-3 text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all`} onClick={(e) => {
            e.preventDefault();
            document.getElementById('marvel')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="material-symbols-outlined">electric_bolt</span>
            {isSidebarExpanded && <span>Marvel Universe</span>}
          </a>
          <a href="#" className={`flex items-center gap-4 min-h-[44px] ${isSidebarExpanded ? "px-6" : "px-3 justify-center"} py-3 text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all`} onClick={(e) => {
            e.preventDefault();
            document.getElementById('dc')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="material-symbols-outlined">auto_awesome</span>
            {isSidebarExpanded && <span>DC Realm</span>}
          </a>
          <a href="#" className={`flex items-center gap-4 min-h-[44px] ${isSidebarExpanded ? "px-6" : "px-3 justify-center"} py-3 text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all`} onClick={(e) => {
            e.preventDefault();
            document.getElementById('westeros')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="material-symbols-outlined">castle</span>
            {isSidebarExpanded && <span>Westeros</span>}
          </a>
          <a href="#" className={`flex items-center gap-4 min-h-[44px] ${isSidebarExpanded ? "px-6" : "px-3 justify-center"} py-3 text-[#b9cacb] opacity-70 hover:bg-[#2a2a2a] hover:opacity-100 transition-all`} onClick={(e) => { e.preventDefault(); setPage('Practice'); }}>
            <span className="material-symbols-outlined">code</span>
            {isSidebarExpanded && <span>Editor</span>}
          </a>
        </nav>

      </aside>

      {/* TopAppBar */}
      <header style={{ left: isSidebarExpanded ? "256px" : "60px", transition: "left 0.3s ease" }} className="fixed top-0 right-0 flex justify-between items-center px-8 h-20 bg-[#131313]/80 backdrop-blur-xl z-40">
        <div className="flex items-center gap-4 lg:gap-8">
          <RippleButton
            className="lg:hidden material-symbols-outlined text-[#a855f7] p-2 hover:bg-surface-container-high rounded-full transition-colors"
            onClick={() => setIsSidebarOpen(true)}
          >
            menu
          </RippleButton>
          <span
            className="text-2xl font-bold tracking-tighter text-[#a855f7] drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] font-headline cursor-pointer"
            onClick={() => setPage('Landing')}
          >
            CodeSensei
          </span>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-[#e1fdff] border-b-2 border-[#a855f7] pb-1 font-headline font-bold tracking-tight" onClick={(e) => { e.preventDefault(); setPage('WorldSelect'); }}>Worlds</a>
            <a href="#" className="text-[#b9cacb] font-medium hover:text-[#a855f7] transition-colors duration-300" onClick={(e) => { e.preventDefault(); setPage('Practice'); }}>Practice</a>
            </nav>
        </div>
        <div className="flex items-center gap-4">
          <LiveCounter className="hidden lg:flex" />
          <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsProfileModalOpen(true)}>
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo1LLwtFYZMyVfqlebLlTe1p_uUb-FohvKlYNqqNkyRDB15aOp5Cs5eHFMtnInQ_FcyPErlku7wEzjj_3SpvcqR_BNh6TylG_DoOfV9RcKD-lx0QWQQOHIjG2Nk5XgZpbdUJSQ8HO2Kdf1hoVzyK6bE5sDVDJs082xhz4lhn2rKcy4uqA1I6C8mhe1RwOkzRc6hCOg-1tD6wwPmA1x5siS1BnJt8o1-Q_g-oBt9WKb5zq22jRKd6SDF7Fqsbm4eqNyapweUIipVA" alt="avatar" />
          </div>
        </div>
      </header>

      <main style={{ marginLeft: isSidebarExpanded ? "256px" : "60px", transition: "margin-left 0.3s ease" }} className="pt-24 px-8 pb-32 min-h-screen bg-[#0a0a0a] overflow-x-hidden">

        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-6xl font-headline font-bold text-[#a855f7] tracking-tighter mb-4">Select your World</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">Choose your cinematic mentor. Each world offers a unique path to mastery, guided by the most brilliant minds in the multiverse.</p>
        </section>

        {/* Mobile Faction Switcher */}
        <div className="lg:hidden flex items-center justify-between mb-8 px-2 max-w-full overflow-hidden">
          <RippleButton
            className="p-3 bg-surface-container-high rounded-full text-on-surface-variant hover:text-[#a855f7] transition-colors disabled:opacity-30"
            onClick={() => setMobileFactionIdx(p => Math.max(0, p - 1))}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </RippleButton>
          <span className="font-headline font-bold text-xl text-[#a855f7] truncate px-4">{factions[mobileFactionIdx]}</span>
          <RippleButton
            className="p-3 bg-surface-container-high rounded-full text-on-surface-variant hover:text-[#a855f7] transition-colors disabled:opacity-30"
            onClick={() => setMobileFactionIdx(p => Math.min(3, p + 1))}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </RippleButton>
        </div>

        {/* World Grid */}
        <div className="flex flex-col gap-8 w-full max-w-[1200px] mx-auto overflow-x-hidden">

          {/* Anime World Section */}
          <div id="anime" className={`space-y-6 w-full max-w-full ${mobileFactionIdx === 0 ? "block" : "hidden lg:block"}`}>
            <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-[#a855f7] relative overflow-hidden group" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-headline font-bold text-[#a855f7] flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#a855f7]">cyclone</span>
                  Anime
                </h3>
                <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", width: "100%", maxWidth: "100%" }}>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQut4VMnB4_t6yfOve8ikMKyUXLDWT4Y6IPeA&s" alt="Ishigami Senku" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Ishigami Senku</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Scientific genius with mastery over primitive chemistry and engineering.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Ishigami Senku', world: 'Anime World', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQIK8zvkGL2zLIUaWD3jwJadVJ4jc8Te-Q7n-yVdCX0Bi_jARfxfdZEBgCqzFA8BAxWzaNM1p6FmGMob-wZwcLvvFeJUFlvzuTF0odHKLofJWquebxcm503N2jb2UAwmA4Wj4hM1YxlT-UkqcsP7TQEQattJWIeNITzX0JVe5PXfFZ31P3uIk34HdHgkmQcpR42aKAqE3nu5XafWu220ZjYqfZGsMkwDLWjdhfIFM4dy1trFClYQjMsv7duNGRvqewdoLI87_N9g" alt="Lelouch" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Lelouch</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Master of tactical manipulation and revolutionary strategic planning.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Lelouch', world: 'Anime World', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://i.pinimg.com/1200x/90/cf/68/90cf685aa1d46287a0774ef1b9507fcc.jpg" alt="Aizen Sosuke" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Aizen Sosuke</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Supreme intellect specializing in grand schemes and illusionary warfare.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Aizen Sosuke', world: 'Anime World', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>

          {/* Marvel Universe Section */}
          <div id="marvel" className={`space-y-6 w-full max-w-full ${mobileFactionIdx === 1 ? "block" : "hidden lg:block"}`}>
            <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-[#a855f7] relative overflow-hidden group" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-headline font-bold text-[#a855f7] flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#a855f7]">electric_bolt</span>
                  Marvel
                </h3>
                <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", width: "100%", maxWidth: "100%" }}>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhcCUVzDDvkKI5srahWs2cT0A4WJrOVyHKQ&s" alt="Tony Stark" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Tony Stark</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Billionaire inventor and pioneer of advanced artificial intelligence systems.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Tony Stark', world: 'Marvel Universe', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://i.pinimg.com/474x/2c/cd/54/2ccd5418f92634a31aebb37afd6273b3.jpg" alt="Dr. Doom" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Dr. Doom</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Scientific and mystical polymath with unrivaled global strategy skills.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Dr. Doom', world: 'Marvel Universe', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDy_lO6GqkZAeqB0WkRTueFxc4q7hK_JEA0g&s" alt="Reed Richards" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Reed Richards</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">The world's foremost authority on theoretical physics and dimension travel.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Reed Richards', world: 'Marvel Universe', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>

          {/* DC Universe Section */}
          <div id="dc" className={`space-y-6 w-full max-w-full ${mobileFactionIdx === 2 ? "block" : "hidden lg:block"}`}>
            <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-[#a855f7] relative overflow-hidden group" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-headline font-bold text-[#a855f7] flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#a855f7]">auto_awesome</span>
                  DC Universe
                </h3>
                <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", width: "100%", maxWidth: "100%" }}>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvR-YV-GIhlgIgmLr6EsndW6ZgjZbDq1POHw&s" alt="Lex Luthor" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Lex Luthor</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Hyper-intelligent industrialist specializing in high-level game theory.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Lex Luthor', world: 'DC Realm', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhb0UTfgBVpB2MvC3eCqDP1DaPrr-Nxu5iA&s" alt="Bruce Wayne" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Bruce Wayne</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Peak human analytical mind with expertise in stealth and forensics.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Bruce Wayne', world: 'DC Realm', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://64.media.tumblr.com/e37a03b1c9912042e0637305db77e4f2/49de75e2addc0136-13/s1280x1920/526d858075f16459ad1b30ded90388fca0938cee.jpg" alt="Reverse Flash" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Reverse Flash</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Temporal scientist with mastery over the physics of the speed force.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Reverse Flash', world: 'DC Realm', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>

          {/* Game of Thrones Section */}
          <div id="westeros" className={`space-y-6 w-full max-w-full ${mobileFactionIdx === 3 ? "block" : "hidden lg:block"}`}>
            <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-[#a855f7] relative overflow-hidden group" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-headline font-bold text-[#a855f7] flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#a855f7]">castle</span>
                  Game of Thrones
                </h3>
                <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", width: "100%", maxWidth: "100%" }}>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcMdbxAuQ7CpuEkELobTXAbDFub_EYUx1B9rXOJQSTH1thkHcAyh4u3lkuVh0aOypjt9_9air5ezK0fkKmsCdCwdTgaPwfkeeYNRMZt4iA2UTR67meos8odqw-acFfCxrUu7LNB7qWHJdFPkj8Eq7o_5DfgQST6cx43IdopzZvKQqRSz0ItZThCW_NxRpVCh51OsQvPWLpnSzqCMrhDKb1nCIFholEnCcyBPeaOTfHmamR1M_AzsAQ6JLTqmJPbw7ZyBF1pc4iOA" alt="Tyrion Lannister" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Tyrion Lannister</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Sharp-tongued political genius with unparalleled knowledge of history.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Tyrion Lannister', world: 'Westeros', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYQSjgVwhh_dAy-yCYc5Mzo8Abj6mw0rcHsulKEgC-1Ux4ku5112KdZm7MUtWLnFhP3CvrDo4iurfD5q17kfBhZAJcA7FHStT1QqLge07rslh87WSIbEvleCk1h5NzsOxzcD20pYoFoZgHt9WSb-XSWGcnzfQ6kL92vmaSxXDFaWgdMHYoTw1y0JHIhXCZMfTxZPvBdVpRgboMvQjEt-tW1PjrJhyV8mZ4NNQZk6Q4b0dAlcA_3ZGS94oW66Equ8OAwWr_bOLvJA" alt="Cersei Lannister" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Cersei Lannister</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Ruthless ruler specializing in court politics and power preservation.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Cersei Lannister', world: 'Westeros', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                  <TiltCard className="glass-card p-2 rounded-lg flex flex-col items-center text-center group border border-outline-variant/10 hover:border-[#a855f7]/30 transition-all w-full">
                    <img className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#a855f7]/20 group-hover:border-[#a855f7] transition-all" src="https://i.pinimg.com/736x/49/9c/74/499c745d76ff449debb36693b3c6b80d.jpg" alt="Jon Snow" />
                    <h4 className="font-headline font-bold text-[#a855f7] text-xs mb-1">Jon Snow</h4>
                    <p className="text-[10px] text-on-surface-variant mb-4 flex-1">Stoic military commander known for leadership and battlefield honor.</p>
                    <RippleButton onClick={(e) => { const imgSrc = e.currentTarget.parentNode.querySelector('img').src; localStorage.setItem('selectedMentor', JSON.stringify({ name: 'Jon Snow', world: 'Westeros', image: imgSrc })); setPage('Practice'); }} className="w-full py-1 bg-[#a855f7] text-on-primary text-[10px] font-bold uppercase tracking-widest rounded neon-glow active:scale-95 transition-all">Select</RippleButton>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className={`transition-all duration-300 ${isSidebarExpanded ? "lg:ml-64" : "lg:ml-[60px]"} bg-[#0a0a0a] w-full flex flex-col items-center gap-4 py-12 mb-16 lg:mb-0 font-inter text-[10px] uppercase tracking-[0.2em] relative z-40`}>
        <div className="bg-[#0e0e0e] w-full py-8 flex flex-col items-center gap-6">
          <span className="text-[#a855f7] font-bold text-lg">CodeSensei Terminal</span>
          <div className="flex gap-8">
            <a href="#" className="text-[#b9cacb]/50 hover:text-[#a855f7] transition-all">Terms of Service</a>
            <a href="#" className="text-[#b9cacb]/50 hover:text-[#a855f7] transition-all">Privacy Protocol</a>
            <a href="#" className="text-[#b9cacb]/50 hover:text-[#a855f7] transition-all">API Access</a>
          </div>
          <p className="text-[#b9cacb]/30">© 2024 CodeSensei Terminal. All rights reserved.</p>
        </div>
      </footer>

      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} onSaveSuccess={() => setIsProfileModalOpen(false)} />
</div>
  ); }