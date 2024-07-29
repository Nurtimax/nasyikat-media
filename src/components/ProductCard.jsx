import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Avatar,
  Link,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from '@mui/material/Rating';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star'; // иконка для синего значка

// Стиль для карточки продукта
const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  width: '100%',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  overflow: 'hidden',
}));

// Стиль для блока цены
const PriceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-block',
}));

// Стиль для кнопки
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  borderRadius: '20px',
  width: '100%', // Кнопка на всю ширину
}));

// Стиль для блока рейтинга и отзывов
const RatingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Стиль для блока соцсетей и аватара
const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Выравнивание по бокам
  gap: theme.spacing(2), // Отступы между элементами
  mb: theme.spacing(2),
}));

// Стиль для блока соцсетей
const SocialLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5), // Отступы между иконками
}));

// Стиль для значка
const FeaturedBadge = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#2196F3', // Синий цвет
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '14px',
  marginLeft: theme.spacing(1),
}));

// Компонент слайдера изображений
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
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom align="center">
          {product.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <PriceBox>
            <Typography variant="h6" align="center">
              {product.price} som
            </Typography>
          </PriceBox>
          <RatingBox>
            <Rating
              name="product-rating"
              value={product.rating}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product.reviews} reviews)
            </Typography>
          </RatingBox>
        </Box>
        <InfoBox>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar alt="Store Avatar" src={product.storeAvatar} />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ display: 'flex' }}
              >
                Store: {product.storeName}
                {product.isFeatured && (
                  <FeaturedBadge>
                    <StarIcon fontSize="small" />
                  </FeaturedBadge>
                )}
              </Typography>
            </Grid>
          </Grid>
          <SocialLinksBox>
            {product.storeWhatsapp && (
              <Link
                href={`https://wa.me/${product.storeWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </Link>
            )}
            {product.storeInstagram && (
              <Link
                href={`https://instagram.com/${product.storeInstagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
            )}
            {product.storePhone && (
              <Link href={`tel:${product.storePhone}`}>
                <PhoneIcon />
              </Link>
            )}
          </SocialLinksBox>
        </InfoBox>
        <Box sx={{ mt: 2 }}>
          <StyledButton>Order</StyledButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
