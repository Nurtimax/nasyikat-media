import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import ProductCard from './ProductCard';
import products from './data/ProductCard/productdetails.js';

const Store = () => {
  const theme = useTheme();
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
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ marginTop: '40px', textAlign: 'center' }}
      >
        Исламский онлайн магазин
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        style={{ marginBottom: '20px' }}
      >
        <Grid item xs={12} sm={6}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            fullWidth
            style={{ marginBottom: isMobile ? '10px' : '0px' }}
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Поиск по названию"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchInputChange}
            style={{ marginBottom: isMobile ? '10px' : '0px' }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        {filteredProducts.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Store;
