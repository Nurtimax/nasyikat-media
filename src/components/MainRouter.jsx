import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Islam from './Islam';
import Quran from './Quran';
import Hadis from './Hadis';
import Duba from './Duba';
import Store from './Store';
import ChubakAjyJallilov from './aalymdar.kg/ChubakAjyJallilov';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/islam" element={<Islam />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/hadis" element={<Hadis />} />
        <Route path="/duba" element={<Duba />} />
        <Route path="/store" element={<Store />} />
        <Route path="/chubakajyjallilov" element={<ChubakAjyJallilov />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
