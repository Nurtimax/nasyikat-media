import { Typography, Box } from '@mui/material';
import React from 'react';
import BackgroundImage from '../../../assetts/icons/bacimg.png';
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
          padding: 4,
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            padding: 4,
            borderRadius: 8,
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              marginBottom: 4,
              fontWeight: 'bold',
              letterSpacing: '1.2px',
              fontSize: '1.5rem',
            }}
          >
            Орозо жөнүндө
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              lineHeight: 1.8,
              marginBottom: 4,
              textAlign: 'center',
            }}
          >
            Теңдикти сүйгөн Аллах Субхану уа Таала бир жылда бир жолу Рамазан
            айында 30 күн орозо кармоону парз кылды. Муну менен Ал ачкалык эмне
            экенин билбеген пенделерине, жегенге эч нерсеси жок, күндөп- түндөп
            ачка жүргөн мусулман бир туугандарынын акыбалын ар бир инсан өзү
            сезип, билип көрсүн, ачка болгондо тамактын, суусаганда суунун
            кадырын билүүгө үндөдү. Ошондой эле, орозо менен Аллах Таала пендени
            сабырдуулука үйрөтөт. <br /> Инсан орозо кармоо менен жүрөгү
            жумшарат, барга да, жокко да сабыр кылууну үйрөнөт. <br /> Кураанда
            “Аллах сабырдууларды сүйөт” (Аалу Имран: 146) деген аят келет.{' '}
            Орозодо Аллах Тааламдын пендесине берген убадасы бар. Анткени,
            “Орозону пендем мен үчүн кармайт, ошондуктан анын сыйлыгын Өзүм
            берем” деген. <br /> Ошондой эле орозо кармагандар үчүн чексиз
            Берешен Аллах Таала Бейиште атайын “Райан” эшигин ачып койду. <br />{' '}
            Ал үчүн чексиз шүгүрлөр болсун! Ошондой эле, азирети Пайгамбарыбыз
            өзүнүн хадистеринде орозонун парз экендигин көп кайталаган. Абу
            Хурайрадан (Алла ыраазы болсун) рабаят: "Пайгамбарыбыз айтты:
            "Силерге берекелүү Рамазан айы келди. Алла (азза ва жалла) силерге
            ал айдын орозосун кармоону парз кылды. Ал айда бүт асман эшиктери
            ачылат. Тозок эшиктери жабылат. Анда бейбаш шайтандар кишенделет. Ал
            айда Алланын миң айдан жакшыраак бир түнү бар. Ким ошол түндүн
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
