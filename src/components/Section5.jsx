import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Styled Accordion component
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Example shadow style
  borderRadius: '8px',

  '& .MuiAccordionSummary-root': {
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ddd',
    marginBottom: -1,
    minHeight: 56,
    '&.Mui-expanded': {
      minHeight: 56,
    },
  },

  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },

  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const Section5 = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>dualar kuskacha</h1>
      </div>
      <div>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Заголовок раздела 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Содержимое раздела 1</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Заголовок раздела 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Содержимое раздела 2</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Заголовок раздела 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Содержимое раздела 3</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Заголовок раздела 4 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Содержимое раздела 4 </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Заголовок раздела 5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Содержимое раздела 5</Typography>
          </AccordionDetails>
        </StyledAccordion>
      </div>
    </div>
  );
};

export default Section5;
