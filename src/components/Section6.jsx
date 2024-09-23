import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  ButtonBase,
  Button,
  Box,
  useTheme,
  Container,
} from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import muslim from './data/islam-3-yiyk-jer/muslimplace';

const Section6 = () => {
  const theme = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const getBorderColor = (index) => {
    if (index === 2) {
      // Красная граница для третьей карточки
      return theme.palette.error.main;
    } else {
      // Белая граница для первой и второй карточки
      return theme.palette.common.white;
    }
  };

  return (
    <Container maxWidth="100%">
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Мусулмандардын 3 ыйык жери
        </Typography>
      </Box>
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
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  border: `3px solid ${getBorderColor(index)}`, // Используем функцию для определения цвета границы
                  backgroundColor: theme.palette.grey[900],
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  '&:hover': {
                    boxShadow: theme.shadows[10],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    objectFit: 'cover',
                    filter: 'grayscale(100%) sepia(50%)',
                    transition: 'filter 0.3s',
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: 'center',
                    position: 'relative',
                    color: theme.palette.common.white,
                    background: 'rgba(0,0,0,0.6)',
                    padding: '16px',
                  }}
                >
                  <Typography variant="h5" component="h2" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: 'justify', textIndent: '2ch' }}
                  >
                    {card.description}
                  </Typography>
                  <Box mt={2}>
                    <Button fullWidth>Кененирээк</Button>
                  </Box>
                  <Box
                    mt={2}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    gap={1}
                    sx={{
                      fontSize: '0.75rem',
                      color: theme.palette.common.white,
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <LocationOn fontSize="small" />
                      {card.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <CalendarMonthIcon fontSize="small" />
                      {card.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <AccessTime fontSize="small" />
                      {formatTime(currentTime)}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          marginTop: '20px',
          img: {
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          },
        }}
      ></Box>
    </Container>
  );
};

export default Section6;
