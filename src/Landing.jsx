import React, { useState } from 'react';
import ProfileModal from './ProfileModal';
import RippleButton from './RippleButton';
import LiveCounter from './LiveCounter';
import Particles from './Particles';
import { useTypewriter } from './useTypewriter';

export default function Landing({ setPage }) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const fullTagline = "Your AI Sensei Remembers Everything. From logic patterns to style guides, we optimize your mental stack.";
  const typedTagline = useTypewriter(fullTagline, 35);

  const renderTagline = (text) => {
    const base = "Your AI Sensei ";
    const highlight = "Remembers Everything";

    if (text.length <= base.length) return <span>{text}</span>;
    if (text.length <= base.length + highlight.length) {
      return <>{base}<span className="text-[#a855f7] font-medium">{text.substring(base.length)}</span></>;
    }
    return <>{base}<span className="text-[#a855f7] font-medium">{highlight}</span>{text.substring(base.length + highlight.length)}</>;
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary">
      {/* TopAppBar */}
      {/* TopAppBar Disabled per request */}

      {/* Main Content Canvas */}
      <main className="relative min-h-screen pt-20 overflow-hidden code-grid">
        <Particles />
        {/* Abstract Background Decoration */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[921px] px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-container/20 bg-primary-container/5 backdrop-blur-md">
            <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary-fixed-dim">Engine v4.2 Deployment Active</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-primary neon-glow leading-none mb-4 animate-text-glitch">
            CodeSensei
          </h1>
          <p className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light tracking-wide mb-12 h-20 md:h-24">
            {renderTagline(typedTagline)}
          </p>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <RippleButton
              className="w-full lg:w-auto px-12 py-5 bg-primary-container text-on-primary font-headline font-bold text-lg rounded shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] active:scale-95 transition-all duration-300"
              onClick={() => {
                if (!localStorage.getItem('userProfile')) {
                  setPendingNavigation('WorldSelect');
                  setIsProfileModalOpen(true);
                } else {
                  setPage('WorldSelect');
                }
              }}
            >
              START SESSION
            </RippleButton>
            <RippleButton
              className="w-full lg:w-auto px-8 py-5 border border-outline-variant hover:border-primary-container/40 text-primary font-headline font-medium transition-all group"
              onClick={() => setPage('WorldSelect')}
            >
              EXPLORE WORLDS
              <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </RippleButton>
          </div>

          {/* Terminal Glimpse */}
          <div className="mt-24 w-full max-w-5xl glass-panel rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-low border-b border-outline-variant/20">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 font-label text-[10px] tracking-widest text-on-surface-variant/50 uppercase">neural_process.log</span>
            </div>
            <div className="overflow-x-auto w-full custom-scrollbar pb-2">
              <div className="p-8 font-mono text-sm text-left grid grid-cols-1 lg:grid-cols-2 gap-8 min-w-[600px] lg:min-w-0">
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/30">01</span>
                    <span className="text-primary-container">class</span> <span className="text-secondary">CodeMentor</span> {'{'}
                  </div>
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/30">02</span>
                    <span className="pl-4 text-primary-fixed-dim">constructor</span>(session) {'{'}
                  </div>
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/30">03</span>
                    <span className="pl-8 text-on-surface">this.memory = session.history;</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/30">04</span>
                    <span className="pl-8 text-on-surface">this.intent = session.focus;</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/30">05</span>
                    <span className="pl-4">{'}'}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-on-surface-variant/30">06</span>
                    <span className="text-tertiary-fixed-dim">// Analyzing neural patterns...</span>
                  </div>
                </div>
                <div className="hidden md:block bg-surface-container-lowest/50 p-6 rounded-lg border border-outline-variant/10">
                  <h4 className="font-headline text-primary-container text-xs mb-4 tracking-widest uppercase">System Status</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-on-surface-variant">KNOWLEDGE GRAPH</span>
                      <div className="w-32 h-1 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-primary-container"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-on-surface-variant">NEURAL LATENCY</span>
                      <span className="text-[10px] font-bold text-secondary">0.02ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-on-surface-variant">ACTIVE WORLDS</span>
                      <div className="w-full lg:w-4/5 h-full bg-primary-container"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Features Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Bento 1: Large Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-2xl p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-primary-container text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">memory</span>
              </div>
              <div>
                <h3 className="font-headline text-4xl font-bold mb-4">Total Recall Memory</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  CodeSensei doesn't just help with snippets; it builds a comprehensive cognitive map of your entire learning journey. Every mistake corrected becomes a permanent neural anchor.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-label uppercase tracking-widest">Logic Mapping</div>
                <div className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-label uppercase tracking-widest">Style Sync</div>
              </div>
            </div>

            {/* Bento 2: Small Feature */}
            <div className="bg-surface-container-high rounded-2xl p-8 flex flex-col justify-center border border-primary-container/5 hover:border-primary-container/20 transition-all">
              <span className="material-symbols-outlined text-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h4 className="font-headline text-xl font-bold mb-2">Anime Worlds</h4>
              <p className="text-sm text-on-surface-variant">Learn algorithms through curated narratives from the Hidden Leaf or the Grand Line.</p>
            </div>

            {/* Bento 3: Small Feature */}
            <div className="bg-surface-container-high rounded-2xl p-8 flex flex-col justify-center border border-primary-container/5 hover:border-primary-container/20 transition-all">
              <span className="material-symbols-outlined text-primary-container mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <h4 className="font-headline text-xl font-bold mb-2">Hyper-Focus</h4>
              <p className="text-sm text-on-surface-variant">Terminal-based UI designed to eliminate distractions and induce peak flow states.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-4 py-12 bg-[#0a0a0a] border-t border-outline-variant/10">
        <div className="flex flex-col items-center gap-6">
          <span className="text-[#a855f7] font-bold font-headline text-xl tracking-tighter">CodeSensei</span>
          <div className="flex gap-8">
            <a href="#" className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#b9cacb]/50 hover:text-[#a855f7] transition-all">Terms of Service</a>
            <a href="#" className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#b9cacb]/50 hover:text-[#a855f7] transition-all">Privacy Protocol</a>
            <a href="#" className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#b9cacb]/50 hover:text-[#a855f7] transition-all">API Access</a>
          </div>
        </div>
        <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#b9cacb]/50 mt-8">
          © 2024 CodeSensei Terminal. All rights reserved.
        </p>
      </footer>
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => { setIsProfileModalOpen(false); setPendingNavigation(null); }}
        onSaveSuccess={() => { setIsProfileModalOpen(false); if (pendingNavigation) { setPage(pendingNavigation); setPendingNavigation(null); } }}
      />
    </div>
  );
}