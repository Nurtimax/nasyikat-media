import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  CardMedia,
  useMediaQuery,
} from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css';
import BannerImage from '../assetts/aljardamimages/bgimg.avif';
import GoalImage from '../assetts/icons/aljardam.jpg';
import logofonds from '../assetts/icons/logo-nasykat.png';
import DocumentImage from '../assetts/aljardamimages/doc/kuboluk.png';
import DocumentImage2 from '../assetts/aljardamimages/doc/ustav.png';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import bankAccounts from '../utils/constants/aljardamBank.js';

const AlJardam = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleClick = () => {
    alert('Сизге ыңгайлуу банкты тандаңыз');
  };

  const videoReports = [
    {
      title: 'Нарындагы ата энеси жок 3 балдарга | Отчёт 153°',
      description: '48339 сомго мектепке барганга даярдык көрүштү',
      videoUrl: 'https://www.youtube.com/embed/nWc5MhPWcyE', // Updated for embedded YouTube link
    },
    {
      title: 'Буту өсүп, кургап, кареги артка кеткен Өмүрканга',
      description: '62692 сом берилди🤗 | Отчёт 151°',
      videoUrl: 'https://www.youtube.com/embed/BAMsxOWCfYY',
    },
    {
      title: 'Перизатка 2-ирет чогултуу болуп ',
      description: '13500 сом берилди | Отчёт 149°',
      videoUrl: 'https://www.youtube.com/embed/aNn7qwQyxLU',
    },
  ];

  const videoReports2 = [
    {
      title: 'ОНКОЛОГИЯ ООРУСУ МЕНЕН',
      description: '17 ЖЫЛДАН БЕРИ ООРУЙТ',
      videoUrl: 'https://www.youtube.com/embed/p3ZMYRdwIV0', // Updated for embedded YouTube link
    },
  ];

  const otherFunds = [
    { name: 'Кыргыз Фонд', image: logofonds },
    { name: 'Кыргыз Фонд', image: logofonds },
    { name: 'Кыргыз Фонд', image: logofonds },
    { name: 'Кыргыз Фонд', image: logofonds },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Номер ${text} көчүрүлдү!`);
  };

  return (
    <div>
      <Header />
      <Welcome />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        {/* Banner Section */}
        <div
          style={{
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: 'cover',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          <Typography variant="h2" component="h1" textAlign="center">
            Фонд Ал Жардам <br />
            <Typography>
              Пайгамбарыбыз ﷺ айтты: Аллах Таала айтты: <br /> "Эй Адам баласы!
              Садака кылсан, мен сага (ырыскынды ) көбөйтүп берем" <br />{' '}
              (Бухари Муслим)
            </Typography>
          </Typography>
        </div>

        {/* About Us Section */}
        <Grid container spacing={4} style={{ marginTop: '30px' }}>
          <Grid item xs={12} md={4}>
            <img
              src={DocumentImage}
              alt="Документ 1"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <Typography variant="h5">О Нас</Typography>
            <Typography variant="subtitle1">
              Фонд "Ал Жардам" создан для помощи нуждающимся. Мы поддерживаем
              разные категории людей, от детей до пожилых, и наши цели всегда
              направлены на улучшение качества жизни.
              <img
                src={GoalImage}
                alt="Документ 1"
                style={{ width: '100%', height: '380px', marginTop: '20px' }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={DocumentImage2}
              alt="Документ 2"
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>

        {/* Goal Section */}
        <Grid container spacing={4} style={{ marginTop: '50px' }}>
          <Grid item xs={12} md={6}>
            <Card style={{ marginTop: '62px' }}>
              <CardContent>
                <Typography variant="h4">ФИО</Typography>
                <img
                  src={GoalImage}
                  alt="Goal"
                  style={{ width: '100%', marginTop: '10px' }}
                />
                <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
                  муктаж адамдын керектүү данныйлары
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '100%', marginTop: '15px' }}
                  onClick={handleClick}
                >
                  Поддержать
                </Button>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '25px' }}>
              <Grid container spacing={4}>
                {videoReports2.map((video, index) => (
                  <Grid item xs={12} md={15} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5">{video.title}</Typography>
                        <Typography
                          variant="body2"
                          style={{ marginBottom: '10px' }}
                        >
                          {video.description}
                        </Typography>
                        <div
                          style={{ position: 'relative', paddingTop: '56.25%' }}
                        >
                          <iframe
                            src={video.videoUrl}
                            title={video.title}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                            }}
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          {/* Bank Account Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Биздин Реквизиттер</Typography>
            <Grid container spacing={2} style={{ marginTop: '10px' }}>
              {bankAccounts.map((bank, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px',
                      textAlign: 'center', // Center text horizontally
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={bank.image}
                      alt={bank.bankName}
                      style={{
                        maxWidth: '100px', // Ensure the image does not exceed 100px in width
                        width: 'auto', // Adjust width based on content
                        height: 'auto', // Adjust height based on content
                        marginBottom: '10px', // Space between the image and text
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6">{bank.bankName}</Typography>
                      <Typography variant="body2">
                        Счет номер : {bank.accountNumber}
                      </Typography>
                      <Typography variant="body2">
                        Телефон номер: {bank.phonenumber}
                      </Typography>
                      <Typography variant="body2">
                        {bank.call} {bank.num}
                      </Typography>
                      <Typography variant="body2">{bank.name}</Typography>
                      <Tooltip title="Копировать номер счета">
                        <IconButton
                          onClick={() => copyToClipboard(bank.accountNumber)}
                          style={{ marginTop: '10px' }}
                        >
                          <FileCopyIcon />
                        </IconButton>
                      </Tooltip>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Video Reports */}
        <Typography variant="h4" align="center" style={{ marginTop: '40px' }}>
          Наши Видео Отчёты
        </Typography>
        <Grid container spacing={4} style={{ marginTop: '20px' }}>
          {videoReports.map((video, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{video.title}</Typography>
                  <Typography variant="body2" style={{ marginBottom: '10px' }}>
                    {video.description}
                  </Typography>
                  <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Other Funds Slider */}
        <Typography
          variant="h4"
          style={{
            marginTop: '50px',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Кыргызстандагы башка кайрымдуулук фондтор
        </Typography>
        <Swiper spaceBetween={30} slidesPerView={isMobile ? 1 : 3} loop={true}>
          {otherFunds.map((fund, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={fund.image}
                  alt={fund.name}
                />
                <CardContent>
                  <Typography variant="h6">{fund.name}</Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <div style={{ marginTop: '1rem' }}>
        <Footer />
      </div>{' '}
    </div>
  );
};

export default AlJardam;
