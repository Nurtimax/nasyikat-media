import img from '../../assetts/icons/logo-nasykat.png';

export const abdushukuajyposts = [
  {
    id: 1,
    createdAt: '2024-09-01',
    message: 'Ар бир намаздан кийин',
    media: 'https://youtube.com/shorts/RnsCnInlAQQ?si=2B8dpYGJfc4Nz74P',
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
  {
    id: 2,
    createdAt: '2024-09-01',
    message: 'Сага убакытты ким берди',
    media: 'https://youtube.com/shorts/p5exSxAP8FQ?si=B6ixUB7Xbbz23E-D',
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
