import React from 'react';
import { styled } from '@mui/system';
import islamdyn5Parzy from './data/islamdynparzy/islamdyn5parzy';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Section2 = () => {
  return (
    <SectionContainer>
      <SectionTitle>ИСЛАМДЫН НЕГИЗГИ БЕШ ПАРЫЗЫ</SectionTitle>
      <CardsContainer>
        {islamdyn5Parzy.map((card, index) => (
          <Card key={index}>
            <Link to={card.route}>
              <CardImage src={card.image} alt={card.alt} />
              <IconWrapper style={{ color: '#e40001' }}>
                <FavoriteIcon fontSize="small" />
              </IconWrapper>
              <CardTitle>{card.title}</CardTitle>
              <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
            </Link>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default Section2;

const SectionContainer = styled('div')({
  textAlign: 'center',
  margin: '0.1em',
  padding: '0.5px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
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
  width: '100%',
  padding: '0',
  margin: '0',
  justifyItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '340px',
  // backgroundImage: `url(${bgImageText})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const CardImage = styled('img')({
  width: '100%',
  height: 'auto',
  aspectRatio: '4/4',
  objectFit: 'cover',
  borderRadius: '8px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'block',
});

const IconWrapper = styled('div')({
  position: 'absolute',
  top: '10px',
  left: '10px',
  borderRadius: '50%',
  padding: '5px',
  color: '#071c6b',
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
