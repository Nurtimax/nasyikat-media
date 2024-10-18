import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StoreIcon from '@mui/icons-material/Store';
import VerifiedIcon from '@mui/icons-material/Verified';

const menuItems = [
  { text: 'Башкы бет', path: '/app', icon: <HomeIcon /> },
  { text: 'Биз жөнүндө', path: '/aboutUs', icon: <InfoIcon /> },
  { text: 'Муаллим сани', path: '/MualimSani', icon: <BookIcon /> },
  { text: 'Намаз', path: '/namaztimes', icon: <AccessTimeIcon /> },
  {
    text: '40 парз',
    path: '/islamdynparzdary',
    icon: <VerifiedIcon />,
  },
  { text: 'Ислам дини', path: '/islam', icon: <InfoIcon /> },
  { text: 'Китептер', path: '/books', icon: <BookIcon /> },
  {
    text: 'Акыркы хутба',
    path: '/hutba',
    icon: <InfoIcon />,
  },
  { text: 'Кыргызстан', path: '/kyrgyz', icon: <HomeIcon /> },
  { text: 'Дубалар', path: '/duba', icon: <BookIcon /> },
  { text: 'Хадистер', path: '/hadis', icon: <BookIcon /> },
  { text: 'Онлайн Дүкөн', path: '/store', icon: <StoreIcon /> },
  { text: 'Ал Жардам', path: '/aljardam', icon: <VerifiedIcon /> },
  { text: 'Сүрөлөр', path: '/onsuro', icon: <BookIcon /> },
  { text: 'Курстар', path: '/islamiccourses', icon: <BookIcon /> },
  { text: 'Тасбих', path: '/zikr', icon: <VerifiedIcon /> },
];

export default menuItems;
