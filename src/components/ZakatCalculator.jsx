import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';
import { styled } from '@mui/system';

const ZakatContainer = styled(Box)(({ theme }) => ({
  padding: '30px',
  backgroundColor: '#1e293b',
  borderRadius: '20px',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
  maxWidth: '500px',
  margin: '50px auto',
  color: '#f5f5f5',
  textAlign: 'center',
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: '100%',
  '& label.Mui-focused': {
    color: '#14b8a6',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#14b8a6',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#334155',
    },
    '&:hover fieldset': {
      borderColor: '#14b8a6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#14b8a6',
    },
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
  },
  '& input': {
    color: '#e2e8f0',
  },
  '& label': {
    color: '#94a3b8',
  },
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  color: '#f6ecde',
}));

const ZakatCalculator = () => {
  const [value, setValue] = useState('');
  const [zakat, setZakat] = useState(null);
  const [error, setError] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleValueChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const calculateZakat = () => {
    if (!value || isNaN(value) || value <= 0) {
      setError(true);
      setSnackbarOpen(true);
      return;
    }
    const zakatAmount = (value * 2.5) / 100;
    setZakat(zakatAmount);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <ZakatContainer>
        <HeaderText>Зекет Калькулятор</HeaderText>
        <Typography variant="body1" style={{ marginBottom: '1.3rem' }}>
          Канча зекет берүүнү аныктоо үчүн, сумманы жазыңыз (2.5%).
        </Typography>

        <CustomTextField
          label="Сумма (сом)"
          type="number"
          value={value}
          onChange={handleValueChange}
          variant="outlined"
          error={error}
          helperText={error ? 'Сумма туура эмес киргизилди' : ''}
        />

        <Button onClick={calculateZakat} color="primary" variant="contained">
          Зекетти эсептөө
        </Button>

        {zakat !== null && !error && (
          <Typography
            variant="h6"
            style={{ marginTop: '20px', color: '#f6ecde' }}
          >
            Сиз: {zakat.toFixed(2)} сом зекет беришиңиз керек
          </Typography>
        )}
      </ZakatContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: '100%' }}
        >
          Сураныч, туура сумма киргизиңиз!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ZakatCalculator;
