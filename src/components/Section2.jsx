import React from 'react';
import IMG from '../assetts/images/11.jpg';

const Section2 = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>ИСЛАМДАГЫ БЕШ ПАРЗ</h1>
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
            textAlign: 'center',
          }}
        >
          <img
            src={IMG}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Лаa илaаха иллаллaх Мухаммадур расуллалaх
          </h2>
          <p>
            Бир Алладан башка Кудай жок жана Мухаммад анын элчиси деп күбөлүк
            берүү
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            width: '300px',
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
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>Намаз окуу;</h2>
          <p>
            «Бейиштин ачкычы – намаз, намаздын ачкычы – даарат» <br /> (Ахмаддын
            Муснады).
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            width: '300px',
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
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Зекет берүү;
          </h2>
          <p>
            «Алардын мал-мүлктөрүндө кайырчынын жана муктаждын акысы бар».{' '}
            <br />
            (Зарият сүрөөсү, 19-аят)
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            width: '300px',
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
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            {' '}
            Орозо кармоо;{' '}
          </h2>
          <p>Рамазан айында орозо кармоо —мусулмандардын парзы</p>
        </div>

        {/* Card 5 */}
        <div
          style={{
            width: '300px',
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
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>Ажыга баруу</h2>
          <p>(кимдин мүмкүнчүлүгү болсо).</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
