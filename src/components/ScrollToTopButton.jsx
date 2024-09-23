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
          bottom: '20px',
          right: '20px',
          backgroundColor: '#f6ecde',
          color: '#161c25',
          borderRadius: '50%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 99,
          transition: 'background-color 0.3s, transform 0.3s',
          '&:hover': {
            backgroundColor: '#d9c7aedb',
            transform: 'scale(1.1)',
          },
        }}
      >
        <ArrowUpward />
      </IconButton>
    )
  );
};

export default ScrollToTopButton;
