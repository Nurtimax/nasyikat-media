import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  ButtonBase,
} from '@mui/material';
import meccaImage from '../assetts/images/alaksa.jpg';
import Mecca from '../assetts/images/mecca.jpg';
import Madina from '../assetts/images/madina.jpg';

const Section6 = () => {
  const cards = [
    {
      title: 'Мекка',
      description:
        '«Чындыгында, адамзат үчүн Меккеде алгач курулган Үй – бүткүл аалам үчүн ыйык жана Туура жол! Анда ачык белгилер жана Ибрахимдин орду бар. Кимде-ким ага кирсе – тынчтыкта болот. Мүмкүнчүлүгү жеткендерге Аллах (ыраазычылыгы) үчүн Каабага ажылык кылуу милдети жүктѳлдү. Ким мындан жүз үйрүсѳ, чындыгында, Аллах – ааламдагыларга муктаж эмес!» («Аалу Имран» сүрѳѳсү, 96-97 - аяттар).',
      image: Mecca,
      link: 'https://ky.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BA%D0%B5',
    },
    {
      title: 'Медина',
      description:
        'Пайгамбарыбыз ﷺ айтты: « Кимде - ким Мадинада өлсө, ага менин шапаатым (колдоом) важиб болот « деген. Онмиңден ашык куттуу сахабалардын денеси ошол жерге коюлган. Мадинага эч кандай жамандык келбейт, жамандар кирбейт. Мадинаи Мунаввара - жер жүзүндөгү эң пазилеттүү шаар, Пайгамбарыбызﷺ дын хижрат кылган жери. Курани Каримдин көптөгөн аяттары түшүрүлгөн, Пайгамбарыбыздын сахабалары коюлган, Пайгамбарыбыздынﷺ мубарак сөөгү коюлган шаар.Мадина саламттыктын шаары, Мадина Росулуллохтун шаары.',
      image: Madina,
      link: 'https://ky.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0',
    },
    {
      title: 'Аль-Акса',
      description:
        'Аллах Таала Аль-Куддуска мураскер болуу бактысын мусулмандарга ыроологон. Мусулмандар дээрлик 12 кылым бою (айрым кыска мезгилдерди кошпогондо) Иерусалимде бийлик жүргүзүшкөн. Куранда айтылат: “Ал силерди (ыйык) жерге орун басар кылды. Силерди брген нерселери аркылуу сыноо үчүн айрымдарыңарды жогорку даражага көтөрдү. Акыйкатта,Эгең жаза берүүдө өтө тез. Чындыгында, Ал Кечиримдүү жана Мээримдүү” (“Анам” сүрөөсү, 165-аят)',
      image: meccaImage,
      link: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C-%D0%90%D0%BA%D1%81%D0%B0',
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
            <ButtonBase
              component="a"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', height: '100%' }}
            >
              <Card style={{ width: '100%', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
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
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section6;
