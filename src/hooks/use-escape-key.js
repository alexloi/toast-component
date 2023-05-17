import { useEffect } from 'react';

export default function useEscapeKey(fn) {
 
  useEffect(() => {
    function handleKeyDown(event){
        if (event.code === 'Escape') {
          fn();
        }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [fn]);
}
