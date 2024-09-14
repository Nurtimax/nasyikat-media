import { Box, Typography } from '@mui/material';
import React from 'react';

const TextBanner = () => {
  return (
    <div>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #f6edde 0%, #f6edde 100%)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#333333',
            lineHeight: 1.6,
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '1.2px',
            marginTop: '1rem',
          }}
        >
          "Эгер билбесеңер, илимдүүлөрдөн сурагыла" <br />- Нахл сүрөсү, 43 аят
        </Typography>
      </Box>
    </div>
  );
};

export default TextBanner;
