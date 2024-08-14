import React from 'react';
import { Container, Typography, Grid, Divider, Box } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import servicesData from './data/services/servicesData';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

const Services = () => {
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
          Пайдалуу кызматтар
        </Typography>
        {Object.entries(servicesData).map(([category, services]) => (
          <Box key={category} sx={{ marginBottom: '3rem' }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              align="center"
              sx={{ marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}
            >
              {category}
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ margin: '3rem 0', borderColor: '#ccc' }} />
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Services;
