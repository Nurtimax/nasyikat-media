import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Container } from '@mui/material';
import Welcom from '../../../components/Welcome';
import Header from '../../../components/Header';
import NamazImage1 from '../../../assetts/images/islam/namazzz.webp';
import BackgroundImage from '../../../assetts/icons/bacimg.png';
import Footer from '../../../components/Footer';

const Namaz = () => {
  return (
    <div>
      <StyleBanner>
        <Header />
        <Welcom />
        <Container maxWidth="lg">
          <StyledBox>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              style={{ marginTop: '15px', color: '#071c6b' }}
            >
              Намаз туурасындагы аяттар жана хадистер
            </Typography>
            <StyledImage src={NamazImage1} alt="Изображение намаза" />
            <StyledText variant="body1" component="div">
              «Чындыгында, намаз бузукулуктан жана күнөөдөн тосот» - <br />
              (Анкабут. 45-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              Аллах Таала айткан: "Албетте намаз ыймандуу адамдар үчүн өз
              убактысында окулуучу парз болду". <br /> (Ниса, 103-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              “Алар чыныгы динди таза, бекем кармап, бир гана Аллахка сыйынууга
              жана намаз окуп зекет берүүгө буюрулду” - деген. <br />
              (Баййина. 5-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              Аллах Таала: “Намаз окугула, зекет бергиле...” - <br />
              (Бакара. 43-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              «Оо, ыймандуулар, Жума күнү намазга азан айтылганда Аллахты
              эскерүүгө (намаз окууга) шашылгыла…» - деген. <br />
              (Жума. 9-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              Аллах Таала айткан: <br /> «Бирок алардын артынан намаздарын
              таштаган жана кумарларына ээрчиген урпактар келди. Ошондуктан алар
              жамандыкка кабылышат». <br />
              (Марьям, 59-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              Аллах Таала айткан: <br /> «Силерди (бул) сакарга (тозокко) эмне
              алып келди (дешет). Алар жооп беришет: Биз намаз окугандардан эмес
              элек». <br />
              (Муддасир, 42-аят).
            </StyledText>
            <StyledText variant="body1" component="div">
              Аллах Таала айткан: <br /> «Вайл (тозок) болсун намазды (начар)
              окуучуларга. Анткени алар намаздарын унутуп коюшкан. Алар
              (намаздарын) эл көрсүн үчүн окушат». <br /> (Маауун, 4-5-аяттар).
            </StyledText>
            <StyledText variant="body1" component="div">
              Ибн Умар (Аллах андан ыраазы болсун) <br /> кабарлаган хадисте,{' '}
              <br />
              Пайгамбарыбыз (салаллоху алейхи уа саллам): <br />
              “Ислам беш нерсе менен негизделген: Аллахтан башка сыйынууга
              татыктуу зат (илах) жок, <br /> Мухаммад Анын элчиси деп күбөлүк
              берүү, <br /> намаз окуу, <br /> зекет берүү, <br /> ажылык кылуу{' '}
              <br />
              жана орозо кармоо”–
            </StyledText>
            <StyledText variant="body1" component="div">
              Намаз- бул Аллах Тааланын пендесине берген эң чоң белеги,
              ибаадаттардын эң жогорку даражасы, бул деген пенденин Жаратуучусу
              менен болгон баарлашуусу. <br /> Анткени, намаздын ичинде бир
              канча ибаадаттар бар. Мында даарат, ниет, Аллахка сажда кылуу,
              <br />
              Пайгамбарга (салаллаху алейхи уа саллам) салават айтуу, дуа, зикир
              камтылган. Намаз менен пенде өзүнүн Эгеси болгон Аллах Таалага
              жакындайт, туура жолго багыт алат, ыйманын бекемдейт, жүрөгү,
              денеси тазарып, жан дүйнөсү тынчтык табат,Акыреттеги эң биринчи
              суракка даярданат. <br /> Намаз тууралуу хадисте төмөндөгүчө
              айтылат:
              <br />
              “Бейиштин ачкычы- намаз, намаздын ачкычы- даарат”. (Ахмаддын
              Муснады). <br />
              <br /> Намаз бул- шайтан наалатыга каршы болгон эң күчтүү курал.
            </StyledText>
          </StyledBox>
        </Container>
      </StyleBanner>
      <Footer />
    </div>
  );
};

export default Namaz;

const StyleBanner = styled('div')(() => ({
  backgroundSize: 'cover',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundAttachment: 'fixed',
  padding: theme.spacing(4),
  textAlign: 'center',
  maxWidth: '900px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(3),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  color: '#333',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: theme.spacing(2),
  },
}));
