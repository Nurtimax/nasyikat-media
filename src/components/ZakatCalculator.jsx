import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ZakatContainer = styled(Box)(({ theme }) => ({
  padding: '30px',
  backgroundColor: '#161c25',
  borderRadius: '16px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '40px auto',
  textAlign: 'center',
}));

const ZakatCalculator = () => {
  const [income, setIncome] = useState('');
  const [zakat, setZakat] = useState(null);

  const calculateZakat = () => {
    const zakatAmount = (income * 2.5) / 100;
    setZakat(zakatAmount);
  };

  return (
    <ZakatContainer>
      <Typography variant="h4" gutterBottom>
        Зекет эсептөө
      </Typography>
      <Typography variant="body1" gutterBottom color="textSecondary">
        Өзүңүздүн мүлкүңүздү жазыңыз, жана канча зекет бериш керектигиңизди
        аныктаңыз.
      </Typography>
      <TextField
        label="Акчаңыздын суммасы"
        variant="outlined"
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={calculateZakat}>
        Зекетти эсептөө
      </Button>
      {zakat !== null && (
        <Typography variant="h6" color="textPrimary" marginTop="30px">
          Сиздин зекетиңиз {zakat} бирдик акчаны түзөт.
        </Typography>
      )}
    </ZakatContainer>
  );
};

export default ZakatCalculator;
