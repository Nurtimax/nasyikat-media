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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Verified } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assetts/icons/as.jpg';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from './ScrollToTopButton';

const ResponsiveDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      width: '60%', // уменьшаем ширину для маленьких экранов
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ResponsiveListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', // уменьшаем шрифт для мобильных экранов
    },
  },
}));

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#071c6b',
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontSize: '0.8rem',
  fontWeight: 'bold',
  color: '#e8b775',
  textAlign: 'left',
});

const BurgerMenu = styled(IconButton)(({ theme }) => ({
  color: '#e8b775',
}));

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

  const handleNavHome = () => {
    navigate('/');
  };

  return (
    <div>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Logo onClick={handleNavHome}>
            <Box display="flex" justifyContent="start" alignItems="center">
              <Button
                style={{
                  color: '#f6edde',
                  fontFamily: "'Lora', serif",
                  fontSize: '0.9rem',
                }}
              >
                NASYIKAT.MEDIA
              </Button>
              <Verified color="primary" fontSize="small" />
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
            { text: 'Акыркы Хутба', path: '/hutba' },
            { text: 'Китебим Куран', path: '/quran' },
            { text: 'Исламда 40 парз', path: '/islamdynparzdary' },
            { text: 'Ислам деген эмне?', path: '/islam' },
            { text: 'Электрондук китептер', path: '/books' },
            { text: 'Пайдалуу дубалар', path: '/duba' },
            { text: 'Куттуy Хадистер', path: '/hadis' },
            { text: 'Онлайн Дүкөн', path: '/store' },
            { text: 'Ал Жардам', path: '/aljardam' },
            { text: 'Сүрөлөр', path: '/onsuro' },
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
              minHeight: '24vh',
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
                      fontSize: '0.9rem',
                      marginLeft: '1.5rem',
                    }}
                  >
                    Nasyikat.media
                  </Button>
                  <Verified
                    color="primary"
                    sx={{ marginLeft: '5px', marginBottom: '6px' }}
                    fontSize="small"
                  />
                </IconButton>
              </Box>
              <ListItemText
                secondary="Динге сый менен келбесең,  ый менен келесиң!"
                secondaryTypographyProps={{
                  fontStyle: 'initial',
                  fontSize: '0.9rem',
                }}
              />
              <Typography variant="body2">© Чубак ажы Жалилов (р.x)</Typography>
            </ListItem>
          </Box>
        </List>
      </ResponsiveDrawer>
      <ScrollToTopButton />
    </div>
  );
};

export default Header;
