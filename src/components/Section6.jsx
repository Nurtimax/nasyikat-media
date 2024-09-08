import React, { useRef, useEffect } from 'react';
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
import img from '../assetts/icons/section-img.png';
import soundFile from '../assetts/quran-audio/tawhid.mp3';

const Section6 = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      document.removeEventListener('hover', handleUserInteraction);
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Audio play error:', error);
        });
      }
    };
    document.addEventListener('hover', handleUserInteraction);

    return () => {
      document.removeEventListener('hover', handleUserInteraction);
    };
  }, []);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio play error:', error);
      });
    }
  };

  return (
    <div style={{ marginTop: '20px', margin: '0.4rem' }}>
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
              onMouseEnter={index === 2 ? handlePlaySound : null}
            >
              <Card
                style={{
                  width: '100%',
                  height: '100%',
                  ...(index === 2 && {
                    border: '3px solid red',
                    backgroundColor: '#3f3f3f',
                    boxShadow: '0px 0px 15px rgba(255, 0, 0, 0.687)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(135deg, rgba(255,0,0,0.5), rgb(255, 0, 0))',
                      zIndex: '1',
                    },
                  }),
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={card.title}
                  style={{
                    objectFit: 'cover',
                    ...(index === 2 && {
                      filter: 'grayscale(100%) sepia(100%)',
                      mixBlendMode: 'multiply',
                    }),
                  }}
                />
                <CardContent
                  style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: '2',
                    color: index === 2 ? '#fff' : 'inherit',
                    background: index === 2 ? 'rgba(0,0,0,0.7)' : 'inherit',
                  }}
                >
                  <Typography variant="h5" component="h2" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                  <Box mt={2}>
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
                      Кененирээк
                    </Button>
                  </Box>
                  <Box
                    mt={2}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    gap={1}
                    sx={{ fontSize: '0.5rem' }}
                  >
                    <Typography
                      variant="body6"
                      color="textSecondary"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: index === 2 ? '#fff' : 'inherit',
                      }}
                    >
                      <LocationOn fontSize="small" />
                      {card.location}
                    </Typography>
                    <Typography
                      variant="body6"
                      color="textSecondary"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: index === 2 ? '#fff' : 'inherit',
                      }}
                    >
                      <CalendarMonthIcon fontSize="small" />
                      {card.date}
                    </Typography>
                    <Typography
                      variant="body6"
                      color="textSecondary"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: index === 2 ? '#fff' : 'inherit',
                      }}
                    >
                      <AccessTime fontSize="small" />
                      {card.time}
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
            maxWidth: '100%',
            height: 'auto',
          },
        }}
      >
        <img src={img} alt="Section Illustration" />
      </Box>
      <audio ref={audioRef} src={soundFile} />
    </div>
  );
};

export default Section6;
