import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bannerRe from '../assetts/icons/nasyyikatinsta.png';
import banneryYt from '../assetts/icons/nasyyikatyout.png';
import bannerTm from '../assetts/icons/nasyyikatteleg.png';
import bannerAljardam from '../assetts/icons/aljardam.png';
import bannerArzanstore from '../assetts/icons/arzanstore.png';

// Styled components for responsive design
const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '400px', // Default height for larger screens
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '300px', // Smaller height for tablets and mobile devices
  },
}));

const Slide = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'opacity 1s ease-in-out',
  position: 'absolute',
  top: 0,
  left: 0,
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#fff',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem', // Smaller navigation button on mobile devices
  },
}));

// Slide data
const slides = [
  { url: bannerRe, alt: 'Slide 1' },
  { url: bannerArzanstore, alt: 'Slide 2' },
  { url: bannerTm, alt: 'Slide 3' },
  { url: bannerAljardam, alt: 'Slide 4' },
  { url: banneryYt, alt: 'Slide 5' },
];

const Advertising = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // Handle automatic sliding
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [autoSlide]);

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <SliderContainer
      onMouseEnter={() => setAutoSlide(false)} // Pause auto-slide on hover
      onMouseLeave={() => setAutoSlide(true)} // Resume auto-slide on mouse leave
    >
      {slides.map((slide, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${slide.url})`,
            opacity: index === currentSlide ? 1 : 0, // Show only the current slide
          }}
          aria-label={`Slide ${index + 1}`}
        />
      ))}
      <NavigationButton
        onClick={handlePrev}
        aria-label="Previous Slide"
        style={{ left: '10px' }}
      >
        <ArrowBackIosIcon />
      </NavigationButton>
      <NavigationButton
        onClick={handleNext}
        aria-label="Next Slide"
        style={{ right: '10px' }}
      >
        <ArrowForwardIosIcon />
      </NavigationButton>
    </SliderContainer>
  );
};

export default Advertising;
