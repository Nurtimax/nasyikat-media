import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import arabicLetters from '../utils/constants/mualimsani';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

const dua = {
  transliteration: 'Рабби йассир ва ля туассир. Рабби тамим биль-хайр',
  translation: 'Оо, Роббим Жеңил кылгын, оор кылба! Жакшылык менен бүтүргүн!.',
};

const MualimSani = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box sx={{ padding: 3, direction: 'rtl' }}>
        {' '}
        {/* Правое направление для арабского текста */}
        {/* Дуа перед алфавитом */}
        <Typography variant="h4" align="center" gutterBottom>
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </Typography>
        <Card sx={{ marginBottom: 4, padding: 2, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontFamily: 'Scheherazade, serif' }}>
              ربّ يسّر ولا تعسّر ربّ تمّم بالخي
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {dua.transliteration}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {dua.translation}
            </Typography>
          </CardContent>
        </Card>
        {/* Арабский алфавит */}
        <Typography variant="h4" align="center" gutterBottom>
          КУРАН АЛИППЕСИ
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {arabicLetters.map(({ letter, transliteration }, index) => (
            <Grid item xs={4} sm={2} md={1.6} key={index}>
              <Card sx={{ textAlign: 'center', padding: 2 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    sx={{ fontFamily: 'Scheherazade, serif' }}
                  >
                    {letter}
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: 1 }}>
                    {transliteration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Аят из Суры Юсуф после алфавита */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ marginTop: 4 }}
        >
          Араб тилин үйрөнүүнүн зарылдыгы
        </Typography>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontFamily: 'Scheherazade, serif' }}>
              إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Иннаа анзалнааху кураанан ъаробииййаа
            </Typography>
            <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
              "Чындыгында Биз Куранды араб тилинде түшүрдүк" <br />
              (Юсуф сүрөсү-2)
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </div>
  );
};

export default MualimSani;
