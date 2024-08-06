import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  Rating,
  Avatar,
  Box,
  styled,
  CardMedia,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscountIcon from '@mui/icons-material/LocalOffer';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import { keyframes } from '@mui/system';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '600px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
}));

const PriceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-block',
  backgroundColor: '#f0f0f0',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: '20px',
  width: '100%',
  backgroundColor: '#2196F3',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1976D2',
  },
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#555',
  textAlign: 'center',
}));

const RatingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  mb: theme.spacing(2),
}));

const SocialLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

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

const ImageSlider = styled(Carousel)(({ theme }) => ({
  '& .slick-slide img': {
    width: '100%',
    height: '300px',
    objectFit: 'contain',
  },
  '& .slick-dots li button:before': {
    color: '#FF0000',
  },
  '& .slick-dots li.slick-active button:before': {
    color: '#FF0000',
  },
}));

const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: '#FFA500',
  borderRadius: '50%',
  padding: '8px',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const createWhatsAppMessage = (product, storeWhatsapp) => {
  const { name, price } = product;
  const message = `Ассаламу алейкум! ушул товарга буюртма берейин дедим эле:\n\nТовардын аты: ${name}\nбаасы: ${price} с. Буюртманы тактоо учун мени менен байланышсаңыз.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${storeWhatsapp}?text=${encodedMessage}`;
};

// ProductCard Component
function ProductCard({ product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOrderClick = () => {
    if (product.storeWhatsapp) {
      window.open(
        createWhatsAppMessage(product, product.storeWhatsapp),
        '_blank'
      );
    } else {
      alert('WhatsApp number is not provided for this product.');
    }
  };

  return (
    <StyledCard>
      {product.sale && (
        <DiscountBadge>
          <DiscountIcon sx={{ color: '#fff' }} />
        </DiscountBadge>
      )}
      <ImageSlider
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
            alt={`product image ${index}`}
            height="300"
            image={image}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </ImageSlider>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold', color: '#333' }}
        >
          {product.name}
        </Typography>
        <DescriptionTypography variant="body2">
          {product.description}
        </DescriptionTypography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <PriceBox>
            <Typography align="center" variant="h6" sx={{ fontWeight: 'bold' }}>
              Баасы {product.price} сом
            </Typography>
          </PriceBox>
          <RatingBox>
            <Rating
              name="product-rating"
              value={product.rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ color: '#FFB400' }}
            />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product.reviews} reviews)
            </Typography>
          </RatingBox>
        </Box>
        <InfoBox>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                alt="Store Avatar"
                src={product.storeAvatar}
                sx={{ width: 40, height: 40, border: '2px solid #2196F3' }}
              />
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
              <IconButton
                aria-label="whatsapp"
                href={`https://wa.me/${product.storeWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#25D366',
                  animation: `${pulseAnimation} 1.5s infinite`,
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            )}
            {product.storeInstagram && (
              <IconButton
                aria-label="instagram"
                href={`https://instagram.com/${product.storeInstagram}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#C13584',
                  animation: `${pulseAnimation} 1.5s infinite`,
                }}
              >
                <InstagramIcon />
              </IconButton>
            )}
            {product.storePhone && (
              <IconButton aria-label="phone" href={`tel:${product.storePhone}`}>
                <PhoneIcon />
              </IconButton>
            )}
          </SocialLinksBox>
        </InfoBox>
        <Box sx={{ mt: 2 }}>
          <StyledButton onClick={handleOrderClick}>Заказать</StyledButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    storeAvatar: PropTypes.string,
    storeName: PropTypes.string.isRequired,
    storeWhatsapp: PropTypes.string,
    storeInstagram: PropTypes.string,
    storePhone: PropTypes.string,
    sale: PropTypes.bool,
    isFeatured: PropTypes.bool,
  }).isRequired,
};

export default ProductCard;
