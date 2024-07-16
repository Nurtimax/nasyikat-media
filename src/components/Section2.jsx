import React from 'react';
import { styled } from '@mui/system';
import islamdyn5Parzy from './data/islamdynparzy/islamdyn5parzy';

const Section2 = () => {
  return (
    <SectionContainer>
      <SectionTitle>ИСЛАМДАГЫ БЕШ ПАРЗ</SectionTitle>
      <CardsContainer>
        {islamdyn5Parzy.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.alt} />
            <CardTitle>{card.title}</CardTitle>
            <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
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

const SectionTitle = styled('h2')({
  fontSize: '2rem',
  marginBottom: '20px',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
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
  height: 'auto',
  maxHeight: '17.375rem',
  objectFit: 'cover',
});

const CardTitle = styled('h2')({
  fontSize: '1.2rem',
  marginTop: '10px',
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
});

const CardText = styled('p')({
  fontSize: '1rem',
  '@media (max-width: 600px)': {
    fontSize: '0.9rem',
  },
});
