import React, { useState } from 'react';
import { Container, Typography, Link, IconButton } from '@mui/material';
import { Instagram, YouTube } from '@mui/icons-material';
import { Box, styled } from '@mui/system';
import logo from '../assetts/icons/logo-nasykat.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import Confetti from 'react-confetti';

const heartBeatAnimation = `
  @keyframes heartBeat {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    25% {
      transform: scale(1.2);
      opacity: 0.9;
    }
    50% {
      transform: scale(1.4);
      opacity: 0.7;
    }
    75% {
      transform: scale(1.2);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const rotateAnimation = `
  @keyframes rotate3d {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

const FooterWrapper = styled('div')(({ theme }) => ({
  background: '#071c6b',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  padding: '40px 0',
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  cursor: 'pointer',
  position: 'relative', // Needed for positioning confetti
  '& img': {
    maxWidth: '150px',
    height: 'auto',
    marginTop: '10px',
    transition: 'transform 0.8s',
    '&:hover': {
      animation: `${rotateAnimation} 1s linear infinite`,
      transform: 'rotateY(360deg) scale(1.1)',
    },
  },
}));

const ConfettiWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(5),
  color: '#ffc46b',
  ...heartBeatAnimation,
}));

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease',
  '&:hover': {
    animation: 'heartBeat 2s ease forwards',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#ffc46b',
  textAlign: 'center',
  marginTop: theme.spacing(2),
  fontSize: '1rem',
}));

const Footer = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLogoClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };

  return (
    <FooterWrapper>
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', overflow: 'hidden' }}
      >
        <LogoWrapper onClick={handleLogoClick}>
          <img src={logo} alt="logo nasyikat media" />
          {showConfetti && (
            <ConfettiWrapper>
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={200}
              />
            </ConfettiWrapper>
          )}
        </LogoWrapper>
        <SocialIcons>
          <AnimatedIconButton
            component={Link}
            href="https://www.instagram.com/nasyikat.media/"
            target="_blank"
            rel="noopener"
            color="inherit"
            aria-label="Instagram"
          >
            <Instagram style={{ fontSize: '36px' }} />
          </AnimatedIconButton>
          <AnimatedIconButton
            component={Link}
            href="https://www.youtube.com/@nasyikat_media"
            target="_blank"
            rel="noopener"
            color="inherit"
            aria-label="YouTube"
          >
            <YouTube style={{ fontSize: '36px' }} />
          </AnimatedIconButton>
          <AnimatedIconButton
            component={Link}
            href="https://t.me/+SEJbmn8AwNViNmNi"
            target="_blank"
            rel="noopener"
            color="inherit"
            aria-label="Telegram"
          >
            <TelegramIcon style={{ fontSize: '36px' }} />
          </AnimatedIconButton>
        </SocialIcons>
        <FooterText variant="body2">
          Nasyikat.media © 2024 All Rights Reserved
        </FooterText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
