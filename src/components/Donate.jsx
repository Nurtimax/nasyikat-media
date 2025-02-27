import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  Snackbar,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/system';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import donationImage from '../assetts/icons/logo-nasykat.png';
import Footer from '../components/Footer';
import Contact from './Contact';
import imageMbank from '../assetts/icons/mbank.png';
import megapay from '../assetts/icons/megapay.svg';
import optimabank from '../assetts/icons/optima.png';
import bakaibank from '../assetts/icons/bakaibbank.png';

const DonateContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
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
  const collectedAmount = 17000;
  const percentage = Math.round((collectedAmount / totalAmount) * 100);

  return (
    <div>
      <DonateContainer>
        <Typography variant="h4" gutterBottom textAlign="center">
          Биздин каналга колдоо көрсөтүү
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          <strong>Урматтуу мусулман бир туугандар!</strong> <br /> Сиздерден
          которгон тыйындар биздин сайттын өнүгүүсүнө жумшалат. Аллах Таала
          сизден бизден ар бир кылган жакшы сооптуу амалдарыбызды кабыл кылсын!.
        </Typography>
        <ContentWrapper>
          <ImageContainer>
            <LogoWrapper>
              <img
                src={donationImage}
                alt="Donation"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                }}
              />
            </LogoWrapper>
          </ImageContainer>
          <Block style={{ backgroundColor: '#ffeacb' }}>
            <Typography variant="h6">
              <strong>Салым кошуу</strong>
            </Typography>
            <Typography variant="body1">
              Сиздердин салымыңыздар менен Кыргыз тилдүү диний сайт күн сайын
              өнүгүп турат. <br /> Чоң рахмат!
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
              <CardMedia
                component="img"
                image={imageMbank}
                style={{
                  maxWidth: '100px', // Ensure the image does not exceed 100px in width
                  width: 'auto', // Adjust width based on content
                  height: 'auto', // Adjust height based on content
                  marginBottom: '10px',
                }}
              />
              <p>0556....69</p>
              <CopyToClipboard text="556401369" onCopy={handleCopy}>
                <CopyIconButton>
                  <ContentCopyIcon />
                </CopyIconButton>
              </CopyToClipboard>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
              <CardMedia
                component="img"
                image={megapay}
                style={{
                  maxWidth: '100px', // Ensure the image does not exceed 100px in width
                  width: 'auto', // Adjust width based on content
                  height: 'auto', // Adjust height based on content
                  marginBottom: '10px',
                }}
              />
              <p>0556....69</p>
              <CopyToClipboard text="556401369" onCopy={handleCopy}>
                <CopyIconButton>
                  <ContentCopyIcon />
                </CopyIconButton>
              </CopyToClipboard>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
              <CardMedia
                component="img"
                image={optimabank}
                style={{
                  maxWidth: '100px', // Ensure the image does not exceed 100px in width
                  width: 'auto', // Adjust width based on content
                  height: 'auto', // Adjust height based on content
                  marginBottom: '10px',
                }}
              />
              <p>41....7383</p>
              <CopyToClipboard text="4169585355777383" onCopy={handleCopy}>
                <CopyIconButton>
                  <ContentCopyIcon />
                </CopyIconButton>
              </CopyToClipboard>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
              <CardMedia
                component="img"
                image={bakaibank}
                style={{
                  maxWidth: '100px', // Ensure the image does not exceed 100px in width
                  width: 'auto', // Adjust width based on content
                  height: 'auto', // Adjust height based on content
                  marginBottom: '10px',
                }}
              />
              <p>47....5629</p>
              <CopyToClipboard text="4714240005895629" onCopy={handleCopy}>
                <CopyIconButton>
                  <ContentCopyIcon />
                </CopyIconButton>
              </CopyToClipboard>
            </Typography>
          </Block>

          <Block style={{ backgroundColor: '#ffeacb' }}>
            <Typography variant="body1" gutterBottom>
              <strong>Жыйналган сумма:</strong> <br />
              {collectedAmount} сом
            </Typography>
          </Block>
        </CardInputContainer>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Kөчүрүлдү!"
        />
      </DonateContainer>
      <Contact />
      <Footer />
    </div>
  );
};

export default Donate;
