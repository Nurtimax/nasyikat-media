import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import duaData from './data/dubalar/duba';
import Header from '../components/Header';

const Duba = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '90px' }}>
      <Header />
      {duaData.map((dua, index) => (
        <Accordion key={index} sx={{ marginBottom: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content-${index}`}
            id={`panel-header-${index}`}
          >
            <Typography variant="h6">{dua.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'block' }}>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              {dua.text}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Арабча: {dua.arabic}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Транскрипция: {dua.transcription}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Кыргызча мааниси: {dua.kyrgyz}
            </Typography>
            {dua.images && (
              <div style={{ marginTop: '10px' }}>
                <img
                  src={dua.images}
                  alt={`${dua.title}`}
                  style={{
                    margin: '5px',
                    maxWidth: '20%',
                    borderRadius: '5px',
                  }}
                />
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Duba;
