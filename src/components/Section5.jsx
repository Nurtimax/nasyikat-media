import React, { useEffect, useRef, useState } from 'react';
import { CardContent, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/pagination'; // Import pagination styles
import prayers from './data/dubalar/prayers'; // Assuming prayers data is in this path
import { Pagination } from 'swiper/modules';

// Анимация появления карточек
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Стиль для заголовка секции
const Header = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  color: '#f6edde',
  marginBottom: '40px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '2.8rem',
  fontWeight: '700',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
}));

const StyledCard = styled('h2')(() => ({
  backgroundColor: '#f6edde',
  borderLeft: `5px solid #6a4b1e`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Amiri, serif',
  margin: '0 auto',
  color: '#161c25',
  transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
  animation: `${fadeInUp} 0.6s ease forwards`,
  position: 'relative',
  borderRadius: '9px',
  '&:before': {
    content: '"\\201C"',
    position: 'absolute',
    top: '-15px',
    left: '10px',
    fontSize: '50px',
    color: '#6a4b1e',
  },
  '&:after': {
    content: '"\\201D"',
    position: 'absolute',
    bottom: '-35px',
    right: '10px',
    fontSize: '50px',
    color: '#6a4b1e',
  },
}));

// Стиль для текста
const Paragraph = styled(Typography)(({ theme }) => ({
  color: '#34495e',
  lineHeight: '1.8',
  margin: '12px 0',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.1rem',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const BoldParagraph = styled(Paragraph)({
  fontWeight: 'bold',
  color: '#2c3e50',
});

// Стиль для контейнера с карточками (Now handled by Swiper)
const Section5 = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Calculate max height of all cards
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <Container maxWidth="100%">
      <Header>
        <Typography variant="h3">
          Дуба - Момундун куралы, диндин түркүгү жана асман менен жердин нуру
        </Typography>
      </Header>
      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Default: 1 slide on mobile
        pagination={{
          clickable: true, // Enable clickable pagination dots
        }}
        modules={[Pagination]} // Add Pagination module to the Swiper
        breakpoints={{
          600: {
            slidesPerView: 3, // 3 slides on desktop (>= 600px)
          },
        }}
      >
        {prayers.map((prayer, index) => (
          <SwiperSlide key={index}>
            <StyledCard
              ref={(el) => (cardRefs.current[index] = el)}
              sx={{
                cursor: 'pointer',
                minHeight: maxHeight ? `${maxHeight}px` : 'auto', // Apply the calculated max height
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  color="#2c3e50"
                >
                  {prayer.title}
                </Typography>
                {prayer.arabic && (
                  <>
                    <BoldParagraph>Арабча</BoldParagraph>
                    <Paragraph>{prayer.arabic}</Paragraph>
                  </>
                )}
                {prayer.transcription && (
                  <>
                    <BoldParagraph>Окулушу</BoldParagraph>
                    <Paragraph>{prayer.transcription}</Paragraph>
                  </>
                )}
                <BoldParagraph>Мааниси</BoldParagraph>
                <Paragraph>{prayer.meaning}</Paragraph>
              </CardContent>
            </StyledCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Section5;
