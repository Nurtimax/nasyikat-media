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
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardContent
            sx={{
              textAlign: 'center',
              background: '#071c6b',
              color: '#c09b73',
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Изменение размера шрифта для мобильных устройств
                fontFamily: 'Georgia, serif',
              }}
            >
              ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              background: '#f6edde',
            }}
          >
            <Grid container spacing={2}>
              {kyrgyzaAlymdary.map((scholar, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Link to={scholar.link} style={{ textDecoration: 'none' }}>
                    <Card
                      sx={{
                        maxWidth: '100%',
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
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          gutterBottom
                          sx={{
                            fontFamily: 'Georgia, serif',
                            color: '#333',
                            fontSize: { xs: '1rem', sm: '1.2rem' }, // Изменение размера шрифта для мобильных устройств
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
                          fullWidth
                          sx={{
                            background: '#071c6b',
                            fontSize: { xs: '0.8rem', sm: '1rem' }, // Уменьшение размера шрифта кнопки для мобильных устройств
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
                height: '10px',
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
