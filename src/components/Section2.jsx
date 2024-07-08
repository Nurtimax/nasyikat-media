import React from 'react';
import { styled } from '@mui/system';
import Allah from '../assetts/images/islam/AllahuAkbar.avif';
import Namaz from '../assetts/images/islam/namaz.avif';
import Zeket from '../assetts/images/islam/zeket.avif';
import Ramazan from '../assetts/images/islam/ramazan.webp';
import Hadj from '../assetts/images/islam/hadj.avif';

const SectionContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
});

const CardsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
  flexWrap: 'wrap',
});

const Card = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  margin: '10px auto',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
  },
}));

const CardImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  height: '230px', // Ensuring consistent height for all images
  objectFit: 'cover', // Ensures images cover the area without stretching
});

const Section2 = () => {
  return (
    <SectionContainer>
      <h2>ИСЛАМДАГЫ БЕШ ПАРЗ</h2>
      <CardsContainer>
        <Card>
          <CardImage src={Allah} alt="Allah" />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Лаa илaаха иллаллaх Мухаммадур расуллалaх
          </h2>
          <p>
            Бир Алладан башка Кудай жок жана Мухаммад анын элчиси деп күбөлүк
            берүү
          </p>
        </Card>
        <Card>
          <CardImage src={Namaz} alt="Namaz" />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>Намаз окуу;</h2>
          <p>
            «Бейиштин ачкычы – намаз, намаздын ачкычы – даарат» <br /> (Ахмаддын
            Муснады).
          </p>
        </Card>
        <Card>
          <CardImage src={Zeket} alt="Zeket" />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Зекет берүү;
          </h2>
          <p>
            «Алардын мал-мүлктөрүндө кайырчынын жана муктаждын акысы бар».{' '}
            <br /> (Зарият сүрөөсү, 19-аят)
          </p>
        </Card>
        <Card>
          <CardImage src={Ramazan} alt="Ramazan" />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Орозо кармоо;
          </h2>
          <p>Рамазан айында орозо кармоо —мусулмандардын парзы</p>
        </Card>
        <Card>
          <CardImage src={Hadj} alt="Hadj" />
          <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>Ажыга баруу</h2>
          <p>(кимдин мүмкүнчүлүгү болсо).</p>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
};

export default Section2;
