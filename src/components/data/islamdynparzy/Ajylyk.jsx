import { Typography, Container, Box } from '@mui/material';
import Header from '../../Header';
import Welcome from '../../Welcome';
import BackgroundImage from '../../../assetts/icons/bacimg.png';

const Ajylyk = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'end',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          py: 4,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',

              borderRadius: 2,
              p: 4,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#000000',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              Ажылык
            </Typography>
            <Typography
              variant="body1"
              component="div"
              paragraph
              sx={{
                color: '#000000',
                textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
              }}
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
              sx={{
                color: '#000000',
              }}
            >
              Аллах Таала өз пенделерине эгер мүмкүнчүлүгү болсо, өмүрүндө бир
              жолу хаж ибаадатын парз кылды. Хаж- бул Аллах Субхану уа Тааланын
              үйү болгон ыйык Каабаны, эң биринчи мусулманчылык башталган,
              Кураан аяттары түшкөн жерди, Пайгамбарыбыз (салаллоху алейхи уа
              салламдын) баскан жерлерин, анын мечитин, сахабалар мекендеген
              жерди зыярат кылуу. Ар кандай нерсени угуп койгон башка, бирок көз
              менен көргөн башка таасир берет. Ошол сыңары, Ыйык Кураандын
              мекенин, Пайгамбарыбыз (салаллоху алейхи уа саллам) үммөтү үчүн
              азап чексе да, сабыр кылуу менен туура жолду баштап, басып өткөн
              жерлерди зыярат кылуу менен, пенденин Аллах Таалага, Пайгамбарыбыз
              (салаллоху алейхи уа салламга) болгон сүйүүсү, арзуусу жогорулап,
              ыйманы ого бетер бекемделет ин шаа Аллах. Ошону менен катар Хажда
              кылынган ибаадаттардын сооптору, башка мезгилде кылынган
              ибадаттардын сообунан бир канча эсе көп болот. Жогоруда айтылган
              беш парздын эч биринде пенде үчүн кыйынчылык жаратылган эмес,
              тескерисинче, ар биринде Жараткандын нематы, пендесине болгон
              камкордугу, берешендиги, чексиз жакшылыктары, эки дүйнөнүн
              бактылуугу камтылган.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Ajylyk;
