import React, { useState, useEffect } from 'react';
import zaryiat55 from './data/quran-khadis/zariyat';
import { Typography, Box, Paper } from '@mui/material';
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
    <StyledContainer>
      <StyledPaper elevation={6}>
        <Typography variant="h6" component="h2" gutterBottom color="#2c3e50">
          "Жана Эскерткин, эскертүү момундарга пайда берет" (Зарият 55-аят).
        </Typography>
        <StyledText variant="body2" component="div">
          {zaryiat55[textIndex]}
        </StyledText>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Section4;

// Стилизация контейнера
const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

// Стилизация карточки
const StyledPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  width: '950px', // Фиксированная ширина карточки
  height: '350px', // Фиксированная высота карточки
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#f9f5e7', // Мягкий фон
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', // Глубокая тень
  borderRadius: '15px', // Скругленные углы
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.3)', // Увеличенная тень при ховере
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Адаптация под мобильные устройства
    height: '400px',
    padding: theme.spacing(2),
  },
}));

// Стилизация текста
const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginTop: theme.spacing(2),
  color: '#333',
  fontFamily: 'Georgia, serif',
  lineHeight: '1.6',
  height: '200px', // Фиксированная высота для текстовой области
  overflowY: 'auto', // Прокрутка по вертикали при необходимости
  padding: theme.spacing(1),
  textAlign: 'center', // Выравнивание текста по ширине
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem', // Меньший размер текста на мобильных устройствах
  },
}));
