import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Header from './Header';
import surahs from './data/quran/quran';
import Footer from '../components/Footer';
import SurahModal from '../components/SurahModal';

const Background = styled('div')(({ theme }) => ({
  backgroundSize: '400% 400%',
  animation: 'gradientBG 15s ease infinite',
  minHeight: '100vh',
  overflow: 'hidden',
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

const SurahListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const SurahAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  marginRight: theme.spacing(2),
}));

const Quran = () => {
  const [currentSurah, setCurrentSurah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const audioRef = useRef(new Audio());

  const handlePlayPause = (surah) => {
    if (currentSurah === surah && isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setCurrentSurah(surah);
      setIsPlaying(true);
      audioRef.current.src = surah.audio;
      audioRef.current.play();
      setModalOpen(true);
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
    <div>
      <Background>
        <Header />

        <StyledContainer maxWidth="md">
          <Box textAlign="center" mb={3}>
            <Typography variant="h4" component="h1" gutterBottom>
              Китебим Куран
            </Typography>
          </Box>

          <List>
            {surahs.map((surah, index) => (
              <SurahListItem key={index} divider>
                <SurahAvatar src={surah.image} alt={surah.reader} />
                <ListItemText
                  primary={surah.title}
                  secondary={
                    <>
                      <Typography variant="body1" color="textSecondary">
                        Кары: {surah.reader}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {surah.description}
                      </Typography>
                    </>
                  }
                />
                <IconButton aria-label="previous" onClick={handleSkipPrevious}>
                  <SkipPreviousIcon />
                </IconButton>
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
                <IconButton aria-label="next" onClick={handleSkipNext}>
                  <SkipNextIcon />
                </IconButton>
              </SurahListItem>
            ))}
          </List>

          <SurahModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            surah={currentSurah}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </StyledContainer>
      </Background>
      <Footer />
    </div>
  );
};

export default Quran;
