import React, { useRef, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
  Badge,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { useInView } from 'react-intersection-observer';
import videoData from './src-video-data/videosrc';

// Создаем тему для styled-components
const theme = createTheme();

// Styled components
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 100%; /* 16:9 aspect ratio */
  background-color: ${(props) =>
    props.theme.palette.grey[300]}; /* Используем тему для стилей */
  overflow: hidden;
`;

const AutoPlayVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoMedia = ({ src, controls }) => {
  const videoRef = useRef(null); // Используем useRef для доступа к элементу video

  const [, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -200px 0px', // Немного предзагрузки для более плавного воспроизведения
  });

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    if (inView && videoRef.current) {
      if (isMobile) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView, isMobile]);

  return (
    <AutoPlayVideo
      ref={videoRef}
      src={src}
      controls={controls}
      muted={isMobile} // Автоматическое воспроизведение без звука на мобильных устройствах
      loop // Повторять воспроизведение
      playsInline // Важно для iOS
    >
      Your browser does not support the video tag.
    </AutoPlayVideo>
  );
};

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

const StyledBadge = styled(Badge)`
  .MuiBadge-dot {
    background-color: green; // Цвет точки
  }
`;

const ChubakAjyJallilov = () => {
  const handleShare = (platform, url) => {
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${url}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/?url=${url}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${url}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
  };

  const handleDownload = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, px: 2 }}>
          <Grid container spacing={2} maxWidth="lg">
            {videoData.map((video, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard>
                  <VideoContainer>
                    {video.src ? (
                      <VideoMedia src={video.src} controls />
                    ) : (
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allowFullScreen
                      />
                    )}
                  </VideoContainer>
                  <StyledCardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        variant="dot"
                      >
                        <Avatar
                          alt={video.speaker}
                          src="/static/images/avatar/1.jpg"
                        />
                      </StyledBadge>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        sx={{ ml: 2 }}
                      >
                        {video.speaker}
                      </Typography>
                    </Box>
                    <Typography gutterBottom variant="h6">
                      {video.title}
                    </Typography>
                    <Typography variant="body2">{video.description}</Typography>
                  </StyledCardContent>
                  <StyledCardActions>
                    <IconButton
                      onClick={() =>
                        handleShare('whatsapp', video.url || video.src)
                      }
                      aria-label="share on WhatsApp"
                    >
                      <WhatsAppIcon />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        handleShare('instagram', video.url || video.src)
                      }
                      aria-label="share on Instagram"
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        handleShare('telegram', video.url || video.src)
                      }
                      aria-label="share on Telegram"
                    >
                      <TelegramIcon />
                    </IconButton>
                    <Button
                      onClick={() => handleDownload(video.url || video.src)}
                      startIcon={<DownloadIcon />}
                    >
                      Download
                    </Button>
                  </StyledCardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default ChubakAjyJallilov;
