import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Card, IconButton, Typography, CardContent } from '@mui/material';
// utils
import cssStyles from '../utils/cssStyles';
import Image from './Image';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const CaptionStyle = styled(CardContent)(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.grey[900] }),
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  justifyContent: 'space-between',
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

ProfileGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default function ProfileGallery({ gallery }) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Сүрөттөр
      </Typography>

      <Card sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {gallery.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </Box>
      </Card>
    </Box>
  );
}

// ----------------------------------------------------------------------

GalleryItem.propTypes = {
  image: PropTypes.object,
};

function GalleryItem({ image }) {
  const { imageUrl, title } = image;
  return (
    <Card sx={{ cursor: 'pointer', position: 'relative' }}>
      <Image alt="gallery image" ratio="1/1" src={imageUrl} />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
        </div>
        <IconButton color="inherit">
          <Iconify width={20} height={20} />
        </IconButton>
      </CaptionStyle>
    </Card>
  );
}
