import React, { useState } from 'react';
import { Container, Grid, Typography, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import Header from './Header';
import ProductCard from './ProductCard';
import products from './data/ProductCard/productdetails.js';

const CustomContainer = styled(Container)({
  padding: '0 !important',
  maxWidth: '100%',
});

const Store = () => {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts =
    category === 'all'
      ? products
      : products.filter((product) => product.category === category);

  return (
    <CustomContainer>
      <Header />
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ marginTop: '80px', textAlign: 'center' }}
      >
        Исламский онлайн магазин
      </Typography>
      <Container maxWidth="sm" style={{ marginBottom: '20px' }}>
        <Select
          value={category}
          onChange={handleCategoryChange}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="all">Все продукты</MenuItem>
          <MenuItem value="books">Книги </MenuItem>
          <MenuItem value="namaz">Для намаза </MenuItem>
          <MenuItem value="mens-accessories">Мужские аксессуары</MenuItem>
          <MenuItem value="womens-accessories">Женские аксессуары</MenuItem>
          <MenuItem value="home">Товары для дома</MenuItem>
          <MenuItem value="car">Товары для машины</MenuItem>
          <MenuItem value="study">Товары для учебы</MenuItem>
        </Select>
      </Container>
      <Grid container justifyContent="center" spacing={2}>
        {filteredProducts.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default Store;
