import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import prayers from './data/dubalar/prayers';

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

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  animation: `${fadeInUp} 0.5s ease forwards`,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
  },
  backgroundImage: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
  height: '400px', // Фиксированная высота карточки
  display: 'flex', // Для вертикального выравнивания содержимого
  flexDirection: 'column',
  justifyContent: 'center',
}));

const Header = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  color: '#333',
  marginBottom: '30px',
  fontFamily: 'serif',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  color: '#555',
  lineHeight: '1.8',
  margin: '10px 0',
  fontFamily: 'Georgia, serif',
  fontSize: '1rem',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const BoldParagraph = styled(Paragraph)({
  fontWeight: 'bold',
  color: '#333',
});

const Section5 = () => {
  return (
    <div>
      <Header>
        Дуба - момундун куралы, диндин түркүгү жана асман менен жердин нуру.
      </Header>
      <Grid container spacing={3} justifyContent="center">
        {prayers.map((prayer, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
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
                    <BoldParagraph>Транскрипция</BoldParagraph>
                    <Paragraph>{prayer.transcription}</Paragraph>
                  </>
                )}
                <BoldParagraph>Кыргызча мааниси</BoldParagraph>
                <Paragraph>{prayer.meaning}</Paragraph>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section5;
