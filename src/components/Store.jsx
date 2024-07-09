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

      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Исламский онлайн магазин
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            fullWidth
            displayEmpty
            sx={{
              minWidth: isMinWidth280 ? '100%' : '280px',
              width: isMobile ? '250px' : '100%',
              marginLeft: isMobile ? 'auto' : 0,
              marginRight: isMobile ? 'auto' : 0,
            }}
          >
            <MenuItem value="all">Все продукты</MenuItem>
            <MenuItem value="books">Книги</MenuItem>
            <MenuItem value="namaz">Для намаза</MenuItem>
            <MenuItem value="mens-accessories">Мужские аксессуары</MenuItem>
            <MenuItem value="womens-accessories">Женские аксессуары</MenuItem>
            <MenuItem value="home">Товары для дома</MenuItem>
            <MenuItem value="car">Товары для машины</MenuItem>
            <MenuItem value="study">Товары для учебы</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <TextField
            label="Поиск по названию"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchInputChange}
            sx={{
              minWidth: isMinWidth280 ? '100%' : '280px',
              width: isMobile ? '250px' : '100%',
              marginLeft: isMobile ? 'auto' : 0,
              marginRight: isMobile ? 'auto' : 0,
            }}
          />
        </Grid>
      </Grid>
      <Box my={4}>
        <Grid container spacing={3} justifyContent="center">
          {filteredProducts.map((product, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={2}
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
    </>
  );
};

export default Store;
