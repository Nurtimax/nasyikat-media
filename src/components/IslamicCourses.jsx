import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Paper,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import courses from '../utils/constants/islamcourse';
import ayats from '../utils/constants/courseayats.js';
import hadiths from '../utils/constants/coursehadis.js';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

// Стили для цитат
const QuoteCard = styled(Paper)(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(4),
  backgroundColor: '#f9f6f2',
  borderLeft: `5px solid #6a4b1e`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Amiri, serif',
  margin: '0 auto',
  color: '#161c25',
  position: 'relative',
  '&:before': {
    content: '"\\201C"',
    position: 'absolute',
    top: '-15px',
    left: '10px',
    fontSize: '50px',
    color: '#6a4b1e',
  },
  '&:after': {
    content: '"\\201D"',
    position: 'absolute',
    bottom: '-35px',
    right: '10px',
    fontSize: '50px',
    color: '#6a4b1e',
  },
}));

const CourseCard = styled(Card)({
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
});

// Основной компонент
const IslamicCourses = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div>
      <Header />
      <Welcome />
      <Container sx={{ py: 5 }}>
        {/* Блок с исламской каллиграфией */}
        <Box
          sx={{
            mb: 5,
            p: 7,
            backgroundColor: '#f6edde',
            color: '#161c25',
            textAlign: 'center',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h2" sx={{ fontFamily: 'Amiri, serif' }}>
            Исламские Курсы
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Amiri, serif', mt: 2 }}>
            Изучайте и приумножайте знания с верой и мудростью.
          </Typography>
        </Box>

        {/* Секция с аятами */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', mb: 3, fontFamily: 'Amiri, serif' }}
        >
          Аяты о знании
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, sm: 2 }}
          sx={{ mb: 1 }}
          justifyContent="center"
        >
          {ayats.map((ayah, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <QuoteCard>
                <Typography variant="body1" gutterBottom>
                  {ayah}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                  Священный Коран
                </Typography>
              </QuoteCard>
            </Grid>
          ))}
        </Grid>

        {/* Секция с курсами */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', mb: 3, fontFamily: 'Amiri, serif' }}
        >
          Доступные Курсы
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          sx={{ mb: 5 }}
          justifyContent="center"
        >
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
              <CourseCard onClick={() => handleCourseClick(course.id)}>
                <CardMedia
                  component="img"
                  sx={{ height: 200 }}
                  image={course.image}
                  alt={course.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: 'Amiri, serif' }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: 'Amiri, serif' }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Узнать больше
                  </Button>
                </Box>
              </CourseCard>
            </Grid>
          ))}
        </Grid>

        {/* Секция с хадисами */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', mb: 3, fontFamily: 'Amiri, serif' }}
        >
          Хадисы о знании
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          {hadiths.map((hadith, index) => (
            <Grid item xs={12} sm={4} md={4} lg={3} key={index}>
              <QuoteCard>
                <Typography variant="body1" gutterBottom>
                  {hadith}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                  Сахих аль-Бухари
                </Typography>
              </QuoteCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default IslamicCourses;
