import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  ListItemText,
  Box,
  Grid,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assetts/icons/as.jpg';
import menuItems from '../utils/constants/menuitems.js';
import { Verified } from '@mui/icons-material';

// Custom Styled Drawer with background image
const ResponsiveDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Add subtle shadow for depth
    overflow: 'hidden', // Ensure background covers fully
  },
}));

// Logo Styling
const Logo = styled(Typography)({
  flexGrow: 1,
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'left',
  cursor: 'pointer',
  color: '#f6edde',
  textShadow: '1px 1px 2px rgba(0,0,0,0.3)', // Add text shadow for subtle depth
  letterSpacing: '1px',
});

// Burger Menu Icon Styling
const BurgerMenu = styled(IconButton)({
  color: '#e8b775',
  fontSize: '1.5rem',
  '&:hover': {
    color: '#e8b675af',
  },
});

// Header Component
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
  };

  return (
    <div>
      {/* AppBar with Gradient Background */}
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: 'linear-gradient(to right, #071c6b, #304d9a)',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.3)', // Shadow for depth
        }}
      >
        <Toolbar>
          <Logo onClick={() => handleNavigation('/')}>
            <Box display="flex" justifyContent="start" alignItems="center">
              <Typography
                style={{
                  color: '#f6edde',
                  fontFamily: "'Lora', serif",
                  fontSize: '0.9rem',
                }}
              >
                NASYIKAT.MEDIA
              </Typography>
              <Verified
                sx={{
                  marginBottom: '3px',
                  color: '#4ba9ed',
                  marginLeft: '5px',
                }}
                fontSize="small"
              />
            </Box>
          </Logo>
          <BurgerMenu edge="end" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: '1.9rem' }} />
          </BurgerMenu>
        </Toolbar>
      </AppBar>

      {/* Drawer for the Menu */}
      <ResponsiveDrawer
        anchor="right"
        open={menuOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          py={2}
          px="10px"
          display="grid"
          alignItems="center"
          sx={{ gridTemplateColumns: '1fr 4fr 1fr' }}
        >
          <Box
            component="img"
            src="/static/logo.jpg"
            alt=""
            sx={{
              width: '70%',
              aspectRatio: '1/1',
              borderRadius: '50%',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          />
          <Typography
            color="secondary"
            sx={{
              fontSize: '1rem',
              marginLeft: '1.1rem',
              color: '#161d23',
              fontWeight: '600',
            }}
          >
            NASYIKAT.MEDIA
          </Typography>

          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: 'black', height: '30px', width: '30px' }} />
          </IconButton>
        </Box>

        {/* Grid Layout for Menu Items */}
        <Grid container spacing={2} px={2}>
          {menuItems.map((item, index) => (
            <Grid item xs={6} md={12} key={index}>
              <ListItem
                button
                onClick={() => handleNavigation(item.path)}
                sx={{
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: '#f6f6f6',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.2s',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add shadow for depth
                  '&:hover': {
                    backgroundColor: '#161c25',
                    transform: 'scale(1.02)',
                    color: '#f6ecde',
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#4caf50',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#f6ecde',
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    textAlign: 'center',
                    color: '#111',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#f6ecde',
                    },
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </ResponsiveDrawer>
    </div>
  );
};

export default Header;
