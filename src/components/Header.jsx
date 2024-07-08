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

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#84baf0',
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
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
        <List>
          {[
            { text: 'Башкы бет', path: '/app' },
            { text: 'Ислам деген эмне?', path: '/islam' },
            { text: 'Куран', path: '/quran' },
            { text: 'Хадис', path: '/hadis' },
            { text: 'Дуба', path: '/duba' },
            { text: 'Дүкөн', path: '/store' },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
