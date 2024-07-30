import React, { useState } from 'react';
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
  Dialog,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from '@mui/material/Rating';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';

// Стиль для карточки продукта
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {},
}));

// Стиль для блока цены
const PriceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-block',
}));

// Стиль для кнопки
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(),
  borderRadius: '20px',
  width: '100%',
  backgroundColor: '#2196F3',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1976D2',
  },
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
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  mb: theme.spacing(2),
}));

// Стиль для блока соцсетей
const SocialLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

// Стиль для значка
const FeaturedBadge = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  marginLeft: theme.spacing(1),
}));

// Стиль для модального окна изображения
const ModalImageSlider = styled(Slider)(({ theme }) => ({
  '& .slick-slide img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

// Стиль для кнопки закрытия модального окна
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1,
  color: 'white',
  backgroundColor: '#00000099',
  '&:hover': {
    backgroundColor: '#000000cc',
  },
}));

// Стиль для модального окна
const ModalContent = styled(Box)(({ theme }) => ({
  height: '49vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

// Стиль для описания товара
const DescriptionBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
}));

// Компонент слайдера изображений
const ImageSlider = ({ images, onImageClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
          onClick={() => onImageClick(image)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </Slider>
  );
};

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledCard>
        <ImageSlider images={product.images} onImageClick={handleImageClick} />
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
                Баасы {product.price} som
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
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {product.storeName}
                  {product.isFeatured && (
                    <FeaturedBadge>
                      <VerifiedIcon fontSize="small" color="primary" />
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

      {/* Модальное окно для увеличенного изображения */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <ModalContent>
          <Box sx={{ position: 'relative', width: '100%', height: '90%' }}>
            <CloseButton onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </CloseButton>
            <ModalImageSlider
              dots={true}
              infinite={true}
              speed={600}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {product.images.map((image, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  alt={`zoomed product image ${index}`}
                  image={image}
                />
              ))}
            </ModalImageSlider>
          </Box>
          <DescriptionBox>
            <Typography variant="h6" component="div" gutterBottom>
              {product.description}
            </Typography>
          </DescriptionBox>
        </ModalContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
