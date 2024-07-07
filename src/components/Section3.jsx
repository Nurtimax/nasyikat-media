import React from 'react';
// import IMG1 from '../assetts/images/11.jpg';

const Section3 = () => {
  return (
    <div
      style={{
        // backgroundImage: `url(${IMG1})`,
        background: '#e3e1c4',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10px',
        height: '500px',
        marginTop: '20px',
      }}
    >
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>Ислам деген эмне</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '8px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            aliquid atque minima deleniti, voluptas sunt recusandae, nisi
            consectetur modi quisquam accusantium et natus labore! Ipsum tempore
            optio voluptas eius praesentium. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Tempore quod esse necessitatibus
            repudiandae inventore dolorem
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section3;
