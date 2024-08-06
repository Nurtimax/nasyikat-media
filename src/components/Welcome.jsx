import { styled } from '@mui/system';
import banner from '../assetts/icons/section-img.png';
import React from 'react';

const Welcome = () => {
  return <StyleContainer></StyleContainer>;
};

export default Welcome;

const StyleContainer = styled('div')({
  height: '50px',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});
