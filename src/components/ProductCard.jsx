import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(2),
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
          height="300"
          image={image}
          style={{ marginLeft: '50px' }}
        />
      ))}
    </Slider>
  );
};

const ProductCard = ({ product }) => {
  return (
    <StyledCard style={{ justifyContent: 'start' }}>
      <ImageSlider images={product.images} />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price} с
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Рейтинг: {product.rating} (Отзывы: {product.reviews})
        </Typography>
      </CardContent>
      <Grid container justifyContent="space-between" alignItems="center">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <Button color="secondary">Secondary</Button>
        </IconButton>
      </Grid>
    </StyledCard>
  );
};

export default ProductCard;
