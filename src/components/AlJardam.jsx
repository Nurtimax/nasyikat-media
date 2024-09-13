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
import BannerImage from '../assetts/images/mountain.jpg';
import GoalImage from '../assetts/icons/aljardam.jpg';
import DocumentImage from '../assetts/aljardamimages/doc/kuboluk.png';
import Footer from './Footer';
import Header from './Header';
import Welcome from './Welcome';
import sberbankLogo from '../assetts/icons/sber.png';
import optimaBankLogo from '../assetts/icons/optima.png';
import mBankLogo from '../assetts/icons/mbank.png';
import aylBankLogo from '../assetts/icons/aiylbank.png';

const AlJardam = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const bankAccounts = [
    {
      bankName: 'Bank 1',
      accountNumber: '1234567890',
      image: mBankLogo,
    },
    {
      bankName: 'Bank 2',
      accountNumber: '0987654321',
      image: sberbankLogo,
    },
    {
      bankName: 'Bank 3',
      accountNumber: '1122334455',
      image: optimaBankLogo,
    },
    {
      bankName: 'Bank 4',
      accountNumber: '5566778899',
      image: aylBankLogo,
    },
    {
      bankName: 'Bank 5',
      accountNumber: '6677889900',
      image: GoalImage,
    },
  ];

  const videoReports = [
    {
      title: 'Видео Отчет 1',
      description: 'Описание первого видео отчета',
      videoUrl: 'https://www.youtube.com/embed/JLpTZ55y6M4', // Updated for embedded YouTube link
    },
    {
      title: 'Видео Отчет 2',
      description: 'Описание второго видео отчета',
      videoUrl: 'https://www.youtube.com/embed/JLpTZ55y6M4',
    },
    {
      title: 'Видео Отчет 3',
      description: 'Описание третьего видео отчета',
      videoUrl: 'https://www.youtube.com/embed/JLpTZ55y6M4',
    },
  ];
  const videoReports2 = [
    {
      title: 'Видео Отчет 1',
      description: 'Описание первого видео отчета',
      videoUrl: 'https://www.youtube.com/embed/JLpTZ55y6M4', // Updated for embedded YouTube link
    },
  ];

  const otherFunds = [
    { name: 'Фонд 1', image: GoalImage },
    { name: 'Фонд 2', image: GoalImage },
    { name: 'Фонд 3', image: GoalImage },
    { name: 'Фонд 4', image: GoalImage },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Номер счета ${text} скопирован!`);
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
            <Typography>Мы помогаем тем, кто в этом нуждается</Typography>
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
                src={DocumentImage}
                alt="Документ 1"
                style={{ width: '100%', height: '380px', marginTop: '20px' }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={DocumentImage}
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
                <Typography variant="h4">Цель Сбора</Typography>
                <img
                  src={GoalImage}
                  alt="Goal"
                  style={{ width: '100%', marginTop: '10px' }}
                />
                <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
                  Наша цель – собрать средства для строительства школы в
                  регионе, где в этом есть острая необходимость.
                </Typography>
                <Typography variant="h6" style={{ marginTop: '10px' }}>
                  Собрано: 200 000 KGS / 500 000 KGS
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '100%', marginTop: '15px' }}
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
            <Typography variant="h4">Реквизиты для перевода</Typography>
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
                        Номер счета: {bank.accountNumber}
                      </Typography>
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

        {/* Video Reports Section */}
        <Typography variant="h4" style={{ marginTop: '50px' }}>
          Видео Отчеты
        </Typography>
        <Grid container spacing={4} style={{ marginTop: '20px' }}>
          {videoReports.map((video, index) => (
            <Grid item xs={12} md={4} key={index}>
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
        <Typography variant="h4" style={{ marginTop: '50px' }}>
          Другие Фонды Кыргызстана
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
      <div style={{ marginTop: '2rem' }}>
        <Footer />
      </div>
    </div>
  );
};

export default AlJardam;
