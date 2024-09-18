import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  CardMedia,
  Button,
  IconButton,
  Tooltip,
  Divider,
  Grid,
  Container,
} from '@mui/material';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import styled from 'styled-components';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Получение данных продукта из состояния

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);

  const handleOrderWhatsApp = () => {
    const message = `Привет! Я хочу заказать ${product.name}. Цена: ${product.price} сом.`;
    const url =
      product.links?.whatsapp + `?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!product) {
    return <Typography>Товар не найден</Typography>;
  }

  return (
    <div>
      <Header />
      <Welcome />
      <Container
        elevation={4}
        sx={{
          padding: '10px',
          borderRadius: '20px',
          maxWidth: '1200px',
          marginTop: '1rem',
        }}
      >
        <Grid container spacing={4}>
          {/* Основное изображение */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '15px',
                overflow: 'hidden',
                cursor: 'zoom-in',
              }}
            >
              <CardMedia
                component="img"
                image={selectedImage}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '500px',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Миниатюрные изображения */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                paddingTop: '10px',
              }}
            >
              {product.images.map((image, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={image}
                  alt={`${product.name} thumbnail ${index}`}
                  onClick={() => setSelectedImage(image)}
                  sx={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    borderRadius: '10px',
                  }}
                  loading="lazy"
                />
              ))}
            </Box>
          </Grid>

          {/* Детали продукта */}
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: '0 10px' }}>
              {/* Название продукта */}
              <Typography
                variant="h4"
                component="h1"
                sx={{ marginBottom: '10px', fontWeight: 'bold' }}
              >
                {product.name}
              </Typography>

              {/* Информация о наличии */}
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  color: product.available ? 'green' : 'red',
                  marginBottom: '20px',
                  fontWeight: 'bold',
                }}
              >
                {product.available ? 'В наличии' : 'Нет в наличии'}
              </Typography>

              {/* Описание продукта */}
              <Typography
                variant="body1"
                component="p"
                sx={{ marginBottom: '20px', lineHeight: 1.6 }}
              >
                {product.description}
              </Typography>

              <Divider sx={{ marginBottom: 3 }} />

              {/* Характеристики продукта */}
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Характеристики
                </Typography>
                <Box sx={{ marginTop: '10px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      Вес:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: 'right' }}
                    >
                      {product.kg || 'Не указано'}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      Цвет:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: 'right' }}
                    >
                      {product.color || 'Не указан'}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      Материал:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: 'right' }}
                    >
                      {product.material || 'Не указан'}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      Размер:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ flex: 1, textAlign: 'right' }}
                    >
                      {product.size || 'Не указан'}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Социальные сети */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  marginTop: '40px',
                }}
              >
                <Tooltip title="Instagram">
                  <CustomIconButtonInstagram
                    component="a"
                    href={product.links?.instagram || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </CustomIconButtonInstagram>
                </Tooltip>
                <Tooltip title="Telegram">
                  <CustomIconButtonTelegram
                    component="a"
                    href={product.links?.telegram || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Telegram />
                  </CustomIconButtonTelegram>
                </Tooltip>
                <Tooltip title="WhatsApp">
                  <CustomIconButton
                    component="a"
                    href={product.links?.whatsapp || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsApp />
                  </CustomIconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Кнопка заказа */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleOrderWhatsApp}
            sx={{ width: '50%' }}
          >
            Заказать
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;

// Styled Components
const CustomIconButton = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#25d366',
  '&:hover': {
    backgroundColor: '#128c7e',
  },
  transition: 'background-color 0.3s ease',
});

const CustomIconButtonTelegram = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#0088cc',
  '&:hover': {
    backgroundColor: '#005a87',
  },
  transition: 'background-color 0.3s ease',
});

const CustomIconButtonInstagram = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#E1306C',
  '&:hover': {
    backgroundColor: '#C13584',
  },
  transition: 'background-color 0.3s ease',
});
