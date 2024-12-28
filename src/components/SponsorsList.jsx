import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Container,
  styled,
} from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import sponsors from '../components/data/sponsors/sponsor.js';

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
      }}
    >
      <img
        src={partner.image}
        alt={partner.name}
        style={{ width: '100%', height: '100%' }}
      />
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
      <Header>Биздин демөөрчүлөр</Header>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Autoplay module
        breakpoints={{
          1024: { slidesPerView: 4 }, // Desktop
          600: { slidesPerView: 3 }, // Tablet
          0: { slidesPerView: 1 }, // Mobile
        }}
      >
        {/* Loop through sponsors array and display each partner */}
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

// Style for section header
const Header = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  color: '#f6edde',
  marginBottom: '40px',
  marginTop: '40px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '2.2rem',
  fontWeight: '700',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
}));
