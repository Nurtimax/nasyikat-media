import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showButton && (
      <IconButton
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          backgroundColor: '#071c6b',
          color: '#fff',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: '99',
        }}
      >
        <ArrowUpward />
      </IconButton>
    )
  );
};

export default ScrollToTopButton;
