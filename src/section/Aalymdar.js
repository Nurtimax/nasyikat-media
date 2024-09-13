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
    <>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: {
            xs: '1.1rem',
            sm: '1.2rem',
            mb: '1rem',
            background: '#071c6b',
            padding: '2rem',
            marginBottom: '1rem',
            color: '#f6edde',
          },
          fontFamily: 'Georgia, serif',
        }}
      >
        ААЛЫМДАР ПАЙГАМБАРЛАРДЫН МУРАСКОРЛОРУ.
      </Typography>
      <Container maxWidth={'xl'}>
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
    </>
  );
}
