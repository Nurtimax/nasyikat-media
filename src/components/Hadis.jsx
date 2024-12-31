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

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingBottom: '40px',
  padding: '1rem',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '20px',
  },
}));
const AccordionBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingBottom: '40px',
  marginTop: '80px',
  background: 'linear-gradient(to bottom, #16222a, #3a6073)', // Gradient
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '20px',
    marginTop: '60px',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#1b2735',
  color: '#f4e9db',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow
  borderRadius: '12px',
  margin: '10px 0',
  '&::before': {
    display: 'none', // Remove default MUI accordion line
  },
  '&:hover': {
    backgroundColor: '#253343',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#253343',
  color: '#f4e9db',
  borderRadius: '12px 12px 0 0',
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#31485b',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  backgroundColor: '#16222a',
  borderRadius: '0 0 12px 12px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

const Hadis = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header />
      <Content>
        <AccordionBackground>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              marginTop: '90px',
              fontWeight: 'bold',
              color: '#f4e9db',
              fontSize: {
                xs: '1.5rem',
                sm: '1.8rem',
                md: '2.5rem',
              },
              fontFamily: 'Amiri, serif', // Elegant font
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            }}
          >
            КУТТУУ ХАДИСТЕР
          </Typography>
          {hadisContent.map((item, index) => (
            <StyledAccordion key={index}>
              <StyledAccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: '#f4e9db', fontSize: '1.8rem' }}
                  />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#f4e9db',
                    fontFamily: 'Amiri, serif',
                  }}
                >
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
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
                      color: '#f4e9db',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {item.content}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 1,
                      color: '#c0c0c0',
                      fontFamily: 'Noto Sans, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    {item.src}
                  </Typography>
                </Box>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </AccordionBackground>
      </Content>
      <Footer />
    </Container>
  );
};

export default Hadis;
