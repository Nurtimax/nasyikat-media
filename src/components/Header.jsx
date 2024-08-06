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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, styled } from '@mui/system';
import { Instagram, Telegram, Verified } from '@mui/icons-material';
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
            { text: 'Тасбих', path: '/zikr' },
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '45vh',
              justifyContent: 'flex-end', // Располагает содержимое внизу
              padding: '0 16px', // Optional: add some horizontal padding
            }}
          >
            <ListItem
              sx={{
                borderTop: '1px solid #ddd',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 0', // Optional: add vertical padding
                backgroundColor: '#f9f9f9', // Same background color for consistency
              }}
            >
              <IconButton
                component="a"
                href="https://www.instagram.com/nasyikat.media/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#E4405F', // Instagram color
                  transition: 'color 0.3s, transform 0.3s',
                  '&:hover': {
                    color: '#C13584', // Darker Instagram color on hover
                    transform: 'scale(1.1)', // Scale up on hover
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://t.me/+SEJbmn8AwNViNmNi"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#0088cc', // Telegram color
                  transition: 'color 0.3s, transform 0.3s',
                  '&:hover': {
                    color: '#007ab8', // Darker Telegram color on hover
                    transform: 'scale(1.1)', // Scale up on hover
                  },
                }}
              >
                <Telegram />
              </IconButton>
            </Box>
          </Box>
        </List>
      </ResponsiveDrawer>
    </div>
  );
};

export default Header;
