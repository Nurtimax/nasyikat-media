import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Shahada = () => {
  return (
    <div>
      <Header />
      <Welcom />
      <StyledContainer>
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
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #faf5e4, #e9d9a9)', // Более теплый градиентный фон
  borderRadius: '15px', // Более скругленные углы для мягкости
  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)', // Более глубокая тень
  padding: theme.spacing(5), // Дополнительное внутреннее пространство
  maxWidth: '1000px', // Увеличенная ширина для более удобного чтения
  margin: '0 auto 30px', // Дополнительное нижнее поле
  position: 'relative',
  fontFamily: "'Amiri', serif", // Элегантный арабский шрифт
  color: '#3b2f2f', // Глубокий темно-коричневый цвет текста
  textAlign: 'justify',
  lineHeight: 1.8, // Увеличенный межстрочный интервал для улучшенного восприятия
  borderLeft: `4px solid #c9a475`, // Более широкий акцентный бордюр
  '&:before': {
    content: '"\\275D"', // Левый акцентный символ
    position: 'absolute',
    top: '-20px', // Положение символа
    left: '5px',
    fontSize: '50px', // Увеличенный размер символа
    color: '#c9a475', // Цвет в тон бордюру
  },
  '&:after': {
    content: '"\\275E"', // Правый акцентный символ
    position: 'absolute',
    bottom: '-35px',
    right: '5px',
    fontSize: '50px',
    color: '#c9a475',
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #fef8e0, #e9d9a9)', // Лёгкое изменение фона при наведении
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3), // Уменьшение внутреннего пространства на мобильных устройствах
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: '#2c3e50',
  fontWeight: 700,
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.8,
  fontSize: '1.2rem',
  color: '#5d4037',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#3e2723',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
  },
}));
