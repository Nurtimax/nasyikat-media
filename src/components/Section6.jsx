import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  ButtonBase,
  Button,
  Box,
} from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import muslim from './data/islam-3-yiyk-jer/muslimplace';

const Section6 = () => {
  return (
    <div
      style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Мусулмандардын 3 ыйык жери</h1>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {muslim.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ButtonBase
              component="a"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', height: '100%' }}
            >
              <Card style={{ width: '100%', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={card.title}
                  style={{ objectFit: 'cover' }}
                />
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {card.description}
                  </Typography>
                  <Box mt={2}>
                    <Button color="secondary" variant="contained">
                      Толугураак
                    </Button>
                  </Box>
                  <Box
                    mt={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <LocationOn fontSize="small" />
                    <Typography variant="body2" color="textSecondary">
                      {card.location}
                    </Typography>
                    <CalendarMonthIcon fontSize="small" />
                    <Typography variant="body2" color="textSecondary">
                      {card.date}
                    </Typography>
                    <AccessTime fontSize="small" />
                    <Typography variant="body2" color="textSecondary">
                      {card.time}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section6;
