import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import slides from '../utils/constants/reclama';

// Styled components for responsive design
const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '370px', // Default height for larger screens
  overflow: 'hidden',
  marginTop: '25px',
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    height: '65vh', // Adjusted height for mobile devices
  },
}));

const Slide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: '0',
  transition: 'opacity 1s ease-in-out',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ImageSection = styled(Box)(({ theme, bgimg }) => ({
  width: '50%',
  height: '100%',
  backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '70%', // Increased height for mobile devices
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f6ecde', // Semi-transparent background
  color: '#071c6b',
  textAlign: 'center',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '30%', // Adjusted height for mobile devices
    justifyContent: 'flex-start', // Align content to top
    padding: '10px', // Add padding if needed
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#0a73c9',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem', // Smaller navigation button on mobile devices
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px',
  '& svg': {
    fontSize: '2rem',
    color: '#071c6b',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
    '&:hover': {
      color: '#0a73c9',
    },
  },
}));

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
          bgimg={slide.bgimg}
          style={{
            opacity: index === currentSlide ? 1 : 0, // Show only the current slide
          }}
          aria-label={`Slide ${index + 1}`}
        >
          <ImageSection bgimg={slide.bgimg} aria-hidden="true" />
          <ContentSection>
            <Typography variant="h5" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="body1">{slide.description}</Typography>
            <SocialIcons>
              {slide.socialLinks.instagram && (
                <IconButton
                  href={slide.socialLinks.instagram}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
              )}
              {slide.socialLinks.telegram && (
                <IconButton
                  href={slide.socialLinks.telegram}
                  target="_blank"
                  aria-label="Telegram"
                >
                  <TelegramIcon />
                </IconButton>
              )}
              {slide.socialLinks.whatsapp && (
                <IconButton
                  href={slide.socialLinks.whatsapp}
                  target="_blank"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </IconButton>
              )}
            </SocialIcons>
          </ContentSection>
        </Slide>
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
