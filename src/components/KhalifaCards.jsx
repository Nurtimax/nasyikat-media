import React from 'react';
import { Grid } from '@mui/material';
import KhalifaCard from '../components/KhalifaCard';
import AbuBakrsyddyk from '../assetts/images/abubakr.png';
import Umaribnhattab from '../assetts/images/umaribnhattab.png';
import Usmanibnaffan from '../assetts/images/usmanra.png';
import Aliibnabutalid from '../assetts/images/allira.png';

// Основной компонент с карточками Халифов
const KhalifaCards = () => {
  const cardsData = [
    {
      image: AbuBakrsyddyk, // Замените на путь к изображению
      title: 'Азирети Абубакр Сыддык (радиаллаху анху)',
      text: '"Үммөтүмдүн арасынан үммөтүмө эң ырайымдуу болгону – Абу бакр Сыддык" (Ибн Маажа, 125).',
      detailPage: '/khalifacards/khalifa1',
    },
    {
      image: Umaribnhattab, // Замените на путь к изображению
      title: 'Азирети Умар ибн Хаттаб (радиаллаху анху)',
      text: '“Пайгамбарыбыз (с.а.в ) мындай деп айткан Эгер менден кийин пайгамбар келсе, анда ал Умар ибн аль-Хаттаб болмок”',
      detailPage: '/khalifacards/khalifa2',
    },
    {
      image: Usmanibnaffan, // Замените на путь к изображению
      title: 'Азирети Усман ибн Аффан (радиаллаху анху)',
      text: 'Пайгамбарыбыз ﷺ “Эй, Усман! Эгер жанымда үчүнчү кызым болгондо аны да сага бермекмин”,',
      detailPage: '/khalifacards/khalifa3',
    },
    {
      image: Aliibnabutalid, // Замените на путь к изображению
      title: 'Азирети Али ибн Абуталиб (радиаллаху анху)',
      text: '“Чындыгында, мен бул оорудан өлбөйм. Алла Элчиси мага сакалым канга боелуп өлөрүмдү кабарлаган”.',
      detailPage: '/khalifacards/khalifa4',
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {cardsData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <KhalifaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default KhalifaCards;
