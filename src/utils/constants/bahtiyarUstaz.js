import img from '../../assetts/icons/logo-nasykat.png';

export const bahtiyarUstaz = [
  {
    id: 1,
    createdAt: '2024-09-01',
    message: 'Сажда сахв',
    media: 'https://youtube.com/shorts/IjFx5ytJQMU?si=I6RzfMFv70uWXzRc',
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
