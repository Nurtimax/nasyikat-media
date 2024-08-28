import React, { useState, useRef } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  TextField,
  Box,
  IconButton,
  Drawer,
  FormControlLabel,
  MenuItem,
  Grid,
  RadioGroup,
  Radio,
} from '@mui/material';
import { styled } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import Header from './Header';
import Welcome from './Welcome';
import Footer from './Footer';
import islamicBackground from '../assetts/icons/bacimg.png';
import background1 from '../assetts/images/islam/muhammadsav.jpeg';
import background2 from '../assetts/images/islam/muhammadsav.jpeg';
import background3 from '../assetts/images/islam/muhammadsav.jpeg';
import background4 from '../assetts/images/islam/muhammadsav.jpeg';
import background5 from '../assetts/images/islam/muhammadsav.jpeg';
import ringitoon from '../assetts/quran-audio/ringiton.mp3';

const backgrounds = [
  islamicBackground,
  background1,
  background2,
  background3,
  background4,
  background5,
];

const textColors = [
  '#000000',
  '#FF6347',
  '#008080',
  '#1E90FF',
  '#FF1493',
  '#32CD32',
]; // 6 цветовых варианта

const TasbihCard = styled(Card)(({ background }) => ({
  maxWidth: '500px',
  margin: '50px auto',
  textAlign: 'center',
  background: background ? `url(${background})` : '#f0f0f0',
  backgroundSize: 'cover',
  color: '#000',
  position: 'relative',
  padding: '20px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
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
  const [isSoundOn] = useState(true);
  const [background, setBackground] = useState(islamicBackground);
  const [textColor, setTextColor] = useState('#000');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const audioRef = useRef(null);

  const tasbihTexts = [
    {
      zikr: 'СубханАллах',
    },
    {
      zikr: 'Альхамдулиллах',
    },
    {
      zikr: 'Аллаху Акбар',
    },
    {
      zikr: 'Ла илаха иллаллах',
    },
    {
      zikr: 'Астагфируллах',
    },
  ];

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount % 33 === 0 && isSoundOn) {
        audioRef.current.play();
      }

      return newCount;
    });
  };

  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);
  const handleTextChange = (event) => setSelectedText(event.target.value);

  const handleChangeBackground = (event) => {
    setBackground(URL.createObjectURL(event.target.files[0]));
  };

  const handleSelectBackground = (bg) => {
    setBackground(bg);
  };

  const handleChangeTextColor = (event) => {
    setTextColor(event.target.value);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Header />
      <Welcome />
      <TasbihCard background={background} sx={{ color: textColor }}>
        <CardContent>
          <Card>
            <CardContent>
              <Typography variant="h4">Тасбих</Typography>
            </CardContent>
          </Card>

          <TextField
            select
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
            <MenuItem value="">Зикр тандаңыз</MenuItem>
            {tasbihTexts.map((text, index) => (
              <MenuItem key={index} value={text.zikr}>
                ({text.zikr})
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Тандалган Зикр: <br /> {selectedText}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">Айтылган Зикр</Typography>
          <Typography variant="h6" gutterBottom>
            Саны: {count}
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
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            color: textColor,
          }}
        >
          <SettingsIcon />
        </IconButton>
      </TasbihCard>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, padding: 2, textAlign: 'center' }}>
          <Typography variant="h6">Настройки</Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Фон тандаңыз:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {backgrounds.map((bg, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  onClick={() => handleSelectBackground(bg)}
                  sx={{
                    height: '50px',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    border: background === bg ? '3px solid #008080' : 'none',
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Текстин түсү:
          </Typography>
          <RadioGroup
            row
            value={textColor}
            onChange={handleChangeTextColor}
            sx={{
              mt: 1,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {textColors.map((color, index) => (
              <FormControlLabel
                key={index}
                value={color}
                control={<Radio sx={{ color }} />}
                label=""
                sx={{
                  '& .MuiRadio-root': {
                    '&.Mui-checked': {
                      color,
                    },
                  },
                }}
              />
            ))}
          </RadioGroup>
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, width: '100%' }}
          >
            Фон алмаштыруу
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleChangeBackground}
            />
          </Button>
        </Box>
      </Drawer>

      <audio ref={audioRef}>
        <source src={ringitoon} type="audio/mp3" />
      </audio>
      <Footer />
    </div>
  );
};

export default Zikr;
