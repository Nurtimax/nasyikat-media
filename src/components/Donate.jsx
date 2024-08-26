import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/system';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import donationImage from '../assetts/icons/logo-nasykat.png';
import Footer from '../components/Footer';

const DonateContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  background: 'linear-gradient(45deg, #4e663b, #4e663b, #4e663b, #4e663b)',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '400px',
  color: '#ffeacb',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    minHeight: 'auto',
  },
  '@keyframes gradient': {
    '0%': { backgroundPosition: '0% 0%' },
    '50%': { backgroundPosition: '100% 100%' },
    '100%': { backgroundPosition: '0% 0%' },
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

const Block = styled(Box)(({ theme }) => ({
  flex: 1,
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffeacb',
  textAlign: 'center',
  color: '#000',
  minWidth: '200px',
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1),
  },
}));

const ImageContainer = styled(Block)(({ theme }) => ({
  flexShrink: 0,
  backgroundColor: '#ffeacb',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  },
}));

const ProgressContainer = styled(Block)(({ theme }) => ({
  flexShrink: 0,
  backgroundColor: '#ffeacb',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
}));

const PercentageText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#1976d2',
}));

const CardInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  width: '100%',
  maxWidth: '1200px',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  cursor: 'pointer',
  position: 'relative',
  '& img': {
    maxWidth: '150px',
    height: 'auto',
    marginTop: '10px',
    transition: 'transform 0.9s',
    '&:hover': {
      transform: 'rotateY(360deg) scale(1.1)',
    },
  },
}));

const CopyIconButton = styled(IconButton)(({ theme }) => ({
  color: '#1976d2',
  '&:hover': {
    color: '#0d47a1',
    transform: 'scale(1.1)',
  },
  transition: 'all 0.3s ease',
}));

const Donate = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopy = () => {
    setOpenSnackbar(true);
  };

  const totalAmount = 100000;
  const collectedAmount = 6552;
  const percentage = Math.round((collectedAmount / totalAmount) * 100);

  return (
    <div>
      <DonateContainer>
        <Typography variant="h4" gutterBottom textAlign="center">
          Биздин каналга колдоо көрсөтүү
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          <strong>Садака жана жакшы иштер:</strong> <br /> Сиздин колдооңуз
          биздин ишибизди улантууга жана жаңы долбоорлорду ишке ашырууга жардам
          берет. Бул иш-сапарлардын жана кайрымдуулук иштеринин алкагында,
          сиздин көмөгүңүз чоң мааниге ээ. Чоң рахмат!
        </Typography>
        <ContentWrapper>
          <ImageContainer>
            <LogoWrapper>
              <img
                src={donationImage}
                alt="Donation"
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
            </LogoWrapper>
          </ImageContainer>
          <Block style={{ backgroundColor: '#ffeacb' }}>
            <Typography variant="h6">
              <strong>Салым кошуу</strong>
            </Typography>
            <Typography variant="body1">
              Сиздин колдооңуз биздин ишибизди улантууга жана жаңы долбоорлорду
              ишке ашырууга жардам берет. <br /> Көп рахмат!
            </Typography>
          </Block>
          <ProgressContainer>
            <Typography variant="h6" gutterBottom>
              <strong>Жыйналган сумма:</strong> <br /> {collectedAmount} сом (
              {percentage}%)
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <CircularProgress
                variant="determinate"
                value={percentage}
                size={80}
                thickness={4}
                sx={{ color: '#1976d2' }}
              />
              <PercentageText variant="h6">{percentage}%</PercentageText>
            </Box>
          </ProgressContainer>
        </ContentWrapper>
        <CardInputContainer>
          <Block style={{ backgroundColor: '#ffeacb' }}>
            <Typography variant="body1" gutterBottom>
              <strong>Банковский счет:</strong> <br /> Мбанк 1234 5678 9012 3456
              <br />
              <CopyToClipboard text="1234 5678 9012 3456" onCopy={handleCopy}>
                <CopyIconButton>
                  <ContentCopyIcon />
                </CopyIconButton>
              </CopyToClipboard>
            </Typography>
          </Block>

          <Block style={{ backgroundColor: '#ffeacb' }}>
            <Typography variant="body1" gutterBottom>
              <strong>Жыйналган суммасы:</strong> <br />
              {collectedAmount} сом
            </Typography>
          </Block>
        </CardInputContainer>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Реквизит көчүрүлдү!"
        />
      </DonateContainer>
      <Footer />
    </div>
  );
};

export default Donate;
