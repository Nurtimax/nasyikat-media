import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import sponsors from './data/sponsors/sponsor';

// Styled components for cards and icons
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 380,
  margin: '10px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: 20,
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  position: 'relative', // Required for absolute positioning of the icon
  [theme.breakpoints.down('sm')]: {
    maxWidth: '95%',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    height: 200,
  },
}));

const CustomIconButton = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#25d366',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#128c7e',
  },
});

const CustomIconButtonTelegram = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#0088cc',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#005a87',
  },
});

const CustomIconButtonInstagram = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#E1306C',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#A8254C',
  },
});

const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #30CFD0, #330867)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const StyledTypographyBody = styled(Typography)(({ theme }) => ({
  color: '#555',
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const StyledTypographyAddress = styled(Typography)(({ theme }) => ({
  color: '#333',
  fontWeight: 'normal',
  fontStyle: 'unset',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const LinkIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: '#3b73eb',
  '&:hover': {
    backgroundColor: '#1753d4',
  },
}));

const SponsorCard = ({ sponsor }) => {
  const handleShare = (platform) => {
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/${sponsor.whatsapp}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/${sponsor.telegram}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/${sponsor.instagram}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={sponsor.image}
        title={sponsor.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <StyledTypographyTitle variant="h6" component="div" gutterBottom>
          {sponsor.name}
        </StyledTypographyTitle>
        <StyledTypographyBody variant="body2" paragraph>
          {sponsor.description}
        </StyledTypographyBody>
        <StyledTypographyAddress variant="body2" paragraph>
          <strong>Дареги:</strong> {sponsor.address}
        </StyledTypographyAddress>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Tooltip title="Instagram">
              <CustomIconButtonInstagram
                onClick={() => handleShare('instagram')}
              >
                <InstagramIcon />
              </CustomIconButtonInstagram>
            </Tooltip>
            <Tooltip title="Telegram">
              <CustomIconButtonTelegram onClick={() => handleShare('telegram')}>
                <TelegramIcon />
              </CustomIconButtonTelegram>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <CustomIconButton onClick={() => handleShare('whatsapp')}>
                <WhatsAppIcon />
              </CustomIconButton>
            </Tooltip>
          </Box>
        </Box>
        <LinkIconButton href={sponsor.link} target="_blank" rel="noopener">
          <LinkIcon />
        </LinkIconButton>
      </CardContent>
    </StyledCard>
  );
};

const SponsorsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Бизге колдоо көрсөткөндөр
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          margin: '0 -10px',
          ...(isMobile && {
            flexDirection: 'column',
            alignItems: 'center',
          }),
        }}
      >
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </Box>
    </Box>
  );
};

export default SponsorsList;
