import React from 'react';
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
import videoData from './src-video-data/videosrc';
import LogoNasyikatMedia from '../../assetts/images/islam/nmlogo.png';
import { Verified } from '@mui/icons-material';
import Welcome from '../../components/Welcome';
import Header from '../../components/Header';
import VideoMedia from '../../components/VideoMedia';

const theme = createTheme();

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

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
                    <VideoMedia src={video.src} controls />
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
