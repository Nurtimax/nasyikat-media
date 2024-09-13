import PropTypes from 'prop-types';
// @mui
import { Box, Grid, Card, Avatar, Typography, IconButton } from '@mui/material';
import following from '../utils/constants/following.js';
import { Instagram } from '@mui/icons-material';
// components

// ----------------------------------------------------------------------

ProfileFollowers.propTypes = {
  following: PropTypes.array,
};

export default function ProfileFollowers() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Катталуучулар
      </Typography>

      <Grid container spacing={3}>
        {following.map((follower) => (
          <Grid key={follower.id} item xs={12} md={4}>
            <FollowerCard follower={follower} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// ----------------------------------------------------------------------

FollowerCard.propTypes = {
  follower: PropTypes.object,
};

function FollowerCard({ follower }) {
  const { name, country, avatarUrl, instagram } = follower;

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />

      <Box sx={{ flexGrow: 1, minWidth: 0, pl: 2, pr: 1 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {country}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton
          component="a"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#E1306C' }} // Instagram color
        >
          <Instagram />
        </IconButton>
        {/* 
        <IconButton
          component="a"
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0088cc' }} // Telegram color
        >
          <Telegram />
        </IconButton>

        <IconButton
          component="a"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#25D366' }} // WhatsApp color
        >
          <WhatsApp />
        </IconButton> */}
      </Box>
    </Card>
  );
}
