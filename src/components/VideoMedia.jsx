import React, { useRef, useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useInView } from 'react-intersection-observer';

const VideoMedia = ({ src, controls }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying && inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, inView]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={src}
        controls={controls}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      >
        Ваш браузер не поддерживает видео.
      </video>
      <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
        <IconButton
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '50%',
            padding: '10px',
            zIndex: 10,
          }}
        >
          {isPlaying ? (
            <PauseIcon fontSize="large" />
          ) : (
            <PlayArrowIcon fontSize="large" />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default VideoMedia;
