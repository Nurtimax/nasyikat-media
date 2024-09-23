import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  IconButton,
  TextField,
  CardActions,
  Modal,
  Box,
} from '@mui/material';
import { Instagram, Telegram, MenuBook } from '@mui/icons-material';
import books from './data/free-books/pdfbooksfree';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

// Общий стиль карточек
const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderRadius: '15px',
  backgroundColor: '#f9f3e7', // Легкий бежевый фон для исламской эстетики
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Мягкая тень для объемности
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)', // Легкий эффект при наведении
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
};

// Стиль модального окна
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '10px',
  backgroundColor: '#f6edde',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  color: '#161c25',
  border: '1px solid #ddd', // Дополнительная граница
};

const Books = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedBook(null);
  };

  const handleRead = () => {
    if (selectedBook) {
      window.open(selectedBook.pdf, '_blank');
    }
    handleCloseModal();
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Welcome />
      <Container>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{
            marginTop: '2rem',
            fontWeight: 'bold',
            color: '#f6edde',
            fontFamily: 'Georgia, serif',
          }}
        >
          NASYIKAT.MEDIA ОНЛАЙН КИТЕПКАНА
        </Typography>
        <TextField
          label="Китептин аты"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '2rem' }}
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ddd', // Цвет рамки текстового поля
              },
              '&:hover fieldset': {
                borderColor: '#b89c6f', // Цвет при наведении
              },
              '&.Mui-focused fieldset': {
                borderColor: '#b89c6f', // Цвет при фокусе
              },
            },
          }}
        />
        <Grid container spacing={4}>
          {filteredBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card style={cardStyle} sx={{ cursor: 'pointer' }}>
                <CardContent style={{ textAlign: 'center', flexGrow: 1 }}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 220,
                      objectFit: 'cover',
                      borderRadius: '15px',
                      border: '1px solid #ddd',
                    }}
                  />
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: 12,
                      fontWeight: 'bold',
                      color: '#34495e',
                    }}
                  >
                    {book.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: 8, color: '#7f8c8d' }}
                  >
                    {book.description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ marginTop: 8, color: '#7f8c8d' }}
                  >
                    Автор: {book.author}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ justifyContent: 'center', padding: '1rem' }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<MenuBook />}
                    style={{
                      borderRadius: 5,
                      transition: 'border-color 0.3s, color 0.3s',
                      fontSize: '1.1rem',
                      width: '100%',
                      backgroundColor: '#f9f3e7',
                      borderColor: '#b89c6f', // Золотистая рамка кнопки
                      color: '#b89c6f',
                      '&:hover': {
                        borderColor: '#967f45',
                        color: '#967f45',
                      },
                    }}
                    onClick={() => handleOpenModal(book)}
                  >
                    ОКУУ
                  </Button>
                </CardActions>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '1rem',
                  }}
                >
                  <IconButton
                    href={book.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#E4405F' }}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton
                    href={book.socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0088cc' }}
                  >
                    <Telegram />
                  </IconButton>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ScrollToTopButton />
      <div style={{ marginTop: '1rem' }}>
        <Footer />
      </div>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            Урматтуу окурман!
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Бул китепти окууну каалайсызбы?
          </Typography>
          <Button
            onClick={handleRead}
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Окуу
          </Button>
          <IconButton
            style={{ position: 'absolute', top: 10, right: 10 }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default Books;
