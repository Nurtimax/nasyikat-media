import React from 'react';
import { styled } from '@mui/system';
import islamdyn5Parzy from './data/islamdynparzy/islamdyn5parzy';

const Section2 = () => {
  return (
    <SectionContainer>
      <h2>ИСЛАМДАГЫ БЕШ ПАРЗ</h2>
      <CardsContainer>
        {islamdyn5Parzy.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.alt} />
            <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>
              {card.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: card.text }} />
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default Section2;

const SectionContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
  cursor: 'pointer',
});

const CardsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '20px',
  justifyItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const Card = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const CardImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  height: '17.375rem',
  objectFit: 'cover',
});
