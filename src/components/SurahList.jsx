import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import surahs from './data/quran/surah/suro';
import { Verified } from '@mui/icons-material';
import Footer from '../components/Footer';

const SurahList = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom marginBottom="1rem">
        Намазга керектүү кыска сүрөлөр
      </Typography>
      <Grid container spacing={2}>
        {surahs.map((surah, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: 3,
                borderRadius: '8px',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'flex-end',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <IconButton color="primary" sx={{ mb: 2 }}>
                  {surah.icon}
                </IconButton>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2, // Increased bottom margin for better spacing
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgb(255, 249, 214))',
                      padding: '8px', // Increased padding for better readability
                      borderRadius: '4px',
                      boxShadow: 1,
                      lineHeight: 1.4, // Improved line height for readability
                      color: '#161c25',
                    }}
                  >
                    {surah.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Amiri", serif',
                      fontSize: '1rem',
                      color: '#6f685b',
                      backgroundColor: '#fff8eb',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      mb: 1.5,
                    }}
                  >
                    {surah.bismillahMeaning}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2, // Increased bottom margin for better spacing
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgb(255, 249, 214))',
                      padding: '8px', // Increased padding for better readability
                      borderRadius: '4px',
                      boxShadow: 1,
                      lineHeight: 1.4, // Improved line height for readability
                      color: '#161c25',
                    }}
                  >
                    {surah.bismillah}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Amiri", serif',
                      fontSize: '1.25rem',
                      color: '#4a473f',
                      backgroundColor: '#fff8eb',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      mb: 1.5,
                    }}
                  >
                    {surah.arabic}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2, // Increased bottom margin for better spacing
                      color: '#777',
                      fontSize: '1.1rem',
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgb(255, 249, 214))',
                      padding: '8px', // Increased padding for better readability
                      borderRadius: '4px',
                      boxShadow: 1,
                      lineHeight: 1.4, // Improved line height for readability
                      fontFamily: '"Amiri", serif',
                    }}
                  >
                    {surah.transcription}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2, // Increased bottom margin for better spacing
                      color: '#555',
                      fontSize: '1rem',
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgb(255, 249, 214))',
                      padding: '8px', // Increased padding for better readability
                      borderRadius: '4px',
                      boxShadow: 1,
                      lineHeight: 1.4, // Improved line height for readability
                    }}
                  >
                    {surah.quran}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    backgroundColor: '#071c6b',
                    padding: '8px 16px',
                    borderRadius: '0 0 8px 8px',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      color: '#f6edde',
                    }}
                  >
                    <a
                      href="https://instagram.com/nasyikat.media"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#f6edde', textDecoration: 'none' }}
                    >
                      Nasyikat.media
                    </a>
                    <Verified fontSize="small" sx={{ color: '#4ba9ed' }} />
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '1rem' }}>
        <Footer />
      </div>
    </Box>
  );
};

export default SurahList;
