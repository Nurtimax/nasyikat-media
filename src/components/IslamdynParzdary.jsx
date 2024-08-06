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
  backgroundColor: '#a5d6a7c6', // Soft green color
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#81c784d0',
  },
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: '#e3dcaf91',
  borderRadius: '10px',
  position: 'relative',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#37474f',
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
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        >
          Бактылуулук Исламда 40 Парз
        </Typography>

        <StyledAccordion>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
            <Heading variant="h6">Ыйманда 7 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">
              <ol>
                <li>Аллах Тааланын бардыгына жана жалгыздыгына ишенүү</li>
                <li>Аллах Тааланын периштелерине</li>
                <li>Аллах Тааланын китептерине</li>
                <li>Аллах Тааланын пайгамбарларына</li>
                <li>Акырет күнүнө</li>
                <li>
                  Тагдырга; жакшылык жана жамандык Аллахтан экендигине ишенүү
                </li>
                <li>Өлгөндөн кийин кайра тирилүүгө ишенүү</li>
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
                <li>Шахадат (күбөлүк) келимеси</li>
                <li>Беш убак намаз окуу</li>
                <li>Зекет берүү</li>
                <li>Орозо кармоо (жылына 1 жолу Рамазан айында)</li>
                <li>Хаж ибадатын аткаруу (өмүрүндө бир жолу ажыга баруу)</li>
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
                <li>Колду жуу (чыканакты кошуп)</li>
                <li>Бетти (чач чыккан жерден баштап ээктин астын кошуп) жуу</li>
                <li>Баштын төрттөн бир бөлүгүнө масх тартуу</li>
                <li>Буттарды жуу</li>
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
                <li>Оозго суу алып тамакка жеткире чайкоо</li>
                <li>Мурунга суу алып, таноо ачышканча суу алуу</li>
                <li>Денеде кургак жер калтырбай жуу</li>
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
                <li>Ниет кылуу</li>
                <li>Таза топурак табуу</li>
                <li>Биринчи уруш менен бетти сүртүү</li>
                <li>Экинчи уруш менен эки колду чыканак менен кошо сүртүү</li>
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
                <li>
                  Хадастан таза болуу; даарат, гусул алуу, хайз жана нифастан
                  тазалануу
                </li>
                <li>
                  Нажасаттан таза болуу; кийимдин жана жай намаздын таза болуусу
                </li>
                <li>Аврат жерлердин жабык болуусу</li>
                <li>Кыбылага жүз буруу</li>
                <li>Окула турган намаздын убактысынын кирүүсү</li>
                <li>Намаз окуш үчүн ниет кылуу</li>
              </ol>
              <strong>Ичинде:</strong>
              <ol>
                <li>Такбир тахрима</li>
                <li>Кыям (Түз туруу)</li>
                <li>Кыраат</li>
                <li>Руку</li>
                <li>Сажда — бешене, мурун саждага тийүүсү керек</li>
                <li>Каада-ахир – акыркы олтуруу</li>
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
            <Heading variant="h6">Илимде 1 парз бар</Heading>
          </AccordionSummaryStyled>
          <AccordionDetailsStyled>
            <Typography component="div">1. Илим алуу</Typography>
          </AccordionDetailsStyled>
        </StyledAccordion>
      </div>
      <Footer />
    </div>
  );
};

export default IslamdynParzdary;
