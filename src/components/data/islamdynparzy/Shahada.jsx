import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from '../../../assetts/icons/logo.jpg';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';

const Shahada = () => {
  return (
    <StyledContainer>
      <Header />
      <Welcom />
      <StyledImageContainer>
        <StyledImage src={Image} alt="Islam" />
      </StyledImageContainer>
      <StyledTypography variant="h4" component="h1" gutterBottom>
        Урматтуу мусулман бир тууганым!
      </StyledTypography>
      <StyledText variant="body1" component="div">
        Ыйман бул – тил менен айтуу, жүрөк менен ишенүү жана амал менен
        тастыктоо. Тилибиз менен Лаа илааhа илЛаллооhу Мухаммадур-расуулуллоh,
        Аллахтан башка сыйынууга татыктуу зат жок, Мухаммад анын элчиси деп
        күбөлүк беребиз. Айткан келмебизге жүрөгүбүз менен ишенебиз. Аллахтын,
        Жалгыз жана шериги жоктугуна, Жараатуучу жана Кудреттүүлүгүнө, Тирүү
        жана эч качан өлбөстүгүнө, Баардык ааламды башкаруучу жана ибаадат
        кылууга татыктуу зат экенине ишенген соң, Ага гана ибаадат кылабыз.
      </StyledText>
      <StyledIcon />
    </StyledContainer>
  );
};

export default Shahada;

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5),
  backgroundColor: '#f0f0f0',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  maxWidth: '400px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  lineHeight: 1.6,
}));

const StyledIcon = styled(FavoriteIcon)(({ theme }) => ({
  fontSize: '3rem',
  marginTop: theme.spacing(2),
}));
