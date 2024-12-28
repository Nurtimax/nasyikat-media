import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
  Drawer,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  LinearProgress,
  MenuItem,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import background1 from '../assetts/images/bgislam2.avif';
import background2 from '../assetts/images/bgislam3.jpg';
import background3 from '../assetts/images/bgislam4.jpg';
import background4 from '../assetts/images/bgislam6.jpeg';
import background5 from '../assetts/images/bgislam5.webp';
import ringitoon from '../assetts/quran-audio/ringiton.mp3';

// Данные для фонов и текстов
const backgrounds = [
  background4,
  background1,
  background2,
  background3,
  background5,
];
const textColors = [
  '#000000',
  '#FF6347',
  '#008080',
  '#1E90FF',
  '#FF1493',
  '#32CD32',
];
const tasbihTexts = [
  'СубханАллах',
  'Альхамдулиллах',
  'Аллаху Акбар',
  'Астагфируллах',
  'Лаа илааха иллаллах',
];

const TasbihCard = styled(Card)(({ background }) => ({
  maxWidth: '500px',
  margin: '50px auto',
  textAlign: 'center',
  background: background ? `url(${background})` : '#f0f0f0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  padding: '20px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
}));

const LargeButton = styled(Button)(({ theme }) => ({
  fontSize: '2rem',
  width: '250px',
  height: '250px',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  color: '#fff',
  borderRadius: '50%',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:active': {
    transform: 'scale(0.95)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
}));

const Zikr = () => {
  const [count, setCount] = useState(0);
  const [currentZikrIndex, setCurrentZikrIndex] = useState(0);
  const [selectedZikrIndex, setSelectedZikrIndex] = useState(0);
  const [background, setBackground] = useState(background4);
  const [textColor, setTextColor] = useState('#fff');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const audioRef = useRef(null);

  // Логика для переключения тасбихов после 33 повторений
  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount % 33 === 0) {
        audioRef.current.play();
        setSnackbarOpen(true);
        setCurrentZikrIndex(
          (prevIndex) => (prevIndex + 1) % tasbihTexts.length
        );
      }
      return newCount;
    });
  };

  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleReset = () => setIsDialogOpen(true);

  const confirmReset = () => {
    setCount(0);
    setCurrentZikrIndex(selectedZikrIndex);
    setIsDialogOpen(false);
  };

  const handleSelectZikr = (event) => {
    const index = tasbihTexts.indexOf(event.target.value);
    setSelectedZikrIndex(index);
    setCurrentZikrIndex(index);
  };

  const handleSelectBackground = (bg) => setBackground(bg);

  const handleChangeTextColor = (event) => setTextColor(event.target.value);

  const toggleDrawer = (open) => () => setIsDrawerOpen(open);

  const closeSnackbar = () => setSnackbarOpen(false);

  useEffect(() => {
    // Обновляем текст при изменении текущего тасбиха
    setCurrentZikrIndex(selectedZikrIndex);
  }, [selectedZikrIndex]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 2,
      }}
    >
      <TasbihCard background={background} sx={{ color: textColor }}>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 'bold', height: '6rem' }}
          >
            {tasbihTexts[currentZikrIndex]}
          </Typography>
          <TextField
            select
            value={tasbihTexts[selectedZikrIndex]}
            onChange={handleSelectZikr}
            fullWidth
            variant="outlined"
            margin="normal"
            sx={{
              fontSize: '1.2rem',
              backgroundColor: '#2e2727',
              borderRadius: '8px',
              border: '1px solid #008080',
              color: textColor,
              '& .MuiInputBase-root': { color: textColor },
            }}
          >
            {tasbihTexts.map((zikr, index) => (
              <MenuItem key={index} value={zikr} style={{ color: '#fff' }}>
                {zikr}
              </MenuItem>
            ))}
          </TextField>
          <LinearProgress
            variant="determinate"
            value={(count % 33) * (100 / 33)}
            sx={{ mt: 2, borderRadius: '4px', height: '10px' }}
          />
          <Typography variant="h5" sx={{ mt: 2 }}>
            {count}
          </Typography>
        </CardContent>
        <CardContent>
          <LargeButton variant="contained" onClick={handleIncrement}>
            +
          </LargeButton>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDecrement}
            >
              -
            </Button>
            <Button variant="contained" color="error" onClick={handleReset}>
              Сброс
            </Button>
          </Box>
        </CardContent>
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ position: 'absolute', bottom: 10, right: 10, color: textColor }}
        >
          <SettingsIcon />
        </IconButton>
      </TasbihCard>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, padding: 2 }}>
          <Typography variant="h6">Настройки</Typography>
          <Typography variant="h6">Фон:</Typography>
          <Grid container spacing={2}>
            {backgrounds.map((bg, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  onClick={() => handleSelectBackground(bg)}
                  sx={{
                    height: '50px',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6">Цвет текста:</Typography>
          <RadioGroup row value={textColor} onChange={handleChangeTextColor}>
            {textColors.map((color, index) => (
              <FormControlLabel
                key={index}
                value={color}
                control={<Radio />}
                label=""
                sx={{ '& .MuiRadio-root': { color } }}
              />
            ))}
          </RadioGroup>
        </Box>
      </Drawer>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Сбросить?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите сбросить счетчик?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="primary">
            Отмена
          </Button>
          <Button onClick={confirmReset} color="error">
            Сбросить
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity="success">
          Поздравляем! Вы завершили 33 раза: {tasbihTexts[currentZikrIndex]}!
        </Alert>
      </Snackbar>

      <audio ref={audioRef}>
        <source src={ringitoon} type="audio/mp3" />
      </audio>
    </Box>
  );
};

export default Zikr;
