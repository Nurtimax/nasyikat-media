import React from 'react';
import { Typography, Box } from '@mui/material';
import Header from './Header';
import Footer from '../components/Footer';
import { Container } from '@mui/system';

const Islam = () => {
  return (
    <div>
      <Container>
        <Header />
        <div maxWidth="md" style={{ marginTop: '80px' }}>
          <Typography mt={2} textAlign="center">
            <h1>Ислам деген эмне?</h1>
          </Typography>
          <Box
            sx={{
              padding: 3,
              borderRadius: 2,
              marginBottom: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                lineHeight: '1.6',
                textAlign: 'center',
                color: '#3f3e3d',
              }}
            >
              Аллах тааланын Жабраил периште аркылуу сүйүктүү жана акыркы
              пайгамбары Мухаммед саллаллаху алейхи вассалам га жиберген дини
              Ислам деп аталат. <br /> Ислам - адамдардын дүйнөдө тынчтык жана
              эркиндикте жашап, акыретте түбөлүк бакытка жетүүлөрүн камсыз
              кылуучу эрежелердин жыйынтыгы. Эски диндердеги бардык жакшы
              касиеттерди Ислам дини өзүнө камтыган. Бардык бакыт жана
              жакшылыктар ошондо. Ислам - аң-сезимдүү адам сөзсүз кабыл ала
              турган негиздер жана руханий маанилүү нерселерден турат.
              Жаратылышында тазалык болгон адамдар Исламга душман болушпайт.
              Исламдын ичинде эч кандай зыяндуулук жок. Анын сыртында да эч
              кандай пайда жок. Ислам адамдарды бири-бирин сүйүүгө, бири-бири
              менен жардамдашууга, бир туугандардай өмүр сүрүүгө чакырат.
              Мамлекеттерди өнүктүрүүнү, адамдардын руханий, дене жана пикир
              жагынан эркин жашоолорун каалайт. Аллах тааланын буйруктарын
              урматтоону, бардык жандууларга мээримдүү болууну буюрган. Ислам
              жандуу-жансыз ар бир жаратылганга карата жоопкерчиликти жүктөгөн.
              Ушуну менен катар, адам напсинин бардык ыпластыктардан арылуусун
              камсыздайт. Жаман көнүмүш адаттардан алыстап, напсини тарбиялоого
              чакырат. Жалкоолукка, убакытты текке кетирүүгө тыюу салып,
              билимге, техникага, өнөрчүлүккө, соодага, дыйканчылыкка, өндүрүшкө
              өтө чоң маани берет. Дини, мекени жана ишеними башка адамдарга
              каршы күч көрсөтүүгө тыюу салат. Жеке адамдын, коомдордун жана
              улуттардын укуктары жана милдеттерин так көрсөтөт. Тирүүлөргө,
              өлгөндөргө, туула тургандарга, баарына өзүнө тийиштүү укук жана
              жоопкерчиликтерди жүктөөдө. Ислам дини адамзаттын эки дүйнөдө тең
              бактылуу болуусун көздөйт. Башка диндердин негизи өзгөртүлүп,
              диний өкүмдөрдүн ордуна адамдар ойлоп чыгарган пикирлер орун
              алган. Аллах таала адамдардын дүйнөдө тынчтык жана эркиндикте
              жашап, акыретте түбөлүк бакытка жетүүлөрүн каалайт. Ошондуктан,
              бакытка жеткире турчу пайдалуу нерселерди жасоону буюрган. Зыяндуу
              нерселерге тыюу салат. Динге ишенсин-ишенбесин, каалаган бир адам
              билип же билбей Аллах тааланын буйруктарына моюн сунса дүйнөдө
              ыракат өмүр сүрөт. Азыркы учурда динсиз адамдардын жана улуттардын
              бир топ иштерде өнүгүүлөрүнүн себеби, Ислам дининде айтылгандай
              аракет кылгандыктарына байланыштуу болууда. Ал эми, акыретте
              бактылуу болуу үчүн Ислам динине ишенип, ыйман келтирүүлөрү да
              кажет. Ислам үч негиз: илим, амал, жана ыкыластан турат. Башкача
              айтанда, Ислам тууралуу билим алуу, үйрөнгөндөрүн орундоо, кылган
              бардык амалдарын бир гана Аллахтын ыраазычылыгы үчүн жасоо керек.
              Ислам - ыйман илими, фикх илими, калб (көңүл-жүрөк) илимдери болуп
              үчкө бөлүнөт. Мусулман адам ыйман илимин Ахли сүннөт аалымдарынын
              китептеринен үйрөнөт. Амал илимин төрт мазхабдын фикх китептеринен
              үйрөнөт. Ахли сүннөт аалымдары бул илимдерди сахабалардан
              үйрөнүшкөн. Ал эми, сахабалар Пайгамбарыбыздан үйрөнүшкөн. <br />{' '}
              Ислам дини китебинен.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <iframe
              width="800px"
              height="500px"
              src="https://www.youtube.com/embed/gjSzd5aggLg?si=ZRP0o4MurSV954pP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{
                maxWidth: '100%',
                height: '500px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            ></iframe>
          </Box>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Islam;
