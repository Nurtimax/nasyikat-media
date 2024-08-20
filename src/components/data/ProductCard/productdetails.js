import logo2 from '../../../assetts/icons/arzan.png';

import sumka1 from '../../../products-img/рюкзак.png';
import sumka2 from '../../../products-img/рюкзак1.png';
import sumka3 from '../../../products-img/рюкзак2.png';

import sumka4 from '../../../products-img/рюкзак-ноутбук.jpg';
import sumka5 from '../../../products-img/рюкзак-ноутбук2.jpg';
import sumka6 from '../../../products-img/рюкзак-ноутбук4.jpg';

import sumka8 from '../../../products-img/рюкзак3в1-12.jpg';

import nauishnik1 from '../../../products-img/airpodsscreen.png';
import nauishnik2 from '../../../products-img/airpodsscreen2.png';

import nauishnik3 from '../../../products-img/marshal.jpg';
import nauishnik4 from '../../../products-img/marshallmajor.png';
import nauishnik5 from '../../../products-img/marshalmajor2.jpg';

import nauishnik6 from '../../../products-img/ultra49.png';
import nauishnik7 from '../../../products-img/ultra492.png';

import logokurzhun from '../../../assetts/icons/logoku.png';

import newLogo from '../../../assetts/icons/new.png';

const products = [
  {
    name: 'Ваш товар',
    rating: 5,
    about:
      '"Посетите наш Instagram, там вы найдете то, что искали. Подписывайтесь и оставайтесь в курсе!"',
    price: '000',
    images: [newLogo, newLogo, newLogo],
    storeName: '.shop',
    storeAvatar: newLogo,
    storeWhatsapp: '',
    storeInstagram: '.shop',
    storePhone: '',
    description: 'Качествo.',
  },
  {
    name: 'Качественные сумки и рюкзаки.',
    rating: 5,
    about:
      '"Посетите наш Instagram, там вы найдете то, что искали. Подписывайтесь и оставайтесь в курсе!"',
    price: '1000000',
    images: [logokurzhun, logokurzhun, logokurzhun],
    storeName: 'Kurzhun.shop',
    storeAvatar: logokurzhun,
    storeWhatsapp: '996556401369',
    storeInstagram: 'kurzhun.shop',
    storePhone: '996556401369',
    description: 'Качественные сумки и рюкзаки.',
    isFeatured: true,
    storeWebsite: 'https://kurzhun-store.vercel.app/',
  },
  {
    name: 'Рюкзак из ЭКО-кожи',
    price: '2900',
    rating: 5,
    reviews: 34,
    images: [sumka1, sumka2, sumka3],
    storeName: 'Kurzhun.shop',
    storeAvatar: logokurzhun,
    storeWhatsapp: '996556401369',
    storeInstagram: 'kurzhun.shop',
    storePhone: '996556401369',
    description: 'Вид рюкзака для ноутбука для студентов',
    isFeatured: true,
    storeWebsite: 'https://kurzhun-store.vercel.app/',
  },
  {
    name: 'Cумка Рюкзак 3 в 1',
    price: '2850',
    rating: 4.8,
    reviews: 34,
    images: [sumka4, sumka5, sumka6],
    storeName: 'Kurzhun.shop',
    storeAvatar: logokurzhun,
    storeWhatsapp: '996556401369',
    storeInstagram: 'kurzhun.shop',
    storePhone: '996556401369',
    isFeatured: true,
    description: 'Размер рюкзака маленький (до 20 л.)',
    storeWebsite: 'https://kurzhun-store.vercel.app/',
  },
  {
    name: 'Сумка-рюкзак мужская кожаная 2 в 1 - трансформер.',
    price: '3000',
    rating: 4.8,
    reviews: 34,
    images: [sumka8],
    storeName: 'Kurzhun.shop',
    storeAvatar: logokurzhun,
    storeWhatsapp: '996556401369',
    storeInstagram: 'kurzhun.shop',
    storePhone: '996556401369',
    isFeatured: true,
    description: 'Трансформер; рюкзак-трансформер; сумка',
    storeWebsite: 'https://kurzhun-store.vercel.app/',
  },
  {
    name: 'Airpods Pro 2 с экраном',
    price: '1999',
    rating: 4.6,
    reviews: 30,
    images: [nauishnik1, nauishnik2],
    sale: '5% скидка',
    delivery: 'Бесплатная доставка',
    storeName: 'Arzanstore.ru',
    storeAvatar: logo2,
    storeWhatsapp: '+79998152638',
    storePhone: '+79998152638',
    storeInstagram: 'arzanstore.ru',
    isFeatured: true,
    storeWebsite: 'https://arzanstore.netlify.app/',
    description:
      'Радиус 20м, Защита от воды, Время автономной работы: 7 часов , полный заряд кейса хватает на 35часов',
  },
  {
    name: 'Marshall Major IV',
    price: '2499',
    rating: 4.8,
    reviews: 34,
    images: [nauishnik3, nauishnik4, nauishnik5],
    storeName: 'Arzanstore.ru',
    storeWhatsapp: '+79998152638',
    storePhone: '+79998152638',
    storeInstagram: 'arzanstore.ru',
    storeAvatar: logo2,
    storeWebsite: 'https://arzanstore.netlify.app/',
    isFeatured: true,
    description:
      'Упаковка,Зарядка,Инструкция ,Амбушюры из кожи, Bluetooth, Регулировка громкости',
  },
  {
    name: 'Часы 49mm Ультра 2',
    price: '2499',
    rating: 4.9,
    reviews: 20,
    images: [nauishnik6, nauishnik7],
    sale: '15% скидка',
    delivery: 'Платная доставка',
    storeWhatsapp: '+79998152638',
    storePhone: '+79998152638',
    storeInstagram: 'arzanstore.ru',
    storeName: 'Arzanstore.ru',
    storeAvatar: logo2,
    isFeatured: true,
    storeWebsite: 'https://arzanstore.netlify.app/',
    description:
      'Диаметр 45мм, Водонепроницаемость до 50 метров, Сенсорный дисплей, GPS и Bluetooth, Шагомер и пульсометр',
  },
  {
    name: 'AirPods и аксессуары: стиль и качество для вашего устройства.',
    about:
      '"Посетите наш Instagram, там вы найдете то, что искали. Подписывайтесь и оставайтесь в курсе!"',
    price: '10000000',
    rating: 5,
    reviews: 34,
    images: [logo2, logo2, logo2],
    storeName: 'Arzanstore.shop',
    storeAvatar: logo2,
    storeWhatsapp: '+79998152638',
    storePhone: '+79998152638',
    storeInstagram: 'arzanstore.ru',
    description:
      'AirPods и аксессуары: стиль и качество для вашего устройства.',
    isFeatured: true,
    storeWebsite: 'https://arzanstore.netlify.app/',
  },
];

export default products;
