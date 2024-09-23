import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, IconButton, Button, Container } from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac'; // IT Developer
import HeadsetIcon from '@mui/icons-material/Headset'; // Airpods
import BagIcon from '@mui/icons-material/ShoppingBag'; // Bags
import ApiIcon from '@mui/icons-material/Api'; // Honey Bee
import LocalDiningIcon from '@mui/icons-material/LocalDining'; // Mkka
import TravelExploreIcon from '@mui/icons-material/TravelExplore'; // Travel
import { Autoplay } from 'swiper/modules'; // Correct import for Autoplay
import 'swiper/css';
import 'swiper/css/autoplay'; // Ensure autoplay styles are imported
import sponsors from '../components/data/sponsors/sponsor.js';

const getIcon = (name) => {
  switch (name) {
    case 'ITeasy.KG':
      return <LaptopMacIcon sx={{ fontSize: 90, color: '#f6ecde' }} />;
    case 'Arzanstore.ru':
      return <HeadsetIcon sx={{ fontSize: 90, color: '#f6ecde' }} />;
    case 'Kurzhun.shop':
      return <BagIcon sx={{ fontSize: 90, color: '#f6ecde' }} />;
    case 'HoneyBee':
      return <ApiIcon sx={{ fontSize: 90, color: '#f6ecde' }} />;
    case 'Mkka':
      return <LocalDiningIcon sx={{ fontSize: 90, color: '#f6ecde' }} />;
    case 'Travel':
      return <TravelExploreIcon sx={{ fontSize: 90, color: '#f6ecde' }} />;
    default:
      return null;
  }
};

const PartnerCard = ({ partner }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      border: '1px solid #c2c1a9',
      borderRadius: '15px',
      backgroundColor: '#f6ecde',
      cursor: 'pointer',
    }}
  >
    <Box
      sx={{
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
        borderRadius: '50%',
        backgroundColor: '#161c25',
        color: '#f6ecde',
      }}
    >
      {getIcon(partner.name)}
    </Box>
    <Typography
      variant="h6"
      sx={{ marginBottom: '10px', fontWeight: 'bold', color: 'black' }}
    >
      {partner.name}
    </Typography>
    <Typography variant="body2" sx={{ marginBottom: '15px', color: 'black' }}>
      {partner.description}
    </Typography>
    <Box sx={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
      <IconButton
        component="a"
        href={`https://instagram.com/${partner.instagram}`}
        target="_blank"
        sx={{ color: '#E1306C' }}
      >
        <Instagram />
      </IconButton>
      <IconButton
        component="a"
        href={`https://wa.me/${partner.whatsapp}`}
        target="_blank"
        sx={{ color: '#25D366' }}
      >
        <WhatsApp />
      </IconButton>
    </Box>
    <Button
      variant="contained"
      color="primary"
      component="a"
      href={partner.link}
      target="_blank"
    >
      Сайтка өтүү
    </Button>
  </Box>
);

const SponsorsList = () => {
  return (
    <Container maxWidth="100%">
      <Typography
        variant="h3"
        sx={{
          marginBottom: '30px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#f6ecde',
        }}
      >
        Биздин демөөрчүлөр
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000, // 2 секунды
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Подключите модуль Autoplay
        breakpoints={{
          1024: { slidesPerView: 3 }, // Десктоп
          600: { slidesPerView: 2 }, // Пэдж
          0: { slidesPerView: 1 }, // Мобильный
        }}
      >
        {sponsors.map((partner, index) => (
          <SwiperSlide key={index}>
            <PartnerCard partner={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SponsorsList;
