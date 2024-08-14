import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Avatar,
  Button,
} from '@mui/material';
import { Instagram } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/system';

const ServiceCard = ({ service }) => {
  const generateWhatsAppLink = (phone, message) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const message = `Hello! I am interested in your service: ${service.name} in ${service.city}.`;

  return (
    <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="240"
        image={service.image}
        alt={service.name}
        sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5rem',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <Avatar
              src={service.logo}
              sx={{ width: 56, height: 56, marginRight: '1rem' }}
            />
            <Typography variant="h6" component="div">
              {service.company}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {service.instagram && (
              <IconButton
                component="a"
                href={service.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#E4405F', '&:hover': { color: '#C13584' } }}
              >
                <Instagram fontSize="small" />
              </IconButton>
            )}
          </Box>
        </Box>

        <Typography gutterBottom variant="h6" component="div">
          {service.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginBottom: '1rem' }}
        >
          {service.address}, {service.city}, {service.country}
        </Typography>
        {service.whatsapp && (
          <StyledButton
            component="a"
            href={generateWhatsAppLink(service.whatsapp, message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </StyledButton>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: '#0a2278e4',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}));
