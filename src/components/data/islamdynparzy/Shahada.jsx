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
      <div>
        <Header />
        <Welcom />
        <StyledContainer>
          <StyledImageContainer></StyledImageContainer>
          <StyledTextContainer>
            <StyledTypography variant="h6" gutterBottom>
              Урматтуу мусулман бир тууганым!
            </StyledTypography>
            <StyledTypography
              variant="h6"
              component="h1"
              gutterBottom
            ></StyledTypography>
            <StyledText variant="body1" component="div">
              Шахадат айтуу менен пенде Аллах Таалага ыйман келтирип, Мухаммад
              (салаллоху алейхи уа саллам) Аллах Таала жиберген акыркы пайгамбар
              экенин кабылдоо. Муну айтуу менен пенде эң туура, эң жакшы, эң
              бактылуу, тынчтыктын дини болгон- ислам динин кабыл алат.
            </StyledText>
            <StyledText variant="body1" component="div">
              Ыйман бул – тил менен айтуу, жүрөк менен ишенүү жана амал менен
              тастыктоо...
            </StyledText>
            <StyledText variant="body1" component="div">
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
      </div>
      <Footer />
    </div>
  );
};

export default Shahada;

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
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
    padding: theme.spacing(2),
  },
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 8,
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#333',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1),
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  lineHeight: 1.7,
  fontSize: '1.2rem',
  color: '#555',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: theme.spacing(2),
  },
}));
