import React, { useState } from 'react';
import { Container, Grid, Typography, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import Header from './Header';
import ProductCard from './ProductCard';
import products from './data/ProductCard/productdetails.js';

const CustomContainer = styled(Container)({
  padding: '0 !important', // Убираем отступы
  maxWidth: '100%', // Делаем контейнер на всю ширину
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
      <Select
        value={category}
        onChange={handleCategoryChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      >
        <MenuItem value="all">Все продукты</MenuItem>
        <MenuItem value="islamic">Исламские товары</MenuItem>
      </Select>
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
