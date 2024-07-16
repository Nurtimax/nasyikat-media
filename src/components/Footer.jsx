import React from 'react';
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Instagram, Verified, YouTube } from '@mui/icons-material';
import { Box, styled } from '@mui/system';

const FooterWrapper = styled('div')(({ theme }) => ({
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  padding: '10px 0',
  marginTop: '40px',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
  },
}));

const FooterRight = styled(Grid)(({ theme }) => ({
  textAlign: 'right',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                variant="h6"
                component="span"
                style={{ marginRight: '8px' }}
              >
                Nasyikat.media
              </Typography>
              <Verified color="primary" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterText variant="body2">
              © 2024 Бардык укук корголгон
            </FooterText>
          </Grid>
          <FooterRight item xs={12} sm={4}>
            <IconButton
              component={Link}
              href="https://www.instagram.com/nasyikat.media/"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Instagram />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.youtube.com/@nasyikat_media"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <YouTube />
            </IconButton>
          </FooterRight>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
