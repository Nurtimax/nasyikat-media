import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Verified } from '@mui/icons-material';
import bannerImage from '../assetts/images/madina.jpg';
import videos from './data/video-block/nasyikat-videos';
import uigurs from './data/video-block/uigur.js';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

// Стили для видео-карточек и контейнера
const VideoGridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 видео в строке
  gap: '16px',
  '@media (max-width: 900px)': {
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 видео в строке на планшетах
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr', // 1 видео в строке на мобильных устройствах
  },
});

const VideoCard = styled(Card)({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  width: '100%',
  height: '100%', // Высота карточки теперь 100%
  display: 'flex',
  flexDirection: 'column',
});

const VideoPlayer = styled('video')({
  width: '100%',
  height: '100%', // Видео занимает всю высоту карточки
  objectFit: 'cover', // Видео будет адаптироваться под размер карточки
});

const BannerSection = styled(Box)({
  height: '100vh', // Полная высота экрана
  background: '#f6edde',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  textAlign: 'center',
  padding: '0 16px', // Отступы для контента
  position: 'relative',

  // Мобильные стили
  '@media (max-width: 600px)': {
    height: '60vh', // Высота для мобильных устройств
    backgroundSize: 'cover', // Убедитесь, что изображение все равно покрывает контейнер
    padding: '0 8px', // Меньше отступов для мобильных устройств
  },

  // Средние экраны
  '@media (min-width: 601px) and (max-width: 1200px)': {
    height: '80vh', // Высота для средних экранов
  },
});

// Стили секции с изображением и текстом
const ImageTextSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '32px',
  backgroundColor: '#e0e0e0',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const NasyikatVideos = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ backgroundColor: '#f5f5f5' }}
      >
        <BannerSection>
          <Typography
            variant="h2"
            sx={{ color: '#000000', fontWeight: 'bold' }}
          >
            Поддержка мусульман по всему миру
          </Typography>
        </BannerSection>

        {/* Секция с изображением и текстом */}
        <ImageTextSection>
          <img
            src={bannerImage}
            alt="Мусульмане"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }}
          />
          <Typography sx={{ padding: { xs: 2, sm: 0, md: 2 } }}>
            Мы стоим вместе с мусульманами по всему миру, предоставляя важные
            обновления и делясь информацией.
          </Typography>
        </ImageTextSection>

        {/* Секция с видео-карточками */}
        <Box sx={{ backgroundColor: '#f5f5f5' }}>
          {/* Секция с видео-карточками */}
          <Box sx={{ padding: '16px' }}>
            <Typography
              variant="h4"
              sx={{ marginBottom: '16px', textAlign: 'center' }}
            >
              Видео Палестинадагы мусулман бир туугандар жонундо
            </Typography>
            <VideoGridContainer>
              {videos.map((video, index) => (
                <VideoCard key={index}>
                  <VideoPlayer controls>
                    <source src={video.videoSrc} type="video/mp4" />
                    Ваш браузер не поддерживает тег video.
                  </VideoPlayer>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {video.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {video.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 2,
                      }}
                    >
                      <Avatar
                        src={video.authorAvatar}
                        alt={video.author}
                        sx={{ width: 40, height: 40, marginRight: 1 }}
                      />
                      <Typography variant="subtitle1">
                        {video.author}
                      </Typography>
                      {video.isVerified && (
                        <Verified
                          sx={{ marginLeft: '4px', fontSize: '1.2rem' }}
                          color="primary"
                        />
                      )}
                    </Box>
                  </CardContent>
                </VideoCard>
              ))}
            </VideoGridContainer>
          </Box>
        </Box>

        {/* Секция с изображением и текстом */}
        <ImageTextSection>
          <Typography sx={{ padding: { xs: 2, sm: 0, md: 2 } }}>
            Мы стоим вместе с мусульманами по всему миру, предоставляя важные
            обновления и делясь информацией.
          </Typography>
          <img
            src={bannerImage}
            alt="Мусульмане"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }}
          />
        </ImageTextSection>

        <Box sx={{ backgroundColor: '#f5f5f5' }}>
          <Box sx={{ padding: '16px' }}>
            <Typography
              variant="h4"
              sx={{ marginBottom: '16px', textAlign: 'center' }}
            >
              Видео Уйгур мусулман бир туугандар жонундо
            </Typography>
            <VideoGridContainer>
              {uigurs.map((video, index) => (
                <VideoCard key={index}>
                  <VideoPlayer controls>
                    <source src={video.videoSrc} type="video/mp4" />
                    Ваш браузер не поддерживает тег video.
                  </VideoPlayer>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {video.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {video.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 2,
                      }}
                    >
                      <Avatar
                        src={video.authorAvatar}
                        alt={video.author}
                        sx={{ width: 40, height: 40, marginRight: 1 }}
                      />
                      <Typography variant="subtitle1">
                        {video.author}
                      </Typography>
                      {video.isVerified && (
                        <Verified
                          sx={{ marginLeft: '4px', fontSize: '1.2rem' }}
                          color="primary"
                        />
                      )}
                    </Box>
                  </CardContent>
                </VideoCard>
              ))}
            </VideoGridContainer>
          </Box>
        </Box>
        {/* Секция с изображением и текстом */}
        <Typography
          style={{
            textAlign: 'center',
            background: '#e0e0e0',
            height: '250px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#333',
          }}
        >
          Мы стоим вместе с мусульманами по всему миру, предоставляя важные
          обновления и делясь информацией. Мы поддерживаем Палестину и ее народ
          в их стремлении к справедливости и миру. Палестинцы продолжают
          сталкиваться с трудностями и борьбой за свои права и достоинство. Мы
          также выражаем солидарность с уйгурами, которые сталкиваются с
          преследованиями и ограничениями своих основных прав. Эти общины
          заслуживают нашего внимания и поддержки, и мы стремимся помочь
          распространению информации о их ситуации и работе по улучшению их
          условий жизни.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default NasyikatVideos;
