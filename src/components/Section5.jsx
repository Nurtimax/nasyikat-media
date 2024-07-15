import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, keyframes } from '@mui/material/styles';

const backgroundAnimation = keyframes`
  0% { background-color: #f3f2d6; }
  50% { background-color: #e5e4cf; }
  100% { background-color: #eeecc9; }
`;

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  animation: `${backgroundAnimation} 9s infinite ease-in-out`,

  '& .MuiAccordionSummary-root': {
    backgroundColor: '#e7e4d6',
    borderBottom: '1px solid #ddd',
    marginBottom: -1,
    minHeight: 56,
    '&.Mui-expanded': {
      minHeight: 56,
    },
  },

  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },

  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const Header = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
  fontFamily: 'serif',
  fontSize: '2rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const Paragraph = styled('p')(({ theme }) => ({
  color: '#666',
  lineHeight: '1.8',
  margin: '10px 0',
  fontFamily: 'Georgia, serif',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const BoldParagraph = styled(Paragraph)({
  fontWeight: 'bold',
});

const Section5 = () => {
  return (
    <div>
      <Header>
        Дуба - момундун куралы, диндин түркүгү жана асман менен жердин нуру.
      </Header>
      <div>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Роббана атина дубасы</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <BoldParagraph>Арабча</BoldParagraph>
              <Paragraph>
                اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي
                الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
              </Paragraph>
              <BoldParagraph>Tранскрипция</BoldParagraph>
              <Paragraph>
                Раббана атина фид-дунья хасанатау ва филь-ахирати хасанатау ва
                кыйна газабаннар
              </Paragraph>
              <BoldParagraph>Кыргызча мааниси:</BoldParagraph>
              <Paragraph>
                «Оо, Жараткан Раббим бизге бул дүйнөнүн жана акыреттин
                жакшылыгын бер. Бизди тозок отунан сактагын.»
              </Paragraph>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Уктоо алдындагы дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <BoldParagraph>Арабча</BoldParagraph>
              <Paragraph>
                اللَّهُمَّ قِنِى عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ
              </Paragraph>
              <BoldParagraph>Tранскрипция</BoldParagraph>
              <Paragraph>
                Аллаhумма ḱини ‘аҙабака явма таб’аҫу ‘ибадака
              </Paragraph>
              <BoldParagraph>Кыргызча мааниси:</BoldParagraph>
              <Paragraph>
                Эй Алла! Өзүңдүн пенделериңди Кыямат Күнү кабырдан тургузган
                убакта мени өзүңдүн азабындан куткар!
              </Paragraph>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Кырсык балээден сактоочу дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <BoldParagraph>Арабча</BoldParagraph>
              <Paragraph>
                بِاسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي
                الأَرْضِ وَلاَ فِي السَّمَاء وَهُوَ السَّمِيعُ العَلِيمُ
              </Paragraph>
              <BoldParagraph>Tранскрипция</BoldParagraph>
              <Paragraph>
                "БИСМИЛЛААХИЛЛАЗИИ ЛАА ЯЗУРРУ МАЬА СМИХИИ ШАЙ-УН ФИЛ-АРЗИ ВА ЛАА
                ФИС-САМАА-И ВА ХУВА-ССАМИИЬУЛ ЬАЛИИМ"
              </Paragraph>
              <BoldParagraph>Кыргызча мааниси:</BoldParagraph>
              <Paragraph>
                Алла Тааланын аты менен баштаймын, Анын аты менен эч бир нерсе
                жерде да, асманда да зыян жеткире албайт. Ал Зат ар бир нерсени
                угуп туруучу жана ар бир нерсени билип туруучу
              </Paragraph>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Кыйынчылыктан карыздан куткаруучу дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <Paragraph>
                Пайгамбарыбыз ﷺ : “Сага Аллах кыйынчылыктарыңды жоюп,
                карыздарыңды төлөөдө сага жардам бериши үчүн окула турган
                келмелерди үйрөтөйүнбү?
              </Paragraph>
              <BoldParagraph>
                Эртели-кеч төмөнкү дубаны оку: “Оо, Жараткан Аллах,
                кыйынчылыктардан, кайгы-капалардан сакта. Алсыздыктан жана
                жалкоолуктан сакта. Сараңдыктан жана коркоктуктан сакта. Карызга
                батуудан жана аласасы барлардын каалгамды кагышынан сакта!
              </BoldParagraph>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Күзгүнү карагандагы дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <BoldParagraph>Арабча</BoldParagraph>
              <Paragraph>
                اللَّهُمَّ كَمَا حَسَّنْت خَلْقِي فَحَسِّنْ خُلُقِي
              </Paragraph>
              <BoldParagraph>Tранскрипция</BoldParagraph>
              <Paragraph>
                Аллоо-хумма анта хассанта холкии фахассин хулкии.
              </Paragraph>
              <BoldParagraph>Кыргызча мааниси:</BoldParagraph>
              <Paragraph>
                Эй Алла Сен мени чырайлуу кылып жараттың. Эми Сен менин
                мүнөзүмдү да жакшы кыл.
              </Paragraph>
              <Paragraph>(Ахмад)</Paragraph>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </div>
    </div>
  );
};

export default Section5;
