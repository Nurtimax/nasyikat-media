// CategoriesSection.js
import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ProductCard from './ProductCard';
import categories from '../components/data/ProductCard/categories.js'; // Adjust the path if necessary
import products from '../components/data/ProductCard/productdetails.js'; // Adjust the path if necessary

const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handler for category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category ? category.name : null);
  };

  // Determine which products to display
  const displayedProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f6edde',
        marginTop: '10px',
        color: 'black',
        overflowX: 'auto',
      }}
    >
      {/* Categories Header */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          marginBottom: '20px',
          width: '100%',
          justifyContent: 'space-around', // Space around categories
        }}
      >
        <Button
          key="all"
          onClick={() => handleCategoryClick(null)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '5px',
            padding: '5px',
            textTransform: 'none',
            fontSize: '0.5rem',
            borderRadius: '5px',
            width: '150px', // Adjust width as needed
            minWidth: '150px', // Ensure consistent width
          }}
        >
          <Box
            sx={{
              fontSize: '1.3rem',
              marginBottom: '5px',
              transition: 'color 0.3s ease',
            }}
          >
            🛒
          </Box>

          <Typography
            variant="caption"
            sx={{ textAlign: 'center', color: '#000000' }}
          >
            Бардык товарлар
          </Typography>
        </Button>
        {categories.map((category) => (
          <Button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '5px',
              padding: '5px',
              textTransform: 'none',
              fontSize: '0.5rem',
              fontWeight: 'bold',
              borderRadius: '5px',
              width: '120px', // Adjust width as needed
              minWidth: '120px', // Ensure consistent width
            }}
          >
            <Box
              sx={{
                fontSize: '1.3rem',
                marginBottom: '5px',
                transition: 'color 0.3s ease',
              }}
            >
              {category.icon}
            </Box>
            <Typography
              variant="caption"
              sx={{ textAlign: 'center', color: '#000000' }}
            >
              {category.name}
            </Typography>
          </Button>
        ))}
      </Box>

      {/* Products Display */}
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        {selectedCategory
          ? `Продукты в категории "${selectedCategory}"`
          : 'Все Продукты'}
      </Typography>
      <Grid container spacing={2}>
        {displayedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;
