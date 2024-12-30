import React, { useEffect, useState } from 'react';
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
import '../index.css';

const Section2 = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [lastSlide, setLastSlide] = useState(0); // Состояние для последнего слайда

  // Восстановление состояния из localStorage
  useEffect(() => {
    const savedSlide = localStorage.getItem('lastSlide');
    if (savedSlide) {
      setLastSlide(Number(savedSlide)); // Восстановить индекс
    }
  }, []);

  // Сохранение последнего слайда
  const handleSlideChange = (swiper) => {
    setLastSlide(swiper.activeIndex); // Обновляем состояние
    localStorage.setItem('lastSlide', swiper.activeIndex); // Сохраняем в localStorage
  };

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
          onSlideChange={handleSlideChange} // Обработчик изменения слайда
          initialSlide={lastSlide} // Устанавливаем последний слайд
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
          background: 'linear-gradient(135deg, #2c3e50 0%, #2c3e50 100%)',
          padding: '2rem',
          marginBottom: '2rem',
          marginTop: '2rem',
          color: '#edf1f5',
          border: '1px dashed #f6ecde',
          borderRadius: '9px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          fontFamily: '"Playfair Display", serif',
          position: 'relative',
          textAlign: 'center',
          lineHeight: '1.8',
          letterSpacing: '0.05rem',
          transition: 'all 0.3s ease',
          ':hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        Учурда сайтты жаңылоо иштери жүрүп жатат. Сайтта каталар пайда болушу
        мүмкүн, биз аларды оңдоп жатабыз. <br /> Админ Nasyikat.media
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
