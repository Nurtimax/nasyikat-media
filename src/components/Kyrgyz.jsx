import React from 'react';
import { Box, Typography, Container, Divider, styled } from '@mui/material';
import Kyrgyzflag from '../assetts/icons/kgz.png';
import KyrgyzGerb from '../assetts/icons/герб.png';
import KyrgyzMap from '../assetts/icons/worldkgz.png';
import Atababalar1 from '../assetts/icons/img001.jpg';
import Atababalar2 from '../assetts/icons/img002.jpg';
import Atababalar3 from '../assetts/icons/img003.jpg';
import Atababalar4 from '../assetts/icons/img004.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const BannerImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
});

const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: theme.spacing(3, 0),
  gap: theme.spacing(2),
}));

const SectionImage = styled('img')({
  maxWidth: '50%',
  height: 'auto',
  borderRadius: '8px',
  flex: 1,
});

const SectionContent = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  fontWeight: 'bold',
}));

const Kyrgyz = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      {/* Banner */}
      <BannerContainer>
        <BannerImage src={Kyrgyzflag} alt="Kyrgyz Republic" />
        <Typography variant="h3">Kyrgyz Republic</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          fugiat eaque iusto repellat quibusdam quae quia ipsa eos est quos
          blanditiis, aliquid hic quasi ipsam reprehenderit expedita? Ipsum,
          dolorem voluptates.
        </Typography>
      </BannerContainer>
      {/* Flag Section */}
      <Divider sx={{ my: 4 }} />
      <SectionContainer>
        <SectionImage src={Kyrgyzflag} alt="Kyrgyz Flag" />
        <SectionContent variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
          totam magnam nisi ipsum. Consectetur cum tempora, hic cumque quod
          corporis quidem soluta et molestias eum dolores, reprehenderit vero.
          Optio.
        </SectionContent>
      </SectionContainer>
      {/* Emblem Section */}
      <Divider sx={{ my: 4 }} />
      <SectionContainer>
        <SectionContent variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
          totam magnam nisi ipsum. Consectetur cum tempora, hic cumque quod
          corporis quidem soluta et molestias eum dolores, reprehenderit vero.
          Optio.
        </SectionContent>
        <SectionImage src={KyrgyzGerb} alt="Kyrgyz Emblem" />
      </SectionContainer>

      {/* Regions Section with Swiper */}
      <Divider sx={{ my: 4 }} />
      <SectionTitle variant="h5">Legends of Kyrgyz</SectionTitle>
      <SwiperContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Show 3 slides at a time
          coverflowEffect={{
            rotate: 10,
            stretch: 20,
            depth: 30,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ clickable: true }} // Enable pagination dots
          breakpoints={{
            1024: {
              slidesPerView: 3, // 3 slides per view for tablets and desktops
            },
            768: {
              slidesPerView: 2, // 2 slides per view for medium screens
            },
            480: {
              slidesPerView: 1, // 1 slide per view for mobile screens
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Atababalar1} alt="Legend 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar2} alt="Legend 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar3} alt="Legend 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar4} alt="Legend 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar1} alt="Legend 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar2} alt="Legend 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar3} alt="Legend 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Atababalar4} alt="Legend 8" />
          </SwiperSlide>
        </Swiper>
        <SectionContent variant="body1">
          <h2>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
            totam magnam nisi ipsum. Consectetur cum tempora, hic cumque quod
            corporis quidem soluta et molestias eum dolores, reprehenderit vero.
            Optio.
          </h2>
        </SectionContent>
      </SwiperContainer>
      {/* Anthem Section */}
      <Divider sx={{ my: 4 }} />
      <SectionTitle variant="h5">National Anthem</SectionTitle>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The national anthem of Kyrgyzstan is called "Мекеним Кыргызстан"
          (Mekenim Kyrgyzstan). It was adopted as the national anthem in 1992.
          The anthem’s lyrics were written by C. T. Sarybaev and the music was
          composed by N. T. T. Niyazov. The anthem highlights the beauty, unity,
          and spirit of the Kyrgyz people and their love for their homeland.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Lyrics:</strong>
          <br />
          Мекеним Кыргызстан, <br />
          Мен сүйгөн жериң менин, <br />
          Өмүрүмдүн байлыгы, <br />
          Сендей мекен болмок. <br />
          ...
        </Typography>
      </Box>
      {/* Area Section */}
      <Divider sx={{ my: 4 }} />
      <SectionTitle variant="h5">Total Area</SectionTitle>
      <img
        src={KyrgyzMap}
        alt="Kyrgyzstan Map"
        style={{ width: '50%', borderRadius: '8px' }}
      />
      <Typography variant="body1" sx={{ mt: 2 }}>
        Kyrgyzstan covers an area of approximately 199,951 square kilometers. It
        is landlocked and situated in Central Asia.
      </Typography>
    </Container>
  );
};

export default Kyrgyz;

const SwiperContainer = styled(Box)(({ theme }) => ({
  '.swiper-container': {
    width: '100%',
    height: '250px',
  },
  '.swiper-slide': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
  },
  '@media (max-width: 1024px)': {
    '.swiper-slide img': {
      width: '100%',
      height: '150px',
    },
  },
  '@media (max-width: 600px)': {
    '.swiper-slide img': {
      width: '100%',
      height: '150px',
    },
  },
}));
