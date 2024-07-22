import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Container } from '@mui/material';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';
import NamazImage1 from '../../../assetts/icons/logo.jpg'; // Replace with your actual image path
import NamazImage2 from '../../../assetts/icons/logo.jpg'; // Replace with your actual image path

const Namaz = () => {
  return (
    <Container>
      <Header />
      <Welcom />
      <StyledBox>
        <Typography variant="h4" component="h1" gutterBottom>
          НАМАЗ ТУУРАСЫНДАГЫ АЯТТАР ЖАНА ХАДИСТЕР
        </Typography>
        <StyledImage src={NamazImage1} alt="Namaz Image 1" />
        <Typography variant="body1" component="div">
          📖 Аллах Таала Куранда: «Чындыгында, намаз бузукулуктан жана күнөөдөн
          тосот» - деп айткан. (Анкабут. 45-аят).
        </Typography>
        <Typography variant="body1" component="div">
          📖 Аллах Таала айткан: "Албетте намаз ыймандуу адамдар үчүн өз
          убактысында окулуучу парз болду". (Ниса, 103-аят).
        </Typography>
        <Typography variant="body1" component="div">
          📖 Аллах Таала Куранда: “Алар чыныгы динди таза, бекем кармап, бир
          гана Аллахка сыйынууга жана намаз окуп зекет берүүгө буюрулду” -
          деген. (Баййина. 5-аят).
        </Typography>
        <Typography variant="body1" component="div">
          📖 Аллах Таала: “Намаз окугула, зекет бергиле...” - деп айткан.
          (Бакара. 43-аят).
        </Typography>
        <StyledImage src={NamazImage2} alt="Namaz Image 2" />
        <Typography variant="body1" component="div">
          📖 Аллах Таала Куранда: «Оо, ыймандуулар, Жума күнү намазга азан
          айтылганда Аллахты эскерүүгө (намаз окууга) шашылгыла…» - деген.
          (Жума. 9-аят).
        </Typography>
        <Typography variant="body1" component="div">
          📖 Аллах Таала айткан: «Бирок алардын артынан намаздарын таштаган жана
          кумарларына ээрчиген урпактар келди. Ошондуктан алар жамандыкка
          кабылышат». (Марьям, 59-аят).
        </Typography>
        <Typography variant="body1" component="div">
          📖 Аллах Таала айткан: «Силерди (бул) сакарга (тозокко) эмне алып
          келди (дешет). Алар жооп беришет: Биз намаз окугандардан эмес элек».
          (Муддасир,42-аят).
        </Typography>
        <Typography variant="body1" component="div">
          📖 Аллах Таала айткан: «Вайл (тозок) болсун намазды (начар)
          окуучуларга. Анткени алар намаздарын унутуп коюшкан. Алар (намаздарын)
          эл көрсүн үчүн окушат». (Маауун, 4-5-аяттар).
        </Typography>
        <Typography variant="body1" component="div">
          Ибн Умар (Аллах андан ыраазы болсун) кабарлаган хадисте, Пайгамбарыбыз
          (Ага Аллахтын салам-салаваттары болсун): “Ислам беш нерсе менен
          негизделген: Аллахтан башка сыйынууга татыктуу зат (илах) жок,
          Мухаммад Анын элчиси деп күбөлүк берүү, намаз окуу, зекет берүү,
          ажылык кылуу жана орозо кармоо”– деп айткан.
        </Typography>
      </StyledBox>
    </Container>
  );
};

export default Namaz;

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f0f0f0',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '8px',
  margin: theme.spacing(2, 0),
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
}));
