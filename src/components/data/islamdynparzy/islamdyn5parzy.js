import Allah from '../../../assetts/icons/allahs.png';
import Namaz from '../../../assetts/icons/namazs.png';
import Zeket from '../../../assetts/icons/zakats.png';
import Ramazan from '../../../assetts/icons/ramazans.png';
import Hadj from '../../../assetts/icons/hadjs.png';

const islamdyn5Parzy = [
  {
    image: Allah,
    alt: 'Allah',
    title: 'Лаa илaаха иллаллaх Мухаммадур расуллалaх',
    text: 'Бир Аллахтан башка Кудай жок жана Мухаммад анын элчиси деп күбөлүк берүү',
    route: '/Shahada',
  },
  {
    image: Namaz,
    alt: 'Namaz',
    title: 'Намаз окуу;',
    text: '«Бейиштин ачкычы – намаз, намаздын ачкычы – даарат» <br /> (Ахмаддын Муснады).',
    route: '/namaz',
  },
  {
    image: Ramazan,
    alt: 'Ramazan',
    title: 'Орозо кармоо;',
    text: 'Рамазан айында орозо кармоо — мусулмандардын парзы',
    route: '/orozo',
  },
  {
    image: Zeket,
    alt: 'Zeket',
    title: 'Зекет берүү;',
    text: '«Алардын мал-мүлктөрүндө кайырчынын жана муктаждын акысы бар». <br /> (Зарият сүрөөсү, 19-аят)',
    route: '/zeket',
  },

  {
    image: Hadj,
    alt: 'Hadj',
    title: 'Ажыга баруу',
    text: 'Аллах Таала өз пенделерине эгер мүмкүнчүлүгү болсо, өмүрүндө бир жолу ажылык ибадатын парз кылды.',
    route: '/ajylyk',
  },
];

export default islamdyn5Parzy;
