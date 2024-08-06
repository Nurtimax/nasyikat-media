import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  TextField,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import Header from './Header';
import Welcome from './Welcome';
import Footer from './Footer';

const TasbihCard = styled(Card)(({ theme, animate }) => ({
  maxWidth: 400,
  margin: '20px auto',
  textAlign: 'center',
  padding: theme.spacing(2),
  background: animate
    ? 'linear-gradient(45deg, #f3ec78, #af4261)' // Gradient background with more vibrant colors
    : 'white',
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background 0.5s ease-in-out, transform 0.5s ease-in-out',
  animation: animate ? 'pulse 1s infinite' : 'none',
  transform: animate ? 'scale(1.05)' : 'scale(1)', // Slight scale effect on animation
}));

const LargeButton = styled(Button)(({ theme }) => ({
  fontSize: '2rem',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  transition: 'background 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #ff6f00, #ffcc80)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  background: 'linear-gradient(180deg, #e3f2fd, #bbdefb)',
  padding: theme.spacing(4),
  overflow: 'hidden',
}));

const pulseAnimation = `
  @keyframes pulse {
    0% {
      background-color: rgba(255, 105, 135, 0.3);
    }
    50% {
      background-color: rgba(255, 105, 135, 0.6);
    }
    100% {
      background-color: rgba(255, 105, 135, 0.3);
    }
  }
`;

const Zikr = () => {
  const [count, setCount] = useState(0);
  const [selectedText, setSelectedText] = useState('');
  const [animate, setAnimate] = useState(false); // State for animation trigger

  const tasbihTexts = [
    {
      arabic: 'سبحان الله',
      transliteration: 'СубханАллах',
      meaning: 'Аллах кемчиликтерден аруу',
    },
    {
      arabic: 'الحمد لله',
      transliteration: 'Альхамдулиллах',
      meaning: 'Аллага шугур',
    },
    {
      arabic: 'الله أكبر',
      transliteration: 'Аллаху Акбар',
      meaning: 'Аллах улук',
    },
    {
      arabic: 'لا إله إلا الله',
      transliteration: 'Лаа илаха Иллаллах',
      meaning: 'Аллахтан башка кудай жок',
    },
    {
      arabic: 'أستغفر الله',
      transliteration: 'АстагфирАллах',
      meaning: 'Аллахым куноолорумду кечип',
    },
  ];

  useEffect(() => {
    if (count % 33 === 0 && count !== 0) {
      setAnimate(true);
      if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrate for 200 milliseconds
      }
      setTimeout(() => setAnimate(false), 1000); // Turn off animation after 1 second
    }
  }, [count]);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);
  const handleTextChange = (event) => setSelectedText(event.target.value);

  return (
    <div>
      <Header />
      <Welcome />
      <TasbihCard animate={animate}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Аллахты эстоо ибадат
          </Typography>
          <TextField
            select
            SelectProps={{ native: true }}
            value={selectedText}
            onChange={handleTextChange}
            fullWidth
            variant="outlined"
            margin="normal"
          >
            <option value="">Зикр тандоо</option>
            {tasbihTexts.map((text, index) => (
              <option key={index} value={text.transliteration}>
                {text.arabic} ({text.transliteration}) - {text.meaning}
              </option>
            ))}
          </TextField>
          <Typography variant="h6" gutterBottom>
            Тандалган зикр: {selectedText}
          </Typography>
        </CardContent>
      </TasbihCard>
      <TasbihCard animate={animate}>
        <CardContent>
          <Typography variant="h4">Зикрдин саны</Typography>
          <Typography variant="h6" gutterBottom>
            эсеп: {count}
          </Typography>
          <LargeButton
            variant="contained"
            color="primary"
            onClick={handleIncrement}
          >
            +
          </LargeButton>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDecrement}
              style={{ margin: '0 10px' }}
            >
              -
            </Button>
            <Button variant="contained" color="error" onClick={handleReset}>
              очуруу
            </Button>
          </Box>
        </CardContent>
      </TasbihCard>

      <style>{pulseAnimation}</style>

      <Footer />
    </div>
  );
};

export default Zikr;
