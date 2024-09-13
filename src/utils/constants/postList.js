// import videotest from '../../assetts/nasyikat-videos/testingvideo.mp4';
import img from '../../assetts/icons/logo-nasykat.png';
// import img2 from '../../assetts/icons/palestina.jpg';

export const postList = [
  {
    id: 1,
    createdAt: '2024-09-01',
    message: 'АЗИРЕТИ МУФТИЙ CALL-БОРБОРДУН ОПЕРАТОРЛОРУН КАБЫЛ АЛДЫ',
    media: 'https://youtu.be/p19NVc-LacQ?si=T7tzW-VrMSqXMxLK',
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
  // {
  //   id: 2,
  //   createdAt: '2024-08-25',
  //   message: 'Инстаграм сториске да чыгарбай койду бул видеону көрүп коюңуздар',
  //   media: videotest,
  //   isLiked: true,
  //   personLikes: [
  //     { name: 'K', avatarUrl: 'https://example.com/avatar3.jpg' },
  //     { name: 'G', avatarUrl: 'https://example.com/avatar3.jpg' },
  //     { name: 'Z', avatarUrl: 'https://example.com/avatar3.jpg' },
  //   ],
  //   comments: [
  //     {
  //       id: 2,
  //       author: {
  //         name: 'Палестина',
  //         avatarUrl: img2,
  //       },
  //       createdAt: '2024-09-09',
  //       message:
  //         'Кыргыз эли Палестинадагы мусулман бир туугандарыңыздарды дубада унутпаңыздар дуба кылып турсаңыздар сөзсүз жеңишке жетебиз! Алга Палестина алга Кыргызстан',
  //     },
  //   ],
  // },
];
