import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  Select,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

const regions = [
  { name: 'Баткен', latitude: 39.9365, longitude: 70.0 },
  { name: 'Бишкек', latitude: 42.8746, longitude: 74.5698 },
  { name: 'Ош', latitude: 40.5135, longitude: 72.8161 },
  { name: 'Джалал-Абад', latitude: 40.9338, longitude: 72.9817 },
  { name: 'Иссык-Куль', latitude: 42.4417, longitude: 77.0836 },
  { name: 'Талас', latitude: 42.5228, longitude: 72.2427 },
  { name: 'Нарын', latitude: 41.4287, longitude: 75.9911 },
];

const defaultTimes = {
  Fajr: '05:06',
  Sunrise: '06:43',
  Dhuhr: '12:56',
  Asr: '17:20',
  Maghrib: '19:14',
  Isha: '20:47',
  Tahajjud: '02:20',
};

const NamazTimes = () => {
  const [selectedRegion, setSelectedRegion] = useState('Баткен');
  const [prayerTimes, setPrayerTimes] = useState(defaultTimes);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedRegion) {
      const region = regions.find((reg) => reg.name === selectedRegion);
      fetchPrayerTimes(region.latitude, region.longitude);
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (nextPrayer) {
        calculateTimeLeft();
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const nextPrayerTime = new Date();
    const [hours, minutes] = nextPrayer.split(':');
    nextPrayerTime.setHours(hours, minutes, 0, 0);

    if (nextPrayerTime < now) {
      nextPrayerTime.setDate(now.getDate() + 1);
    }

    const difference = nextPrayerTime - now;

    setTimeLeft({
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    });
  };

  const fetchPrayerTimes = async (latitude, longitude) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
      );
      setPrayerTimes({
        ...response.data.data.timings,
        Tahajjud: '02:20', // Время Тахаджуд можно вычислить, но для примера указано вручную
      });
      setLoading(false);
      calculateNextPrayer(response.data.data.timings);
    } catch (error) {
      setError('Не удалось загрузить время намаза');
      setLoading(false);
    }
  };

  const calculateNextPrayer = (timings) => {
    const now = new Date();
    const timeKeys = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    const nextTime = timeKeys.find((time) => {
      const [hours, minutes] = timings[time].split(':');
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);
      return prayerTime > now;
    });

    setNextPrayer(timings[nextTime] || timings['Fajr']);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const now = new Date();

  return (
    <div>
      <Header />
      <Welcome />
      <Container>
        <CardStyled>
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              textAlign="center"
            >
              Шаар тандаңыз:
            </Typography>
            <Select
              value={selectedRegion}
              onChange={handleRegionChange}
              fullWidth
              displayEmpty
              style={{ marginBottom: '20px' }}
            >
              {regions.map((region) => (
                <MenuItem key={region.name} value={region.name}>
                  {region.name}
                </MenuItem>
              ))}
            </Select>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <Typography color="error">{error}</Typography>
            ) : prayerTimes ? (
              <div>
                <TimeDisplay>
                  <Typography variant="h6" textAlign="center">
                    {now.toLocaleDateString('ru-RU', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    , {now.toLocaleTimeString()}
                  </Typography>
                </TimeDisplay>
                <PrayerTimes>
                  <Typography
                    sx={{
                      background: 'red',
                      color: '#fff',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '1rem',
                    }}
                  >
                    Учурда намаз убактылары такталып жатат
                  </Typography>
                  <NamazItem>
                    <Typography variant="h6">Багымдат</Typography>
                    <Typography variant="h6">{prayerTimes.Fajr}</Typography>
                  </NamazItem>
                  <NamazItem>
                    <Typography variant="h6">Күн чыгуу</Typography>
                    <Typography variant="h6">{prayerTimes.Sunrise}</Typography>
                  </NamazItem>
                  <NamazItem>
                    <Typography variant="h6">Бешим</Typography>
                    <Typography variant="h6">{prayerTimes.Dhuhr}</Typography>
                  </NamazItem>
                  <NamazItem>
                    <Typography variant="h6">Аср</Typography>
                    <Typography variant="h6">{prayerTimes.Asr}</Typography>
                  </NamazItem>
                  <NamazItem>
                    <Typography variant="h6">Шам</Typography>
                    <Typography variant="h6">{prayerTimes.Maghrib}</Typography>
                  </NamazItem>
                  <NamazItem>
                    <Typography variant="h6">Куптан</Typography>
                    <Typography variant="h6">{prayerTimes.Isha}</Typography>
                  </NamazItem>
                  <NamazItem>
                    <Typography variant="h6">Тахаджуд</Typography>
                    <Typography variant="h6">{prayerTimes.Tahajjud}</Typography>
                  </NamazItem>
                </PrayerTimes>
                <NextPrayerTime>
                  <Typography
                    style={{ fontSize: '0.9rem', textAlign: 'center' }}
                  >
                    Кийинки намазга чейин {timeLeft.hours} саат{' '}
                    {timeLeft.minutes} мүнөт {timeLeft.seconds} секунда
                  </Typography>
                </NextPrayerTime>
              </div>
            ) : (
              <Typography variant="body1">
                Намаз убактысын билүү үчүн шаарыңызды тандаңыз
              </Typography>
            )}
          </CardContent>
        </CardStyled>
      </Container>
      <div style={{ marginTop: '0.5rem' }}>
        <Footer />
      </div>
    </div>
  );
};

// Styled Components with Ethnic Styles
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '86vh',
  padding: '10px',
});

const CardStyled = styled(Card)({
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  border: '2px solid #d4af37', // Золотая рамка
  backgroundImage:
    'url("https://www.transparenttextures.com/patterns/arabesque.png")', // Этнический фон
});

const TimeDisplay = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '8px',
});

const PrayerTimes = styled('div')({
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const NamazItem = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 10px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
});

const NextPrayerTime = styled('div')({
  textAlign: 'center',
  marginTop: '20px',
  fontSize: '1rem',
});

export default NamazTimes;
