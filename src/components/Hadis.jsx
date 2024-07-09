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

const AccordionBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingBottom: '40px',
  marginTop: '80px',
  backgroundImage: 'linear-gradient(to bottom, #ffffff, #f2f2f2)',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '20px',
  },
}));

const Hadis = () => {
  const theme = useTheme();

  return (
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
            <Typography variant="h6">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: 'flex',
              alignItems: 'center',
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
                marginRight: theme.breakpoints.up('sm') ? '20px' : '0',
                marginBottom: theme.breakpoints.down('sm') ? '20px' : '0',
                maxWidth: theme.breakpoints.down('sm') ? '100%' : 'auto',
                display: theme.breakpoints.down('sm') ? 'block' : 'flex',
              }}
            />
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionBackground>
  );
};

export default Hadis;
