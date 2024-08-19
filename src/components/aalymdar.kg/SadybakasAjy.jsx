import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Badge,
  ThemeProvider,
  createTheme,
  IconButton,
  Tooltip,
} from '@mui/material';
import styled from 'styled-components';
import { Verified, Share } from '@mui/icons-material';
import Welcome from '../../components/Welcome';
import Header from '../../components/Header';
import LogoNasyikatMedia from '../../assetts/images/islam/nmlogo.png';
import exampl from './src-video-data/exampl.js';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#34a853',
    },
  },
});

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledBadge = styled(Badge)`
  .MuiBadge-dot {
    background-color: #34a853;
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

const ActionIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const extractYouTubeId = (url) => {
  if (!url) return null;
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/shorts|youtu\.be)\/([^&\s]{11})|(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] || match[2] : null;
};

const ChubakAjyJallilov = () => {
  return (
    <>
      <Welcome />
      <Header />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, px: 2 }}>
          <Grid container spacing={4} maxWidth="lg">
            {exampl.map((video, index) => {
              const youtubeId = extractYouTubeId(video.url);
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
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
                          <Avatar
                            alt={video.author}
                            src={LogoNasyikatMedia}
                            sx={{ width: 56, height: 56 }}
                          />
                        </StyledBadge>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          sx={{
                            ml: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontWeight: 'bold',
                          }}
                        >
                          {video.author}
                          <Verified
                            color="primary"
                            fontSize="small"
                            style={{ marginBottom: '2px' }}
                          />
                        </Typography>
                      </Box>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: theme.palette.primary.main,
                        }}
                      >
                        {video.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {video.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: theme.palette.secondary.main }}
                      >
                        {video.speaker}
                      </Typography>
                      <ActionIcons>
                        <Tooltip title="Share">
                          <IconButton color="primary">
                            <Share />
                          </IconButton>
                        </Tooltip>
                      </ActionIcons>
                    </StyledCardContent>
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
