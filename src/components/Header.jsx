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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMenuOpen(open);
  };

  return (
    <div>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Logo variant="h6">
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
          {['Islam', 'Quran', 'Hadis', 'Dua', 'Store'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
