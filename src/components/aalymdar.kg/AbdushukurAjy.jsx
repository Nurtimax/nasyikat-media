import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  Avatar,
  Badge,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import styled from 'styled-components';
import { Verified } from '@mui/icons-material';
import Welcome from '../../components/Welcome';
import Header from '../../components/Header';
import LogoNasyikatMedia from '../../assetts/images/islam/nmlogo.png';
import abdushukurajy from './src-video-data/abdushukurajy.js';

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

const VideoContainer = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const extractYouTubeId = (url) => {
  if (!url) return null;

  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/shorts|youtu\.be)\/([^&\s]{11})|(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] || match[2] : null;
};

const ChubakAjyJallilov = () => {
  const handleShare = (platform, url) => {
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${url}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/nasyikat.media/?url=${url}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${url}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <>
      <Welcome />
      <Header />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, px: 2 }}>
          <Grid container spacing={2} maxWidth="lg">
            {abdushukurajy.map((video, index) => {
              const youtubeId = extractYouTubeId(video.url);
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <StyledCard>
                    <VideoContainer>
                      <VideoIframe
                        src={
                          youtubeId
                            ? `https://www.youtube.com/embed/${youtubeId}`
                            : ''
                        }
                        title={video.title}
                        allowFullScreen
                      />
                    </VideoContainer>
                    <StyledCardContent>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 3 }}
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
                        onClick={() => handleShare('whatsapp', video.url)}
                        aria-label="share on WhatsApp"
                      >
                        <WhatsAppIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleShare('instagram', video.url)}
                        aria-label="share on Instagram"
                      >
                        <InstagramIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleShare('telegram', video.url)}
                        aria-label="share on Telegram"
                      >
                        <TelegramIcon />
                      </IconButton>
                    </StyledCardActions>
                  </StyledCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ChubakAjyJallilov;
