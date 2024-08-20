import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  ListItemIcon,
  Snackbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Verified } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assetts/icons/bacimg.png';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import bgdialogimg from '../assetts/icons/bgsmall.png';
import ScrollToTopButton from './ScrollToTopButton';

const ResponsiveDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '75%',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const ResponsiveListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
    },
  },
}));

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#071c6b',
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#e8b775',
});

const BurgerMenu = styled(IconButton)({
  color: '#e8b775',
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Logo>
            <Box display="flex" justifyContent="start" alignItems="center">
              <div>
                <Button
                  onClick={handleClick}
                  style={{
                    color: '#f6edde',
                    marginRight: '5px',
                    fontFamily: "'Lora', serif",
                    fontWeight: 'bold',
                  }}
                >
                  NASYIKAT.MEDIA
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={8000}
                  onClose={handleClose}
                  action={
                    <IconButton
                      size="large"
                      color="inherit"
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        top: '1px',
                        right: '1px',
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  }
                  ContentProps={{
                    sx: {
                      backgroundImage: `url(${bgdialogimg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      color: '#fbe4c5',
                      borderRadius: '8px',
                      padding: '16px',
                      marginRight: 'auto',
                      position: 'relative',
                    },
                  }}
                  message={
                    <Box>
                      <Typography
                        style={{ textAlign: 'center', fontSize: '1.2rem' }}
                      >
                        Алланын элчисине салам - <br /> салаваттар болсун
                      </Typography>
                      <Typography
                        textAlign="center"
                        style={{ marginTop: '10px' }}
                      >
                        Аллохумма солли ьалаа Мухаммадин, ва аьлаа аали
                        Мухаммад, камаа соллайта ьалаа Иброхиима ва ьалаа аали
                        Иброхима, иннака хамиидум- мажиид. Аллохумма баарик
                        ьалаа Мухаммадин, ва аьлаа аали Мухаммад, камаа баарокта
                        ьалаа Иброхиима ва ьалаа аали Иброхима, иннака
                        хамиидум-мажиид
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        sx={{ marginTop: '15px' }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                        }}
                      >
                        Nasyikat.media
                        <Verified color="inherit" fontSize="small" />
                      </Typography>
                    </Box>
                  }
                />
              </div>
              <Verified color="primary" />
            </Box>
          </Logo>
          <BurgerMenu edge="end" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </BurgerMenu>
        </Toolbar>
      </StyledAppBar>
      <ResponsiveDrawer
        anchor="right"
        open={menuOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {[
            { text: 'Башкы бет', path: '/app' },
            { text: 'Биз жөнүндө', path: '/aboutUs' },
            { text: 'Китебим Куран', path: '/quran' },
            { text: 'Исламда 40 парз', path: '/islamdynparzdary' },
            { text: 'Ислам деген эмне?', path: '/islam' },
            { text: 'Электрондук китептер', path: '/books' },
            { text: 'Пайдалуу дубалар', path: '/duba' },
            { text: 'Куттуy Хадистер', path: '/hadis' },
            { text: 'Онлайн Дүкөн', path: '/store' },
            { text: 'Кызматтар', path: '/services' },
            { text: 'Он Сүрө', path: '/onsuro' },
            { text: 'Тасбих', path: '/zikr' },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleNavigation(item.path)}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ResponsiveListItemText primary={item.text} />
            </ListItem>
          ))}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '39vh',
              justifyContent: 'center',
              padding: '0 16px',
            }}
          >
            <ListItem
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '1rem',
                }}
              >
                <IconButton
                  component="a"
                  href="https://www.instagram.com/nasyikat.media/"
                  target="_blank"
                  sx={{
                    backgroundColor: 'transparent',
                    padding: 0,
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <Button
                    color="secondary"
                    sx={{
                      textTransform: 'none',
                      padding: 0,
                      fontSize: '1rem',
                    }}
                  >
                    {' '}
                    Nasyikat.media
                  </Button>
                  <Verified color="primary" sx={{ marginLeft: '8px' }} />
                </IconButton>
              </Box>
              <ListItemText
                secondary="Динге сый менен келбесең,  ый менен келесиң!"
                secondaryTypographyProps={{
                  fontStyle: 'initial',
                }}
              />
              <Typography variant="body6">© Чубак ажы Жалилов</Typography>
            </ListItem>
          </Box>
        </List>
      </ResponsiveDrawer>
      <ScrollToTopButton />
    </div>
  );
};

export default Header;
