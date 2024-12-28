import React from 'react';
import { styled } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Container, Typography, useMediaQuery } from '@mui/material';
import islamdyn5Parzy from './data/islamdynparzy/islamdyn5parzy';
import { GREY } from '../theme/palette';
import { Pagination } from 'swiper/modules';

const Section2 = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Container maxWidth="100%">
      <SectionTitle>ИСЛАМДЫН БЕШ ПАРЫЗЫ</SectionTitle>
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          style={{ padding: '30px 0' }}
        >
          {islamdyn5Parzy.map((card, index) => (
            <SwiperSlide key={index}>
              <Card>
                <Link to={card.route}>
                  <CardImage src={card.image} alt={card.alt} />
                  <IconWrapper style={{ color: '#e40001' }}>
                    <FavoriteIcon fontSize="small" />
                  </IconWrapper>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
                </Link>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <CardList>
          {islamdyn5Parzy.map((card, index) => (
            <Card key={index}>
              <Link to={card.route}>
                <CardImage src={card.image} alt={card.alt} />
                <IconWrapper style={{ color: '#e40001' }}>
                  <FavoriteIcon fontSize="small" />
                </IconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
              </Link>
            </Card>
          ))}
        </CardList>
      )}
      <Typography
        style={{
          background: 'linear-gradient(145deg, #f9f3e7 20%, #e9d0ae 80%)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          marginTop: '1.5rem',
          color: '#34495e',
          border: '2px solid #ff0000',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        Учурда сайтты жаңылоо иштери жүрүп жатат. Сайтта каталар пайда болушу
        мүмкүн, биз аларды оңдоп жатабыз.
      </Typography>
    </Container>
  );
};

export default Section2;

const SectionTitle = styled('h2')({
  fontSize: '2rem',
  marginBottom: '20px',
  textAlign: 'center',
  color: '#f6ecde',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
});

const CardList = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
});

const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  textAlign: 'center',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const CardImage = styled('img')({
  width: '100%',
  height: 'auto',
  aspectRatio: '4/4',
  objectFit: 'cover',
  borderRadius: '8px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'block',
});

const IconWrapper = styled('div')({
  position: 'absolute',
  top: '10px',
  left: '10px',
  borderRadius: '50%',
  padding: '5px',
  color: '#071c6b',
});

const CardTitle = styled('h2')({
  fontSize: '1rem',
  marginTop: '10px',
  textAlign: 'center',
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
});

const CardText = styled('p')({
  fontSize: '0.8rem',
  textAlign: 'center',
  color: GREY[500],
  '@media (max-width: 600px)': {
    fontSize: '0.9rem',
  },
});
