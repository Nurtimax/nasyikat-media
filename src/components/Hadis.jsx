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
  backgroundImage: 'linear-gradient(to bottom, #f4eadb, #f4eadbd0)',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '20px',
    marginTop: '60px',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: '12px',
  backgroundColor: '#f4eadb',
  border: '1px solid #f4eadb',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#f4eadb',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#f4eadb',
  borderBottom: '1px solid #f4eadbe5',
  borderRadius: '12px 12px 0 0',
  padding: theme.spacing(2),
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#eeddc4b5',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Ensure column layout for centering
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  textAlign: 'center', // Center text on all screens
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', // Row layout for larger screens
    textAlign: 'left', // Align text to the left on larger screens
  },
}));

const Hadis = () => {
  const theme = useTheme();

  return (
    <AccordionBackground>
      <Header />
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#333',
          mb: 2,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
        }}
      >
        Куттуу хадистер
      </Typography>
      {hadisContent.map((item, index) => (
        <StyledAccordion key={index}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              {item.title}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <img
              src={item.image}
              alt="Content"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: theme.breakpoints.down('sm') ? '20px' : '0',
              }}
            />
            <Box
              sx={{
                marginTop: theme.breakpoints.down('sm') ? '10px' : '0',
                maxWidth: '100%',
                textAlign: 'center', // Center text on all screens
                [theme.breakpoints.up('md')]: {
                  marginLeft: '20px',
                  textAlign: 'left', // Left align text on larger screens
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  lineHeight: '1.8',
                  color: '#444',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                {item.content}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 1,
                  color: '#555',
                  fontFamily: 'fantasy',
                }}
              >
                {item.src}
              </Typography>
            </Box>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
      <Footer />
    </AccordionBackground>
  );
};

export default Hadis;
