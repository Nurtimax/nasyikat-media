import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  styled,
} from '@mui/material';
import caliphs from '../utils/constants/caliphs';

// Custom Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: theme.shadows[5],
  backgroundColor: '#eee1bb', // Light background with a soft tone
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '15px',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  [theme.breakpoints.up('md')]: {
    height: '100%', // Specific height for desktop screens
    padding: '5rem',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#2a4d56', // Elegant dark green for Islamic aesthetics
  fontFamily: 'Noto Sans, sans-serif',
  lineHeight: '1.6',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem', // Responsive text size for mobile
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CBB87', // Light green for button
  color: 'white',
  width: '100%',
  '&:hover': {
    backgroundColor: '#45a56d', // Darker green on hover
  },
  marginTop: '20px',
}));

const CaliphDetail = () => {
  const { id } = useParams();
  const caliph = caliphs.find((caliph) => caliph.id === Number(id));

  if (!caliph) {
    return (
      <Container maxWidth="md" sx={{ marginTop: '20px' }}>
        <Typography variant="h4">Caliph not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <StyledCard>
        <StyledCardMedia
          component="img"
          image={caliph.imageUrl}
          alt={caliph.name}
        />
        <CardContent>
          <StyledTypography variant="h4" gutterBottom>
            {caliph.name}
          </StyledTypography>
          <StyledTypography variant="body2" color="text.secondary">
            Башкарган жылы: {caliph.period}
          </StyledTypography>
          <StyledTypography variant="body1" sx={{ marginTop: '15px' }}>
            {caliph.fullDescription}
          </StyledTypography>
          <StyledButton
            variant="contained"
            onClick={() => window.history.back()}
          >
            Артка
          </StyledButton>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default CaliphDetail;
