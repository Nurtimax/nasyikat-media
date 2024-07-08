import React from 'react';
import { Toolbar, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledNavList = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'center',
  padding: 0,
  margin: 10,
  '@media (max-width: 960px)': {
    margin: 40,
  },
  '@media (max-width: 570px)': {
    margin: 50,
  },
  '@media (max-width: 510px)': {
    margin: 60,
  },
  '@media (max-width: 490px)': {
    margin: 55,
  },
  '@media (max-width: 450px)': {
    margin: 50,
  },
  '@media (max-width: 430px)': {
    margin: 45,
  },
  '@media (max-width: 410px)': {
    margin: 40,
  },
  '@media (max-width: 390px)': {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 40,
  },
  '@media (max-width: 370px)': {
    margin: 35,
  },
  '@media (max-width: 350px)': {
    margin: 30,
  },
  '@media (max-width: 340px)': {
    margin: 25,
  },
  '@media (max-width: 320px)': {
    margin: 20,
  },
  '@media (max-width: 300px)': {
    margin: 15,
  },
  '@media (max-width: 280px)': {
    margin: 10,
    flexDirection: 'column',
  },
});

const StyledNavItem = styled('li')(({ theme }) => ({
  marginRight: theme.spacing(2),
  '@media (max-width: 600px)': {
    marginRight: 0,
    marginBottom: theme.spacing(1),
  },
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
  '@media (max-width: 600px)': {
    fontSize: '1.2rem',
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
