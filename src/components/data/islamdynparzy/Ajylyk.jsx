import { Typography, Container, Box } from '@mui/material';
import Header from '../../Header';
import Welcome from '../../Welcome';
import meccabackground from '../../../assetts/images/islam/mecca.jpg'; // Фоновое изображение

const Ajylyk = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          backgroundImage: `url(${meccabackground})`, // Фоновое изображение
          backgroundSize: 'cover', // Масштабирование, чтобы покрыть весь блок
          backgroundPosition: 'center', // Центрирование изображения
          backgroundRepeat: 'no-repeat', // Отключение повторения
          minHeight: '100vh', // Минимальная высота, чтобы покрыть весь экран
          py: 4, // Отступы по вертикали
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: 'center', // Выравнивание текста по центру
              bgcolor: 'rgba(234, 227, 196, 0.917)', // Полупрозрачный фон
              borderRadius: 2, // Закругленные углы
              p: 4, // Отступы внутри контейнера
              mb: 4, // Отступ снизу
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: 'center' }}
            >
              Ажылык
            </Typography>
            <Typography
              variant="body1"
              component="div"
              paragraph
              sx={{ textAlign: 'center' }}
            >
              Ажылык деген эмне? Ажылыктын сөздүк мааниси – улуу нерсеге карай
              аттануу. Шарият боюнча ажылык бул – Кааба жана анын айланасындагы
              куттуу деп эсептелген белгилүү жерлерге белгиленген учурда барып,
              усул-эрежелерине ылайык зарыл ибадаттарды аткаруу болуп эсептелет.
            </Typography>
            <Typography
              variant="body1"
              component="div"
              paragraph
              sx={{ textAlign: 'center' }}
            >
              Ажылык учурунда аткарыла турган ажылыкка байланыштуу ибадаттар
              “манаасик” деп аталат. Ислам динибиздин негизги беш парзынын бирөө
              болуп саналган ажылык ибадаты хижранын 9-жылы парз болгон.
              Ажылыктын парздыгы Курани Карим жана хадистер аркылуу айкын
              белгиленген. Курани Каримде Алла Таала мындай деп белгилеген:
              «Барууга чамасы жеткен бардык адамга Алла Таала үчүн Кааба үйдү
              зыярат кылып ажылык милдетин аткаруу парз».
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Ajylyk;
