import React from 'react';
import ChubakAjy from '../assetts/images/ustazdar/chubakajy.jpg';
import AbdushukurAjy from '../assetts/images/ustazdar/abdushukurajy.jpg';
import MaksatAjy from '../assetts/images/ustazdar/maksatajy.png';
import BakgtyarAjy from '../assetts/images/ustazdar/bakhtyarajyy.jpg';
import ErmekAjy from '../assetts/images/ustazdar/ermekajy.png';
import SadybakasAjy from '../assetts/images/ustazdar/sadybakasajy.jpg';
import IlyasAjy from '../assetts/images/ustazdar/ilyasajy.png';
import KalysbekAjy from '../assetts/images/ustazdar/kalysajy.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Section = () => {
  const cardStyle = {
    width: '100%',
    padding: '3px',
    maxWidth: '400px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    margin: '10px auto',
    color: '#000000',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '4px',
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>
          ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/chubakajyjallilov" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={ChubakAjy}
              alt=""
              style={{ ...imgStyle, height: '230px' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              ЧУБАК ажы ЖАЛИЛОВ(р.х)
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/abdushukurajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={AbdushukurAjy}
              alt=""
              style={{ ...imgStyle, height: '230px' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Абдушукур Ажы Нарматов
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/maksatajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={MaksatAjy}
              alt=""
              style={{ ...imgStyle, height: '230px' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Максатбек ажы Токтомушев
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/bakgtyarajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={BakgtyarAjy}
              alt=""
              style={{ ...imgStyle, height: '230px' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Бахтияр ажы Шарапов
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/ermekajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={ErmekAjy}
              alt=""
              style={{ ...imgStyle, height: 'auto' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Эрмек ажы Тынай уулу
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/sadybakasajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={SadybakasAjy}
              alt=""
              style={{ ...imgStyle, height: 'auto' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Садыбакас Ажы Доолов
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/ilyasajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={IlyasAjy}
              alt=""
              style={{ ...imgStyle, height: '270px' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Илёс Абдувалиев
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
        <Link to="/kalysbekajy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <img
              src={KalysbekAjy}
              alt=""
              style={{ ...imgStyle, height: 'auto' }}
            />
            <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              Калысбек ажы Заманбеков
            </h1>
            <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
            <p>видеолордун сыны</p>
            <Button color="secondary">Видеолорду көрүү</Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Section;
