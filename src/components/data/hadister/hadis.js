import imgex from '../../../assetts/images/islam/muhammadsav.jpeg';

const hadisContent = [
  {
    title: 'Жакшылыкка себепкер болуу',
    content:
      'Кимде ким бир жакшылыкка себепкер болсо, аны аткаргандай сооп табат.',
    image: imgex,
    src: '(Муслим, Имаара -133; Абу Дауд, Адаб-115)',
  },
  {
    title: 'Бирөөнүн кемчилигин көрүп айыптоо',
    content:
      'Кимде ким бирөөнүн кемчилигин көрүп айыптаса, ал нерсе өзүнүн башына келмейин өлбөйт.',
    image: imgex,
    src: '(Тирмизий, Кыяма-53)',
  },
  {
    title: 'Жараткан Аллах Таала сулуулукту сүйөт',
    content: 'Аллах Таала сулуу, сулуулукту сүйөт.',
    image: imgex,
    src: '(Муслим, Иман-147; Ибн Маажа, Дуа-10)',
  },
  {
    title: 'Чыныгы сабырдуулук',
    content: 'Чыныгы сабырдуулук – кыйынчылыктын алгачкы учурунда.',
    image: imgex,
    src: '(Бухарий, Жанаиз-43; Муслим, Жанаиз-14-15)',
  },
  {
    title: 'Адамдарга ырайымдуу болуу',
    content: 'Адамдарга ырайым кылбаганга, Аллах да ырайым кылбайт.',
    image: imgex,
    src: 'Бухарий, Таухид-2; Муслим, Фазаил-66)',
  },
  {
    title: 'Аллах шыпаасын берет',
    content: 'Аллах шыпаасын жаратпаган бир да оору жок.',
    image: imgex,
    src: '(Бухарий, Тыбб-1; Ибн Маажа, Тыбб-1)',
  },
  {
    title: ' Дос душман менен мамиле',
    content:
      'Досуң менен өтө эзилишпе, бир күн кас болорсуң; Касың менен өтө кесилишпе, бир күн дос болорсуң.',
    image: imgex,
    src: '(Тирмизий, Бирр-64)',
  },
  {
    title: 'Бардык жамандыктын башаты.',
    content: 'Арактан сактангыла, анткени арак бардык жамандыктын башаты.',
    image: imgex,
    src: '(Насаий, Ашриба-44)',
  },
  {
    title: 'Иштеген адамдын акысы',
    content: 'Иштеген адамдын акысын тери кургай электе бергиле. ',
    image: imgex,
    src: ' (Ибн Маажа, Рухуун-4) ',
  },
  {
    title: 'Шектүү нерселерден кач',
    content: ' Шектүү нерселерден кач, шексиз нерселерге жанаш.',
    image: imgex,
    src: 'Бухарий, Буйуу-3; Тирмизий, Кыяма-60)',
  },
  {
    title: 'Кайда болсоң да Аллахтан корк',
    content:
      '  Кайда болсоң да Аллахтан корк. Жаман ишиңдин артынан жакшы иш жаса, ал жамандыкты өчүрсүн. Адамдарга адептүү мамиле кыл. ',
    image: imgex,
    src: '(Тирмизий, Бирр-55)',
  },
  {
    title: 'Бири-бириңерге белек бергиле',
    content: 'Бири-бириңерге белек бергиле, сүйүүңөр артсын.',
    image: imgex,
    src: '(Ибн Малик, Хуснул-Хулк-16)',
  },
  {
    title: 'Мусулмандардын көпчүлүгү баркына жетпеген эки нерсе',
    content:
      'Мусулмандардын көпчүлүгү баркына жетпеген эки нерсе бар: ден соолук жана бош убакыт.',
    image: imgex,
    src: '(Бухарий, Рикак-1; Тирмизий, Зухд-1)',
  },
  {
    title: 'Чыныгы мусулман',
    content:
      'Чыныгы мусулман – тилинен, колунан башка мусулмандарга зыяны тийбеген адам.',
    image: imgex,
    src: '(Бухарий, Иман-4)',
  },
  {
    title: 'Тозок отун көрбөөчү эки көз',
    content:
      'Тозок отун көрбөөчү эки көз бар: Аллахтан коркуп ыйлаган көз жана Кудай жолунда мекенин коргогон жоокердин көзү.',
    image: imgex,
    src: '(Тирмизий, Фазаилул-Жихад-12)',
  },
  {
    title: 'Адам досунун дининде болот',
    content:
      'Адам досунун дининде болот. Ошондуктан ким менен достошконуңарга көңүл бургула.',
    image: imgex,
    src: '(Абу Дауд, Адаб-16; Тирмизий, Зухд-45)',
  },
  {
    title: 'Cадака күнөө-каталарды өчүрөт',
    content: 'Суу отту өчүргөндөй садака да күнөө-каталарды өчүрөт.',
    image: imgex,
    src: '(Тирмизий, Иман-8; Ибн Маажа, Зухд-22)',
  },
  {
    title: 'Мусулман мусулмандардын бир тууганы',
    content:
      'Мусулман мусулмандардын бир тууганы, ага зулумдук кылбайт, кыйынчылыкта жалгыз таштабайт.',
    image: imgex,
    src: '(Бухарий, Мазалим-3; Муслим, Бирр-58)',
  },
  {
    title: 'Өзүн-өзү суракка тартуу',
    content:
      'Акылдуу адам өзүн-өзү суракка тартып, өлүмдөн кийинкиси үчүн кам көрөт. Алсыз, акмак адам напсиси каалаганды ээрчип, Аллахтан курулай үмүткөр болот.',
    image: imgex,
    src: '(Тирмизий, Кыяма-25; Ибн Маажа, Зухд-31)',
  },
  {
    title: 'Үч киши болсоңор',
    content:
      'Үч киши болсоңор, экөөңөр досуңардан четтеп шыбырашпагыла (бул анын көңүлүн оорутат).',
    image: imgex,
    src: '(Бухарий, Истизан-47; Муслим, Салам-37)',
  },
  {
    title: 'Аллах Таалага жаккан иш',
    content: 'Аллахка жаккан иш – аз болсо да уланып турган иш.',
    image: imgex,
    src: '(Муслим, Салатул-Мусафирин-218)',
  },
  {
    title: 'Kыяматта шейиттер менен бирге',
    content:
      'Элге ишеничтүү, чынчыл, туура-так жүргөн соодагер кыяматта шейиттер менен бирге болот. ',
    image: imgex,
    src: '(Тирмизий, Буйуу-4; Ибн Маажа, Тижарат-1)',
  },
];

export default hadisContent;
