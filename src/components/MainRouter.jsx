import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Islam from './Islam';
import Quran from './Quran';
import Hadis from './Hadis';
import Duba from './Duba';
import Store from './Store';
import ChubakAjyJallilov from './aalymdar.kg/ChubakAjyJallilov';
import AbdushukurAjy from './aalymdar.kg/AbdushukurAjy';
import MaksatAjy from './aalymdar.kg/MaksatAjy';
import BakgtyarAjy from './aalymdar.kg/BakgtyarAjy';
import ErmekAjy from './aalymdar.kg/ErmekAjy';
import SadybakasAjy from './aalymdar.kg/SadybakasAjy';
import IlyasAjy from './aalymdar.kg/IlyasAjy';
import KalysbekAjy from './aalymdar.kg/KalysbekAjy';

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
        <Route path="/abdushukurajy" element={<AbdushukurAjy />} />
        <Route path="/maksatajy" element={<MaksatAjy />} />
        <Route path="/bakgtyarajy" element={<BakgtyarAjy />} />
        <Route path="/ermekajy" element={<ErmekAjy />} />
        <Route path="/sadybakasajy" element={<SadybakasAjy />} />
        <Route path="/ilyasajy" element={<IlyasAjy />} />
        <Route path="/kalysbekajy" element={<KalysbekAjy />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
