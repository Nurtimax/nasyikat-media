import React from 'react';
import { Toolbar, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledNavList = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'space-around',
  padding: 0,
  margin: 10,
  '@media (max-width: 600px)': {
    flexDirection: 'row',
    WebkitOverflowScrolling: 'touch',
  },
});

const StyledNavItem = styled('li')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledNavLink = styled('button')({
  background: 'none',
  border: 'none',
  textDecoration: 'none',
  color: '#000000',
  cursor: 'pointer',
  fontSize: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
    color: 'green',
  },
});

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Toolbar style={{ marginTop: '80px' }}>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink onClick={() => handleNavigation('/islam')}>
            Islam
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => handleNavigation('/quran')}>
            Quran
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => handleNavigation('/hadis')}>
            Hadis
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => handleNavigation('/duba')}>
            Duba
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink onClick={() => handleNavigation('/store')}>
            Store
          </StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </Toolbar>
  );
};

export default NavBar;
