import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  TextField,
  useMediaQuery,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import ProductCard from './ProductCard';
import products from './data/ProductCard/productdetails.js';
import Welcome from '../components/Welcome';
import styled from '@mui/material/styles/styled';
import Footer from './Footer.jsx';

const StyledSelect = styled(Select)(({ theme, isMinWidth280, isMobile }) => ({
  minWidth: isMinWidth280 ? '100%' : '280px',
  width: isMobile ? '250px' : '100%',
  marginLeft: isMobile ? 'auto' : 0,
  marginRight: isMobile ? 'auto' : 0,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    '& fieldset': {
      borderColor: '#9d9d9d',
    },
    '&:hover fieldset': {
      borderColor: '#2196F3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2196F3',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#666',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#2196F3',
  },
}));

// Styled container for the banner
const BannerContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  background: 'linear-gradient(135deg, #2196F3, #21CBF3)', // Gradient background
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
}));

// Styled Typography for the banner text
const BannerText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
}));

const Store = () => {
  const theme = useTheme();
  const isMinWidth280 = useMediaQuery('(min-width:280px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    filterProducts(selectedCategory, searchTerm);
  };

  const handleSearchInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterProducts(category, term);
  };

  const filterProducts = (selectedCategory, term) => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (term.trim() !== '') {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header />
      <Welcome />
      <BannerContainer>
        <BannerText gutterBottom>
          <Box my={4} textAlign="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Nasyikat.store
            </Typography>
          </Box>
        </BannerText>
      </BannerContainer>
      <StyledGrid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledSelect
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            fullWidth
            displayEmpty
            isMinWidth280={isMinWidth280}
            isMobile={isMobile}
          >
            <MenuItem value="all">Бардык товарлар</MenuItem>
            <MenuItem value="books">Кыргызча китептер</MenuItem>
            <MenuItem value="namaz">Ибадат</MenuItem>
            <MenuItem value="mens">Эркектерге</MenuItem>
            <MenuItem value="womens">Аялдарга</MenuItem>
            <MenuItem value="home">Үй буюмдары</MenuItem>
            <MenuItem value="cars">Машинага керектүү буюмдар</MenuItem>
            <MenuItem value="study">Окуучулар </MenuItem>
          </StyledSelect>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <StyledTextField
            label="Издөө"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchInputChange}
            isMinWidth280={isMinWidth280}
            isMobile={isMobile}
          />
        </Grid>
      </StyledGrid>
      <Box my={4}>
        <Grid container spacing={2} justifyContent="center">
          {filteredProducts.map((product, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                paddingLeft: isMobile ? '5px' : '1px',
                paddingRight: isMobile ? '5px' : '8px',
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Store;
