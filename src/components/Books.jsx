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

const Books = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
          NASYIKAT.MEDIA Электрондук китептерди акысыз окуңуз
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
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '100%' }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: '#071c6b',
                        color: '#fff',
                        borderRadius: 5,
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s, transform 0.3s',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        width: '100%',
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = '#0a2278e4')
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = '#071c6b')
                      }
                    >
                      КИТЕПТИ ОКУУ
                    </Button>
                  </a>
                </CardActions>
                <CardActions
                  style={{ justifyContent: 'center', padding: '1rem' }}
                >
                  <a href={book.pdf} download style={{ width: '100%' }}>
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
                    >
                      Көчүрүү
                    </Button>
                  </a>
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
    </div>
  );
};

export default Books;
