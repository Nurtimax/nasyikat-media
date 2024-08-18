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
import VerifiedIcon from '@mui/icons-material/Verified';
import { keyframes } from '@mui/system';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '800px',
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
}));

const PriceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f0f0f0',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#071c6b',
  color: '#fff',
  borderRadius: 8,
  textTransform: 'none',
  fontSize: '1.2rem',
  width: '100%',
  marginTop: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0a2278',
  },
}));

const WebsiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CAF50',
  color: '#fff',
  borderRadius: 8,
  textTransform: 'none',
  fontSize: '1.2rem',
  width: '100%',
  marginTop: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#45A049',
  },
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#555',
  textAlign: 'center',
  fontSize: '0.9rem',
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
  gap: theme.spacing(1),
  mb: theme.spacing(1),
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
  color: '#fff',
  marginLeft: theme.spacing(1),
}));

const ImageSlider = styled(Carousel)(({ theme }) => ({
  '& .slick-slide img': {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  '& .slick-dots': {
    bottom: '10px',
  },
  '& .slick-dots li': {
    margin: '0 4px',
  },
}));

const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: '#FF5722',
  borderRadius: '50%',
  padding: '8px',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const createWhatsAppMessage = (product, storeWhatsapp, about) => {
  const { name, price } = product;
  const message = `Ассаламу алейкум! ушул товарга буюртма берейин дедим эле:\n\nТовардын аты: ${name}\nбаасы: ${price} с. Буюртманы тактоо учун мени менен байланышсаңыз.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${storeWhatsapp}?text=${encodedMessage}`;
};

function ProductCard({ product }) {
  if (!product) {
    return <div>Кечиресиз мындай товар табылган жок</div>;
  }

  const instagramURL =
    product.category === 'books' ? 'kurzhun.shop' : 'arzanstore.ru';

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

  const handleWebsiteClick = () => {
    if (product.storeWebsite) {
      window.open(product.storeWebsite, '_blank');
    } else {
      alert('Website URL is not provided for this product.');
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
        autoplay={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
        arrows={true}
      >
        {product.images.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            alt={`product image ${index}`}
            image={image}
          />
        ))}
      </ImageSlider>
      <CardContent>
        <Typography
          variant="h5"
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
                variant="body1"
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
            <IconButton
              aria-label="instagram"
              href={`https://instagram.com/${instagramURL}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#C13584',
                animation: `${pulseAnimation} 1.5s infinite`,
              }}
            >
              <InstagramIcon />
            </IconButton>
          </SocialLinksBox>
        </InfoBox>
        <StyledButton onClick={handleOrderClick}>Заказать</StyledButton>
        <WebsiteButton onClick={handleWebsiteClick}>Наш веб-сайт</WebsiteButton>
      </CardContent>
    </StyledCard>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    storeName: PropTypes.string.isRequired,
    storeAvatar: PropTypes.string.isRequired,
    storeWhatsapp: PropTypes.string,
    storeWebsite: PropTypes.string,
    isFeatured: PropTypes.bool,
    sale: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductCard;
