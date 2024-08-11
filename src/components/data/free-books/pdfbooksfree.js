import logo from '../../../assetts/icons/pdflogo.jpg';
import zeketpdf from '../../books-pdf/Зекет-китеби.pdf';
import historyislampdf from '../../books-pdf/httpsazan_kzuploadИстория20Ислама_20Хайати20Улькю_pdf.pdf';
import Nurpdf from '../../books-pdf/чексиз нур.pdf';
import Sahabah from '../../books-pdf/EQAMO_Истории_из_жизни_сподвижниц_Фатхи_Халяль.pdf';
import Shahadah from '../../books-pdf/Китеп_2020(1).pdf';
import musulmanka from '../../books-pdf/Мусульманка.pdf';
import ochposomur from '../../books-pdf/Өчпөс өмүр (2).pdf';
import paigambarlarhistory from '../../books-pdf/Пайгамбарлар тарыхы.pdf';
import navigatemusulima from '../../books-pdf/putevoditelummhalid.pdf';
import adamkorku from '../../books-pdf/adamkorku.pdf';
import amanat from '../../books-pdf/amanat.pdf';
import ooruluulargakat from '../../books-pdf/Оорулууларгакат..pdf';
import surootozok from '../../books-pdf/75 вопросов о Аде.pdf';
import islamagymdar from '../../books-pdf/Исламские течения и группы.pdf';
import khalidibnvalid from '../../books-pdf/Рыцарь в пустынии.pdf';
import kekel from '../../books-pdf/Kelkel-Tologon-Kasymbekov.pdf';
import nastavlenie from '../../books-pdf/Наставление_сыну_Имам_Абуль_Фарадж_ибн_аль_Джаузи.pdf';

const books = [
  {
    title: 'Зекет китеби',
    description: 'Намазга тургула жана зекетти бергиле..',
    author: 'Nasyikat.media',
    image: logo,
    pdf: zeketpdf,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Лаа илааха илла Аллах',
    description: 'рүкүндөрү, шарттары жана талаптары',
    author: 'Талас Артыкбаев',
    image: logo,
    pdf: Shahadah,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Иcтории из жизни сподвижниц',
    description: 'да будет доволен ими Аллах',
    author: 'Салях ибн Фатхи Халяль',
    image: logo,
    pdf: Sahabah,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'История Ислама',
    description:
      'Ислам - мировая цивилизация, которая спасла не только Аравийский полууостров, но и все человечество от невежества и мракобесия.',
    author: 'Хайати Улькю',
    image: logo,
    pdf: historyislampdf,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Чексиз нур – Мухаммед Пайгамбар (САВ)',
    description: 'Пайгамбарыбыздын кайталангыс өмүр баяны',
    author: 'Мухаммед Фетхуллах Гүлен.',
    image: logo,
    pdf: Nurpdf,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Мусульманка',
    description: 'и ее личность в свете курана и сунны',
    author: 'Карима Сорокоумова',
    image: logo,
    pdf: musulmanka,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Өчпөс өмүр',
    description: 'Пайгамбарыбыздын өмүр баяны',
    author: 'Абдушүкүр Нарматов',
    image: logo,
    pdf: ochposomur,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Пайгамбарлар Тарыхы',
    description:
      'Бул эмгекте Ыйык Куранда баяндалып, аты аталган пайгамбарлар тууралуу маалымат берилет.',
    author: 'ТАГАЕВ МАЙРАМБЕК КУДАЙБЕРДИЕВИЧ',
    image: logo,
    pdf: paigambarlarhistory,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Путеводитель мусульманки',
    description:
      'Вся хвала принадлежит Всевышнему Аллаху, Господу и Властелину всех миров',
    author: 'Умм Халид',
    image: logo,
    pdf: navigatemusulima,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Адам көркү адеп',
    description:
      'Бул китепте жаш муундарды адеп-ахлактуулукка үндөгөн материалдар берилген. Китеп жалпы окурмандарга арналат.',
    author: 'Ж.Абидетегин, Жапарбек уулу А, Насыпбек Асанбаев',
    image: logo,
    pdf: adamkorku,
    avatar: logo,
    name: 'Author Name 1',
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'АМАНАТ',
    description: 'ырлар, поэмалар, терме',
    author: 'Элмирбек ИМАНАЛИЕВ',
    image: logo,
    pdf: amanat,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Оорулууларга кат',
    description:
      'Демек, адам бул дүйнөгө бир гана жакшы жашаш үчүн жана тынчтыкта, көңүл ачып өмүр сүрүү үчүн келген эмес.',
    author: 'Бедиүззаман Саид Нурси Кыргызчага которгон: Какишев Кенжебек',
    image: logo,
    pdf: ooruluulargakat,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'Семьдесят пять вопросов об Аде',
    description:
      'Ад – что мы о нем знаем? Как будут взвешивать деяния людей в Судный день? Действительно ли каждый человек побывает в Аду? Какое самое легкое и самое суровое наказания ожидают обитателей Огня?',
    author: 'Абдуллах Накышчы',
    image: logo,
    pdf: surootozok,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'ИСЛАМСКИЕ ТЕЧЕНИЯ И ГРУППЫ',
    description:
      'Исламские течения и группы» предназна- чено для студентов-теологов, исламоведов и востоковедов.',
    author: 'Д.А. Шагавиев',
    image: logo,
    pdf: islamagymdar,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'РЫЦАРЬ ПУСТЫНИ',
    description: 'Халид ибн ал-Валид',
    author: 'А. И. Акрам',
    image: logo,
    pdf: khalidibnvalid,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'КЕЛКЕЛ',
    description: 'ТАРЫХЫЙ РОМАН',
    author: 'ТӨЛӨГӨН КАСЫМБЕКОВ',
    image: logo,
    pdf: kekel,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
  {
    title: 'НАСТАВЛЕНИЕ СЫНУ',
    description:
      'Начинаем с Именем Аллана, Милостивого для всех на этом свете и только для верующих на Том Свете!',
    author: 'Джамалюд-Дин Абуль-Фарадж ибн Аль-Джаузий',
    image: logo,
    pdf: nastavlenie,
    avatar: logo,
    socialLinks: {
      instagram: 'https://www.instagram.com/nasyikat.media/',
      telegram: 'https://t.me/+SEJbmn8AwNViNmNi',
    },
  },
];

export default books;
