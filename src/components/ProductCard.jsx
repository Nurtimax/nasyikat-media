import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
  Tooltip,
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Divider,
  styled,
} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Verified, Close as CloseIcon } from '@mui/icons-material';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';

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

const SocialIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  margin: '20px 0',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 10,
});

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/details/${product.id}`, { state: { product } });
  };

  // const handleOrder = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOrderWhatsApp = () => {
    const message = `Привет! Я хочу заказать ${product.name}. Цена: ${product.price} сом.`;
    const url =
      product.links?.whatsapp + `?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    handleClose();
  };

  // Check if product.links is defined and has the necessary properties
  const instagramLink = product.links?.instagram || '#';
  const telegramLink = product.links?.telegram || '#';
  const whatsappLink = product.links?.whatsapp || '#';

  return (
    <>
      <StyledCard>
        {/* Image Slider */}
        {product.images && product.images.length > 0 && (
          <Box sx={{ position: 'relative' }}>
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
              onClick={handleDetails}
              style={{ width: '100%' }}
            >
              Толугураак
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <Box
          sx={{ position: 'relative', width: '100%', p: { xs: '10px', md: 0 } }}
        >
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <DialogContent sx={{ width: '100%' }}>
            {/* Image Slider */}
            {product.images && product.images.length > 0 && (
              <Box sx={{ position: 'relative', width: '100%' }}>
                <CustomCarousel
                  showArrows={true}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  dynamicHeight={false}
                  renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                      <IconButton
                        onClick={onClickHandler}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '10px',
                          zIndex: 2,
                          transform: 'translateY(-50%)',
                          fontSize: { xs: '28px', md: '40px' }, // Ideal size for mobile
                        }}
                      >
                        <KeyboardArrowLeftIcon />
                      </IconButton>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                      <IconButton
                        onClick={onClickHandler}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          right: '10px',
                          zIndex: 2,
                          transform: 'translateY(-50%)',
                          fontSize: { xs: '28px', md: '40px' }, // Ideal size for mobile
                        }}
                      >
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    )
                  }
                >
                  {product.images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      image={image}
                      alt={product.name}
                      sx={{
                        height: { xs: '250px', md: '350px' }, // Adjust height for mobile
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px', // Rounded corners for a modern look
                      }}
                    />
                  ))}
                </CustomCarousel>
              </Box>
            )}
            <Typography
              variant="h5"
              sx={{ marginY: 2, textAlign: 'center', width: '100%' }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginY: 1, textAlign: 'center', width: '100%' }}
            >
              {product.description}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button color="secondary">{product.price} сом</Button>
            </Typography>
            <SocialIcons
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: 2, // Add margin on top for better spacing
              }}
            >
              <Tooltip title="Instagram" arrow>
                <CustomIconButtonInstagram
                  component="a"
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <Instagram />
                </CustomIconButtonInstagram>
              </Tooltip>
              <Tooltip title="Telegram" arrow>
                <CustomIconButtonTelegram
                  component="a"
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <Telegram />
                </CustomIconButtonTelegram>
              </Tooltip>
              <Tooltip title="WhatsApp" arrow>
                <CustomIconButton
                  component="a"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <WhatsApp />
                </CustomIconButton>
              </Tooltip>
            </SocialIcons>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ width: '100%' }}>
            <Button
              onClick={handleOrderWhatsApp}
              variant="contained"
              color="primary"
              fullWidth
            >
              Буюртма берүү
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default ProductCard;

const CustomIconButton = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#25d366',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#128c7e',
  },
});

const CustomIconButtonTelegram = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#0088cc',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#005a87',
  },
});

const CustomIconButtonInstagram = styled(IconButton)({
  fontSize: 24,
  color: '#fff',
  backgroundColor: '#E1306C',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#A8254C',
  },
});
