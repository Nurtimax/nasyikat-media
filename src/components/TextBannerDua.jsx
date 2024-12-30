import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const TextBannerDua = () => {
  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            background: 'linear-gradient(145deg, #f9f3e7 20%, #f6ecde 80%)', // Градиент для придания глубины фону
            padding: '1.5rem',
            marginBottom: '1.5rem',
            color: '#34495e', // Темно-синий цвет для текста
            border: '2px solid #b89c6f', // Золотистая рамка для более изысканного вида
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Легкая тень для объема
            fontFamily: 'Georgia, serif',
            position: 'relative',
            borderRadius: '9px',
          }}
        >
          Оо, Роббим! Мени кичинемден багып-өстүргөндөй ата-энеме ырайым кыл!
        </Typography>
      </Box>
    </Container>
  );
};

export default TextBannerDua;
