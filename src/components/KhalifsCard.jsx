import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination } from 'swiper/modules';
import caliphs from '../utils/constants/caliphs';
import { useMediaQuery } from '@mui/material';

const CaliphCard = ({ caliph }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/caliphs/${caliph.id}`);
  };

  return (
    <Card
      sx={{ maxWidth: '100%', borderRadius: '15px', boxShadow: 3 }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="325"
        image={caliph.imageUrl}
        alt={caliph.name}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {caliph.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {caliph.period}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          {caliph.shortDescription}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '15px', width: '100%', marginBottom: '25px' }}
          onClick={handleCardClick}
        >
          Окуу
        </Button>
      </CardContent>
    </Card>
  );
};

const KhalifsCard = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen size is mobile

  return (
    <Container maxWidth="100%">
      <Box sx={{ textAlign: 'center' }}>
        <Header variant="h3" gutterBottom>
          Халифат
        </Header>

        {isMobile ? (
          <Swiper
            spaceBetween={16} // Space between slides
            slidesPerView={1} // Show 1 slide at a time
            pagination={{
              clickable: true, // Make pagination clickable
            }}
            modules={[Pagination]} // Enable pagination module
          >
            {caliphs.map((caliph) => (
              <SwiperSlide key={caliph.id}>
                <CaliphCard caliph={caliph} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {caliphs.map((caliph) => (
              <Grid item key={caliph.id} xs={12} sm={6} md={3}>
                <CaliphCard caliph={caliph} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default KhalifsCard;

const Header = styled('h4')(({ theme }) => ({
  textAlign: 'center',
  color: '#f6edde',
  marginBottom: '20px',
  marginTop: '20px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '2.2rem',
  fontWeight: '700',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
}));
