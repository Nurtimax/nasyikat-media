import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Container sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ marginBottom: '2rem' }}
        >
          Биздин Жамаат
        </Typography>
      </Container>
    </div>
  );
};

export default AboutUs;
