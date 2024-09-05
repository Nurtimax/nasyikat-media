import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import BackgroundImage from '../../../assetts/icons/bacimg.png';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Shahada = () => {
  return (
    <div>
      <Header />
      <Welcom />
      <StyledContainer>
        <StyledImageContainer />
        <StyledTextContainer>
          <StyledTitle variant="h4" gutterBottom>
            Урматтуу мусулман бир тууганым!
          </StyledTitle>
          <StyledText variant="body1">
            Шахадат айтуу менен пенде Аллах Таалага ыйман келтирип, Мухаммад
            (салаллоху алейхи уа саллам) Аллах Таала жиберген акыркы пайгамбар
            экенин кабылдоо. Муну айтуу менен пенде эң туура, эң жакшы, эң
            бактылуу, тынчтыктын дини болгон ислам динин кабыл алат.
          </StyledText>
          <StyledText variant="body1">
            Ыйман бул – тил менен айтуу, жүрөк менен ишенүү жана амал менен
            тастыктоо...
          </StyledText>
          <StyledText variant="body1">
            Шахадат келмеси <br /> أَشْهَدُ أَنْ لَا إِلٰهَ إِلاَّ اللّٰهُ
            وَأَشْهَدُ أَنَّ محَّدًا...
            <br />
            Лаа илааха иллаллах Мухаммадур расулуллах
            <br />
            Бир Алладан башка Кудай жок жана Мухаммад анын элчиси деп күбөлүк
            берүү
          </StyledText>
        </StyledTextContainer>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default Shahada;

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8),
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundAttachment: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(5),
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: '16px',
  backgroundColor: '#f6edde',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: '12px',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: '#2c3e50',
  fontWeight: 600,
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.8,
  fontSize: '1.2rem',
  color: '#34495e',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#2c3e50',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
  },
}));
