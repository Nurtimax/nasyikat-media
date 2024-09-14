import { Box, Typography } from '@mui/material';
import React from 'react';

const TextBanner2 = () => {
  return (
    <div>
      <Box
        sx={{
          height: { xs: '280px' },
          backgroundSize: 'cover',
          marginTop: '25px',
          marginBottom: '20px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#f6edde',
            padding: '10px',
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
