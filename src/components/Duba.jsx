import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import duaData from './data/dubalar/duba';
import Header from '../components/Header';
import Footer from './Footer';

const Duba = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #16222A, #3A6073)',
        color: '#ffffff',
        fontFamily: '"Cairo", sans-serif',
      }}
    >
      <Header />
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '0 20px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#e6e6e6',
            marginBottom: '40px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Дуба - бул жакшылыктардын ачкычы, момундун куралы, диндин тиреги
        </Typography>
        {duaData.map((dua, index) => (
          <Accordion
            key={index}
            sx={{
              marginBottom: 2,
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
              aria-controls={`panel-content-${index}`}
              id={`panel-header-${index}`}
              sx={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px 10px 0 0',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}
              >
                {dua.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderRadius: '0 0 10px 10px',
                padding: '20px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 2,
                  lineHeight: '1.8',
                  color: '#dcdcdc',
                }}
              >
                {dua.text}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 2,
                  color: '#2c3e50',
                  background: '#fef6e4',
                  borderRadius: '8px',
                  padding: '10px',
                  fontFamily: '"Amiri", serif',
                  fontSize: '1.2rem',
                  textAlign: 'right',
                }}
              >
                {dua.arabic}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 2,
                  color: '#2c3e50',
                  background: '#fef6e4',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                Окулушу: <br /> {dua.transcription}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 2,
                  color: '#2c3e50',
                  background: '#fef6e4',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                Кыргызча мааниси: <br /> {dua.kyrgyz}
              </Typography>
              {dua.images && (
                <Box
                  sx={{
                    marginTop: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={dua.images}
                    alt={`${dua.title}`}
                    style={{
                      maxWidth: '80%',
                      height: 'auto',
                      borderRadius: '10px',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Duba;
