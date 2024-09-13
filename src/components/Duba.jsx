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
    <Box sx={{ minHeight: '100vh' }}>
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
            color: '#efefef',
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
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-content-${index}`}
              id={`panel-header-${index}`}
              sx={{
                borderBottom: '1px solid #ddd',
                borderRadius: '8px 8px 0 0',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#efefef',
                }}
              >
                {dua.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderRadius: '0 0 8px 8px',
                padding: '16px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  lineHeight: '1.6',
                  color: '#efefef',
                }}
              >
                {dua.text}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 1,
                  color: '#161c25',
                  background: '#f6ecde',
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
                  color: '#161c25',
                  background: '#f6ecde',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              >
                Окулушу: <br /> {dua.transcription}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 1,
                  color: '#161c25',
                  background: '#f6ecde',
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
