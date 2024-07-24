import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Container } from '@mui/material';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';
import NamazImage1 from '../../../assetts/images/islam/namazzz.webp';

const Namaz = () => {
  return (
    <div>
      <Header />
      <Welcom />
      <Container>
        <StyledBox>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            style={{ marginTop: '15px' }}
          >
            НАМАЗ ТУУРАСЫНДАГЫ АЯТТАР ЖАНА ХАДИСТЕР
          </Typography>
          <StyledImage src={NamazImage1} alt="Изображение намаза" />
          <Typography variant="body1" component="div">
            «Чындыгында, намаз бузукулуктан жана күнөөдөн тосот» - <br />
            (Анкабут. 45-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Аллах Таала айткан: "Албетте намаз ыймандуу адамдар үчүн өз
            убактысында окулуучу парз болду". <br /> (Ниса, 103-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            “Алар чыныгы динди таза, бекем кармап, бир гана Аллахка сыйынууга
            жана намаз окуп зекет берүүгө буюрулду” - деген. <br />
            (Баййина. 5-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Аллах Таала: “Намаз окугула, зекет бергиле...” - <br />
            (Бакара. 43-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            «Оо, ыймандуулар, Жума күнү намазга азан айтылганда Аллахты
            эскерүүгө (намаз окууга) шашылгыла…» - деген. <br />
            (Жума. 9-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Аллах Таала айткан: «Бирок алардын артынан намаздарын таштаган жана
            кумарларына ээрчиген урпактар келди. Ошондуктан алар жамандыкка
            кабылышат». <br />
            (Марьям, 59-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Аллах Таала айткан: «Силерди (бул) сакарга (тозокко) эмне алып келди
            (дешет). Алар жооп беришет: Биз намаз окугандардан эмес элек».{' '}
            <br />
            (Муддасир, 42-аят).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Аллах Таала айткан: «Вайл (тозок) болсун намазды (начар)
            окуучуларга. Анткени алар намаздарын унутуп коюшкан. Алар
            (намаздарын) эл көрсүн үчүн окушат». <br /> (Маауун, 4-5-аяттар).
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            Ибн Умар (Аллах андан ыраазы болсун) кабарлаган хадисте,
            Пайгамбарыбыз (Ага Аллахтын салам-салаваттары болсун): <br /> “Ислам
            беш нерсе менен негизделген: Аллахтан башка сыйынууга татыктуу зат
            (илах) жок, Мухаммад Анын элчиси деп күбөлүк берүү, намаз окуу,
            зекет берүү, ажылык кылуу жана орозо кармоо”–
          </Typography>
        </StyledBox>
      </Container>
    </div>
  );
};

export default Namaz;

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f9f9f9',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: ' center',
  marginBottom: theme.spacing(3),
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(2, 0),
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderRight: '20px',
}));
