import videotest from '../../assetts/nasyikat-videos/testingvideo.mp4';
import img2 from '../../assetts/icons/palestina.jpg';
import nsLogo from '../../assetts/icons/logo-nasykat.png';

export const postList = [
  {
    id: 2,
    createdAt: '2024-08-25',
    message: 'Инстаграм сториске да чыгарбай койду бул видеону көрүп коюңуздар',
    media: videotest,
    isLiked: true,
    personLikes: [
      { name: 'K', avatarUrl: 'https://example.com/avatar3.jpg' },
      { name: 'G', avatarUrl: 'https://example.com/avatar3.jpg' },
      { name: 'Z', avatarUrl: 'https://example.com/avatar3.jpg' },
    ],
    comments: [
      {
        id: 2,
        author: {
          name: 'Палестина',
          avatarUrl: img2,
        },
        createdAt: '2024-09-09',
        message:
          'Кыргыз эли Палестинадагы мусулман бир туугандарыңыздарды дубада унутпаңыздар дуба кылып турсаңыздар сөзсүз жеңишке жетебиз! Алга Палестина алга Кыргызстан',
      },
      {
        id: 3,
        author: {
          name: 'Nasyikat.media',
          avatarUrl: nsLogo,
        },
        createdAt: '2024-09-09',
        message:
          'Ин Шаа Аллах буюрса бул бөлүктөн дүйнөдөгү мусулмандарга тиешелүү инстаграм фейсбук блок кылган видеолорду көрө аласыздар. оригинал видеолор ушул жакта буюрса.',
      },
    ],
  },
];
