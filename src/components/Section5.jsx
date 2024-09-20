import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import prayers from './data/dubalar/prayers';

// Анимация появления карточек
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Стиль для карточки с улучшенной анимацией и тенями
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
  animation: `${fadeInUp} 0.6s ease forwards`,
  '&:hover': {
    transform: 'translateY(-15px)',
    boxShadow: '0px 5px 30px rgba(255, 255, 255, 0.417)',
  },
  backgroundImage: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
  width: '100%',
  height: 'auto', // Allow height to be dynamic based on content
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

// Стиль для заголовка секции
const Header = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  color: '#f6edde',
  marginBottom: '40px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '2.8rem',
  fontWeight: '700',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
}));

// Стиль для текста
const Paragraph = styled(Typography)(({ theme }) => ({
  color: '#34495e',
  lineHeight: '1.8',
  margin: '12px 0',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.1rem',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const BoldParagraph = styled(Paragraph)({
  fontWeight: 'bold',
  color: '#2c3e50',
});

// Стиль для контейнера с карточками
const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // Stack cards horizontally by default
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack cards vertically on mobile
    gap: theme.spacing(2),
  },
}));

const Section5 = () => {
  return (
    <div>
      <Header>
        <Typography variant="h3">
          Дуба - Момундун куралы, диндин түркүгү жана асман менен жердин нуру
        </Typography>
      </Header>
      <CardsContainer>
        {prayers.map((prayer, index) => (
          <StyledCard
            key={index}
            sx={{ flex: '1 1 calc(25% - 16px)', cursor: 'pointer' }}
          >
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                color="#2c3e50"
              >
                {prayer.title}
              </Typography>
              {prayer.arabic && (
                <>
                  <BoldParagraph>Арабча</BoldParagraph>
                  <Paragraph>{prayer.arabic}</Paragraph>
                </>
              )}
              {prayer.transcription && (
                <>
                  <BoldParagraph>Окулушу</BoldParagraph>
                  <Paragraph>{prayer.transcription}</Paragraph>
                </>
              )}
              <BoldParagraph>Мааниси</BoldParagraph>
              <Paragraph>{prayer.meaning}</Paragraph>
            </CardContent>
          </StyledCard>
        ))}
      </CardsContainer>
    </div>
  );
};

export default Section5;
