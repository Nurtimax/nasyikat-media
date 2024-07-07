import React from 'react';
import { Toolbar, styled } from '@mui/material';

const StyledNavList = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'space-between',
  padding: 0,
  margin: 0,
  flexDirection: 'none',
  '@media (max-width: 600px)': {
    flexDirection: 'row',
    WebkitOverflowScrolling: 'touch',
    margin: '10px',
  },
});

const StyledNavItem = styled('li')(({ theme }) => ({
  marginRight: theme.spacing(4),
}));

const StyledNavLink = styled('a')({
  textDecoration: 'none',
  color: '#000000',
  '&:hover': {
    textDecoration: 'underline',
    color: 'green',
  },
});

const NavBar = () => {
  return (
    <Toolbar style={{ marginTop: '80px' }}>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink href="#">Islam</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#">Quran</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#">Hadis</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#">Dua</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#">Store</StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </Toolbar>
  );
};

export default NavBar;
