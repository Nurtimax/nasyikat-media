import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Islam from './Islam';
import Hadis from './Hadis';
import Duba from './Duba';
import Store from './Store';
import Zikr from '../components/zikr';
import ChubakAjyJallilov from './aalymdar.kg/ChubakAjyJallilov';
import AbdushukurAjy from './aalymdar.kg/AbdushukurAjy';
import MaksatAjy from './aalymdar.kg/MaksatAjy';
import BakgtyarAjy from './aalymdar.kg/BakgtyarAjy';
import Jigitaliustaz from './aalymdar.kg/Jigitaliustaz';
import SadybakasAjy from './aalymdar.kg/SadybakasAjy';
import KalysbekAjy from './aalymdar.kg/KalysbekAjy';
import Shahada from './data/islamdynparzy/Shahada';
import Ajylyk from './data/islamdynparzy/Ajylyk';
import Namaz from './data/islamdynparzy/Namaz';
import Orozo from './data/islamdynparzy/Orozo';
import Zeket from './data/islamdynparzy/Zeket';
import IslamdynParzdary from './IslamdynParzdary';
import Books from './Books';
import AboutUs from './AboutUs';
import AlJardam from './AlJardam';
import OnSuro from './OnSuro';
import Abdulazizkary from './aalymdar.kg/Abdulazizkary';
import Hutba from './Hutba';
import Kyrgyz from './Kyrgyz';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/islamdynparzdary" element={<IslamdynParzdary />} />
        <Route path="/islam" element={<Islam />} />
        <Route path="/hadis" element={<Hadis />} />
        <Route path="/duba" element={<Duba />} />
        <Route path="/store" element={<Store />} />
        <Route path="/zikr" element={<Zikr />} />
        <Route path="/kyrgyz" element={<Kyrgyz />} />
        <Route path="/chubakajyjallilov" element={<ChubakAjyJallilov />} />
        <Route path="/abdushukurajy" element={<AbdushukurAjy />} />
        <Route path="/maksatajy" element={<MaksatAjy />} />
        <Route path="/bakgtyarajy" element={<BakgtyarAjy />} />
        <Route path="/jigitaliustaz" element={<Jigitaliustaz />} />
        <Route path="/sadybakasajy" element={<SadybakasAjy />} />
        <Route path="/Abdulazizkary" element={<Abdulazizkary />} />
        <Route path="/kalysbekajy" element={<KalysbekAjy />} />
        <Route path="/shahada" element={<Shahada />} />
        <Route path="/ajylyk" element={<Ajylyk />} />
        <Route path="/namaz" element={<Namaz />} />
        <Route path="/orozo" element={<Orozo />} />
        <Route path="/zeket" element={<Zeket />} />
        <Route path="/books" element={<Books />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/aljardam" element={<AlJardam />} />
        <Route path="/onsuro" element={<OnSuro />} />
        <Route path="/hutba" element={<Hutba />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
