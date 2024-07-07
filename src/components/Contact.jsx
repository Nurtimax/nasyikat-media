import React, { useState } from 'react';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Verified } from '@mui/icons-material';

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
    <div style={{ margin: '20px' }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h4"
          component="span"
          style={{ marginRight: '8px' }}
        >
          Nasyikat.media
        </Typography>
        <Verified color="primary" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="От"
            fullWidth
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Кому"
            fullWidth
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Сообщение"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleWhatsAppMessage}
          >
            Отправить сообщение WhatsApp
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
