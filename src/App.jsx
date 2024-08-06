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
import banner from './assetts/images/banner.png';
import { Box } from '@mui/system';
import banner2 from './assetts/images/banner1.png';
import img from './assetts/icons/section-img.png';

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Section2 />
      <Box
        sx={{
          height: { xs: '150px', sm: '450px' },
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '25px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>

      <Box
        sx={{
          marginTop: '25px',
          img: {
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
          },
        }}
      >
        <img src={img} alt="Section Illustration" />
      </Box>

      <Section />
      <Box
        sx={{
          height: { xs: '45px', sm: '190px' },
          backgroundImage: `url(${banner2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '35px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>

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
