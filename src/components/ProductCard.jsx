import React, { useRef } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Verified, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

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

const ArrowButton = styled('button')(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: 30,
  height: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

const CustomCarousel = styled(Carousel)({
  '& .carousel .control-prev, .carousel .control-next': {
    display: 'none', // Hide default arrows
  },
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

const ProductCard = ({ product }) => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem + 1);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem - 1);
    }
  };

  const handleOrder = () => {
    const message = `Привет! Я хочу заказать ${product.name}. Цена: ${product.price} сом.`;
    const url = product.links.whatsapp + `?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <StyledCard>
      {/* Image Slider */}
      {product.images && product.images.length > 0 && (
        <Box sx={{ position: 'relative' }}>
          <ArrowButton onClick={handlePrev} style={{ left: 10 }}>
            <ArrowBackIos fontSize="small" />
          </ArrowButton>
          <ArrowButton onClick={handleNext} style={{ right: 10 }}>
            <ArrowForwardIos fontSize="small" />
          </ArrowButton>
          <CustomCarousel
            showArrows={false} // Disable default arrows
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            dynamicHeight={false}
            ref={carouselRef} // Attach the ref
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
        </Box>
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleOrder}
            style={{ width: '100%' }}
          >
            Заказать
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
