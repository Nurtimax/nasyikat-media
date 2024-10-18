import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Container,
} from '@mui/material';
import caliphs from '../utils/constants/caliphs';

const CaliphCard = ({ caliph }) => {
  return (
    <Card sx={{ maxWidth: '100%', borderRadius: '15px', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="325"
        image={caliph.imageUrl}
        alt={caliph.name}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {caliph.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {caliph.period}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          {caliph.shortDescription}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          {caliph.fullDescription}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '15px', width: '100%' }}
        >
          Окуу
        </Button>
      </CardContent>
    </Card>
  );
};

const KhalifsCard = () => {
  return (
    <Container maxWidth="100%">
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Халифат
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {caliphs.map((caliph) => (
            <Grid item key={caliph.id} xs={12} sm={6} md={3}>
              <CaliphCard caliph={caliph} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default KhalifsCard;
