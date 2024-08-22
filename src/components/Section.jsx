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
    <Grid container justifyContent="center" sx={{ padding: 0, margin: 0 }}>
      <Grid item xs={12} sx={{ padding: 0, margin: 0 }}>
        <div
          sx={{
            width: '100%',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            backgroundColor: '#f6edde', // Добавлен фоновый цвет для всей карточки
          }}
        >
          <CardContent
            sx={{
              textAlign: 'center',
              background: '#071c6b',
              color: '#c09b73',
              padding: { xs: '12px 0', sm: '16px 0' },
              margin: 0,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                fontFamily: 'Georgia, serif',
                margin: 0,
              }}
            >
              ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              padding: 0,
              margin: { xs: '0.2em', sm: '0.3em' },
              backgroundColor: '#f6edde', // Добавлен фоновый цвет для контентной части
            }}
          >
            <Grid container spacing={0.5} sx={{ margin: 0, padding: 0 }}>
              {kyrgyzaAlymdary.map((scholar, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  sx={{ padding: { xs: '0.2em', sm: '0.5em' } }}
                >
                  <Link to={scholar.link} style={{ textDecoration: 'none' }}>
                    <Card
                      sx={{
                        maxWidth: '100%',
                        boxShadow: 3,
                        borderRadius: 2,
                        marginBottom: { xs: '1rem', sm: '0.5rem' },
                        backgroundColor: '#f6edde', // Добавлен фоновый цвет для карточек
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={scholar.img}
                        alt={scholar.name}
                        sx={{
                          borderRadius: 1,
                          height: { xs: '180px', sm: '230px' },
                        }}
                      />
                      <CardContent
                        sx={{
                          textAlign: 'center',
                          padding: { xs: '8px', sm: '16px' },
                          backgroundColor: '#f6edde', // Добавлен фоновый цвет для контента карточки
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          gutterBottom
                          sx={{
                            fontFamily: 'Georgia, serif',
                            color: '#333',
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                          }}
                        >
                          {scholar.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          sx={{ margin: { xs: '4px 0', sm: '8px 0' } }}
                        >
                          Жараткан Аллах Таала биздин жана сиздин жакшы
                          амалдарыңызды кабыл кылсын
                        </Typography>
                        <Button
                          color="secondary"
                          variant="contained"
                          fullWidth
                          sx={{
                            background: '#071c6b',
                            fontSize: { xs: '0.7rem', sm: '1rem' },
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
          </CardContent>
        </div>
      </Grid>
    </Grid>
  );
};

export default Section;
