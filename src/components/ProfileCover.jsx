import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import cssStyles from '../utils/cssStyles.js';
import MyAvatar from './MyAvatar.jsx';
import Image from './Image.jsx';
import img1 from '../assetts/icons/k.png';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    ...cssStyles().bgBlur({ blur: 1, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

ProfileCover.propTypes = {
  myProfile: PropTypes.object,
};

export default function ProfileCover({ name, cover, description }) {
  return (
    <RootStyle>
      <InfoStyle>
        <MyAvatar
          img={{ photoURL: cover }}
          sx={{
            mx: 'auto',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'common.white',
            width: { xs: 80, md: 128 },
            height: { xs: 80, md: 128 },
          }}
        />
        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h4">{name}</Typography>
          <Typography sx={{ opacity: 0.72 }}>{description}</Typography>
        </Box>
      </InfoStyle>
      <Image
        alt="profile cover"
        src={img1}
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
    </RootStyle>
  );
}
