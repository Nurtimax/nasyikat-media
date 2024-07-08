import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import meccaImage from '../assetts/images/alaksa.jpg'; // Подключите изображения

const Section6 = () => {
  const cards = [
    {
      title: 'Мекка',
      description:
        '«Чындыгында, адамзат үчүн Меккеде алгач курулган Үй – бүткүл аалам үчүн ыйык жана Туура жол! Анда ачык белгилер жана Ибрахимдин орду бар. Кимде-ким ага кирсе – тынчтыкта болот. Мүмкүнчүлүгү жеткендерге Аллах (ыраазычылыгы) үчүн Каабага ажылык кылуу милдети жүктѳлдү. Ким мындан жүз үйрүсѳ, чындыгында, Аллах – ааламдагыларга муктаж эмес!» («Аалу Имран» сүрѳѳсү, 96-97 - аяттар).',
      image: meccaImage,
    },
    {
      title: 'Медина',
      description:
        'Пайгамбарыбыз ﷺ айтты: « Кимде - ким Мадинада өлсө, ага менин шапаатым (колдоом) важиб болот « деген. Онмиңден ашык куттуу сахабалардын денеси ошол жерге коюлган. Мадинага эч кандай жамандык келбейт, жамандар кирбейт. Мадинаи Мунаввара - жер жүзүндөгү эң пазилеттүү шаар, Пайгамбарыбызﷺ дын хижрат кылган жери. Курани Каримдин көптөгөн аяттары түшүрүлгөн, Пайгамбарыбыздын сахабалары коюлган, Пайгамбарыбыздынﷺ мубарак сөөгү коюлган шаар.Мадина саламттыктын шаары, Мадина Росулуллохтун шаары.',
      image: meccaImage,
    },
    {
      title: 'Аль-Акса',
      description:
        'Аллах Таала Аль-Куддуска мураскер болуу бактысын мусулмандарга ыроологон. Мусулмандар дээрлик 12 кылым бою (айрым кыска мезгилдерди кошпогондо) Иерусалимде бийлик жүргүзүшкөн. Куранда айтылат: “Ал силерди (ыйык) жерге орун басар кылды. Силерди брген нерселери аркылуу сыноо үчүн айрымдарыңарды жогорку даражага көтөрдү. Акыйкатта,Эгең жаза берүүдө өтө тез. Чындыгында, Ал Кечиримдүү жана Мээримдүү” (“Анам” сүрөөсү, 165-аят)',
      image: meccaImage,
    },
  ];

  return (
    <div
      style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '20px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Мусулмандар үчүн ыйык 3 жер</h1>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section6;
