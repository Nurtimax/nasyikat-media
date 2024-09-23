import React, { useState, useEffect } from 'react';
import zaryiat55 from './data/quran-khadis/zariyat';
import { Typography, Box, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';

const Section4 = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % zaryiat55.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="100%">
      <StyledContainer>
        <StyledPaper elevation={6}>
          <Quote variant="h6" component="h2" gutterBottom>
            "Жана Эскерткин, эскертүү момундарга пайда берет" (Зарият 55-аят).
          </Quote>
          <StyledText variant="body2" component="div">
            {zaryiat55[textIndex]}
          </StyledText>
        </StyledPaper>
      </StyledContainer>
    </Container>
  );
};

export default Section4;

// Стилизация контейнера
const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Стилизация карточки
const StyledPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  width: '950px',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#f9f5e7',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  position: 'relative', // Для декоративных элементов
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2),
  },
}));

// Стилизация цитаты
const Quote = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#b89c6f',
  fontFamily: 'Georgia, serif',
  margin: theme.spacing(2, 0),
  position: 'relative',
  '&::before': {
    fontSize: '2rem',
    color: '#b89c6f',
    position: 'absolute',
    top: '-20px',
    left: '-20px',
  },
  '&::after': {
    fontSize: '2rem',
    color: '#b89c6f',
    position: 'absolute',
    bottom: '-20px',
    right: '-20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

// Стилизация текста
const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginTop: theme.spacing(2),
  color: '#333',
  fontFamily: 'Georgia, serif',
  lineHeight: '1.6',
  height: '200px',
  overflowY: 'auto',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderLeft: '4px solid #b89c6f', // Декоративная линия слева
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));
