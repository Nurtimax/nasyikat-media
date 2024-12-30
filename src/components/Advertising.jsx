import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, IconButton, Typography, Avatar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';
import slides from '../utils/constants/reclama';

// Styled components
const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '370px',
  overflow: 'hidden',
  marginTop: '25px',
  marginBottom: '20px',
  borderRadius: '5px',
  [theme.breakpoints.down('md')]: {
    height: '65vh',
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
    height: '70%',
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f6ecde',
  color: '#071c6b',
  textAlign: 'center',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-start',
    padding: '10px',
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#0a73c9',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
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

// New styled component for the top-right icon
const WebsiteLinkIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: 2,
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const Advertising = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function for navigating to the external link
  const handleAvatarClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Container maxWidth="100%">
      <SliderContainer
        onMouseEnter={() => setAutoSlide(false)}
        onMouseLeave={() => setAutoSlide(true)}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            style={{
              opacity: index === currentSlide ? 1 : 0,
            }}
            aria-label={`Slide ${index + 1}`}
          >
            {/* Link icon in top-right corner */}
            <WebsiteLinkIcon
              onClick={() => handleAvatarClick(slide.instagramLink)}
              aria-label="Go to website"
            >
              <LinkIcon />
            </WebsiteLinkIcon>

            <ImageSection bgimg={slide.bgimg} aria-hidden="true" />
            <ContentSection>
              {/* Adding the avatar with onClick event */}
              <Avatar
                src={slide.avatar}
                alt="Avatar"
                sx={{
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                  border: '2px solid #071c6b',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer',
                }}
                onClick={() => handleAvatarClick(slide.instagramLink)} // Navigate to link
              />

              <Typography variant="h5" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body1">{slide.description}</Typography>
              <SocialIcons>
                {slide.socialLinks.instagram && (
                  <CustomIconButtonInstagram
                    href={slide.socialLinks.instagram}
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </CustomIconButtonInstagram>
                )}
                {slide.socialLinks.telegram && (
                  <CustomIconButtonTelegram
                    href={slide.socialLinks.telegram}
                    target="_blank"
                    aria-label="Telegram"
                  >
                    <TelegramIcon />
                  </CustomIconButtonTelegram>
                )}
                {slide.socialLinks.whatsapp && (
                  <CustomIconButtonWhatsApp
                    href={slide.socialLinks.whatsapp}
                    target="_blank"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon />
                  </CustomIconButtonWhatsApp>
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
    </Container>
  );
};

export default Advertising;

const CustomIconButtonInstagram = styled(IconButton)({
  color: '#E1306C',
});

const CustomIconButtonTelegram = styled(IconButton)({
  color: '#0088cc',
});

const CustomIconButtonWhatsApp = styled(IconButton)({
  color: '#25d366',
});
