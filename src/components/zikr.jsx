import React, { useState, useRef } from 'react';
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
import islamicBackground from '../assetts/icons/bacimg.png';
import ringitoon from '../assetts/quran-audio/ringiton.mp3';

const TasbihCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  margin: '150px auto',
  textAlign: 'center',
  padding: theme.spacing(3),
  background: `url(${islamicBackground})`,
  backgroundSize: 'cover',
  borderRadius: '15px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  border: '2px solid #f5deb3',
}));

const LargeButton = styled(Button)(({ theme }) => ({
  fontSize: '2rem',
  width: '120px',
  height: '120px',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  background: 'linear-gradient(135deg, #008080, #20b2aa)',
  color: '#fff',
  borderRadius: '50%',
  '&:hover': {
    background: 'linear-gradient(135deg, #006666, #008080)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
}));

const Zikr = () => {
  const [count, setCount] = useState(0);
  const [selectedText, setSelectedText] = useState('');
  const audioRef = useRef(null);

  const tasbihTexts = [
    {
      arabic: 'سبحان الله',
      transliteration: 'СубханАллах',
      meaning: 'Аллах свободен от недостатков',
    },
    {
      arabic: 'الحمد لله',
      transliteration: 'Альхамдулиллах',
      meaning: 'Хвала Аллаху',
    },
    {
      arabic: 'الله أكبر',
      transliteration: 'Аллаху Акбар',
      meaning: 'Аллах Велик',
    },
    {
      arabic: 'لا إله إلا الله',
      transliteration: 'Ла илаха иллаллах',
      meaning: 'Нет божества, кроме Аллаха',
    },
    {
      arabic: 'أستغفر الله',
      transliteration: 'Астагфируллах',
      meaning: 'Прошу прощения у Аллаха',
    },
  ];

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount % 33 === 0) {
        audioRef.current.play();
      }

      return newCount;
    });
  };

  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);
  const handleTextChange = (event) => setSelectedText(event.target.value);

  return (
    <div>
      <Header />
      <Welcome />
      <TasbihCard>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Зикр (Тасбих)
          </Typography>
          <TextField
            select
            SelectProps={{ native: true }}
            value={selectedText}
            onChange={handleTextChange}
            fullWidth
            variant="outlined"
            margin="normal"
            sx={{
              fontSize: '1.2rem',
              fontFamily: 'serif',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #008080',
            }}
          >
            <option value="">Выберите Зикр</option>
            {tasbihTexts.map((text, index) => (
              <option key={index} value={text.transliteration}>
                {text.arabic} ({text.transliteration}) - {text.meaning}
              </option>
            ))}
          </TextField>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Выбранный Зикр: <br /> {selectedText}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">Счётчик Зикра</Typography>
          <Typography variant="h6" gutterBottom>
            Счёт: {count}
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
              sx={{
                margin: '0 15px',
                fontSize: '1rem',
                backgroundColor: '#008080',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#006666',
                },
              }}
            >
              -
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleReset}
              sx={{
                fontSize: '1rem',
                backgroundColor: '#d32f2f',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#c62828',
                },
              }}
            >
              Сброс
            </Button>
          </Box>
        </CardContent>
      </TasbihCard>

      <audio ref={audioRef} src={ringitoon} />

      <Footer />
    </div>
  );
};

export default Zikr;
