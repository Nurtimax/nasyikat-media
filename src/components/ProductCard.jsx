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
  padding: theme.spacing(),
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  overflow: 'hidden',
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
  width: '100%', // Кнопка на всю ширину
  backgroundColor: '#2196F3', // Сделать кнопку более заметной
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
    height: 'auto',
  },
}));

// Стиль для кнопки закрытия модального окна
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 1,
  color: 'white',
}));

// Компонент слайдера изображений
const ImageSlider = ({ images, onImageClick }) => {
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
          onClick={() => onImageClick(image)} // Устанавливаем обработчик клика
          style={{ cursor: 'pointer' }}
        />
      ))}
    </Slider>
  );
};

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
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
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            padding: 0,
            backgroundColor: 'transparent',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
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
      </Dialog>
    </>
  );
};

export default ProductCard;
