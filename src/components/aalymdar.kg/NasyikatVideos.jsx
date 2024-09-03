import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import videoTesting from '../../assetts/nasyikat-videos/testingvideo.mp4';
import bannerImage from '../../assetts/icons/ali.jpg';

// Данные видео
const videos = [
  {
    title: 'Видео про Палестину',
    description: 'Это видео рассказывает о текущей ситуации в Палестине.',
    videoSrc: videoTesting,
  },
  {
    title: 'Видео о мусульманах',
    description: 'Видео посвящено мусульманским сообществам по всему миру.',
    videoSrc: videoTesting,
  },
  {
    title: 'Видео про Палестину',
    description: 'Это видео рассказывает о текущей ситуации в Палестине.',
    videoSrc: videoTesting,
  },
  {
    title: 'Видео о мусульманах',
    description: 'Видео посвящено мусульманским сообществам по всему миру.',
    videoSrc: videoTesting,
  },
  {
    title: 'Видео о мусульманах',
    description: 'Видео посвящено мусульманским сообществам по всему миру.',
    videoSrc: videoTesting,
  },
];

// Стили карточки с видео
const VideoCard = styled(Card)({
  display: 'flex',
  marginBottom: '16px', // Заменил theme.spacing на фиксированные значения
  borderRadius: '8px',
});

const VideoPlayer = styled('video')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
});

// Стили секции баннера
const BannerSection = styled(Box)({
  height: '100vh',
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '16px', // Заменил theme.spacing на фиксированные значения
});

// Стили секции с изображением и текстом
const ImageTextSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '32px', // Заменил theme.spacing на фиксированные значения
  backgroundColor: '#e0e0e0',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

// Основной компонент
const NasyikatVideos = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      {/* Баннер */}
      <BannerSection>
        <Typography variant="h2">Поддержка мусульман по всему миру</Typography>
      </BannerSection>

      {/* Секция с изображением и текстом */}
      <ImageTextSection>
        <img
          src={bannerImage}
          alt="Мусульмане"
          style={{ width: '40%', borderRadius: '8px' }}
        />
        <Typography variant="h5" sx={{ padding: 2 }}>
          Мы стоим вместе с мусульманами по всему миру, предоставляя важные
          обновления и делясь информацией.
        </Typography>
      </ImageTextSection>

      {/* Секция с видео-карточками */}
      <Box sx={{ padding: '16px' }}>
        <Grid container spacing={2}>
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <VideoCard>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <VideoPlayer controls>
                    <source src={video.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </VideoPlayer>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {video.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {video.description}
                    </Typography>
                  </CardContent>
                </Box>
              </VideoCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Секция для новостей и обновлений */}
      <Box sx={{ padding: '16px', backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ marginBottom: '16px' }}>
          Новости мусульман
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>
          Поддержка Палестины и других мусульманских сообществ. Здесь можно
          делиться новостями и важной информацией.
        </Typography>
        <Button variant="contained" color="primary">
          Узнать больше
        </Button>
      </Box>
    </Box>
  );
};

export default NasyikatVideos;
