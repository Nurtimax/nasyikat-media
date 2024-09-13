import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import {
  Link,
  Card,
  Typography,
  CardHeader,
  Stack,
  Divider,
} from '@mui/material';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ProfileAbout.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileAbout({ profile }) {
  const { country } = profile;

  return (
    <Card
      sx={{
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
        textAlign: 'center',
      }}
    >
      <CardHeader
        title="Nasyikat.media"
        sx={{
          textAlign: 'center',
          borderRadius: '16px 16px 0 0',
        }}
      />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Typography variant="h6" gutterBottom>
            Биздин инстаграм баракчалар
          </Typography>
          <Typography variant="body2">
            Оо Аллахым! Өзүңдүн пенделериңди Кыямат Күнү кабырдан тургузган
            убакта мени өзүңдүн азабындан куткар!
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Link
              href="https://www.instagram.com/nasyikat.media"
              target="_blank"
              rel="noopener"
              color="text.primary"
            >
              <IconStyle icon={'eva:instagram-fill'} /> @nasyikat.media
            </Link>
            <Link
              href="https://www.instagram.com/kyrgyz.muslims/"
              target="_blank"
              rel="noopener"
              color="text.primary"
            >
              <IconStyle icon={'eva:instagram-fill'} /> @Kyrgyz.muslims
            </Link>
          </Stack>
        </Stack>

        <Divider />

        {/* Location */}
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography variant="body2">
            Кыргызстан Бишкек Баткен &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {country}
            </Link>
          </Typography>
        </Stack>

        {/* Mission Statement */}
        <Divider />
        <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
          Биздин максат
        </Typography>
        <Typography variant="body2">
          Ассаламу алейкум <b>Nasyikat.media</b>, мусулман бир туугандар Аллах
          тааланын динине элибизге жерибизге кызмат кылуу биз үчүн чоң сыймык
          биздин сайттан устаздардын баяндарын жана ошондой эле инстаграм блок
          кылып жаткан видеолорду көрө аласыздар.
        </Typography>
      </Stack>
    </Card>
  );
}
