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

  '& .MuiAccordionSummary-root': {
    backgroundColor: '#f0f0f0',
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

const Section5 = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h2>
          Дуба - момундун куралы, диндин түркүгү жана асман менен жердин нуру.
        </h2>
      </div>
      <div>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Роббана атина дубасы</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Арабча</p>
              اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي
              الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
              <p>Tранскрипция</p>
              <p>
                Раббана атина фид-дунья хасанатау ва филь-ахирати хасанатау ва
                кыйна газабаннар
              </p>
              <p>Кыргызча мааниси:</p>
              <p>
                «Оо, Жараткан Раббим бизге бул дүйнөнүн жана акыреттин
                жакшылыгын бер. Бизди тозок отунан сактагын.»
              </p>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Уктоо алдындагы дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Арабча</p>
              اللَّهُمَّ قِنِى عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ
              <p>Tранскрипция</p>
              <p>Аллаhумма ḱини ‘аҙабака явма таб’аҫу ‘ибадака</p>
              <p>Кыргызча мааниси:</p>
              <p>
                Эй Алла! Өзүңдүн пенделериңди Кыямат Күнү кабырдан тургузган
                убакта мени өзүңдүн азабындан куткар!
              </p>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Кырсык балээден сактоочу дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Арабча</p>
              بِاسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ
              وَلاَ فِي السَّمَاء وَهُوَ السَّمِيعُ العَلِيمُ
              <p>Tранскрипция</p>
              <p>
                "БИСМИЛЛААХИЛЛАЗИИ ЛАА ЯЗУРРУ МАЬА СМИХИИ ШАЙ-УН ФИЛ-АРЗИ ВА ЛАА
                ФИС-САМАА-И ВА ХУВА-ССАМИИЬУЛ ЬАЛИИМ"
              </p>
              <p>Кыргызча мааниси:</p>
              <p>
                Алла Тааланын аты менен баштаймын, Анын аты менен эч бир нерсе
                жерде да, асманда да зыян жеткире албайт. Ал Зат ар бир нерсени
                угуп туруучу жана ар бир нерсени билип туруучу
              </p>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Кыйынчылыктан карыздан куткаруучу дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Пайгамбарыбыз ﷺ : “Сага Аллах кыйынчылыктарыңды жоюп,
                карыздарыңды төлөөдө сага жардам бериши үчүн окула турган
                келмелерди үйрөтөйүнбү?
              </p>
              <p>
                Эртели-кеч төмөнкү дубаны оку
                <b>
                  “Оо, Жараткан Аллах, кыйынчылыктардан, кайгы-капалардан сакта.
                  Алсыздыктан жана жалкоолуктан сакта. Сараңдыктан жана
                  коркоктуктан сакта. Карызга батуудан жана аласасы барлардын
                  каалгамды кагышынан сакта!
                </b>
              </p>{' '}
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Күзгүнү карагандагы дуба</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>اللَّهُمَّ كَمَا حَسَّنْت خَلْقِي فَحَسِّنْ خُلُقِي</p>
              <p>Аллоо-хумма анта хассанта холкии фахассин хулкии.</p>
              <p>
                Эй Алла Сен мени чырайлуу кылып жараттың. Эми Сен менин
                мүнөзүмдү да жакшы кыл.
              </p>
              <p>(Ахмад)</p>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </div>
    </div>
  );
};

export default Section5;
