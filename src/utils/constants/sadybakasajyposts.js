import img from '../../assetts/icons/logo-nasykat.png';

export const sadybakasajyposts = [
  {
    id: 1,
    createdAt: '2024-09-01',
    message: 'Худ сүрөсү',
    media: 'https://youtube.com/shorts/cGGai8DPXZs?si=RULKYvISVHZYI6dJ',
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
