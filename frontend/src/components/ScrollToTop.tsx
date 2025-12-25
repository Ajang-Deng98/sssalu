import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowScrollButton(scrollTop > 300);
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  if (!showScrollButton) return null;

  return (
    <button 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        fontSize: '20px',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}
    >
      <i className={`fas fa-arrow-${isAtBottom ? 'up' : 'down'}`}></i>
    </button>
  );
};

export default ScrollToTop;