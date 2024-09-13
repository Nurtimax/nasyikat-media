// User List Constants
import Abdulazizkary from '../../assetts/images/ustazdar/muftiyat.jpg';
import ChubakAjy from '../../assetts/images/ustazdar/chubakajy.jpg';
import Abdyshukurajy from '../../assetts/images/ustazdar/abdushukurajy.jpg';
import SadybakasAjy from '../../assetts/images/ustazdar/sadybakasajy.jpg';
import MaksatbekAjy from '../../assetts/images/ustazdar/maksatajy.png';
import JigitaliUstaz from '../../assetts/images/jigitaliustaz.jpg';
import BahtiyarUstaz from '../../assetts/images/ustazdar/bakhtyarajyy.jpg';
import KalysbekUstaz from '../../assetts/images/ustazdar/kalysajy.png';
import { postList } from './postList';
import { chubakAjyPosts } from './chubakAjyPosts';
import { abdushukuajyposts } from './abdushukuajyposts';
import { sadybakasajyposts } from './sadybakasajyposts';
import { maksatajyposts } from './maksatajyposts';
import { jigitaliustazposts } from './jigitaliustazposts';
import { bahtiyarUstaz } from './bahtiyarUstaz';
import { kalysustazposts } from './kalysustazposts';

const USER_LIST = [
  {
    id: 1,
    name: 'Муфтий Абдулазиз кары Закиров',
    cover: Abdulazizkary,
    position: '',
    follower: 12400,
    description: 'Nasyikat.media порталы',
    following: 180,
    totalPost: 102,
    avatarUrl: Abdulazizkary, // Replace with actual path or URL
    posts: postList,
  },
  {
    id: 2,
    name: 'Устаз Чубак ажы Жалилов (р.x)',
    cover: ChubakAjy, // Replace with actual path or URL
    position: '',
    follower: 23000,
    following: 250,
    totalPost: 140,
    avatarUrl: ChubakAjy, // Replace with actual path or URL
    posts: chubakAjyPosts,
    description: 'Nasyikat.media порталы',
  },
  {
    id: 3,
    name: 'Устаз Абдушукур Ажы Нарматов',
    cover: Abdyshukurajy, // Replace with actual path or URL
    position: 'Устаз',
    follower: 18000,
    following: 200,
    totalPost: 90,
    avatarUrl: Abdyshukurajy, // Replace with actual path or URL
    posts: abdushukuajyposts,
    description: 'Nasyikat.media порталы',
  },
  {
    id: 4,
    name: 'Устаз Садыбакас ажы Доолов',
    cover: SadybakasAjy, // Replace with actual path or URL
    position: 'Устаз',
    follower: 15000,
    following: 300,
    totalPost: 110,
    avatarUrl: SadybakasAjy, // Replace with actual path or URL
    posts: sadybakasajyposts,
    description: 'Nasyikat.media порталы',
  },
  {
    id: 5,
    name: 'Устаз Максатбек ажы Токтомушев',
    cover: MaksatbekAjy, // Replace with actual path or URL
    position: 'Устаз',
    follower: 15000,
    following: 300,
    totalPost: 110,
    avatarUrl: MaksatbekAjy, // Replace with actual path or URL
    posts: maksatajyposts,
    description: 'Nasyikat.media порталы',
  },
  {
    id: 6,
    name: 'Устаз Жигитали Исмалилов',
    cover: JigitaliUstaz, // Replace with actual path or URL
    position: 'Устаз',
    follower: 15000,
    following: 300,
    totalPost: 110,
    avatarUrl: JigitaliUstaz, // Replace with actual path or URL
    posts: jigitaliustazposts,
    description: 'Nasyikat.media порталы',
  },
  {
    id: 7,
    name: 'Устаз Бахтияр ажы Шарапов',
    cover: BahtiyarUstaz, // Replace with actual path or URL
    position: 'Устаз',
    follower: 15000,
    following: 300,
    totalPost: 110,
    avatarUrl: BahtiyarUstaz, // Replace with actual path or URL
    posts: bahtiyarUstaz,
    description: 'Nasyikat.media порталы',
  },
  {
    id: 8,
    name: 'Устаз Калысбек ажы Заманбеков',
    cover: KalysbekUstaz, // Replace with actual path or URL
    follower: 15000,
    following: 300,
    totalPost: 110,
    avatarUrl: KalysbekUstaz, // Replace with actual path or URL
    posts: kalysustazposts,
    description: 'Nasyikat.media порталы',
  },
];

export default USER_LIST;
