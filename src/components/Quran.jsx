import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Header from './Header';
import surahs from './data/quran/quran'; // Проверьте правильность пути

const Background = styled('div')(({ theme }) => ({
  backgroundSize: '400% 400%',
  animation: 'gradientBG 15s ease infinite',
  minHeight: '100vh',
  paddingBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '20px',
  },
  '@keyframes gradientBG': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '80px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '80px',
    padding: '10px',
  },
}));

const Quran = () => {
  const [currentSurah, setCurrentSurah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = (surah) => {
    if (currentSurah === surah && isPlaying) {
      // Приостановить воспроизведение, если та же сура
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      // Воспроизвести новую суру
      setCurrentSurah(surah);
      setIsPlaying(true);
      audioRef.current.src = surah.audio;
      audioRef.current.play();
    }
  };

  const handleSkipPrevious = () => {
    if (currentSurah) {
      const currentIndex = surahs.findIndex((s) => s === currentSurah);
      const previousIndex = (currentIndex - 1 + surahs.length) % surahs.length;
      const previousSurah = surahs[previousIndex];
      setCurrentSurah(previousSurah);
      setIsPlaying(true);
      audioRef.current.src = previousSurah.audio;
      audioRef.current.play();
    }
  };

  const handleSkipNext = () => {
    if (currentSurah) {
      const currentIndex = surahs.findIndex((s) => s === currentSurah);
      const nextIndex = (currentIndex + 1) % surahs.length;
      const nextSurah = surahs[nextIndex];
      setCurrentSurah(nextSurah);
      setIsPlaying(true);
      audioRef.current.src = nextSurah.audio;
      audioRef.current.play();
    }
  };

  return (
    <Background>
      <Header />
      <StyledContainer maxWidth="md">
        <Box textAlign="center" mb={3}>
          <Typography variant="h5" component="h1" gutterBottom>
            Китебим Куран
          </Typography>
        </Box>
        <List>
          {surahs.map((surah, index) => (
            <ListItem key={index} divider>
              <Grid container alignItems="center" spacing={3}>
                <Grid item xs={6}>
                  <ListItemText primary={surah.title} />
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    aria-label="previous"
                    onClick={handleSkipPrevious}
                  >
                    <SkipPreviousIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  {currentSurah === surah && isPlaying ? (
                    <IconButton
                      aria-label="pause"
                      onClick={() => handlePlayPause(surah)}
                    >
                      <PauseCircleFilledIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="play"
                      onClick={() => handlePlayPause(surah)}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <IconButton aria-label="next" onClick={handleSkipNext}>
                    <SkipNextIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <audio ref={audioRef} controls />
      </StyledContainer>
    </Background>
  );
};

export default Quran;
