import img from '../../assetts/icons/logo-nasykat.png';

export const jigitaliustazposts = [
  {
    id: 1,
    createdAt: '2024-09-01',
    message: 'АЗЫРКЫ УЧУРДА КАЙСЫ АМАЛДЫ КӨП КЫЛАЛЫК ДЕП СУРАШАТ',
    media: 'https://youtu.be/Yqj4Rxppepo?si=CaP94FVgf3skH8dy',
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
