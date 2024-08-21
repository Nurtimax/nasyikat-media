import logo2 from '../../../assetts/icons/arzan.png';

import sumka1 from '../../../products-img/рюкзак.png';
import sumka2 from '../../../products-img/рюкзак1.png';
import sumka3 from '../../../products-img/рюкзак2.png';

import nauishnik1 from '../../../products-img/airpodsscreen.png';
import nauishnik2 from '../../../products-img/airpodsscreen2.png';

import logokurzhun from '../../../assetts/icons/logoku.png';

import newLogo from '../../../assetts/icons/new.png';

const products = [
  {
    name: 'Ваш товар',
    rating: 5,
    about:
      '"Посетите наш Instagram, там вы найдете то, что искали. Подписывайтесь и оставайтесь в курсе!"',
    price: '1',
    images: [newLogo, newLogo, newLogo],
    storeName: '.shop',
    storeAvatar: newLogo,
    storeWhatsapp: '',
    storeInstagram: '.shop',
    storePhone: '',
    description: 'Качествo.',
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
    name: 'AirPods и аксессуары: стиль и качество для вашего устройства.',
    about:
      '"Посетите наш Instagram, там вы найдете то, что искали. Подписывайтесь и оставайтесь в курсе!"',
    price: '1',
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
