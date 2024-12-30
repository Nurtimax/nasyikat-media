import React, { useState, useRef } from 'react';
import {
  Button,
  Typography,
  Box,
  Drawer,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import background1 from '../assetts/images/bgislam2.avif';
import background2 from '../assetts/images/bgislam3.jpg';
import background3 from '../assetts/images/bgislam4.jpg';
import background4 from '../assetts/images/bgislam6.jpeg';
import background5 from '../assetts/images/bgislam5.webp';
import ringitoon from '../assetts/quran-audio/ringiton.mp3';

const backgrounds = [
  background4,
  background1,
  background2,
  background3,
  background5,
];
const tasbihTexts = [
  'СубханАллах',
  'Альхамдулиллах',
  'Аллаху Акбар',
  'Астагфируллах',
  'Лаа илааха иллаллах',
];

const Zikr = () => {
  const [count, setCount] = useState(0);
  const [currentZikrIndex, setCurrentZikrIndex] = useState(0);
  const [background, setBackground] = useState(background4);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Состояние для модалки
  const audioRef = useRef(null);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount % 33 === 0) {
        audioRef.current.play();
        setSnackbarOpen(true);
      }
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
    setIsDialogOpen(false); // Закрыть модалку после сброса
  };

  const handleSelectZikr = (event) => {
    setCurrentZikrIndex(event.target.value);
    setCount(0);
  };

  const handleSelectBackground = (bg) => setBackground(bg);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: 2,
      }}
    >
      {/* Выбор Зикра */}
      <FormControl sx={{ mb: 3, minWidth: 200 }}>
        <Select
          value={currentZikrIndex}
          onChange={handleSelectZikr}
          sx={{
            color: '#fff',
            borderColor: '#fff',
            background: 'rgba(0,0,0,0.5)',
          }}
        >
          {tasbihTexts.map((zikr, index) => (
            <MenuItem value={index} key={index}>
              {zikr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Текущий зикр */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        {tasbihTexts[currentZikrIndex]}
      </Typography>

      {/* Кнопка зикра */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleIncrement}
        sx={{
          width: '300px',
          height: '300px',
          fontSize: '2rem',
          borderRadius: '50%',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'transform 0.2s',
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        {count}
      </Button>

      {/* Кнопки управления */}
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          -
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setIsDialogOpen(true)} // Открыть модалку при нажатии
        >
          Очуруу
        </Button>
      </Box>

      {/* Настройки (фон) */}
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        sx={{ position: 'fixed', bottom: 20, right: 20, color: '#fff' }}
      >
        <SettingsIcon fontSize="large" />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 320, p: 2 }}>
          <Typography variant="h6">Настройки</Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Фон:
          </Typography>
          <Grid container spacing={2}>
            {backgrounds.map((bg, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  onClick={() => handleSelectBackground(bg)}
                  sx={{
                    height: '50px',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>

      {/* Модальное окно подтверждения */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)} // Закрыть модалку
      >
        <DialogTitle>Подтверждение</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите сбросить счетчик? Это действие нельзя
            отменить.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="secondary">
            Отмена
          </Button>
          <Button onClick={handleReset} color="error">
            Сбросить
          </Button>
        </DialogActions>
      </Dialog>

      {/* Уведомление */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Вы завершили 33 раза: {tasbihTexts[currentZikrIndex]}!
        </Alert>
      </Snackbar>

      {/* Аудио */}
      <audio ref={audioRef}>
        <source src={ringitoon} type="audio/mp3" />
      </audio>
    </Box>
  );
};

export default Zikr;
