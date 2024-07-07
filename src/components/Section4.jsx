import React, { useState, useEffect } from 'react';

const Section4 = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Здесь текст хадиса или аята из Корана 1',
    'Здесь текст хадиса или аята из Корана 2',
    'Здесь текст хадиса или аята из Корана 3',
  ];
  const colors = ['#f0f0f0', '#c0c0c0', '#a0a0a0'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      style={{
        backgroundColor: colors[textIndex % colors.length],
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        transition: 'background-color 0.5s ease',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Example shadow style
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>
        Здесь должно быть текст
      </h2>
      <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>
        {texts[textIndex]}
      </div>
    </div>
  );
};

export default Section4;
