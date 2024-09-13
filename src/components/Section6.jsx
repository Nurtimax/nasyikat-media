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
    <div style={{ margin: '20px 0.4rem' }}>
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
              onMouseEnter={index === 2 ? handlePlaySound : null}
            >
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  border: index === 2 ? '3px solid #f44336' : 'none',
                  backgroundColor: index === 2 ? '#333' : 'inherit',
                  boxShadow:
                    index === 2 ? '0px 4px 15px rgba(255, 0, 0, 0.7)' : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
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
                    filter: index === 2 ? 'grayscale(100%) sepia(50%)' : 'none',
                    transition: 'filter 0.3s',
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: 'center',
                    position: 'relative',
                    color: index === 2 ? '#fff' : 'inherit',
                    background: index === 2 ? 'rgba(0,0,0,0.6)' : 'inherit',
                    padding: '16px',
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
                        backgroundColor: '#071c6b',
                        fontSize: { xs: '0.7rem', sm: '1rem' },
                        '&:hover': {
                          backgroundColor: '#071d6bd6',
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
                    sx={{
                      fontSize: '0.75rem',
                      color: index === 2 ? '#fff' : 'inherit',
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
            height: 'auto',
            borderRadius: '8px',
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
