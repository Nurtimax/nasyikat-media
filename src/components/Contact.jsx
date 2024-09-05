import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Paper, Box } from '@mui/material';
import { Verified } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppMessage = () => {
    const whatsappMessage = `https://api.whatsapp.com/send?phone=+996556401369&text=${encodeURIComponent(
      `От: ${from}\nКому: ${to}\n${message}`
    )}`;
    window.open(whatsappMessage, '_blank');
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: '100%',
          maxWidth: '1000px',
          padding: '30px',
          borderRadius: '5px',
          background: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          marginBottom: '1rem',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="20px"
        >
          <Typography
            variant="h4"
            component="span"
            sx={{
              marginRight: '8px',
              fontFamily: "'Lora', serif",
              fontSize: '1.5rem',
            }}
          >
            NASYIKAT.MEDIA
          </Typography>
          <Verified sx={{ fontSize: '1.5rem' }} color="primary" />
        </Box>
        <Typography variant="h6" sx={{ marginBottom: '1.5rem' }}>
          Ой пикир сунуштар боюнча
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Кимден"
              fullWidth
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              InputProps={{
                sx: {
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Кимге"
              fullWidth
              value={to}
              onChange={(e) => setTo(e.target.value)}
              InputProps={{
                sx: {
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Кат"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                sx: {
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleWhatsAppMessage}
              sx={{
                padding: '12px 30px',
                borderRadius: '30px',
                fontSize: '16px',
                backgroundColor: '#1e3c72',
                color: '#ffffff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#2a5298',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Жөнөтүү {<TelegramIcon fontSize="medium" />}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contact;
