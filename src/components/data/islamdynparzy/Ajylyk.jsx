import { Container, Box } from '@mui/material';
import Header from '../../Header';
import Welcome from '../../Welcome';
import BackgroundImage from '../../../assetts/icons/bacimg.png';
import Footer from '../../../components/Footer';
import HajjAndUmrahSection from '../../Umrah';

const Ajylyk = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'end',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          py: 4,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <HajjAndUmrahSection />
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Ajylyk;
