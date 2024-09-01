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
import { Instagram, Telegram, GetApp } from '@mui/icons-material';
import books from './data/free-books/pdfbooksfree';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderRadius: '15px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fdfdfd',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
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

  const handleDownload = () => {
    // Trigger download after closing the modal
    if (selectedBook) {
      const link = document.createElement('a');
      link.href = selectedBook.pdf;
      link.download = true;
      link.click();
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
          style={{ marginTop: '2rem', fontWeight: 'bold' }}
        >
          NASYIKAT.MEDIA Электрондук китептер бизден сизге белек болсун
        </Typography>
        <TextField
          label="Китептин аты"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '2rem' }}
          value={searchQuery}
          onChange={handleSearchChange}
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
                      borderRadius: '10px',
                    }}
                  />
                  <Typography
                    variant="h6"
                    style={{ marginTop: 12, fontWeight: 'bold' }}
                  >
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginTop: 8 }}>
                    {book.description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ marginTop: 8, color: '#757575' }}
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
                    startIcon={<GetApp />}
                    style={{
                      borderColor: '#071c6b',
                      color: '#071c6b',
                      borderRadius: 5,
                      transition: 'border-color 0.3s, color 0.3s',
                      fontSize: '1.1rem',
                      width: '100%',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#0a2278e4';
                      e.currentTarget.style.color = '#0a2278e4';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = '#071c6b';
                      e.currentTarget.style.color = '#071c6b';
                    }}
                    onClick={() => handleOpenModal(book)}
                  >
                    Көчүрүү
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
            Ассаламу алейкум бир тууганым!
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Биздин китептер сизге пайдалуу болсо, инстаграмдан жеке катка пикир
            калтырып койсоңуз кубанып калат элек. <br /> Бул биз үчүн маанилүү!{' '}
            <br />
            Аллах таала илимиңизге берекесин берсин.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownload}
              style={{ marginRight: '10px' }}
            >
              Жүктөп алуу
            </Button>
            <Button variant="outlined" onClick={handleCloseModal}>
              Жок, рахмат
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Books;
