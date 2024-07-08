import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#eeecc9', // Light background color

  '& .MuiAccordionSummary-root': {
    backgroundColor: '#dedac9',
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

const Header = styled('h2')({
  textAlign: 'center',
  color: '#333', // Dark color for good contrast
  marginBottom: '20px',
});

const Paragraph = styled('p')({
  color: '#666', // Comfortable reading color
  lineHeight: '1.6', // Increased line height for better readability
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
              <Paragraph>Арабча</Paragraph>
              <Paragraph>
                اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي
                الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
              </Paragraph>
              <Paragraph>Tранскрипция</Paragraph>
              <Paragraph>
                Раббана атина фид-дунья хасанатау ва филь-ахирати хасанатау ва
                кыйна газабаннар
              </Paragraph>
              <Paragraph>Кыргызча мааниси:</Paragraph>
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
              <Paragraph>Арабча</Paragraph>
              <Paragraph>
                اللَّهُمَّ قِنِى عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ
              </Paragraph>
              <Paragraph>Tранскрипция</Paragraph>
              <Paragraph>
                Аллаhумма ḱини ‘аҙабака явма таб’аҫу ‘ибадака
              </Paragraph>
              <Paragraph>Кыргызча мааниси:</Paragraph>
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
              <Paragraph>Арабча</Paragraph>
              <Paragraph>
                بِاسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي
                الأَرْضِ وَلاَ فِي السَّمَاء وَهُوَ السَّمِيعُ العَلِيمُ
              </Paragraph>
              <Paragraph>Tранскрипция</Paragraph>
              <Paragraph>
                "БИСМИЛЛААХИЛЛАЗИИ ЛАА ЯЗУРРУ МАЬА СМИХИИ ШАЙ-УН ФИЛ-АРЗИ ВА ЛАА
                ФИС-САМАА-И ВА ХУВА-ССАМИИЬУЛ ЬАЛИИМ"
              </Paragraph>
              <Paragraph>Кыргызча мааниси:</Paragraph>
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
              <Paragraph>
                Эртели-кеч төмөнкү дубаны оку
                <b>
                  “Оо, Жараткан Аллах, кыйынчылыктардан, кайгы-капалардан сакта.
                  Алсыздыктан жана жалкоолуктан сакта. Сараңдыктан жана
                  коркоктуктан сакта. Карызга батуудан жана аласасы барлардын
                  каалгамды кагышынан сакта!
                </b>
              </Paragraph>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Күзгүнү карагандагы дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <Paragraph>
                اللَّهُمَّ كَمَا حَسَّنْت خَلْقِي فَحَسِّنْ خُلُقِي
              </Paragraph>
              <Paragraph>
                Аллоо-хумма анта хассанта холкии фахассин хулкии.
              </Paragraph>
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
