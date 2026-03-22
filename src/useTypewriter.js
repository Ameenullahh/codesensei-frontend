import { useState, useEffect } from 'react';

export function useTypewriter(fullText, delay = 25) {
  const [text, setText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setText('');
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [fullText, delay]);
  
  return text;
}
