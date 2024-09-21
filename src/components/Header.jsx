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
      width: '60%',
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
    backdropFilter: 'blur(8px)', // Adds a blur effect for better text contrast
  },
}));

const ResponsiveListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

const StyledAppBar = styled(AppBar)({
  backgroundImage: 'linear-gradient(to right, #071c6b, #304d9a)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // Adds a subtle shadow for depth
});

const Logo = styled(Typography)({
  flexGrow: 1,
  fontSize: '0.9rem',
  fontWeight: 'bold',
  textAlign: 'left',
  cursor: 'pointer',
  color: '#f6edde',
});

const BurgerMenu = styled(IconButton)(({ theme }) => ({
  color: '#e8b775',
  fontSize: '1.5rem',
  '&:hover': {
    color: '#ffffff', // Hover effect for icon
  },
}));

const DrawerFooter = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#161c2513',
  border: '1px solid #161c25',
  borderRadius: '0.5rem',
});

const FooterText = styled(Typography)({
  color: '#111111',
  fontSize: '0.9rem',
  marginTop: '8px',
  textAlign: 'center',
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

  const handleNavigation = (path, link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (path) {
      navigate(path);
    }
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
                  fontSize: '0.8rem',
                }}
              >
                NASYIKAT.MEDIA
              </Button>
              <Verified
                sx={{
                  marginBottom: '4px',
                  color: '#4ba9ed',
                }}
                fontSize="small"
              />
            </Box>
          </Logo>
          <BurgerMenu edge="end" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </BurgerMenu>
        </Toolbar>
      </StyledAppBar>
      <ResponsiveDrawer
        anchor="right"
        open={menuOpen}
        onClose={toggleDrawer(false)}
      >
        <List
          style={{
            color: '#111111',
            lineHeight: '1.7rem',
            padding: '10px',
          }}
        >
          {[
            { text: 'Башкы бет', path: '/app' },
            { text: 'Биз жөнүндө', path: '/aboutUs' },
            { text: 'Муаллим сани', path: '/MualimSani' },
            { text: 'Намаз убактысы', path: '/namaztimes' },
            { text: 'Исламда 40 парз', path: '/islamdynparzdary' },
            { text: 'Ислам деген эмне', path: '/islam' },
            { text: 'Электрондук китептер', path: '/books' },
            {
              text: 'Пайгамбарыбыздын с.а.в акыркы хутбасы',
              path: '/hutba',
            },
            { text: 'Кыргыз Республикасы', path: '/kyrgyz' },
            { text: 'Пайдалуу дубалар', path: '/duba' },
            { text: 'Куттуy Хадистер', path: '/hadis' },
            { text: 'Онлайн Дүкөн', path: '/store' },
            { text: 'Ал Жардам', path: '/aljardam' },
            { text: 'Сүрөлөр', path: '/onsuro' },
            { text: 'Курстар', path: '/islamiccourses' },
            { text: 'Тасбих', path: '/zikr' },
          ].map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleNavigation(item.path, item.link)}
              sx={{
                marginBottom: '15px',
                padding: '6px 10px',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s, transform 0.2s',
                '&:hover': {
                  backgroundColor: '#161c25b7',
                  transform: 'scale(1.02)',
                  color: '#f6ecde',
                },
              }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ResponsiveListItemText primary={item.text} />
            </ListItem>
          ))}
          <DrawerFooter>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                color="secondary"
                sx={{
                  textTransform: 'none',
                  padding: 0,
                  fontSize: '1rem',
                  marginLeft: '1.1rem',
                  color: '#161d23',
                }}
              >
                NASYIKAT.MEDIA
              </Typography>
              <Verified
                sx={{
                  marginLeft: '5px',
                  marginBottom: '4px',
                  color: '#47a8ed',
                }}
                fontSize="small"
              />
            </Box>
            <ListItemText
              secondary="Динге сый менен келбесең, ый менен келесиң!"
              secondaryTypographyProps={{
                fontSize: '1rem',
                color: 'black',
                textAlign: 'center',
              }}
            />
            <FooterText variant="body2">© Чубак ажы Жалилов (р.x)</FooterText>
          </DrawerFooter>
        </List>
      </ResponsiveDrawer>
      <ScrollToTopButton />
    </div>
  );
};

export default Header;
