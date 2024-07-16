import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import sponsors from './data/sponsors/sponsor';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 450,
  margin: '15px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: 20,
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 300,
  backgroundSize: 'contain', // Ensures the image is fully visible and centered
  [theme.breakpoints.down('sm')]: {
    height: 450,
    width: '100%',
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

const StyledTypographyTitle = styled(Typography)({
  fontSize: '1.75rem',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #30CFD0, #330867)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '10px',
});

const StyledTypographyBody = styled(Typography)({
  color: '#555',
  lineHeight: 1.6,
  padding: '10px 0',
});

const StyledTypographyAddress = styled(Typography)({
  color: '#333',
  fontWeight: 'normal',
  fontStyle: 'unset',
});

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
          <strong>Адрес:</strong> {sponsor.address}
        </StyledTypographyAddress>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link href={sponsor.link} target="_blank" rel="noopener">
            <Typography variant="caption" color="primary">
              Перейти
            </Typography>
          </Link>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Instagram">
              <CustomIconButtonInstagram
                onClick={() => handleShare('instagram')}
              >
                <InstagramIcon style={{ fontSize: 24 }} />
              </CustomIconButtonInstagram>
            </Tooltip>
            <Tooltip title="Telegram">
              <CustomIconButtonTelegram onClick={() => handleShare('telegram')}>
                <TelegramIcon style={{ fontSize: 24 }} />
              </CustomIconButtonTelegram>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <CustomIconButton onClick={() => handleShare('whatsapp')}>
                <WhatsAppIcon style={{ fontSize: 24 }} />
              </CustomIconButton>
            </Tooltip>
          </Box>
        </Box>
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
        padding: '20px',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Биздин демөөрчүлөр
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
