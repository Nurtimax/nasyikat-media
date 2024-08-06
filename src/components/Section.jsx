import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import kyrgyzaAlymdary from './data/ustazdar/aalymdar';

const Section = () => {
  return (
    <>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          textAlign: 'center',
        }}
      >
        ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {kyrgyzaAlymdary.map((scholar, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link to={scholar.link} style={{ textDecoration: 'none' }}>
              <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={scholar.img}
                  alt={scholar.name}
                  sx={{ borderRadius: 1 }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {scholar.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Аллах бизден жана сиздерден жакшы амалдардын кабыл кылсын
                  </Typography>
                  <Button color="secondary" variant="contained">
                    Видеолорду көрүү
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section;
