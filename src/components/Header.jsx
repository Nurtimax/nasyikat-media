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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, styled } from '@mui/system';
import { Verified } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
  },
}));

const ResponsiveListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '1rem', // Default font size for smaller screens
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem', // Font size for medium screens
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem', // Font size for larger screens
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem', // Font size for extra large screens
    },
  },
}));

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#18d5a2',
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontSize: '1.5em',
  fontWeight: 'bold',
});

const BurgerMenu = styled(IconButton)({
  color: '#000',
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

  return (
    <div>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Logo variant="h4">
            <Box display="flex" justifyContent="start" alignItems="center">
              <Typography
                variant="h6"
                component="span"
                style={{ marginRight: '8px' }}
              >
                Nasyikat.media
              </Typography>
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
            { text: 'Исламда 40 парз', path: '/islamdynparzdary' },
            { text: 'Ислам деген эмне?', path: '/islam' },
            { text: 'Китебим Куран', path: '/quran' },
            { text: 'Кутту Хадистер', path: '/hadis' },
            { text: 'Пайдалуу дубалар', path: '/duba' },
            { text: 'Онлайн Дүкөн', path: '/store' },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleNavigation(item.path)}
            >
              <ResponsiveListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </ResponsiveDrawer>
    </div>
  );
};

export default Header;
