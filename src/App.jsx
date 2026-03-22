import React, { useState, useEffect } from 'react';
import Landing from './Landing';
import WorldSelect from './WorldSelect';
import Practice from './Practice';
import CustomCursor from './CustomCursor';
import BottomNav from './BottomNav';

export default function App() {
  const [page, setPage] = useState('Landing');
  const [displayPage, setDisplayPage] = useState('Landing');
  const [isFlippingOut, setIsFlippingOut] = useState(false);
  const [isFlippingIn, setIsFlippingIn] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Initial load animation ends after 0.6s
    const timer = setTimeout(() => setInitialLoad(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSetPage = (newPage) => {
    if (newPage === page || isFlippingOut || isFlippingIn) return;
    
    setIsFlippingOut(true);
    
    // Halfway through flip (0.2s), swap the component and start flip in
    setTimeout(() => {
      setDisplayPage(newPage);
      setPage(newPage);
      setIsFlippingOut(false);
      setIsFlippingIn(true);
      setShowGlitch(true);
      
      // Glitch lasts 0.1s
      setTimeout(() => setShowGlitch(false), 100);
      
      // Flip in finishes after another 0.2s
      setTimeout(() => {
        setIsFlippingIn(false);
      }, 200);
    }, 200);
  };

  const currentClass = initialLoad 
    ? 'animate-initial-load' 
    : isFlippingOut 
      ? 'animate-flip-out' 
      : isFlippingIn 
        ? 'animate-flip-in' 
        : '';

  return (
    <>
      <CustomCursor />
      {showGlitch && <div className="fixed inset-0 z-[9999] bg-[#a855f7] mix-blend-screen pointer-events-none animate-purple-flash" />}
      
      <div className={`w-full h-full min-h-screen ${currentClass}`} style={{ transformOrigin: 'center' }}>
        {displayPage === 'Landing' && <Landing setPage={handleSetPage} />}
        {displayPage === 'WorldSelect' && <WorldSelect setPage={handleSetPage} />}
        {displayPage === 'Practice' && <Practice setPage={handleSetPage} />}
      </div>
      
      <BottomNav page={displayPage} setPage={handleSetPage} />
    </>
  );
}
