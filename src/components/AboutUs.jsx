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
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assetts/icons/logo-nasykat.png';
import logo2 from '../assetts/images/islamsabaktary.jpg';
import logoavatar from '../assetts/images/donate.jpg';
import { YouTube, Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import Donate from './Donate';

const teamMembers = [
  {
    name: 'Nasyikat.media',
    role: 'Бактылуулук Исламда',
    image: logo,
    description:
      '2020-жылы 28-февраль күнү алгачкы постубузду чыгардык эле эми мынтип арадан 4 жыл 6 ай өтүптүр Аллах Таала сизден жана бизден жакшы амалдарыбызды кабыл кылсын Ассаламу алейкум',
    links: {
      youtube: 'https://www.youtube.com/channel/UC2inpp0KqE5s5qtpJRV6j5g',
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
    verified: true,
  },
  //Нурматов Матраим Ашимович
  {
    name: '----------',
    role: 'Админ',
    channel: 'Nasyikat.media & Islam.sabaktary',
    image: logoavatar,
    description:
      'Аллах таалага чексиз мактоолор жана шүгүрлөр болсун <br/>  <br/> Оо, Роббим! Мени кичинемден багып-өстүргөн ата-энеме ырайым кыл.',
    links: {
      telegram: 'https://t.me/MuhammedIbraghim',
      instagram: 'https://www.instagram.com/matraim.official/',
      whatsapp: 'https://wa.me/996556401369',
    },
    verified: false,
  },
  {
    name: 'Islam.sabaktary',
    role: 'Ислам сабактары',
    image: logo2,
    description:
      'Бул баракчабыз динге дагы да кызмат кылуу максатында сатып алынды буюрса бул канал менен да Элге жерге динге кызмат кылабыз Аллах Таала шерменде кылбасын Ассаламу алейкум',
    links: {
      instagram: 'https://www.instagram.com/islam.sabaktary/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
    verified: true,
  },
];

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: 24,
  margin: '0 4px',
  '&:hover': {
    opacity: 0.8,
  },
}));

const CustomIconButtonYouTube = styled(CustomIconButton)({
  color: '#FF0000',
});

const CustomIconButtonInstagram = styled(CustomIconButton)({
  color: '#E1306C',
});

const CustomIconButtonTelegram = styled(CustomIconButton)({
  color: '#0088cc',
});

const CustomIconButtonWhatsApp = styled(CustomIconButton)({
  color: '#25d366',
});

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
          Биз жөнүндө
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
                      variant="h6"
                      component="div"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      {member.name}
                      {false && (
                        <IconButton size="small" sx={{ ml: 1 }}>
                          <VerifiedIcon color="primary" />
                        </IconButton>
                      )}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      style={{
                        background: '#071c6b',
                        width: '100%',
                        color: '#f6edde',
                        borderRadius: '5px',
                      }}
                    >
                      {member.role}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      mt={'10px'}
                    >
                      {member.channel}
                    </Typography>
                    <ListItemText
                      secondary="«Жаратканым мени менен жана сөзсүз мага жол көрсөтөт»"
                      secondaryTypographyProps={{
                        fontStyle: 'initial',
                        fontSize: '0.9rem',
                        marginTop: '5px',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    component="div"
                    dangerouslySetInnerHTML={{ __html: member.description }}
                  />
                  <SocialIconContainer>
                    {member.links.youtube && (
                      <CustomIconButtonYouTube
                        component="a"
                        href={member.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTube />
                      </CustomIconButtonYouTube>
                    )}
                    {member.links.instagram && (
                      <CustomIconButtonInstagram
                        component="a"
                        href={member.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </CustomIconButtonInstagram>
                    )}
                    {member.links.telegram && (
                      <CustomIconButtonTelegram
                        component="a"
                        href={member.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Telegram />
                      </CustomIconButtonTelegram>
                    )}
                    {member.links.whatsapp && (
                      <CustomIconButtonWhatsApp
                        component="a"
                        href={member.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp />
                      </CustomIconButtonWhatsApp>
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
                      sx={{
                        marginTop: '1rem',
                        fontWeight: 'bold',
                        marginLeft: '0.5rem',
                      }}
                    >
                      {member.name}
                      {true && (
                        <IconButton sx={{ mb: '0.2rem' }}>
                          <VerifiedIcon color="primary" fontSize="small" />
                        </IconButton>
                      )}
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
                      <CustomIconButtonYouTube
                        component="a"
                        href={member.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTube />
                      </CustomIconButtonYouTube>
                    )}
                    {member.links.instagram && (
                      <CustomIconButtonInstagram
                        component="a"
                        href={member.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </CustomIconButtonInstagram>
                    )}
                    {member.links.telegram && (
                      <CustomIconButtonTelegram
                        component="a"
                        href={member.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Telegram />
                      </CustomIconButtonTelegram>
                    )}
                    {member.links.whatsapp && (
                      <CustomIconButtonWhatsApp
                        component="a"
                        href={member.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp />
                      </CustomIconButtonWhatsApp>
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
