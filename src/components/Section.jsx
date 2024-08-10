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
import img from '../assetts/icons/section-img.png';

const Section = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{
        background: '#f6edde',
      }}
    >
      <Grid item xs={12}>
        <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
          <CardContent
            sx={{ textAlign: 'center' }}
            style={{
              background: '#071c6b',
              color: '#c09b73',
              paddingBottom: 0,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              style={{
                paddingBottom: '20px',
                textAlign: 'center',
              }}
            >
              ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt="Large Card"
            sx={{
              height: '10px',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 1,
            }}
          />
          <CardContent
            sx={{ padding: '16px' }}
            style={{
              background: '#f6edde',
            }}
          >
            <Grid container spacing={2}>
              {kyrgyzaAlymdary.map((scholar, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Link to={scholar.link} style={{ textDecoration: 'none' }}>
                    <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
                      <CardMedia
                        component="img"
                        height="230"
                        image={scholar.img}
                        alt={scholar.name}
                        sx={{ borderRadius: 1 }}
                      />
                      <CardContent
                        sx={{ textAlign: 'center' }}
                        style={{
                          background: '#d9d9d9',
                        }}
                      >
                        <Typography variant="h5" component="div" gutterBottom>
                          {scholar.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          Аллах бизден жана сиздерден жакшы амалдардын кабыл
                          кылсын
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
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt="Large Card"
              sx={{
                height: '10px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 1,
                marginTop: '1.5rem',
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Section;
