import PropTypes from 'prop-types';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';
// @mui
import { useTheme, hexToRgb } from '@mui/material/styles';
import {
  Box,
  IconButton,
  ClickAwayListener,
  Paper,
  GlobalStyles,
} from '@mui/material';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

EmojiPicker.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
  sx: PropTypes.object,
};

export default function EmojiPicker({
  value,
  setValue,
  disabled,
  sx,
  ...other
}) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const hexToRgbString = (hex) =>
    hexToRgb(hex).replace('rgb(', '').replace(')', '');

  return (
    <>
      <GlobalStyles
        styles={{
          '#__next': {
            '--color-border': theme.palette.divider,
            '--rgb-accent': hexToRgbString(theme.palette.primary.main),
            '--rgb-background': hexToRgbString(theme.palette.background.paper),
            '--rgb-color': hexToRgbString(theme.palette.text.secondary),
            '--rgb-input': 'transparent',
          },
        }}
      />

      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box sx={{ position: 'relative' }}>
          <IconButton
            disabled={disabled}
            size="small"
            onClick={() => setOpen(!open)}
          >
            <Iconify icon={'eva:smiling-face-fill'} width={20} height={20} />
          </IconButton>

          {open && (
            <Paper
              sx={{
                bottom: 36,
                position: 'absolute',
                boxShadow: (theme) => theme.customShadows.dropdown,
                ...sx,
              }}
            >
              <Picker
                data={data}
                onEmojiSelect={(emoji) => setValue(value + emoji.native)}
                {...other}
              />
            </Paper>
          )}
        </Box>
      </ClickAwayListener>
    </>
  );
}
