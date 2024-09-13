import img from '../../assetts/icons/logo-nasykat.png';

export const kalysustazposts = [
  {
    id: 1,
    createdAt: '2024-09-01',
    message: 'Калысбек Заманбеков! Пепси Кола',
    media: 'https://youtube.com/shorts/_gAN9z3Puxw?si=678suzsP28Ul1v-G',
    isLiked: false,
    personLikes: [
      { name: 'K', avatarUrl: 'https://example.com/avatar3.jpg' },
      { name: 'G', avatarUrl: 'https://example.com/avatar3.jpg' },
      { name: 'Z', avatarUrl: 'https://example.com/avatar3.jpg' },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: 'Nasyikat.media',
          avatarUrl: img,
        },
        createdAt: '2024-09-10',
        message:
          'Ассаламу алейкум мусулман бир туугандар! Ин шаа Аллах сайт сиздердин кошкон салымыңыздар менен күн сайын өнүгүп өсүп турат.',
      },
    ],
  },
];
