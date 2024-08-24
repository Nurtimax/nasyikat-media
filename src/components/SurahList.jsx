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
import bgimg from '../assetts/icons/bacimg.png';
import { Verified } from '@mui/icons-material';

const SurahList = () => {
  return (
    <Box
      sx={{ padding: { xs: '16px', sm: '20px' }, backgroundColor: '#f1e3cc' }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: { xs: '16px', sm: '24px' } }}
      >
        Kыска сүрөлөр
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
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  backgroundImage: `url(${bgimg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'flex-end',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <IconButton color="primary" sx={{ mb: 2 }}>
                  {surah.icon}
                </IconButton>
                <CardContent sx={{ flexGrow: 1 }}>
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      color: '#f6edde',
                    }}
                  >
                    Nasyikat.media <Verified color="primary" fontSize="small" />
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SurahList;
