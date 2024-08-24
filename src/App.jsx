import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Welcome from './components/Welcome';
import SponsorsList from './components/SponsorsList';
import banner2 from './assetts/icons/bgsmall.png';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Section2 />
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
          variant="h5"
          component="div"
          sx={{
            color: '#c8831c',
            padding: '10px',
            background: '#fffdf6',
            lineHeight: 1.4,
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            width: '100%',
          }}
        >
          Силер кантип Аллахка ишенбейсиңер? <br /> Ал силердин жансыз денеңерди
          тирилткен. <br /> Кийин силерди өлтүрүп, андан соң айра тиритлет.
          <br /> Анан Ага кайтасыңар. <br /> Бакара сүрөсү - 2.28
        </Typography>
      </Box>
      <Section />
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '1.5rem',
          backgroundImage: `url(${banner2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          margin: { xs: '0px', sm: '0px' },
          padding: { xs: '0px', sm: '0px' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#f6edde',
            lineHeight: 1.4,
            fontFamily: 'fantasy',
            letterSpacing: '1.5px',
          }}
        >
          Эгер билбесеңер илимдүүлөрдөн сурагыла <br />
          Нахл сүрөсү, 43 аят
        </Typography>
      </Box>
      <Section4 />
      <Section5 />
      <Section6 />
      <SponsorsList />
      <Contact />
      <Footer />
      <Outlet />
    </>
  );
};

export default App;
