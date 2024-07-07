import React from 'react';
import IMG from '../assetts/images/11.jpg';

const Section2 = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Islamdyn 5 turkugu</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            width: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Card 1 Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula dolor quis quam accumsan, sed scelerisque est aliquam.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            width: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Card 2 Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula dolor quis quam accumsan, sed scelerisque est aliquam.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            width: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Card 3 Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula dolor quis quam accumsan, sed scelerisque est aliquam.
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            width: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Card 4 Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula dolor quis quam accumsan, sed scelerisque est aliquam.
          </p>
        </div>

        {/* Card 5 */}
        <div
          style={{
            width: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Card 5 Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula dolor quis quam accumsan, sed scelerisque est aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
