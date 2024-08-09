import React, { useRef, useEffect, useState } from 'react';
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
import LogoNasyikatMedia from '../../assetts/images/islam/nmlogo.png';
import { Verified } from '@mui/icons-material';
import Welcome from '../../components/Welcome';
import Header from '../../components/Header';

const theme = createTheme();

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 100%;
  background-color: ${(props) => props.theme.palette.grey[400]};
  overflow: hidden;
  @media (max-width: 768px) {
    padding-top: 56.25%; // Adjusted for better aspect ratio
  }
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
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && isMobile) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView, isMobile]);

  return (
    <div ref={ref}>
      <AutoPlayVideo ref={videoRef} src={src} controls={controls}>
        Ваш браузер не поддерживает видео.
      </AutoPlayVideo>
    </div>
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
    background-color: green;
  }
`;

const ChubakAjyJallilov = () => {
  const handleShare = (platform, url) => {
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/+996?text=${url}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/nasyikat.media/?url=${url}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/+SEJbmn8AwNViNmNi?url=${url}`;
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
    <>
      <Welcome />
      <Header />
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, px: 2 }}>
            <Grid container spacing={2} maxWidth="lg">
              {videoData.map((video, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <StyledCard>
                    <VideoContainer>
                      <VideoMedia src={video.src} controls />
                    </VideoContainer>
                    <StyledCardContent>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                      >
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          variant="dot"
                        >
                          <Avatar alt={video.author} src={LogoNasyikatMedia} />
                        </StyledBadge>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          sx={{
                            ml: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          {video.author}
                          <Verified
                            color="primary"
                            fontSize="15px"
                            style={{ marginBottom: '1px' }}
                          />
                        </Typography>
                      </Box>
                      <Typography gutterBottom variant="h6">
                        {video.title}
                      </Typography>
                      <Typography variant="body2">
                        {video.description}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: '10px' }}>
                        {video.speaker}
                      </Typography>
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
                        Көчүрүү
                      </Button>
                    </StyledCardActions>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default ChubakAjyJallilov;
