import clean from '../../../assetts/icons/servic-clean.jpg';
import cleanhouse from '../../../assetts/icons/house-clining.png';
import languagecourse from '../../../assetts/icons/language-course.jpg';
import cars from '../../../assetts/icons/slujba.jpg';
import logo from '../../../assetts/icons/logo-nasykat.png';

const servicesData = {
  'Үй кызматтары': [
    {
      name: 'Уборка квартир и офисов в Бишкеке',
      image: clean,
      city: 'Бишкек',
      address: 'ул. Асанбека, 12',
      country: 'Кыргызстан',
      instagram: 'https://instagram.com/example1',
      whatsapp: 'https://wa.me/example1',
      logo: logo,
      company: 'Уборка Бишкек',
    },
  ],
  'Клининговые компании': [
    {
      name: 'Экологичная химчистка в городе ОШ',
      image: cleanhouse,
      city: 'Ош',
      address: 'пр. Мира, 45',
      country: 'Кыргызстан',
      instagram: 'https://instagram.com/example2',
      whatsapp: 'https://wa.me/example2',
      logo: logo,
      company: 'Уборка дома',
    },
  ],
  'Тил курстары': [
    {
      name: 'Языковые курсы в Бишкеке',
      image: languagecourse,
      city: 'Бишкек',
      address: 'ул. Советская, 7',
      country: 'Кыргызстан',
      instagram: 'https://instagram.com/example2',
      whatsapp: 'https://wa.me/example2',
      logo: logo,
      company: 'Языковые курсы',
    },
  ],
  Жолдо: [
    {
      name: 'Мы — Ваше спокойствие Услуги эвакуатора 24/7 Круглосуточно',
      image: cars,
      city: 'Ош',
      address: 'ул. Ленина, 3',
      country: 'Кыргызстан',
      instagram: 'https://instagram.com/example2',
      whatsapp: 'https://wa.me/example2',
      logo: logo,
      company: 'Услуги эвакуатора',
    },
  ],
};

export default servicesData;
