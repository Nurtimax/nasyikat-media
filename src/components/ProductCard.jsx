import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(),
  width: '97%',
  [theme.breakpoints.up('sm')]: {
    width: '96%',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(0.5, 1),
  },
}));

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <CardMedia
          key={index}
          component="img"
          alt={`product image ${index}`}
          height="250"
          image={image}
        />
      ))}
    </Slider>
  );
};

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <ImageSlider images={product.images} />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="div" noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price} с
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Рейтинг: {product.rating} (Отзывы: {product.reviews})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.sale ? `Скидка: ${product.sale}` : 'Без скидки'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Доставка: {product.delivery}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Магазин: {product.storeName}
        </Typography>
      </CardContent>
      <Grid container justifyContent="center" alignItems="center" pb={2}>
        <StyledButton color="secondary" variant="contained">
          Добавить в корзину
        </StyledButton>
      </Grid>
    </StyledCard>
  );
};

export default ProductCard;
