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

import sberbankLogo from '../assetts/icons/sber.png';
import optimaBankLogo from '../assetts/icons/optima.png';
import mBankLogo from '../assetts/icons/mbank.png';
import aylBankLogo from '../assetts/icons/aiylbank.png';

const Section = styled('div')(({ theme, bgColor }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  textAlign: 'center',
}));

const BankAccount = styled('div')({
  display: 'flex',
  alignItems: 'center',
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

const bankDetails = [
  {
    name: 'Сбербанк',
    logo: sberbankLogo,
    accountNumber: '12345678900987654321',
  },
  {
    name: 'Оптима Банк',
    logo: optimaBankLogo,
    accountNumber: '12345678900987654321',
  },
  {
    name: 'МБанк',
    logo: mBankLogo,
    accountNumber: '12345678900987654321',
  },
  {
    name: 'Айыл Банк',
    logo: aylBankLogo,
    accountNumber: '12345678900987654321',
  },
];

const ImageContainer = styled('img')({
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  borderRadius: '10px',
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
    () => alert('Номер счета скопирован!'),
    (err) => alert('Ошибка при копировании номера счета!')
  );
};

const videoReports = [
  {
    title: 'Видео отчет 1',
    description:
      'ушундай ушундай ушунча акча элден жыйналды топтоп бердик мына амнаттар жетти Аллах ыраазы болсун сиздерден',
    videoUrl: 'https://youtu.be/p3ZMYRdwIV0?si=L98ryZxSdQ6hpgwo',
  },
  {
    title: 'Видео отчет 2',
    description:
      'ушундай ушундай ушунча акча элден жыйналды топтоп бердик мына амнаттар жетти Аллах ыраазы болсун сиздерден',
    videoUrl: 'https://youtu.be/p3ZMYRdwIV0?si=L98ryZxSdQ6hpgwo',
  },
  {
    title: 'Видео отчет 3',
    description:
      'ушундай ушундай ушунча акча элден жыйналды топтоп бердик мына амнаттар жетти Аллах ыраазы болсун сиздерден',
    videoUrl: 'https://youtu.be/p3ZMYRdwIV0?si=L98ryZxSdQ6hpgwo',
  },
];

export default function CharityComponent() {
  return (
    <div>
      <Header />

      {/* Section 1: Large Image and Text */}
      <Section bgColor="#f0f0f0">
        <Container>
          <FlexContainer>
            <ImageContainer src={logoaljardam} alt="Лого" />
            <div>
              <Typography variant="h2" component="h1" gutterBottom>
                Ал Жардам Фонду
              </Typography>
              <Typography variant="h6" component="p">
                Работаем с душой и любовью уже 4 года.
              </Typography>
            </div>
          </FlexContainer>
        </Container>
      </Section>

      {/* Section 2: About Us */}
      <Section bgColor="#e0e0e0">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            О нас
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<WhatsAppIcon />}
          >
            Отправить сообщение
          </Button>
        </Container>
      </Section>

      <Section bgColor="#d0d0d0">
        <Container>
          <FlexContainer>
            <ImageContainer
              src={aljardam}
              alt="Человек"
              style={{ maxWidth: '500px', marginBottom: '20px' }}
            />
            <div>
              <Typography variant="h4" component="h2" gutterBottom>
                Сбор на Иван Иванов
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
              >
                <Typography variant="h6" component="h3" gutterBottom>
                  Реквизиты для перевода:
                </Typography>
                {bankDetails.map((bank, index) => (
                  <BankInfo key={index}>
                    <BankLogo src={bank.logo} alt={bank.name} />
                    <BankAccount>
                      <BankAccountText variant="body1">
                        {bank.accountNumber}
                      </BankAccountText>
                      <Tooltip title="Скопировать номер счета" arrow>
                        <IconButton
                          onClick={() => copyToClipboard(bank.accountNumber)}
                        >
                          <ContentCopyIcon />
                        </IconButton>
                      </Tooltip>
                    </BankAccount>
                  </BankInfo>
                ))}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
              >
                Байланышуу
              </Button>
            </div>
          </FlexContainer>
        </Container>
      </Section>
      {/* Section 4: Video Reports */}
      <Section bgColor="#c0c0c0">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Видео отчеты
          </Typography>
          <Grid container spacing={2}>
            {videoReports.map((report, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <img
                      src={`https://via.placeholder.com/150?text=Image+${
                        index + 1
                      }`}
                      alt={report.title}
                      style={{ width: '100%', borderRadius: '10px' }}
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
                      Смотреть видео
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
