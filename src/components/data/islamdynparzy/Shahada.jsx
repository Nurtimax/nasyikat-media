import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BackgroundImage from '../../../assetts/images/islam/mecca.jpg';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';

const Shahada = () => {
  return (
    <div>
      <Header />
      <Welcom />
      <StyledContainer>
        <StyledImageContainer></StyledImageContainer>
        <StyledTextContainer>
          <StyledTypography variant="h4" component="h1" gutterBottom>
            Урматтуу мусулман бир тууганым! Бир Алладан башка Кудай жок жана
            Мухаммад анын элчиси деп күбөлүк берүү
          </StyledTypography>
          <StyledTypography variant="h4" component="h1" gutterBottom>
            («Ла илаха илла-ллоху Мухаммадур расуллалох»)
          </StyledTypography>
          <StyledText variant="body1" component="div">
            ШАХАДАТ айтуу менен пенде Аллах Таалага ыйман келтирип, Мухаммад
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
          </StyledText>
        </StyledTextContainer>
        <StyledIcon />
      </StyledContainer>
    </div>
  );
};

export default Shahada;

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f9f9f9',
  backgroundImage: `url(${BackgroundImage})`, // Фоновое изображение для всего контейнера
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
  height: '100%',
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#fff',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  maxWidth: '800px',
  margin: '0 auto',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  color: '#333',
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  lineHeight: 1.7,
  fontSize: '1.1rem',
  color: '#555',
}));

const StyledIcon = styled(FavoriteIcon)(({ theme }) => ({
  fontSize: '2rem',
  marginTop: theme.spacing(2),
  color: '#ff4081',
}));
