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
} from '@mui/material';
import { Instagram, Telegram } from '@mui/icons-material';
import books from './data/free-books/pdfbooksfree';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import ScrollToTopButton from '../components/ScrollToTopButton';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
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
          style={{ marginTop: '1.5rem' }}
        >
          Пайдалуу электрондук китептер
        </Typography>
        <TextField
          label="Китептин аты"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '1.5rem' }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Grid container spacing={1}>
          {filteredBooks.map((book, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card style={cardStyle}>
                <CardContent style={{ textAlign: 'center', flexGrow: 1 }}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 200,
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="h6" style={{ marginTop: 10 }}>
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle1" style={{ marginTop: 5 }}>
                    {book.description}
                  </Typography>
                  <Typography variant="subtitle2" style={{ marginTop: 5 }}>
                    Автор: {book.author}
                  </Typography>
                </CardContent>
                <div
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <a href={book.pdf} target="_blank" rel="noopener noreferrer">
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
                        cursor: 'pointer',
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = '#0a2278e4')
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = '#071c6b')
                      }
                    >
                      Окуу
                    </Button>
                  </a>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    <div style={{ display: 'flex', gap: 10, marginTop: 5 }}>
                      <IconButton
                        href={book.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        style={{ color: '#E4405F' }}
                      >
                        <Instagram />
                      </IconButton>
                      <IconButton
                        href={book.socialLinks.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        style={{ color: '#0088cc' }}
                      >
                        <Telegram />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ScrollToTopButton />
    </div>
  );
};

export default Books;
