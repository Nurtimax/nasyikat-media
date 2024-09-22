import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import { Typography, Container, styled } from '@mui/material';

const Hutba = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Container sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: {
              xs: 'h5.fontSize',
              sm: 'h4.fontSize',
            },
          }}
        >
          Пайгамбарыбыз Мухаммад саллаллаху алейхи вассаламдын <br /> акыркы
          хутбасы
        </Typography>
        <StyledTypography
          variant="body1"
          sx={{ lineHeight: 1.6, whiteSpace: 'pre-wrap' }}
        >
          ... Эй, адамдар! Сөзүмдү жакшылап тындагыла! Билбеймин, балким бул
          жылдан кийин силер менен бул жерде кайра кездеше албас чыгармын. Эй,
          адамдар! Ушул күнүңөр канчалык касиеттүү болсо, бул айыңар канчалык
          касиеттүү ай болсо, бул калааңар (Мекке) кандай касиеттүү калаа болсо,
          жаныңар, малыңар, намысыңар да ошондой касиеттүү. Ap түрдүү
          карасанатайлыктан корголгон. Сахабаларым! Эртең Раббиңер менен
          жолугасыңар жана бүгүнкү бардык иш- аракеттерден милдеттүү түрдө
          эсепке тартыласыңар. Менден кийин мурунку бузукулуктарыңарга кайтып,
          бири-бириңерди өлтүрбөгүлө!. Бул осуятымды ушул жердегилер бул жерде
          болбогон адамдарга жеткирсин балким алар бул жерден катышкан адамдан
          да жакшы түшүнүп эске сактоосу мүмкүн .Сахабаларым! Кимде бирөөнүн
          аманаты бар болсо, аны ээсине кайтарсын!.Cүткорлуктун бардык түрү
          жоюлган,бутумдун астында. Бирок, карызынардын негизгисин берүүнөр
          керек. Зулумдук кылбагыла!, зулумдука учурабагыла!. Аллах тааланын
          буйругу менен cүткорлука эми тыйуу салынды. Наадандык доорунан калган
          бул жаман адаттын бардыгы бутумдун астында. Биринчи жойгон cүткорлук -
          Абдулмутталибдин уулу (агам) Аббастын cүткорлугу. Сахабаларым!
          Наадандык доордогу кан доолор да толугу менен жоюлду. Жойгон алгачкы
          кан доом - Абдулмутталибдин небереси Рабианын кан доосу. Эй, Адамдар!
          Каалаган убактта согушуу үчүн, кан төгүү арам болгон айлардын
          орундарын алмаштыруу - каапырлыктын дал өзү. Бул - капырлардын чон
          адашуучулукка түшкөн нерсеси. Алар бир жылы адал деп кабылдаган бир
          айды, келерки жылы арам деп жарыялашты. Алла Тааланын адал жана арам
          кылгандарынын санына шай кылабыз деп, ушундай кылышты. Алар Аллах
          тааланын арам кылганын адал, ал эми адал кылганын арам кылышат.
          Күмөнсүз, убакыт - Аллах тааланын жараткан күнүндөгү түр менен
          тартипке түштү. Эй, адамдар! Бүгүн шайтан силердин бул жериңерде,
          жаңыдан бийлигин жүргүзүү жана үстөмдүк куруу күчүнөн түбөлүккө
          айрылды. Бирок, силер ушул жойгон нерселеримен башка кичине деп
          эсептеген нерсенерде ага баш ийе турган болсоңор, бул аны кубантат.
          Диниңерди коргоо үчүн, булардан да сактангыла! Эй, адамдар! Аялдардын
          укуктарын урматтоону жана ушул маселеде Аллах Тааладан коркууңарды
          сунуштайм. Силер аялдарды Аллах тааланын аманаты катары алдыңар,
          алардын намысы менен арын Аллах тааланын аты менен убада берип,
          адалдыкка алдыңар. Силердин аялдарыңарда укуктарыңар, алардын силерде
          укуктары бар. Силердин моюнуңарда аялдарңыардын акыллары бар ошондой
          эле аялдарңыардын моюнунда силердин акыларыңар бар. Эгер силер
          жактырбаган бирөөнү үйгө киргизсе, аларды жеңил уруу менен
          жазаландырып, мындан сактандырсаңар болот. Аялдын моюнундагы силердин
          акыларыңардан - абийрин сактоосу Эй, момундар! Силердин моюнуңардагы
          аялдардын акылары аларды ар түрлүү адал тамак аш жана кийим кече менен
          камсыздагыла. Ал аманат - Аллах тааланын китеби Курани карим (Башка
          риваяттарда «сүннөтүм» жана «ахли байтим» деп көрсөтүлгөн). Эй,
          момундар! Силерге бир аманат калтырамын аны жакшылап кармансаңар,
          жолуңардан адашпайсыңар. Мусулман мусулмандын бир тууганы, ошондой эле
          бардык мусулмандар бири-бирине бир тууган. Диндеги бир тууганыңардын
          жаны, каны, мал-мүлкү, ар-намысы жана акысына сурабай кол салуу эч
          кимге адал эмес. Бир гана өзү ыраазылыгы менен берсе гана адал
          болмокчу. Сахабаларым! Өзүңөргө зулумдук кылбагыла! Мойнуңарда
          өзүңөргө да тийиштүү укуктарыңар жок, жоопкерчиликтериңер бар. Эй,
          адамдар! Аллах таала ар бир укук ээсине укугун (Курани каримде)
          берген. Мураскордун, осуяттын кажети жок. Бала кимдин төшөгүндө туулса
          ошого тийиштүү. Зынакорлук кылган адам куру кала турган нерселер бар.
          Өзүн атасынан башканын тегиненмин, деп айткан тексиздер, же өз
          кожоюнунан качып башканын колуна баш калкалаган кул адам Аллах таланын
          азабына, периштелер менен бардык мусулмандардын каргышына учурасын!.
          Аллах Таала мындай адамдардын тооболорун да, күбөлуктөрүн да кабыл
          кылбайт. Эй, адамдар! Раббиңер бир. Атаңар да бир. Баарынар Адам
          атанын балдарысыңар. Адам болсо топурактан жаратылды. Аллахтын алдында
          эң кадырлууңар - эң такыбаа болгонуңар. Араптын арап эместерден
          артыкчылыгы жок. Артыкчылык бир гана такыбачылыкта. Эй, адамдар! Эртең
          силерден мен тууралуу сурашат, эмне дейсиңер?» Ушул жерде Аллахтын
          элчиси ыйык сөөмөйүн көтөрүп, жамаатка каратып: «Күбө бол!, Оо, Алла!
          Күбө бол, Оо, Алла! Күбө бол, Оо, Алла!» - деди. Пайгамбарыбыз
          коштошуу хутбасын окуган күнү «Маида 3» сүрөсүнүн «Бүгүн диниңерди
          силер үчүн толуктадым. Силерге деген ниматымды аяктадым жана силерге
          дин катары Исламды берүүгө ыраазы болдум» деген маанидеги Маида
          сүрөсүнүн 3-аяты түштү. Пайгамбарыбыз с а в бул аятты сахабаларына
          окуган кезде Абу Бакр р.а ыйлап жиберди. Сахабалар анын себебин
          сураганда: «Бул аяти карима Расулуллахтын кайтыш боло турчу
          убактысынын жакындаганын керсөтүп турат. Ошол учун ыйлап жатам», -
          деди.
        </StyledTypography>
      </Container>
      <Footer />
    </div>
  );
};

export default Hutba;

const StyledTypography = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8, // Увеличенный межстрочный интервал для лучшей читаемости
  whiteSpace: 'pre-wrap', // Сохранение форматирования текста
  fontFamily: "'Amiri', serif", // Элегантный арабский шрифт
  color: '#4e4c4a', // Глубокий тёмный цвет текста
  background: 'linear-gradient(135deg, #faf5e4, #e9d9a9)', // Светлый градиентный фон
  padding: theme.spacing(3), // Внутренние отступы для выделения текста
  borderRadius: '10px', // Скругленные углы
  margin: '0 auto 20px', // Центрирование и отступы
  boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)', // Лёгкая тень
  borderLeft: `5px solid #d8a66f`, // Акцентный бордюр
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2), // Уменьшение отступов на мобильных устройствах
  },
}));
