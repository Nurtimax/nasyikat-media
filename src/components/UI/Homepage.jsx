import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LogoIMG from '../../assetts/icons/logo-nasykat.png';
import { Container } from '@mui/material';

const ContainerStyle = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
  gap: '20px',
  marginTop: '5rem',
  borderRadius: '15px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    textAlign: 'center',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  width: '200px',
  height: 'auto',
  borderRadius: '50%',
  border: '4px solid #008707',
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto 20px',
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    margin: '0 auto',
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: '#c7cdd4',
  fontWeight: 'bold',
  marginBottom: '10px',
}));

const Subheading = styled(Typography)(({ theme }) => ({
  color: '#9CA3AF',
  fontSize: '1rem',
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginTop: '20px',
}));

const Homepage = () => {
  return (
    <ContainerStyle maxWidth="100%">
      <Logo src={LogoIMG} alt="Islamic Logo" />
      <TextContainer>
        <Heading variant="h5" component="h1">
          Бисмиллаахир Рахмаанир Рахиим. Мээримдүү, ырайымдуу Аллах Тааланын
          ысмы менен! Баардык ааламдарды жараткан Роббибиз Аллах Таалага чексиз
          мактоолор жана шүгүрлөр болсун, ал заттын сүйүктүү пендеси, жана
          Пайгамбарлардын мөөрү болгон <br />
          <b>
            {' '}
            Пайгамбарыбыз Мухаммад <br /> (саллаллаху алейхи васаллам) га
          </b>{' '}
          <br />
          Аллах Тааланын салават жана саламдары болсун!
        </Heading>
        <Subheading variant="h6" component="p">
          Жакшылыкка чакыруу, жамандыктан кайтаруу биздин түздөн-түз милдетибиз.
        </Subheading>
      </TextContainer>
      <SocialContainer>
        <IconButton
          href="https://www.instagram.com/nasyikat.media/"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon style={{ color: '#E1306C' }} />
        </IconButton>
        <IconButton
          href="https://t.me/+SEJbmn8AwNViNmNi"
          target="_blank"
          aria-label="Telegram"
        >
          <TelegramIcon style={{ color: '#0088CC' }} />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/@nasyikat_media"
          target="_blank"
          aria-label="YouTube"
        >
          <YouTubeIcon style={{ color: '#FF0000' }} />
        </IconButton>
      </SocialContainer>
    </ContainerStyle>
  );
};

export default Homepage;
