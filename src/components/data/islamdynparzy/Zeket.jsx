import { Typography, Box } from '@mui/material';
import Header from '../../../components/Header';
import Welcome from '../../../components/Welcome';
// import BackgroundImage from '../../../assetts/images/alaksa.jpg'; // Путь к фоновому изображению

const Zeket = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          padding: 3,
          marginTop: '20px',
          backgroundColor: '#fff2ceac',
          // backgroundImage: `url(${BackgroundImage})`, // Фоновое изображение
          backgroundSize: 'cover', // Масштабирование, чтобы покрыть весь блок
          backgroundPosition: 'center', // Центрирование изображения
          backgroundRepeat: 'no-repeat', // Отключение повторения
          borderRadius: 2,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            marginBottom: 2,
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center', // Центрирование заголовка
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Тень для улучшения читаемости
          }}
        >
          Зекет
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            marginBottom: 2,
            lineHeight: 1.6,
            color: '#000000',
            textAlign: 'center', // Выравнивание текста по ширине
            textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)', // Легкая тень для улучшения читаемости
          }}
        >
          Ыйман келтирип, жакшы иштерди жасап, намазын окуп, зекет бергендердин
          сооптору Жараткандын алдында. Аларга коркунуч да, кайгыруу да болбойт.{' '}
          <em>(Бакара; 277)</em>.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            lineHeight: 1.6,
            color: '#000000',
            textAlign: 'center', // Выравнивание текста по ширине
            textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)', // Легкая тень для улучшения читаемости
          }}
        >
          Хадис: Ким зекетти сооп табуу үчүн берсе, ага сооп жазылат. Ким зекет
          бербесе, биз зекетти анын мал-мүлкүнүн жарымынан (жаза катары кыйнап
          туруп) алып коёбуз. Бул Жараткан Эгебиздин анык чечимдеринин бири.
          Мухаммадын (саллаллаху аълайхи уа саллам) үй-бүлөсүнө андан бир да акы
          жок. <em>(Абу Дауд, Зекет 4; Насаи, Зекет 4)</em>.
        </Typography>
      </Box>
    </div>
  );
};

export default Zeket;
