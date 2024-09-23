import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../../components/Header';
import Welcome from '../../../components/Welcome';
import Footer from '../../../components/Footer';
import zeketpdf from '../../books-pdf/Зекет-китеби.pdf';

const Zeket = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          padding: 3,
          marginTop: '20px',
          borderRadius: 2,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: '#f6ecde',
        }}
      >
        {/* Информация о зекете */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: 3,
            fontWeight: 'bold',
            color: '#f6ecde', // Темный цвет для заголовка
            textAlign: 'center',
            fontFamily: 'Amiri, serif', // Арабский стиль шрифта
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Зекет деген эмне?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            lineHeight: 1.8,
            maxWidth: '1000px',
            marginBottom: 4,
            textAlign: 'justify',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            color: '#f6ecde', // Цвет текста
            fontFamily: 'Amiri, serif',
            fontSize: '18px',
          }}
        >
          <strong>Зекет</strong> — бул Исламдагы милдеттүү ибадаттардын бири, ал
          жерде мусулмандар өз мүлкүнүн бир бөлүгүн муктаждарга садага кылып
          беришет. Зекет берилгендин мүлкүн тазалоого жана коомдогу тилектештик
          жана жардам духун бекемдөөгө жардам берет. Ал Исламдын беш тирегинин
          бири болуп саналат жана мусулмандарга Алланын жана коомдун алдындагы
          милдеттерин эске салуу үчүн маанилүү.
          <br />
          <br />
          <strong>Зекет берилчү мүлктүн түрлөрү:</strong>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Алтын жана күмүш.</li>
            <li>Акча жана аманаттар.</li>
            <li>Коммерциялык товарлар.</li>
            <li>Айыл чарба продукциялары.</li>
            <li>Үй жаныбарлары (төө, уй, кой).</li>
          </ul>
          <br />
          <strong>Зекет берилчү адамдардын категориялары (8 категория):</strong>
          <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>
              Кедейлер (фукара) — жашоого жетиштүү мүлкү же кирешеси жоктор.
            </li>
            <li>
              Жарды (мискин) — өтө муктаждыкта жана жакырчылыкта жашагандар.
            </li>
            <li>
              Зекет чогултуучулар (амилин) — зекет чогултуу жана бөлүштүрүү
              менен алектенгендер.
            </li>
            <li>
              Жаңы мусулмандар (муаллафат аль-кулюб) — жүрөктөрүн Исламга
              бекемдөө үчүн.
            </li>
            <li>
              Кулдарды бошотуу үчүн (ар-рикак) — кулдарды же согуш туткундарына
              жардам берүү үчүн.
            </li>
            <li>
              Карызкорлор (гхаримин) — карыздарга малынып, аларды төлөй
              албагандар.
            </li>
            <li>
              Алланын жолунда (фи сабиль Аллах) — жихадды же башка Алла
              жолундагы иштерди колдоо үчүн.
            </li>
            <li>
              Сапардагы (ибнус-сабиль) — үйдөн алыс жүрүп, жардамга муктаж
              болгондор.
            </li>
          </ol>
        </Typography>

        {/* Кнопка для открытия PDF */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textTransform: 'none',
            backgroundColor: '#00ab55',
            ':hover': {
              backgroundColor: '#01964c',
            },
          }}
          onClick={() => window.open(zeketpdf, '_blank')}
        >
          «Зекет китеби» окуу
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default Zeket;
