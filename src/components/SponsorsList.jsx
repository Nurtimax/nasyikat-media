import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, IconButton, Avatar, Button } from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';
import sponsors from '../components/data/sponsors/sponsor.js';
import 'swiper/css';

const PartnerCard = ({ partner }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f9f5e7',
      color: '#161c25',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '0 10px',
    }}
  >
    <Avatar
      src={partner.image}
      alt={partner.name}
      sx={{
        width: 300, // Set width
        height: 300, // Set height
        marginBottom: '10px',
        borderRadius: '0', // Remove border radius for square
      }}
    />
    <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
      {partner.name}
    </Typography>
    <Typography
      variant="body2"
      sx={{ textAlign: 'center', marginBottom: '10px' }}
    >
      {partner.description}
    </Typography>
    <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <IconButton
        component="a"
        href={`https://instagram.com/${partner.instagram}`}
        target="_blank"
      >
        <Instagram sx={{ color: '#E1306C' }} />
      </IconButton>
      <IconButton
        component="a"
        href={`https://wa.me/${partner.whatsapp}`}
        target="_blank"
      >
        <WhatsApp sx={{ color: '#25D366' }} />
      </IconButton>
    </Box>
    <Button
      variant="contained"
      color="primary"
      component="a"
      href={partner.link}
      target="_blank"
      sx={{ marginTop: '10px' }}
    >
      Подробнее
    </Button>
  </Box>
);

// Main component for sponsors list
const SponsorsList = () => {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: '20px', textAlign: 'center' }}
      >
        Наши Партнеры
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {sponsors.map((partner, index) => (
          <SwiperSlide key={index}>
            <PartnerCard partner={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SponsorsList;
