import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from '@mui/material/Rating';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(0.4),
  width: '100%', // Set width to 100% for consistent card size
  boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.1)', // Shadow for card
  borderRadius: '10px', // Rounded corners
  overflow: 'hidden', // Prevent images from overflowing
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  borderRadius: '20px', // More pronounced button rounding
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem', // Adjust font size for smaller screens
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
          height="270"
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
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Price: {product.price} som
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <Rating
            name="product-rating"
            value={product.rating}
            precision={0.5}
            readOnly
          />{' '}
          <br />
          &nbsp; (Reviews: {product.reviews})
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <StyledButton>Order</StyledButton>
        </Grid>
        {product.sellerAvatar && (
          <Grid container justifyContent="center" alignItems="center">
            <Avatar alt="Seller Avatar" src={product.sellerAvatar} />
            <Typography variant="body2" color="text.secondary">
              Store: {product.storeName}
            </Typography>
          </Grid>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
