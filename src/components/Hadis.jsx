import React from 'react';
import Header from '../components/Header';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import hadisContent from './data/hadister/hadis';
import Footer from '../components/Footer';

const AccordionBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingBottom: '40px',
  marginTop: '80px',
  backgroundImage: 'linear-gradient(to bottom, #ffffff, #f2f2f2)',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '20px',
    marginTop: '60px',
  },
}));

const Hadis = () => {
  const theme = useTheme();

  return (
    <div>
      <AccordionBackground>
        <Header />
        <Typography variant="h4" align="center" gutterBottom>
          Куттуу хадистер
        </Typography>
        {hadisContent.map((item, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column',
                  textAlign: 'center',
                },
              }}
            >
              <img
                src={item.image}
                alt="Content"
                style={{
                  marginRight: theme.breakpoints.up('sm') ? '5px' : '0',
                  marginBottom: theme.breakpoints.down('sm') ? '20px' : '0',
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
              <Box
                sx={{
                  marginLeft: theme.breakpoints.down('sm') ? '0' : '20px',
                  maxWidth: '100%',
                  textAlign: 'left',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 1,
                    textAlign: 'center',
                    fontFamily: 'inherit',
                    fontWeight: 'bold',
                  }}
                >
                  {item.content}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ textAlign: 'center', fontFamily: 'fantasy' }}
                >
                  {item.src}
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionBackground>
      <Footer />
    </div>
  );
};

export default Hadis;
