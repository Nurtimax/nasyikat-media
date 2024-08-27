import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';

const Store = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Store;
