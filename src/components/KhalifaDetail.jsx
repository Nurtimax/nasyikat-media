import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  CardContent,
  Button,
  styled,
} from '@mui/material';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

const khalifaData = {
  khalifa1: {
    title: 'Абубакр ас-Сыддык (573-634 жж.) - первый халиф',
    image: 'path_to_image1.jpg',
    description:
      'Абубакр ас-Сыддык (573-634 жж.) - первый халиф, ближайший друг Пророка Мухаммеда. Он играл важную роль в первые десятилетия Ислама, укрепив основы Исламского государства. При нем произошли завоевания, и большая часть Аравийского полуострова приняла Ислам.',
    achievements: [
      'Победа над отступниками во время Ридда войн.',
      'Установление исламского управления на Аравийском полуострове.',
      'Сохранение единства мусульманской общины после смерти Пророка.',
    ],
    historicalEvents: [
      'Войны с отступниками (632-633)',
      'Начало завоеваний в Сирии и Ираке',
    ],
  },
  khalifa2: {
    title: 'Умар ибн ал-Хаттаб (584-644 жж.) - второй халиф',
    image: 'path_to_image2.jpg',
    description:
      'Умар ибн ал-Хаттаб (584-644 жж.) - второй халиф, известный своей справедливостью и сильным лидерством. Он играл важную роль в распространении Ислама и завоевании новых земель. При нем были основаны такие города, как Багдад, Куфа и Басра.',
    achievements: [
      'Завоевание Персии, Сирии и Египта.',
      'Установление новой административной системы.',
      'Введение исламского календаря.',
    ],
    historicalEvents: [
      'Битва при Ярмуке (636)',
      'Падение Иерусалима (638)',
      'Завоевание Персии (642)',
    ],
  },
  khalifa3: {
    title: 'Усман ибн Аффан (576-656 жж.) - третий халиф',
    image: 'path_to_image3.jpg',
    description:
      'Усман ибн Аффан (576-656 жж.) - третий халиф. Он сыграл важную роль в сборе и упорядочении Корана. Во время его правления произошло расширение исламских территорий, но также возникли внутренние конфликты.',
    achievements: [
      'Составление официальной версии Корана.',
      'Расширение территории халифата.',
      'Основал флот для защиты мусульманских земель.',
    ],
    historicalEvents: [
      'Создание единого текста Корана.',
      'Проблемы в управлении завоеванными территориями.',
      'Убийство Усмана в Медине (656).',
    ],
  },
  khalifa4: {
    title: 'Али ибн Абу Талиб (600-661 жж.) - четвертый халиф',
    image: 'path_to_image4.jpg',
    description:
      'Али ибн Абу Талиб (600-661 жж.) - четвертый халиф, двоюродный брат и зять Пророка Мухаммеда. Его правление было отмечено внутренними конфликтами и гражданской войной. Али был известен своей мудростью и справедливостью.',
    achievements: [
      'Управление государством в трудные времена.',
      'Участие в битвах при Джамаль и Сиффин.',
      'Справедливое управление в условиях раскола.',
    ],
    historicalEvents: [
      'Битва верблюда (656)',
      'Битва при Сиффине (657)',
      'Подписание договора при арбитраже (657)',
    ],
  },
};

const KhalifaDetail = () => {
  const { id } = useParams(); // Получаем ID халифа из параметров маршрута
  const khalifa = khalifaData[id]; // Получаем данные халифа по ID

  if (!khalifa) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          Халиф не найден
        </Typography>
      </Container>
    );
  }

  return (
    <div>
      <Header />
      <Welcome />
      <StyledContainer>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            {khalifa.title}
          </Typography>
        </Box>
        <StyledCard>
          <CardContent>
            <Typography variant="body1" paragraph color="text.secondary">
              {khalifa.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Основные достижения:
            </Typography>
            <ul>
              {khalifa.achievements.map((achievement, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  component="li"
                  color="text.secondary"
                >
                  {achievement}
                </Typography>
              ))}
            </ul>
            <Typography variant="h6" gutterBottom>
              Исторические события:
            </Typography>
            <ul>
              {khalifa.historicalEvents.map((event, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  component="li"
                  color="text.secondary"
                >
                  {event}
                </Typography>
              ))}
            </ul>
          </CardContent>
        </StyledCard>
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            href="/khalifacards/khalifa1"
          >
            Абубакр ас-Сыддык (радиаллаху анху)
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/khalifacards/khalifa2"
          >
            Умар ибн ал-Хаттаб (радиаллаху анху)
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/khalifacards/khalifa3"
          >
            Усман ибн Аффан (радиаллаху анху)
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/khalifacards/khalifa4"
          >
            Усман ибн Аффан (радиаллаху анху)
          </Button>
        </ButtonContainer>
      </StyledContainer>
      <Footer />
    </div>
  );
};

// Стилизация компонентов

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '12px',
}));

const StyledCard = styled('h2')(() => ({
  backgroundColor: '#f6edde',
  borderLeft: `5px solid #6a4b1e`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Amiri, serif',
  margin: '0 auto',
  color: '#191e27',
  position: 'relative',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export default KhalifaDetail;
