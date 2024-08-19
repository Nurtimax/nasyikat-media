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

const SurahList = () => {
  return (
    <Box
      sx={{ padding: { xs: '16px', sm: '20px' }, backgroundColor: '#f0f4f8' }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: { xs: '16px', sm: '24px' } }}
      >
        Намазга керектүү 10 кыска сүрө
      </Typography>
      <Grid container spacing={2}>
        {surahs.map((surah, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 3,
                borderRadius: '8px',
              }}
            >
              <Box
                sx={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <IconButton color="primary" sx={{ mb: 2 }}>
                  {surah.icon}
                </IconButton>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {surah.name}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {surah.bismillah}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: '#555' }}>
                    {surah.arabic}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: '#555' }}>
                    {surah.quran}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#777' }}>
                    {surah.transcription}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SurahList;
