import React, { useState, useEffect, useCallback } from 'react';
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

const timeKeys = {
  Fajr: 'Багымдат',
  Sunrise: 'Күн чыгуу',
  Dhuhr: 'Бешим',
  Asr: 'Аср',
  Maghrib: 'Шам',
  Isha: 'Куптан',
  Tahajjud: 'Тахажжуд',
};

const NamazTimes = () => {
  const [selectedRegion, setSelectedRegion] = useState('Баткен');
  const [prayerTimes, setPrayerTimes] = useState({});
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const now = new Date();

  const calculateNextPrayer = useCallback((timings) => {
    const now = new Date();
    const nextTime = Object.keys(timings).find((time) => {
      const [hours, minutes] = timings[time].split(':');
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);
      return prayerTime > now;
    });

    setNextPrayer(timings[nextTime] || timings['Fajr']);
  }, []);

  const fetchPrayerTimes = useCallback(
    async (latitude, longitude) => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
        );
        setPrayerTimes({
          Fajr: response.data.data.timings['Fajr'],
          Sunrise: response.data.data.timings['Sunrise'],
          Dhuhr: response.data.data.timings['Dhuhr'],
          Asr: response.data.data.timings['Asr'],
          Maghrib: response.data.data.timings['Maghrib'],
          Isha: response.data.data.timings['Isha'],
          Tahajjud: '02:20',
        });
        setLoading(false);
        calculateNextPrayer(response.data.data.timings);
      } catch (error) {
        setError('Не удалось загрузить время намаза');
        setLoading(false);
      }
    },
    [calculateNextPrayer]
  );

  useEffect(() => {
    if (selectedRegion) {
      const region = regions.find((reg) => reg.name === selectedRegion);
      fetchPrayerTimes(region.latitude, region.longitude);
    }
  }, [selectedRegion, fetchPrayerTimes]);

  const calculateTimeLeft = useCallback(() => {
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

    // Check if it's time to send a notification
    if (difference <= 10 * 60 * 1000 && difference > 9 * 60 * 1000) {
      sendNotification('Внимание', `До следующего намаза осталось 10 минут`);
    }
  }, [nextPrayer]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (nextPrayer) {
        calculateTimeLeft();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextPrayer, calculateTimeLeft]);

  useEffect(() => {
    // Request notification permission when the component mounts
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

  const sendNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

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
                  {Object.entries(prayerTimes).map(([key, value]) => (
                    <NamazItem key={key}>
                      <Typography variant="h6">
                        {timeKeys[key] || key}
                      </Typography>
                      <Typography variant="h6">{value}</Typography>
                    </NamazItem>
                  ))}
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
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  margin: '20px',
  border: '2px solid #d4af37',
  backgroundImage:
    'url("https://www.transparenttextures.com/patterns/arabesque.png")',
});

const TimeDisplay = styled('div')({
  marginBottom: '20px',
});

const PrayerTimes = styled('div')({
  marginBottom: '20px',
});

const NamazItem = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

const NextPrayerTime = styled('div')({
  marginTop: '20px',
});

export default NamazTimes;
