import React from 'react';
import IMG from '../assetts/images/11.jpg';

const Section = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>
          ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Шейх ЧУБАК ажы ЖАЛИЛОВ(р.х)
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Шейх Абдушукур Ажы Нарматов
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Шейх Максатбек ажы Токтомушев
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Устаз Бахтияр ажы Шарапов
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>
        {/* Card 5 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Устаз Эрмек ажы Тынай уулу
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>
        {/* Card 6 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Устаз Садыбакас Ажы Доолов
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>
        {/* Card 7 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Устаз Илёс Абдувалиев
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>
        {/* Card 8 */}
        <div
          style={{
            width: '400px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Устаз Калысбек ажы Заманбеков
          </h1>
          <p>Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын</p>
        </div>
      </div>
    </>
  );
};

export default Section;
