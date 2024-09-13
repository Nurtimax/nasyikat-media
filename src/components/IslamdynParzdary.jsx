import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { styled } from '@mui/system';
import Footer from '../components/Footer';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: '10px 0',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '10px',
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  borderRadius: '10px',
  position: 'relative',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
}));

const ListItem = styled('li')(({ theme }) => ({
  margin: '0.5rem 1rem', // Добавляем отступы между элементами списка
}));

const IslamdynParzdary = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <div>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ marginTop: '2rem', marginBottom: '1rem' }}
        >
          Исламдагы 40 Парз
        </Typography>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Ыйманда 7 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <ol>
                <ListItem>
                  Аллах Тааланын бардыгына жана жалгыздыгына ишенүү
                </ListItem>
                <ListItem>Аллах Тааланын периштелерине</ListItem>
                <ListItem>Аллах Тааланын китептерине</ListItem>
                <ListItem>Аллах Тааланын пайгамбарларына</ListItem>
                <ListItem>Акырет күнүнө</ListItem>
                <ListItem>
                  Тагдырга; жакшылык жана жамандык Аллахтан экендигине ишенүү
                </ListItem>
                <ListItem>Өлгөндөн кийин кайра тирилүүгө ишенүү</ListItem>
              </ol>
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Исламда 5 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <ol>
                <ListItem>Шахадат (күбөлүк) келимеси</ListItem>
                <ListItem>Беш убак намаз окуу</ListItem>
                <ListItem>Зекет берүү</ListItem>
                <ListItem>Орозо кармоо (жылына 1 жолу Рамазан айында)</ListItem>
                <ListItem>
                  Хаж ибадатын аткаруу (өмүрүндө бир жолу ажыга баруу)
                </ListItem>
              </ol>
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Дааратта 4 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <ol>
                <ListItem>Колду жуу (чыканакты кошуп)</ListItem>
                <ListItem>
                  Бетти (чач чыккан жерден баштап ээктин астын кошуп) жуу
                </ListItem>
                <ListItem>Баштын төрттөн бир бөлүгүнө масх тартуу</ListItem>
                <ListItem>Буттарды жуу</ListItem>
              </ol>
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Гусулда 3 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <ol>
                <ListItem>Оозго суу алып тамакка жеткире чайкоо</ListItem>
                <ListItem>Мурунга суу алып, таноо ачышканча суу алуу</ListItem>
                <ListItem>Денеде кургак жер калтырбай жуу</ListItem>
              </ol>
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Таямумда 4 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <ol>
                <ListItem>Ниет кылуу</ListItem>
                <ListItem>Таза топурак табуу</ListItem>
                <ListItem>Биринчи уруш менен бетти сүртүү</ListItem>
                <ListItem>
                  Экинчи уруш менен эки колду чыканак менен кошо сүртүү
                </ListItem>
              </ol>
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Намазда 12 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <strong>Сыртында:</strong>
              <ol>
                <ListItem>
                  Нажасаттан таза болуу; даарат, гусул алуу, хайз жана нифастан
                  тазалануу
                </ListItem>
                <ListItem>
                  Нажасаттан таза болуу; кийимдин жана жай намаздын таза болуусу
                </ListItem>
                <ListItem>Аврат жерлердин жабык болуусу</ListItem>
                <ListItem>Кыбылага жүз буруу</ListItem>
                <ListItem>Окула турган намаздын убактысынын кирүүсү</ListItem>
                <ListItem>Намаз окуш үчүн ниет кылуу</ListItem>
              </ol>
              <strong>Ичинде:</strong>
              <ol>
                <ListItem>Такбир тахрима</ListItem>
                <ListItem>Кыям (Түз туруу)</ListItem>
                <ListItem>Кыраат</ListItem>
                <ListItem>Руку</ListItem>
                <ListItem>Сажда — бешене, мурун саждага тийүүсү керек</ListItem>
                <ListItem>Каада-ахир – акыркы олтуруу</ListItem>
              </ol>
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Амру маруфда 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">1. Жакшылыкка чакыруу</Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Нахий мункарда 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">1. Жаман иштен кайтаруу</Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Хайзда 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              1. Хайз бүткөндөн кийин гусул алуу
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Нифаста 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              1. Нифас бүткөндөн кийин гусул алуу
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Таза адам 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">1. Таза болуу</Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Топуракта 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              1. Топуракка (таямум) колдонуу
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Күнөөда 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              1. Күнөөсүн (күнөө кылуу) таануусу
            </Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>
      </div>
      <Footer />
    </div>
  );
};

export default IslamdynParzdary;
