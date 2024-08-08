import React, { useState, useEffect } from 'react';
import zaryiat55 from './data/quran-khadis/zariyat';

const Section4 = () => {
  const [textIndex, setTextIndex] = useState(0);

  const colors = ['#eff3b882', '#eff3b882', '#eff3b882'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % zaryiat55.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[textIndex % colors.length],
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '250px',
        transition: 'background-color 0.5s ease',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>
        وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنْفَعُ الْمُؤْمِنِينَ
      </h2>

      <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>
        {zaryiat55[textIndex]}
      </div>
      <h3 style={{ textAlign: 'center' }}>
        "Эскерткин,- эскертүү момундарга пайда берет" (зарият 55 аят).
      </h3>
    </div>
  );
};

export default Section4;
