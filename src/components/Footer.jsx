import React, { useState } from 'react';
import { Container, Typography, Link, IconButton, Box } from '@mui/material';
import { Instagram, WhatsApp, YouTube } from '@mui/icons-material';
import { styled } from '@mui/system';
import logo from '../assetts/icons/logo-nasykat.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import Confetti from 'react-confetti';
import kyrgyzFlag from '../assetts/icons/kgz.png';
import palestineFlag from '../assetts/icons/Palestine.png';
import bro from '../assetts/icons/bro.png';

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
  position: 'relative',
  '@keyframes gradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  cursor: 'pointer',
  position: 'relative',
  '& img': {
    maxWidth: '130px',
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
  gap: theme.spacing(5),
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
  marginTop: theme.spacing(3),
  fontSize: '1rem',
}));

const FlagsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: theme.spacing(4),
  marginTop: theme.spacing(3),
}));

const FlagImage = styled('img')({
  width: '30px',
  height: '20px',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

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
            sx={{ color: '#E1306C', '&:hover': { color: '#C13584' } }} // Instagram color
          >
            <Instagram style={{ fontSize: '25px' }} />
          </AnimatedIconButton>
          <AnimatedIconButton
            component={Link}
            href="https://t.me/+SEJbmn8AwNViNmNi"
            target="_blank"
            rel="noopener"
            color="inherit"
            aria-label="Telegram"
            sx={{ color: '#0088CC', '&:hover': { color: '#006AB6' } }} // Telegram color
          >
            <TelegramIcon style={{ fontSize: '25px' }} />
          </AnimatedIconButton>
          <AnimatedIconButton
            component={Link}
            href="https://www.youtube.com/@nasyikat_media"
            target="_blank"
            rel="noopener"
            color="inherit"
            aria-label="YouTube"
            sx={{ color: '#FF0000', '&:hover': { color: '#CC0000' } }} // YouTube color
          >
            <YouTube style={{ fontSize: '25px' }} />
          </AnimatedIconButton>
          <AnimatedIconButton
            component={Link}
            href="https://chat.whatsapp.com/ICLMmCjxqH1EMuPM81qaim"
            target="_blank"
            rel="noopener"
            color="inherit"
            aria-label="YouTube"
            sx={{ color: '#55ff00', '&:hover': { color: '#03cc00' } }} // YouTube color
          >
            <WhatsApp style={{ fontSize: '25px' }} />
          </AnimatedIconButton>
        </SocialIcons>
        <FlagsWrapper>
          <FlagImage src={kyrgyzFlag} alt="Kyrgyzstan Flag" />
          <img src={bro} alt="bro" style={{ width: '30px' }} />
          <FlagImage src={palestineFlag} alt="Palestine Flag" />
        </FlagsWrapper>

        <FooterText>
          © Nasyikat.media 2020 <br /> © Бардык укуктар корголгон
        </FooterText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
