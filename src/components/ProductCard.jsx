import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Verified } from '@mui/icons-material';

// Styled components
const StyledCard = styled(Card)({
  height: '100%',
  position: 'relative',
});

const Avatar = styled('img')({
  borderRadius: '50%',
  width: 40,
  height: 40,
  marginRight: 10,
});

const CustomCarousel = styled(Carousel)({
  '& .carousel .control-dots': {
    bottom: 10,
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  '& .carousel .control-dots .dot': {
    backgroundColor: '#000',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 4px',
  },
  '& .carousel .control-dots .dot.active': {
    backgroundColor: '#1976d2',
  },
  '& .carousel .control-prev, .carousel .control-next': {
    display: 'none',
  },
  '& .carousel .slide': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .carousel .slide img': {
    height: '300px',
    width: 'auto',
    objectFit: 'cover',
  },
});

const SocialIconButton = styled(IconButton)({
  color: '#000',
  '&:hover': {
    color: '#1976d2',
  },
});

const ProductCard = ({ product }) => {
  const handleOrder = () => {
    const message = `Привет! Я хочу заказать ${product.name}. Цена: ${product.price} сом.`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <StyledCard>
      {/* Image Slider */}
      {product.images && product.images.length > 0 && (
        <CustomCarousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={false}
        >
          {product.images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              image={image}
              alt={product.name}
              sx={{ height: '300px', width: 'auto', objectFit: 'cover' }}
            />
          ))}
        </CustomCarousel>
      )}
      {/* Content */}
      <CardContent>
        {/* Avatar and Brand Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar src={product.avatar} alt={product.brandName} />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
          >
            {product.brandName}
            {/* Verified Badge */}
            {product.verified && (
              <Tooltip title="Verified Brand" arrow>
                <Verified
                  color="primary"
                  sx={{ marginLeft: 1 }}
                  fontSize="small"
                />
              </Tooltip>
            )}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          {product.price} сом
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <SocialIconButton
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </SocialIconButton>
            <SocialIconButton
              href="https://t.me"
              target="_blank"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </SocialIconButton>
            <SocialIconButton
              href="https://wa.me"
              target="_blank"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </SocialIconButton>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOrder}
            style={{ width: '80%' }}
          >
            Заказать
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
