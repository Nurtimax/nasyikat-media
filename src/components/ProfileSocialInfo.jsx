import PropTypes from 'prop-types';
import { Card, CardHeader, Box } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

// ----------------------------------------------------------------------

ProfileSocialInfo.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileSocialInfo({ profile }) {
  const {
    telegramLink = 'https://t.me/MuhammedIbraghim', // Replace with your Telegram link
    instagramLink = 'https://www.instagram.com/nasyikat.media', // Replace with your Instagram link
    whatsappLink = 'https://wa.me/556401369', // Replace with your WhatsApp link
    phoneLink = 'tel:+996556401369', // Replace with your Phone number link
  } = profile;

  const SOCIALS = [
    {
      name: 'Instagram',
      icon: <InstagramIcon style={{ color: '#E1306C', fontSize: 30 }} />,
      href: instagramLink,
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon style={{ color: '#0088cc', fontSize: 30 }} />,
      href: telegramLink,
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon style={{ color: '#25D366', fontSize: 30 }} />,
      href: whatsappLink,
    },
    {
      name: 'Phone',
      icon: <PhoneInTalkIcon style={{ color: '#34B7F1', fontSize: 30 }} />,
      href: phoneLink,
    },
  ];

  return (
    <Card>
      <CardHeader title="Биздин баракчалар" style={{ textAlign: 'center' }} />
      <Box
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'space-around',
          cursor: 'pointer',
        }}
      >
        {SOCIALS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              mx: 1,
            }}
          >
            {link.icon}
          </Link>
        ))}
      </Box>
    </Card>
  );
}
