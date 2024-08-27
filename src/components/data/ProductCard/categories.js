import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import WcIcon from '@mui/icons-material/Wc';
import WeekendIcon from '@mui/icons-material/Weekend';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BuildIcon from '@mui/icons-material/Build';
import FaceIcon from '@mui/icons-material/Face';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';

const categories = [
  {
    name: 'Эркектерге',
    icon: <MaleIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Военный',
    icon: <FilterHdrIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Кийимдер',
    icon: <WcIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Үй-буюмдары',
    icon: <WeekendIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Спорт',
    icon: <SportsBasketballIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Аялдарга',
    icon: <FemaleIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Машина',
    icon: <DirectionsCarIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Аксессуарлар',
    icon: <ShoppingBagIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Электроника',
    icon: <SmartphoneIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Ремонт',
    icon: <BuildIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Косметика',
    icon: <FaceIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
  {
    name: 'Бөбөктөргө',
    icon: <ChildFriendlyIcon style={{ color: 'black', fontSize: '20px' }} />,
  },
];

export default categories;
