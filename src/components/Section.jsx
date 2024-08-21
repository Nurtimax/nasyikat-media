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
      sx={{
        background: 'linear-gradient(to bottom, #f6edde, #e3d5bc)',
        padding: '20px 0',
      }}
    >
      <Grid item xs={12}>
        <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
          <CardContent
            sx={{
              textAlign: 'center',
              background: '#071c6b',
              color: '#c09b73',
              pb: 0,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{
                paddingBottom: '20px',
                fontFamily: 'Georgia, serif',
              }}
            >
              ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="30"
            image={img}
            alt="Large Card"
            sx={{
              height: '30px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 1,
            }}
          />
          <CardContent
            sx={{
              padding: '1rem',
              background: '#f6edde',
            }}
          >
            <Grid container spacing={3}>
              {kyrgyzaAlymdary.map((scholar, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Link to={scholar.link} style={{ textDecoration: 'none' }}>
                    <Card
                      sx={{
                        maxWidth: '100%',
                        margin: '0 auto',
                        boxShadow: 3,
                        borderRadius: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="230"
                        image={scholar.img}
                        alt={scholar.name}
                        sx={{ borderRadius: 1 }}
                      />
                      <CardContent
                        sx={{
                          textAlign: 'center',
                          background: '#d9d9d9',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          gutterBottom
                          sx={{
                            fontFamily: 'Georgia, serif',
                            color: '#333',
                          }}
                        >
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
                        <Button
                          color="secondary"
                          variant="contained"
                          sx={{
                            background: '#071c6b',
                            '&:hover': {
                              background: '#071d6bd6',
                            },
                          }}
                        >
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
              height="10"
              image={img}
              alt="Large Card"
              sx={{
                height: '20px',
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
