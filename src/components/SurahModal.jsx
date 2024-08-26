import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Slider,
  Avatar,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import DownloadIcon from '@mui/icons-material/Download';
import banner from '../assetts/icons/quranbg.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  width: '80%',
  maxWidth: '600px',
  padding: theme.spacing(3),
  position: 'relative',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  borderRadius: '8px',
  zIndex: 1300,
  '@media (max-width:600px)': {
    width: '95%',
    padding: theme.spacing(3),
  },
}));

const TimeDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
}));

const ControlButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const DownloadButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const SurahModal = ({
  open,
  onClose,
  surah,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  React.useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateTime);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateTime);
      };
    }
  }, [surah, audioRef]);

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const handleTimeChange = (event, newValue) => {
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleDownload = () => {
    const url = audioRef.current.src;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'surah.mp3';
    link.click();
  };

  return (
    <StyledModal open={open} onClose={onClose}>
      <ModalContent>
        <IconButton
          onClick={onClose}
          style={{ position: 'absolute', bottom: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        {surah && (
          <>
            <ContentContainer>
              <Avatar
                src={surah.image}
                alt={surah.title}
                style={{ width: 100, height: 100 }}
              />
              <TextContainer>
                <Typography variant="h5" component="h2" gutterBottom>
                  {surah.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Кары: {surah.reader}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {surah.portal}{' '}
                  <VerifiedIcon
                    style={{ marginLeft: '5px' }}
                    fontSize="small"
                    color="primary"
                  />
                </Typography>
              </TextContainer>
            </ContentContainer>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <ControlButton aria-label="previous" onClick={() => {}}>
                <SkipPreviousIcon />
              </ControlButton>
              <ControlButton aria-label="play/pause" onClick={handlePlayPause}>
                {isPlaying ? <PauseCircleFilledIcon /> : <PlayArrowIcon />}
              </ControlButton>
              <ControlButton aria-label="next" onClick={() => {}}>
                <SkipNextIcon />
              </ControlButton>
            </Box>
            <TimeDisplay>
              <Typography variant="body2" color="textSecondary">
                {formatTime(currentTime)}
              </Typography>
              <Slider
                value={currentTime}
                min={0}
                max={duration}
                step={0.1}
                onChange={handleTimeChange}
                aria-label="Audio progress"
                style={{ flex: 1, marginLeft: '10px', marginRight: '10px' }}
              />
              <Typography variant="body2" color="textSecondary">
                {formatTime(duration - currentTime)}
              </Typography>
            </TimeDisplay>
            <Box display="flex" justifyContent="center" mt={2}>
              <Tooltip title="Visit WhatsApp">
                <SocialButton
                  onClick={() =>
                    window.open('https://wa.me/996556401369', '_blank')
                  }
                  sx={{
                    color: '#25D366',
                  }}
                >
                  <WhatsAppIcon />
                </SocialButton>
              </Tooltip>
              <Tooltip title="Visit Instagram">
                <SocialButton
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/nasyikat.media/',
                      '_blank'
                    )
                  }
                  sx={{
                    color: '#C13584',
                  }}
                >
                  <InstagramIcon />
                </SocialButton>
              </Tooltip>
              <Tooltip title="Visit Telegram">
                <SocialButton
                  onClick={() =>
                    window.open('https://t.me/+SEJbmn8AwNViNmNi', '_blank')
                  }
                  sx={{
                    color: '#0daae3',
                  }}
                >
                  <TelegramIcon />
                </SocialButton>
              </Tooltip>
              <Tooltip title="Download Surah">
                <DownloadButton onClick={handleDownload}>
                  <DownloadIcon />
                </DownloadButton>
              </Tooltip>
            </Box>
          </>
        )}
      </ModalContent>
    </StyledModal>
  );
};

export default SurahModal;
