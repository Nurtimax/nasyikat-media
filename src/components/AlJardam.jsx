import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  LinearProgress,
  styled,
  IconButton,
  Tooltip,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import logoaljardam from '../assetts/icons/aljardam.jpg';
import aljardam from '../assetts/icons/aljarrdam.jpeg';
import Header from './Header';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Footer from './Footer';

import videoReports from './data/aljardam/aljardam';
import bankDetails from './data/aljardam/rekivizit';
import Welcome from './Welcome';

const SectionOne = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f6edde', // Цвет фона для первой секции
});

const SectionTwo = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f8e9cfdd', // Цвет фона для второй секции
});

const SectionThree = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f6edde', // Цвет фона для третьей секции
});

const SectionFour = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f8e9cfdd', // Цвет фона для четвертой секции
});

const BankAccountText = styled(Typography)({
  marginRight: '10px',
});

const FlexContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#071c6b',
  color: '#fff',
  borderRadius: 5,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, transform 0.3s',
  textTransform: 'none',
  fontSize: '1.1rem',
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0a2278e4',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}));

const ImageContainer = styled('img')({
  width: '100%',
  maxWidth: '350px',
  height: 'auto',
  borderRadius: '10px',
  alignItems: 'start',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
});

const BankInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px',
});

const BankLogo = styled('img')({
  width: '150px',
  height: 'auto',
  marginRight: '10px',
});

const LargeCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '450px', // Fixed height
  maxWidth: '100%', // Ensure it doesn't overflow
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
  margin: 'auto', // Center the card
}));

// Styled social media button
const SocialMediaButton = styled(IconButton)({
  margin: '0 10px',
  '& svg': {
    fontSize: '2rem',
    transition: 'color 0.3s ease',
  },
  '&:hover svg': {
    color: '#1DA1F2',
  },
});

const CardImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
});

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => alert('Банк эсеби көчүрүлдү!'),
    (err) => alert('Банк эсеби көчүрүлгөн жок!')
  );
};

const extractYouTubeId = (url) => {
  if (!url) return null;
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/shorts|youtu\.be)\/([^&\s]{11})|(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] || match[2] : null;
};

export default function CharityComponent() {
  return (
    <div>
      <Header />
      <Welcome />
      <SectionOne bgColor="#f0f0f0">
        <Container>
          <FlexContainer>
            <ImageContainer src={logoaljardam} alt="Лого" />
            <div>
              <Typography
                variant="h3"
                component="h1"
                sx={{ marginTop: '1rem' }}
              >
                "Ал Жардам"
              </Typography>
              <Typography variant="h4" component="h1" gutterBottom>
                коомдук кайрымдуулук фонду
              </Typography>
              <Typography variant="h6" component="p">
                Пайгамбарыбыз ﷺ айтты: <br /> Аллах Таала айтты: "Эй Адам
                баласы!Садака кылсан, мен сага (ырыскынды ) көбөйтүп берем"{' '}
                <br /> (Бухари Муслим)
              </Typography>
            </div>
          </FlexContainer>
        </Container>
      </SectionOne>

      {/* Section 2: About Us */}
      <SectionTwo bgColor="#e0e0e0">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Биз Жөнүндө
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <LargeCard>
                <CardContent>
                  <CardImage src={logoaljardam} alt="Устав" />
                  <Typography variant="h6" style={{ marginTop: '10px' }}>
                    Устав
                  </Typography>
                  <Typography variant="body2">
                    Наш устав определяет основные направления нашей работы.
                  </Typography>
                </CardContent>
              </LargeCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LargeCard>
                <CardContent>
                  <CardImage src={logoaljardam} alt="Лицензия" />
                  <Typography variant="h6" style={{ marginTop: '10px' }}>
                    Лицензия
                  </Typography>
                  <Typography variant="body2">
                    Мы официально лицензированы для ведения благотворительной
                    деятельности.
                  </Typography>
                </CardContent>
              </LargeCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LargeCard>
                <CardContent>
                  <CardImage src={logoaljardam} alt="Документы" />
                  <Typography variant="h6" style={{ marginTop: '10px' }}>
                    Документы
                  </Typography>
                  <Typography variant="body2">
                    Все наши документы доступны для просмотра.
                  </Typography>
                </CardContent>
              </LargeCard>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            component="p"
            style={{ marginTop: '20px' }}
          >
            Наш фонд основан в 2019 году и с тех пор помогает людям, попавшим в
            сложные жизненные ситуации.
          </Typography>
          <div style={{ marginTop: '20px' }}>
            <SocialMediaButton>
              <InstagramIcon />
            </SocialMediaButton>
            <SocialMediaButton>
              <TelegramIcon />
            </SocialMediaButton>
          </div>
        </Container>
      </SectionTwo>

      <SectionThree bgColor="#d0d0d0">
        <Container>
          <FlexContainer>
            <div style={{ textAlign: 'center' }}>
              <ImageContainer
                src={aljardam}
                alt="Человек"
                style={{
                  width: '600px',
                  height: 'auto',
                  marginBottom: '20px',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                }}
              >
                <IconButton
                  aria-label="WhatsApp"
                  onClick={() =>
                    window.open('https://wa.me/ваш_номер', '_blank')
                  }
                  style={{ color: '#25D366' }}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>

                <IconButton
                  aria-label="Instagram"
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/ваш_аккаунт',
                      '_blank'
                    )
                  }
                  style={{ color: '#E4405F' }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </div>
              <Typography variant="h4" component="h2" gutterBottom>
                Сбор на LastName First Name
              </Typography>
              <Typography variant="body1" component="p">
                Город: Бишкек, Улица: Ленина, Дом: 12, Кв: 34
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ marginTop: '10px' }}
              >
                Сумма сбора: 100,000 сом
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                style={{
                  marginTop: '20px',
                  height: '10px',
                  borderRadius: '5px',
                }}
              />
              <Typography
                variant="body2"
                component="p"
                style={{ marginTop: '10px' }}
              >
                Собрано: 75,000 сом (75%)
              </Typography>
              <Typography
                variant="body1"
                component="p"
                style={{ marginTop: '20px' }}
              ></Typography>
              <StyledButton aria-label="Call" href="tel:+ваш_номер">
                Байланышуу
              </StyledButton>
            </div>
            <div>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ marginTop: '1rem' }}
              >
                Реквизиты для перевода:
              </Typography>
              {bankDetails.map((bank, index) => (
                <BankInfo
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {/* Логотип банка */}
                  <BankLogo
                    src={bank.logo}
                    alt={bank.name}
                    style={{ marginBottom: '10px' }}
                  />

                  {/* Номер счета */}
                  <BankAccountText
                    variant="body1"
                    style={{ marginBottom: '5px' }}
                  >
                    {bank.accountNumber}
                  </BankAccountText>

                  {/* Кнопка копирования */}
                  <Tooltip title="Скопировать номер счета" arrow>
                    <IconButton
                      onClick={() => copyToClipboard(bank.accountNumber)}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>

                  {/* Имя получателя */}
                  <Typography variant="body1" component="p">
                    {bank.recipientName}
                  </Typography>
                </BankInfo>
              ))}
            </div>
          </FlexContainer>
        </Container>
      </SectionThree>

      {/* Section 4: Video Reports */}
      <SectionFour bgColor="#c0c0c0">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Видео отчеты
          </Typography>
          <Grid container spacing={2}>
            {videoReports.map((report, index) => {
              const youtubeId = extractYouTubeId(report.videoUrl);
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={report.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '10px' }}
                      />
                      <Typography variant="h6" style={{ marginTop: '10px' }}>
                        {report.title}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: '10px' }}>
                        {report.description}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        href={report.videoUrl}
                        target="_blank"
                        style={{ marginTop: '10px' }}
                      >
                        Смотреть на YouTube
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </SectionFour>
      <Footer />
    </div>
  );
}
