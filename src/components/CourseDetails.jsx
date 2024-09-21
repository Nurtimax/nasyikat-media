import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import imgslidetest from '../assetts/images/mountain.jpg';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import '../index.css';

const InfoBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  flexWrap: 'wrap',
  gap: theme.spacing(3),
}));

const courseDetails = {
  1: {
    title: 'Курс по Корану',
    description: 'Подробное изучение Корана с толкованием.',
    verse:
      'الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَى جُنُوبِهِمْ\n“Истинно, те, кто поминает Аллаха, стоя, сидя и на своих сторонах” (Сура Аль-Имран, 3:191)',
    hadith:
      'Наилучший из вас тот, кто изучает Коран и обучает его.\n“خيركم من تعلم القرآن وعلمه” (Сахих аль-Бухари)',
    address: 'г. Бишкек, ул. Исаковская, д. 5',
    phone: '+996 555 555 555',
    about:
      'Мы предоставляем качественное обучение по Корану и хадисам для всех желающих. Наши опытные преподаватели помогут вам понять священный текст и его значение. Присоединяйтесь к нам и откройте для себя мир Ислама через изучение Корана.',
    price: '3000 сом за курс',
    groupSize: 'Максимум 10 человек в группе',
    duration: 'Каждое занятие длится 2 часа',
    images: [imgslidetest, imgslidetest],
    socialMedia: {
      instagram: 'https://instagram.com/example',
      telegram: 'https://t.me/example',
    },
  },
  2: {
    title: 'Курс по Хадису',
    description: 'Изучение хадисов Пророка Мухаммада.',
    verse: 'العِلْمُ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    hadith: 'Поиск знания - это обязанность каждого мусульманина.',
    address: 'г. Бишкек, ул. Исаковская, д. 5',
    phone: '+996 555 555 555',
    about:
      'Мы предоставляем качественное обучение по Корану и хадисам для всех желающих. Наши опытные преподаватели помогут вам понять священный текст и его значение. Присоединяйтесь к нам и откройте для себя мир Ислама через изучение Корана.',
    price: '3000 сом за курс',
    groupSize: 'Максимум 10 человек в группе',
    duration: 'Каждое занятие длится 2 часа',
    images: [imgslidetest, imgslidetest],
    socialMedia: {
      instagram: 'https://instagram.com/example',
      telegram: 'https://t.me/example',
    },
  },
  3: {
    title: 'Курс по Корану с толкованием',
    description: 'Углубленное изучение Корана с акцентом на толкование.',
    verse: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
    hadith: 'Знание - это свет.',
    address: 'г. Бишкек, ул. Исаковская, д. 5',
    phone: '+996 555 555 555',
    about:
      'Мы предоставляем качественное обучение по Корану и хадисам для всех желающих. Наши опытные преподаватели помогут вам понять священный текст и его значение. Присоединяйтесь к нам и откройте для себя мир Ислама через изучение Корана.',
    price: '3000 сом за курс',
    groupSize: 'Максимум 10 человек в группе',
    duration: 'Каждое занятие длится 2 часа',
    images: [imgslidetest, imgslidetest],
    socialMedia: {
      instagram: 'https://instagram.com/example',
      telegram: 'https://t.me/example',
    },
  },
  4: {
    title: 'Курс по арабскому языку',
    description: 'Основы арабского языка для понимания религиозных текстов.',
    verse: 'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',
    hadith: 'Кто изучает арабский, тот лучше понимает религию.',
    address: 'г. Бишкек, ул. Исаковская, д. 5',
    phone: '+996 555 555 555',
    about:
      'Мы предоставляем качественное обучение по Корану и хадисам для всех желающих. Наши опытные преподаватели помогут вам понять священный текст и его значение. Присоединяйтесь к нам и откройте для себя мир Ислама через изучение Корана.',
    price: '3000 сом за курс',
    groupSize: 'Максимум 10 человек в группе',
    duration: 'Каждое занятие длится 2 часа',
    images: [imgslidetest, imgslidetest],
    socialMedia: {
      instagram: 'https://instagram.com/example',
      telegram: 'https://t.me/example',
    },
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return <Typography>Курс не найден</Typography>;
  }

  return (
    <div>
      <Header />
      <Welcome />
      <Container sx={{ py: 5 }}>
        <Box
          sx={{
            mb: 5,
            textAlign: 'center',
            backgroundColor: '#f6edde',
            color: '#161c25',
            p: 5,
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {course.description}
          </Typography>
        </Box>

        {/* Слайдер изображений */}
        <Swiper spaceBetween={10} slidesPerView={1}>
          {course.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Информация о курсе и о нас в одном ряду */}
        <InfoBlock>
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#f6edde',
              color: '#161c25',
              p: 5,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6">Информация о курсе:</Typography>
            <Typography variant="body1">Цена: {course.price}</Typography>
            <Typography variant="body1">Группа: {course.groupSize}</Typography>
            <Typography variant="body1">
              Продолжительность: {course.duration}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#f6edde',
              color: '#161c25',
              p: 5,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6">О нас:</Typography>
            <Typography variant="body1">{course.about}</Typography>
          </Box>
        </InfoBlock>

        {/* Адрес и телефон */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f6edde',
            color: '#161c25',
            p: 5,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Адрес:</Typography>
          <Typography variant="body1">{course.address}</Typography>
          <Typography variant="h6">Телефон:</Typography>
          <Typography variant="body1">{course.phone}</Typography>
        </Box>

        {/* Социальные сети и кнопка записаться */}
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              href={course.socialMedia.instagram}
              fullWidth
              startIcon={<Instagram />}
            >
              Instagram
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              href={course.socialMedia.telegram}
              fullWidth
              startIcon={<Telegram />}
            >
              Telegram
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<WhatsApp />}
              onClick={() => {
                window.open(
                  `https://wa.me/${course.phone.replace(
                    /\D/g,
                    ''
                  )}?text=Я%20хочу%20узнать%20о%20курсе:%20${course.title}`,
                  '_blank'
                );
              }}
            >
              Жазылуу
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default CourseDetails;
