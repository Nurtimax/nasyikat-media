import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import meccaImage from '../assetts/images/alaksa.jpg'; // Подключите изображения

const Section6 = () => {
  const cards = [
    {
      title: 'Мекка',
      description: 'Описание Мекки, священного места в исламе.',
      image: meccaImage,
    },
    {
      title: 'Медина',
      description: 'Описание Медины, второго по священности места в исламе.',
      image: meccaImage,
    },
    {
      title: 'Аль-Акса',
      description: 'Описание Аль-Аксы, третьего по священности места в исламе.',
      image: meccaImage,
    },
  ];

  return (
    <div
      style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>3 важные места в исламе</h1>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section6;
