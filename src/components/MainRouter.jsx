import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Islam from './Islam';
import Quran from './Quran';
import Hadis from './Hadis';
import Duba from './Duba';
import Store from './Store';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/islam" element={<Islam />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/hadis" element={<Hadis />} />
        <Route path="/duba" element={<Duba />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
