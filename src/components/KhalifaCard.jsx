import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Компонент карточки Халифа
const KhalifaCard = ({ image, title, text, detailPage }) => {
  const navigate = useNavigate(); // Используем useNavigate для навигации

  const handleClick = () => {
    navigate(detailPage); // Переход на детальную страницу
  };

  return (
    <Container maxWidth="100%">
      <Card
        sx={{
          maxWidth: 345,
          margin: '2rem auto',
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
          sx={{
            borderRadius: 2,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '285px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              marginTop: 2,
              width: '100%',
            }}
          >
            Окуу
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default KhalifaCard;
