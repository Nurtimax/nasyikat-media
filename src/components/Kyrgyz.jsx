import React from 'react';
import { Box, Typography, Container, Divider, styled } from '@mui/material';
import Kyrgyzflag from '../assetts/icons/kgz.png';
import KyrgyzflagMap from '../assetts/icons/Kyrgyzstan-Flagmap.svg';
import KyrgyzGerb from '../assetts/icons/герб.png';
import KyrgyzMap from '../assetts/icons/worldkgz.png';
import Atababalar1 from '../assetts/icons/img001.jpg';
import Atababalar2 from '../assetts/icons/img002.jpg';
import Atababalar3 from '../assetts/icons/img003.jpg';
import Atababalar4 from '../assetts/icons/img004.jpg';
import Atababalar5 from '../assetts/icons/bayalyisakeev.jpg';
import Atababalar6 from '../assetts/icons/torokulaitmatov.jpg';
import GimnKgz from '../components/GimnKgz';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

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

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack items vertically on small screens
    textAlign: 'center', // Center-align content for mobile
    margin: theme.spacing(2, 1), // Adjust margin for mobile
  },
}));

const SectionImage = styled('img')(({ theme }) => ({
  maxWidth: '50%',
  height: 'auto',
  borderRadius: '8px',
  flex: 1,

  [theme.breakpoints.down('sm')]: {
    width: '100%', // Ensure the image takes full width on mobile
    maxHeight: '300px', // Limit the height to a maximum of 300px on mobile
    marginBottom: theme.spacing(2), // Add spacing below the image
    objectFit: 'cover', // Ensure the image scales nicely within its bounds
    borderRadius: '4px', // Slightly reduce the border-radius on mobile
  },
}));

const SectionContent = styled(Typography)(({ theme }) => ({
  flex: 1,

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center', // Center text on mobile
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  fontWeight: 'bold',
}));

const Kyrgyz = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Container
        maxWidth="lg"
        sx={{ textAlign: 'center', marginTop: '1.5rem' }}
      >
        {/* Banner */}
        <BannerContainer>
          <BannerImage src={KyrgyzflagMap} alt="Kyrgyz Republic" />
          <Typography variant="h4">Кыргыз Республикасы</Typography>
          <Typography variant="body1">
            <Typography>Негизделген 14-октябрь 1924-жылы</Typography>
            <Typography>
              Эгемендүүлүк күнү 31-август <br />
              1991-жылы
            </Typography>
            <Typography>Расмий тили Кыргыз тили — мамлекеттик тил</Typography>
            <Typography>Кылкынын саны 7 000 000</Typography>
            <Typography>Борбор шаары</Typography>
            <Typography>
              Бишкек, калк боюнча республиканын эң ири шаары. Туруктуу калкы 1
              миллион адамдан ашат.
            </Typography>
          </Typography>
        </BannerContainer>
        {/* Flag Section */}
        <Divider sx={{ my: 4 }} />
        <SectionContainer>
          <SectionImage src={Kyrgyzflag} alt="Kyrgyz Flag" />

          <SectionContent variant="body1">
            <Typography>
              <b>Кыргыз Республикасынын Мамлекеттик туусу</b>
            </Typography>

            <Typography>
              1992-жылы 3- мартта республиканын Жогорку Кеңеши тарабынан кабыл
              алынган.
            </Typography>
            <Typography>
              Авторлору: Э. Айдарбеков, Б. Жайчыбеков, С. Иптаров, Ж. Матаев, М.
              Сыдыков.
            </Typography>
            <Typography>
              2023-жылдын 22-декабрында өзгөртүлгөн. 2024-жылдын 8-январында
              Ала-Тоо аянына расмий түрдөгү туу илинген.
            </Typography>
          </SectionContent>
        </SectionContainer>
        {/* Emblem Section */}
        <Divider sx={{ my: 4 }} />
        <SectionContainer>
          <SectionContent variant="body1">
            <Typography>
              <b>Кыргыз Республикасынын Мамлекеттик герби</b>
            </Typography>
            <Typography>
              Герб Кыргыз Республикасынын Жогорку Кеңешинин 1994-жылдын
              14-январындагы токтому менен бекитилген.
            </Typography>
            <Typography>Автор: А. Абдраев и С. Дубанаев.</Typography>
            <Typography></Typography>
          </SectionContent>
          <SectionImage src={KyrgyzGerb} alt="Kyrgyz Emblem" />
        </SectionContainer>

        {/* Regions Section with Swiper */}
        <Divider sx={{ my: 4 }} />
        <SectionTitle variant="h5">Тарыхта калган кара так</SectionTitle>
        <SwiperContainer>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3} // Show 3 slides at a time
            coverflowEffect={{
              rotate: 15,
              stretch: 10,
              depth: 10,
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
              <Box className="swiper-slide-content">
                <SlideContent>
                  <Typography variant="h6">
                    Абдыкерим Сыдык уулу (1889-1938)
                  </Typography>
                </SlideContent>
              </Box>
              <img src={Atababalar1} alt="Legend 1" />
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <SlideContent>
                  <Typography variant="h6">
                    Абдрахман уулу Жусуп (1901-1938)
                  </Typography>
                </SlideContent>
              </Box>
              <img src={Atababalar2} alt="Legend 2" />
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <SlideContent>
                  <Typography variant="h6">
                    Арабай уулу Эшенаалы (1882-1933)
                  </Typography>
                </SlideContent>
              </Box>
              <img src={Atababalar3} alt="Legend 3" />
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <SlideContent>
                  <Typography variant="h6">
                    Касым Тыныстан уулу (1901-1938)
                  </Typography>
                </SlideContent>
              </Box>
              <img src={Atababalar4} alt="Legend 4" />
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <SlideContent>
                  <Typography variant="h6">
                    Баялы Исакеев (1897-1938)
                  </Typography>
                </SlideContent>
              </Box>
              <img src={Atababalar5} alt="Legend 5" />
            </SwiperSlide>
            <SwiperSlide>
              <Box className="swiper-slide-content">
                <SlideContent>
                  <Typography variant="h6">
                    Төрөкул Айтматов (1903-1938)
                  </Typography>
                </SlideContent>
              </Box>
              <img src={Atababalar6} alt="Legend 6" />
            </SwiperSlide>
          </Swiper>
          <SectionContent variant="body1">
            <h4>
              5-ноябрь 1938-жыл. <br /> "Эл душманы, улутчул" деген жалаа менен{' '}
              <br /> Жусуп Абдрахманов, Төрөкул Айтматов, Касым Тыныстанов Баялы
              Исакеев жана башка саясий ишмерлер репрессиянын аёсуз
              курмандыктарына айланып, атууга кеткен.
            </h4>
          </SectionContent>
        </SwiperContainer>
        {/* Anthem Section */}
        <Divider sx={{ my: 4 }} />
        <SectionTitle variant="h5">
          Кыргыз Республикасынын Мамлекеттик гимни
        </SectionTitle>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Гимн Кыргыз Республикасынын Жогорку Кеңешинин 1992-жылдын
            18-декабрындагы токтому менен бекитилген.
            <Typography>Сөзү: Ж.Садыковдуку жана Ш.Кулуевдики</Typography>
            <Typography>
              Музыкасы: Н.Давлесовдуку жана К.Молдобасановдуку
            </Typography>
          </Typography>
          <br />
          <Typography variant="h6">
            <b>Мамлекеттик гимни</b>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Ак мөңгүлүү аска, зоолор, талаалар, <br /> Элибиздин жаны менен
            барабар. <br /> Сансыз кылым Ала-Тоосун мекендеп, <br /> Сактап
            келди биздин ата-бабалар
          </Typography>
          <br />
          <strong>Кайырма:</strong>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Алгалай бер,кыргыз эл, <br /> Азаттыктын жолунда. <br />
            Өркүндөй бер, өсө бер, <br /> Өз тагдырың колуңда. <br /> <br />{' '}
            Аткарылып элдин үмүт тилеги, <br />
            Желбиреди эркиндиктин желеги. <br /> Бизге жеткен ата салтын,
            мурасын, <br /> Ыйык сактап урпактарга берели.
          </Typography>
          <br />
          <strong>Кайырма:</strong>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Алгалай бер, кыргыз эл, <br /> Азаттыктын жолунда. <br /> Өркүндөй
            бер, өсө бер, <br /> Өз тагдырың колуңда.
          </Typography>
          <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <GimnKgz />
          </div>
        </Box>
        {/* Area Section */}
        <Divider sx={{ my: 4 }} />
        <SectionTitle variant="h3">Кыргызстан</SectionTitle>
        <img
          src={KyrgyzMap}
          alt="Kyrgyzstan Map"
          style={{ width: '50%', borderRadius: '8px' }}
        />
        <Typography sx={{ mt: 2 }}>
          Мамлекет Борбордук Азиянын түндүк-чыгышында. Түштүк-батыш жагында
          Памир-Алайда, түндүк-чыгыш жагында Тянь-Шань жагында. Казакстан,
          Тажикстан, Өзбекстан жана Кытай менен чектешет.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Кыргызстан 9 администрациялык аймактан турат — Чүй облусу, Талас
          облусу, Ысык-Көл облусу, Нарын облусу, Жалал-Абад облусу, Ош облусу,
          Баткен облусу, Ош шаары жана Бишкек шаары. Облустук борборлор — Талас,
          Каракол, Нарын, Жалал-Абад, Ош, Баткен.
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default Kyrgyz;

const SwiperContainer = styled(Box)(({ theme }) => ({
  '.swiper-container': {
    width: '100%',
    height: '550px',
  },
  '.swiper-slide': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '550px',
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
  },
  '.swiper-slide img': {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  '.swiper-slide-content': {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '10px',
    width: 'calc(100% - 40px)',
    textAlign: 'center',
  },
  '@media (max-width: 1024px)': {
    '.swiper-slide': {
      height: '400px',
    },
  },
  '@media (max-width: 600px)': {
    '.swiper-slide': {
      height: '300px',
      padding: '10px',
    },
  },
}));

const SlideContent = styled(Box)(({ theme }) => ({
  '& h6': {
    margin: 0,
    fontSize: '0.5rem',
    color: '#fff',
  },
  '& a': {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
}));
