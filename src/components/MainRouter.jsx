import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Islam from './Islam';
import Quran from './Quran';
import Hadis from './Hadis';
import Duba from './Duba';
import Store from './Store';
import Zikr from '../components/zikr';
import ChubakAjyJallilov from './aalymdar.kg/ChubakAjyJallilov';
import AbdushukurAjy from './aalymdar.kg/AbdushukurAjy';
import MaksatAjy from './aalymdar.kg/MaksatAjy';
import BakgtyarAjy from './aalymdar.kg/BakgtyarAjy';
import ErmekAjy from './aalymdar.kg/ErmekAjy';
import SadybakasAjy from './aalymdar.kg/SadybakasAjy';
import IlyasAjy from './aalymdar.kg/IlyasAjy';
import KalysbekAjy from './aalymdar.kg/KalysbekAjy';
import Shahada from './data/islamdynparzy/Shahada';
import Ajylyk from './data/islamdynparzy/Ajylyk';
import Namaz from './data/islamdynparzy/Namaz';
import Orozo from './data/islamdynparzy/Orozo';
import Zeket from './data/islamdynparzy/Zeket';
import IslamdynParzdary from './IslamdynParzdary';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/islamdynparzdary" element={<IslamdynParzdary />} />
        <Route path="/islam" element={<Islam />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/hadis" element={<Hadis />} />
        <Route path="/duba" element={<Duba />} />
        <Route path="/store" element={<Store />} />
        <Route path="/zikr" element={<Zikr />} />
        <Route path="/chubakajyjallilov" element={<ChubakAjyJallilov />} />
        <Route path="/abdushukurajy" element={<AbdushukurAjy />} />
        <Route path="/maksatajy" element={<MaksatAjy />} />
        <Route path="/bakgtyarajy" element={<BakgtyarAjy />} />
        <Route path="/ermekajy" element={<ErmekAjy />} />
        <Route path="/sadybakasajy" element={<SadybakasAjy />} />
        <Route path="/ilyasajy" element={<IlyasAjy />} />
        <Route path="/kalysbekajy" element={<KalysbekAjy />} />
        <Route path="/shahada" element={<Shahada />} />
        <Route path="/ajylyk" element={<Ajylyk />} />
        <Route path="/namaz" element={<Namaz />} />
        <Route path="/orozo" element={<Orozo />} />
        <Route path="/zeket" element={<Zeket />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
