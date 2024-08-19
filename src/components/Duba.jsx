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
    <Box sx={{ backgroundColor: '#f6edde', minHeight: '100vh' }}>
      <Header />
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '90px',
          padding: '0 20px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 4,
          }}
        >
          Дуба жакшылыктардын ачкычы, момундун куралы, диндин тиреги
        </Typography>
        {duaData.map((dua, index) => (
          <Accordion
            key={index}
            sx={{
              marginBottom: 2,
              borderRadius: '8px',
              boxShadow: 2,
              '&:before': { display: 'none' },
              backgroundColor: '#f6edde',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-content-${index}`}
              id={`panel-header-${index}`}
              sx={{
                backgroundColor: '#f6edde',
                borderBottom: '1px solid #ddd',
                borderRadius: '8px 8px 0 0',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                {dua.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: '#f6edde',
                borderRadius: '0 0 8px 8px',
                padding: '16px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  lineHeight: '1.6',
                  color: '#555',
                }}
              >
                {dua.text}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 1,
                  color: '#efefef',
                  background: '#071c6b',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              >
                Арабча: <br /> {dua.arabic}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 1,
                  color: '#efefef',
                  background: '#071c6b',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              >
                Транскрипция: <br /> {dua.transcription}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 1,
                  color: '#efefef',
                  background: '#071c6b',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              >
                Кыргызча мааниси: <br /> {dua.kyrgyz}
              </Typography>
              {dua.images && (
                <Box
                  sx={{
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={dua.images}
                    alt={`${dua.title}`}
                    style={{
                      maxWidth: '10%',
                      height: 'auto',
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
