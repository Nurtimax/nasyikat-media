// hooks
import createAvatar from '../utils/createAvatar';
// assets
import logo1 from '../assetts/icons/logo-nasykat.png';
// components
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ img, ...other }) {
  const { photoURL, displayName } = img || {};
  const avatarData = createAvatar(displayName || 'Nasyikat User');

  return (
    <Avatar
      src={photoURL || logo1}
      alt={displayName || 'Nasyikat User'}
      color={photoURL ? 'default' : avatarData.color}
      {...other}
    >
      {!photoURL && avatarData.name} {/* Show initials only if no 'photoURL' */}
    </Avatar>
  );
}
