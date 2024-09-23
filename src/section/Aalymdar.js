// @mui
import { Container, Box, Typography } from '@mui/material';
// routes
// hooks
// _mock_
import AalymdarCards from '../components/UI/AalymdarCards';
import USER_LIST from '../utils/constants/aalymdar';
// components
// sections

// ----------------------------------------------------------------------

export default function Aalymdar() {
  return (
    <Container maxWidth="100%">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: {
            background: 'linear-gradient(145deg, #f9f3e7 20%, #f6ecde 80%)', // Градиент для придания глубины фону
            padding: '1.5rem',
            marginBottom: '1.5rem',
            color: '#34495e', // Темно-синий цвет для текста
            border: '2px solid #b89c6f', // Золотистая рамка для более изысканного вида
            borderRadius: '5px', // Округлые углы для рамки
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Легкая тень для объема
            fontFamily: 'Georgia, serif',
            position: 'relative',
          },
          fontFamily: 'Georgia, serif',
        }}
      >
        ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {USER_LIST.map((user) => (
          <AalymdarCards key={user.id} user={user} />
        ))}
      </Box>
    </Container>
  );
}
