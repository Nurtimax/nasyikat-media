import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Islam from './Islam';
import Hadis from './Hadis';
import Duba from './Duba';
import Store from './Store';
import Zikr from '../components/zikr';
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
import Hutba from './Hutba';
import Kyrgyz from './Kyrgyz';
import Aalymdar from '../section/Aalymdar';
import AalymdarDetails from '../pages/AalymdarDetails';
import MualimSani from '../components/MualimSani';
import NamazTimes from './NamazTimes';
import DetailsPage from './ProductDetails';

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
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/zikr" element={<Zikr />} />
        <Route path="/kyrgyz" element={<Kyrgyz />} />
        <Route path="/shahada" element={<Shahada />} />
        <Route path="/ajylyk" element={<Ajylyk />} />
        <Route path="/mualimsani" element={<MualimSani />} />
        <Route path="/namaz" element={<Namaz />} />
        <Route path="/namaztimes" element={<NamazTimes />} />
        <Route path="/orozo" element={<Orozo />} />
        <Route path="/zeket" element={<Zeket />} />
        <Route path="/books" element={<Books />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/aljardam" element={<AlJardam />} />
        <Route path="/onsuro" element={<OnSuro />} />
        <Route path="/hutba" element={<Hutba />} />
        <Route path="/aalymdar" element={<Aalymdar />} />
        <Route path="/aalymdar/:id" element={<AalymdarDetails />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
