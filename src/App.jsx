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

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Section2 />
      <Section />
      <Section4 />
      <Section5 />
      <Section6 />
      <Contact />
      <Footer />
      <Outlet />
    </>
  );
};

export default App;
