import { Box, Typography } from '@mui/material';
import React from 'react';

const TextBanner2 = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#f6edde',
          borderLeft: `5px solid #6a4b1e`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Amiri, serif',
          margin: '0 auto',
          color: '#161c25',
          position: 'relative',
          marginBottom: '1.5rem',
          '&:before': {
            content: '"\\201C"',
            position: 'absolute',
            top: '-15px',
            left: '5px',
            fontSize: '50px',
            color: '#6a4b1e',
          },
          '&:after': {
            content: '"\\201D"',
            position: 'absolute',
            bottom: '-35px',
            right: '5px',
            fontSize: '50px',
            color: '#6a4b1e',
          },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            padding: '40px',
            lineHeight: 1.4,
            textAlign: 'center',
            fontFamily: 'inherit',
            width: '100%',
          }}
        >
          "Силер кантип Аллахка ишенбейсиңер? <br /> Ал силердин жансыз
          денеңерди тирилткен. <br /> Кийин силерди өлтүрүп, андан соң кайра
          тирилтет.
          <br /> Анан Ага кайтасыңар."
          <br /> <br />
          Бакара сүрөсү 28-аят
        </Typography>
      </Box>
    </div>
  );
};

export default TextBanner2;
