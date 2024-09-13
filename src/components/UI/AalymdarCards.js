import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Avatar, Typography } from '@mui/material';
// utils

// components

import cssStyles from '../../utils/cssStyles';
import SvgIconStyle from '../SvgIconStyle';
import Image from '../Image';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({
    blur: 1,
    color: theme.palette.primary.darker,
    opacity: 0.3,
  }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------

AalymdarCards.propTypes = {
  user: PropTypes.object.isRequired,
};

export default function AalymdarCards({ user }) {
  const { name, cover, avatarUrl } = user;

  return (
    <Card
      sx={{ textAlign: 'center' }}
      component={Link}
      to={`/aalymdar/${user.id}`}
    >
      <Box sx={{ position: 'relative' }}>
        <SvgIconStyle
          src="https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            left: 0,
            right: 0,
            bottom: -26,
            mx: 'auto',
            position: 'absolute',
            color: 'background.paper',
          }}
        />
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
        />
        <OverlayStyle />
        <Image src={cover} alt={cover} ratio="16/9" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6 }}>
        {name}
      </Typography>

      <Typography
        style={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'center' }}
      >
        Жараткан Аллах таала <br /> биздин жана сиздин жакшы амалдарыңызды{' '}
        <br />
        кабыл кылсын
      </Typography>
    </Card>
  );
}
