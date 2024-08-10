import { Typography, Box } from '@mui/material';
import Header from '../../../components/Header';
import Welcome from '../../../components/Welcome';
import BackgroundImage from '../../../assetts/icons/bacimg.png';

const Zeket = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          padding: 3,
          marginTop: '20px',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'end',
          backgroundRepeat: 'no-repeat',
          borderRadius: 2,
          backgroundAttachment: 'fixed',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            marginBottom: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
            padding: 1,
            borderRadius: 1,
          }}
        >
          Зекет
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            lineHeight: 1.8,
            marginBottom: 4,
            fontSize: '1.2rem',
            textAlign: 'center',
            textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
            padding: 2,
            borderRadius: 1,
          }}
        >
          Ыйман келтирип, жакшы иштерди жасап, намазын окуп, зекет бергендердин
          сооптору Жараткандын алдында. Аларга коркунуч да, кайгыруу да болбойт.{' '}
          <br />
          (Бакара; 277)
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            textAlign: 'center',
            textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
            padding: 2,
            borderRadius: 1,
            lineHeight: 1.8,
            marginBottom: 4,
            fontSize: '1.2rem',
          }}
        >
          Зекет деген- бул пенденин адал эмгек менен тапкан ырыскысынан Аллах
          жолуна сарптоо. Муну менен Аллах Таала Өз пендесин берешендике, кең
          пейилдүүлүккө, боорукерликке, жакшылыкты жакшылык менен кайтарууга
          үндөйт, муктаж болгон бир туугандары да бар экенин пенденин эсине
          салып турат. Анткени, зекет муктаж адамдарга берилет. Муктаждын
          муктаждыгын аткаруу менен пенденин Жараткандын алдында даражасы
          көтөрүлөт. Хадисте айтылгандай: “Ким бул дүйнөдө бирөөнүн муктаждыгын
          аткарса, Аллах Таала кыяматта анын муктаждыгын аткарат” деп айтылат
          эмеспи. Зекет- бул Аллах Таалам берген ырыскысына ыраазычылык, шүгүр,
          рахмат айтуу. Зекет бергендер тууралуу Кураанда: “Ыйман келтирип,
          жакшы амал кылган (өзгөчө) намаз окуган, зекет бергендердин сооптору
          Роббилеринин алдында. Аларга коркунуч да, кайгыруу да болбойт” деп
          айтылган. (Бакара:277).
        </Typography>
      </Box>
    </div>
  );
};

export default Zeket;
