import React from 'react';
import Header from './components/Header';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Welcome from './components/Welcome';
import SponsorsList from './components/SponsorsList';
import Advertising from './components/Advertising';
import Aalymdar from './section/Aalymdar';
import TextBanner from './components/TextBanner';
import TextBanner2 from './components/TextBanner2';

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Section2 />
      <Advertising />
      <Aalymdar />
      <TextBanner />
      <Section5 />
      <Section4 />
      <Section6 />
      <SponsorsList />
      <TextBanner2 />
      <Footer />
      <Outlet />
    </>
  );
};

export default App;
