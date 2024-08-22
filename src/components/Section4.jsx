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
      <StyledPaper elevation={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنْفَعُ الْمُؤْمِنِينَ
        </Typography>
        <Typography variant="body2" component="div" sx={{ overflowY: 'auto' }}>
          {zaryiat55[textIndex]}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          "Эскерткин,- эскертүү момундарга пайда берет" <br /> (зарият 55 аят).
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Section4;

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  width: '400px', // Фиксированная ширина карточки
  height: '300px', // Фиксированная высота карточки
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  backgroundColor: '#f6edde', // Фоновый цвет
  overflow: 'hidden', // Скрыть лишний контент

  // Мобильные стили
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Сделать карточку чуть меньше на мобильных устройствах
    height: 'auto',
  },
}));
