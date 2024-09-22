import { Typography, Box } from '@mui/material';
import React from 'react';
import Header from '../../../components/Header';
import Welcome from '../../../components/Welcome';
import Footer from '../../../components/Footer';

const Orozo = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          padding: { xs: 2, md: 4 },
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f6edde', // Цвет фона бокса
            padding: { xs: 3, md: 5 },
            borderRadius: '15px', // Скругленные углы
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Легкая тень
            position: 'relative',
            borderLeft: '6px solid #d8a66f', // Левый бордюр акцента
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#d8a66f', // Декоративная полоска сверху
              borderRadius: '2px',
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: '#d8a66f', // Декоративная полоска снизу
              borderRadius: '2px',
            },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              marginBottom: 3,
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', md: '2.4rem' }, // Увеличенный шрифт
              color: '#3d2c2e', // Темный цвет заголовка
              fontFamily: "'Amiri', serif", // Элегантный арабский шрифт
            }}
          >
            Орозо жөнүндө
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.2rem' }, // Чуть больше стандартного
              color: '#555',
              marginBottom: 4,
              textAlign: 'justify', // Выравнивание текста по ширине
              fontFamily: "'Amiri', serif", // Тот же шрифт для единства стиля
            }}
          >
            Теңдикти сүйгөн Аллах Субхану уа Таала бир жылда бир жолу Рамазан
            айында 30 күн орозо кармоону парз кылды. Муну менен Ал ачкалык эмне
            экенин билбеген пенделерине, жегенге эч нерсеси жок, күндөп-түндөп
            ачка жүргөн мусулман бир туугандарынын акыбалын ар бир инсан өзү
            сезип, билип көрсүн, ачка болгондо тамактын, суусаганда суунун
            кадырын билүүгө үндөдү. Ошондой эле, орозо менен Аллах Таала пендени
            сабырдуулука үйрөтөт. <br />
            Инсан орозо кармоо менен жүрөгү жумшарат, барга да, жокко да сабыр
            кылууну үйрөнөт. <br />
            Кураанда “Аллах сабырдууларды сүйөт” (Аалу Имран: 146) деген аят
            келет. Орозодо Аллах Тааламдын пендесине берген убадасы бар.
            Анткени, “Орозону пендем мен үчүн кармайт, ошондуктан анын сыйлыгын
            Өзүм берем” деген. <br />
            Ошондой эле орозо кармагандар үчүн чексиз Берешен Аллах Таала
            Бейиште атайын “Райан” эшигин ачып койду. <br /> Ал үчүн чексиз
            шүгүрлөр болсун! Ошондой эле, азирети Пайгамбарыбыз өзүнүн
            хадистеринде орозонун парз экендигин көп кайталаган. Абу Хурайрадан
            (Алла ыраазы болсун) рабаят: "Пайгамбарыбыз айтты: "Силерге
            берекелүү Рамазан айы келди. Алла (азза ва жалла) силерге ал айдын
            орозосун кармоону парз кылды. Ал айда бүт асман эшиктери ачылат.
            Тозок эшиктери жабылат. Анда бейбаш шайтандар кишенделет. Ал айда
            Алланын миң айдан жакшыраак бир түнү бар. Ким ошол түндүн
            жакшылыгына жетише албаса, анда бардык жакшылыктардан кур жалак
            калыптыр". <br /> Имам Термизий жана Имам Ибну Мажа риваяты.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Orozo;
