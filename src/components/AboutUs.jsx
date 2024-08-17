import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assetts/icons/logo-nasykat.png';
import logo2 from '../assetts/images/islamsabaktary.jpg';
import logoavatar from '../assetts/images/donate.jpg';
import { YouTube, Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import Donate from './Donate';

const teamMembers = [
  {
    name: 'Nasyikat.media',
    role: 'Бактылуулук Исламда',
    image: logo,
    description:
      '2020-жылы 28-февраль күнү алгачкы постубузду чыгардык эле эми мынтип арадан 4 жыл 6 ай өтүптүр Аллах Таала сизден жана бизден жакшы амалдарыбызды кабыл кылсын Ассаламу алейкум',
    links: {
      youtube: 'https://www.youtube.com/channel/your-channel-id',
      instagram: 'https://www.instagram.com/your-profile',
      telegram: 'https://t.me/your-channel',
      whatsapp: 'https://wa.me/your-number',
      tiktok: 'https://www.tiktok.com/@your-profile',
    },
  },

  {
    name: 'Нурматов Матраим Ашимович',
    role: 'Админ Nasyikat.media',
    image: logoavatar,
    description:
      'Аллах таалага чексиз мактоолор жана шүгүрлөр болсун <br/>  <br/> Оо, Роббим! Мени кичинемден багып-өстүргөн ата-энеме ырайым кыл.',
    links: {
      youtube: 'https://www.youtube.com/channel/your-channel-id',
      instagram: 'https://www.instagram.com/your-profile',
      telegram: 'https://t.me/your-channel',
      whatsapp: 'https://wa.me/your-number',
      tiktok: 'https://www.tiktok.com/@your-profile',
    },
  },
  {
    name: 'Islam.sabaktary',
    role: 'Ислам сабактары',
    image: logo2,
    description:
      'Бул баракчабыздын өзгөчөлүгү Бир Кыска Дуба аттуу каналы бар каналдан дубалар куран аяттары жана башка көптөгөн пайдалуу нереселерди ала аласыздар баарыңыздарды күтөбүз.',
    links: {
      youtube: 'https://www.youtube.com/channel/your-channel-id',
      instagram: 'https://www.instagram.com/your-profile',
      telegram: 'https://t.me/your-channel',
      whatsapp: 'https://wa.me/your-number',
      tiktok: 'https://www.tiktok.com/@your-profile',
    },
  },
];

const SpecialTeamCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: '15px',
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
  border: '2px solid #1976d2',
}));

const RegularTeamCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: '15px',
  cursor: 'pointer',
}));

const SocialIconContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const iconStyles = {
  color: '#1976d2', // Customize this color as needed
  fontSize: '2rem', // Adjust icon size as needed
};

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Container sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ marginBottom: '2rem' }}
        >
          Биздин Жөнүндө
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {index === 1 ? (
                <SpecialTeamCard elevation={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        borderRadius: '50%',
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        border: '4px solid #34746b',
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{ marginTop: '1rem', fontWeight: 'bold' }}
                    >
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {member.role}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    component="div"
                    dangerouslySetInnerHTML={{ __html: member.description }}
                  />
                  <SocialIconContainer>
                    {member.links.youtube && (
                      <IconButton
                        component="a"
                        href={member.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <YouTube />
                      </IconButton>
                    )}
                    {member.links.instagram && (
                      <IconButton
                        component="a"
                        href={member.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <Instagram />
                      </IconButton>
                    )}
                    {member.links.telegram && (
                      <IconButton
                        component="a"
                        href={member.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <Telegram />
                      </IconButton>
                    )}
                    {member.links.whatsapp && (
                      <IconButton
                        component="a"
                        href={member.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <WhatsApp />
                      </IconButton>
                    )}
                  </SocialIconContainer>
                </SpecialTeamCard>
              ) : (
                <RegularTeamCard elevation={3}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        borderRadius: '50%',
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        border: '4px solid #1976d2',
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{ marginTop: '1rem', fontWeight: 'bold' }}
                    >
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {member.role}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    component="div"
                    dangerouslySetInnerHTML={{ __html: member.description }}
                  />
                  <SocialIconContainer>
                    {member.links.youtube && (
                      <IconButton
                        component="a"
                        href={member.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <YouTube />
                      </IconButton>
                    )}
                    {member.links.instagram && (
                      <IconButton
                        component="a"
                        href={member.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <Instagram />
                      </IconButton>
                    )}
                    {member.links.telegram && (
                      <IconButton
                        component="a"
                        href={member.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <Telegram />
                      </IconButton>
                    )}
                    {member.links.whatsapp && (
                      <IconButton
                        component="a"
                        href={member.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={iconStyles}
                      >
                        <WhatsApp />
                      </IconButton>
                    )}
                  </SocialIconContainer>
                </RegularTeamCard>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Donate />
    </div>
  );
};

export default AboutUs;
