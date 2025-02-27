const duaData = [
  {
    title: 'Адам (алейхи салам)дын дубасы',
    text: '',
    arabic:
      'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    transcription:
      'Роббанаа золамнаа аңфусанаа Уа иллям тагфир ланаа уа тархамнаа Ланакуунанна миналь хоосирийн',
    kyrgyz:
      'О, Роббибиз! Биз өзүбүзгө зулум кылдык. Эгер Сен бизди кечирип, ырайым кылбасаң, анда биз, – албетте, зыянга учуроочулардан болобуз!',
  },
  {
    title: 'Юнус (алейхи салам)дын дубасы',
    text: 'Юнус пайгамбарды кит жутуп алганда. Киттин ичинде отурган пайгамбар Аллага жалбарып, дуба кылганда, ошол апааттан кутулган.',
    arabic:
      'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    transcription:
      'Лаа илааха илла анта Субхаанака инний кунту миназ-зоолимийн.',
    kyrgyz:
      'Өзүңдөн башка (сыйынууга татыктуу Зат) жок. Сен Аруу-Тазасың! Акыйкатта, мен заалымдардан болдум!',
  },
  {
    title: 'Закария (алейхи салам)дын дубасы',
    text: 'Закария пайгамбардын перзенттүү болууну каалап, Аллага жалбарып кайрылган дубасы:',
    arabic:
      'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ',
    transcription:
      'Робби хаб-ли мил-ладуңка зурриятан тойибатан иннака самиъуд-дуаа',
    kyrgyz:
      'О Роббим! Мага да Өзүңдүн даргөйүңдөн пакиза бир урпак бере көр! Албетте, Сен дубаны Угуучусуң!',
  },
  {
    title: 'Муса (алейхи салам)дын дубасы',
    text: 'Жараткан Алла аны Фараонго жөнөтөт. Аны туура жолго чакыруу жана жамандыктан кайтаруу үчүн сөзгө чечен болушу керек эле. Мына ушул учурда Муса пайгамбар Аллага кайрылып дуа кылат.',
    arabic:
      'رَبِّ اشْرَحْ لِي صَدْرِي  وَيَسِّرْ لِي أَمْرِي  وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي  يَفْقَهُوا قَوْلِي',
    transcription:
      'Роббиш-рох лий содрий  уа яссир лии амрии  уах-лиль укдата мин лисании  яфкоху коулии.',
    kyrgyz:
      'Оо, Роббим! Менин көкүрөгүмдү кенен кыл! Менин иштеримди жеңил кыл! Тилимдеги түйүндү чечип кой! Адамдар (сөзүмдү) түшүнчүдөй болсун!',
  },
  {
    title: 'Тамактануудан мурда',
    text: 'Тамактануудан мурда окула турган дуба',
    arabic: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ',
    transcription: 'Бисмилляхи рахмани рахим',
    kyrgyz: 'Аллахтын аты менен (баштайм). (Бухари)',
  },
  {
    title: 'Тамактын башында унутуп калса, анда бул дуба окулат',
    text: 'Тамактануудан мурда унутуп калса, анда бул дуба окулат',
    arabic: 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ',
    transcription: 'Бисмиллаахи аввалаху ва аахироху.',
    kyrgyz: 'Башында да, аягында да Аллахтын аты менен (баштайм). (Абу Дауд)',
  },
  {
    title: 'Тамактануудан кийин окула турган дуба',
    text: 'Тамактануудан кийин окула турган дуба',
    arabic:
      'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ',
    transcription:
      'Алхамду лил-лаахил-лазии атаманаа, ва сакоонаа, ва жалаланаа минал муслимиин.',
    kyrgyz:
      'Жедирип-тойдурган, ичирип-кандырган жана мусулман кылып жараткан Аллахка мактоолор болсун.(Тирмизи)',
  },
  {
    title: 'Конокко барганда окулуучу дуба',
    text: 'Конокко барганда бул дубаны окуйбуз',
    arabic: 'اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي، وَاسْقِ مَنْ سَقَانِي',
    transcription: 'Аллоохумма атьим ман атьамании, васки ман сакоонии.',
    kyrgyz:
      'Оо, Аллах! Мага тамак бергенге тамак бер жана мага суу ичиргендин чанкоосун кандыр. (Муслим)',
  },
  {
    title: 'Суу ичкенде',
    text: 'Суу ичкенден кийинки дуба',
    arabic:
      'الْحَمْدُ لِلَّهِ الَّذِي جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ ، وَلَمْ يَجْعَلْهُ ملحًا أُجَاجًا بذنوبنا',
    transcription:
      'Алхамду лил-лаахил-лазии сакоонаа азбан фуроотан бирохматихии валам йажъалху милхан ужаажан бизунуубинаа.',
    kyrgyz:
      'Куноолорубуздун себебинен сууну шор кылбай, Озунун мээрими менен бизге жагымдуу суу берген Аллахка бардык мактоолор болсун. (Канзул уммаал)',
  },
  {
    title: 'Уктаардагы дуба',
    text: 'Уктаарда окула турган дуба',
    arabic: 'بِاسْـمِكَ اللّهُـمَّ أَمُـوتُ وَأَحْـيا',
    transcription: 'Аллоохумма бисмика амууту ва ахйаа.',
    kyrgyz: 'Оо, Аллахым мен сенин атың менен өлөм, жана тирилемин. (Бухари)',
  },
  {
    title: 'Уйкудан ойгонгондо',
    text: 'Уйкудан ойгонгондо окула турган дуба',
    arabic:
      'الحَمْـدُ لِلّهِ الّذي أَحْـيانا بَعْـدَ ما أَماتَـنا وَإليه النُّـشور',
    transcription:
      'Алхамду лилахил-лазии ахяанаа баъда маа амаатанаа,ва илайхин-нушуур.',
    kyrgyz:
      'Бизге өлүм бергенден (уктаткандан) кийин кайра тирилткен (ойготкон) Аллах Таалага бардык мактоолор болсун жана биз Ага гана кайтып барабыз. (Бухари)',
  },
  {
    title: 'Дааратканага кирүүдөн мурда',
    text: 'Дааратканага кирүүдөн мурда окула турган дуба',
    arabic:
      'بِسْمِ الله ألَّلهُمَّ إنِّي أعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ',
    transcription:
      'Бисмиллаахи, Аллоохумма иннии ауузу бика минал хубуси валь хобааис',
    kyrgyz:
      'Аллахтын аты менен (кирем). Оо, Аллахым: Мени эркек жана ургаачы жиндердин жамандыгынан сакта.(Бухари)',
  },
  {
    title: 'Дааратканадан чыккандан кийин',
    text: 'Дааратканадан чыккандан кийин окула турган дуба',
    arabic: 'غفرانك',
    transcription: 'Ґуфроонака.',
    kyrgyz: 'Оо, Аллах! Мен Озунден кечирим сурайм.',
  },
  {
    title: 'Кийим кийүү',
    text: 'Кийим кийүү дубасы',
    arabic:
      'الحمدُ للهِ الّذي كَساني هذا (الثّوب) وَرَزَقَنيه مِنْ غَـيـْرِ حَولٍ مِنّي وَلا قـوّة',
    transcription:
      'Алхамду лил-лаахил-лазии касаании Хаазаа уа розакониихи мин гойри хавлим-миннии ва лаа кувватин.',
    kyrgyz:
      'Мага бул кийимди кийгизген жана аны мага куч-кубат жумшатпай эле берген Аллахка бардык мактоолор болсун. (Абу Дауд)',
  },
  {
    title: 'Үйгө кирүүдөн мурда',
    text: 'Үйгө кирүүдөн мурда окула турган дуба',
    arabic:
      'اللَّهُمَّ إِنِّي أسألُكَ خَيْرَ المَوْلِجِ وَخَيْرَ المَخْرَجِ، باسْمِ اللَّهِ وَلجْنا، وباسْمِ اللَّهِ خَرَجْنا، وَعَلى اللَّهِ رَبِّنا تَوَكَّلْن',
    transcription:
      'Аллоохумма иннии ас алука хойрол мавлажи, ва хойрол махрожи, бисмиллаахи валажнаа, ва бисмиллаахи хорожнаа, ва валаллоохи роббинаа таваккалнаа.',
    kyrgyz:
      'Оо, Аллах! Албетте, мен Сенден уйгө жакшы кирип, жакшы чыгууну суранам. Биз Аллахтын аты менен уйгө киребиз жана Анын аты менен чыгабыз жана Роббибиз Аллахка гана тобокел кылабыз. (Абу Дауд)',
  },
  {
    title: 'Үйдөн чыкканда ',
    text: 'Үйдөн чыкканда окула турган дуба',
    arabic:
      'باسْمِ اللَّهِ، تَوَكَّلْتُ على اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ باللَّهِ',
    transcription:
      'Бисмиллаахи таваккалту алаллоохи, лаа хавла валаа куввата иллаа биллаах',
    kyrgyz:
      'Мен Аллахтын аты менен үйдөн чыктым жана Ага гана тобокел кылдым. Күнөөлөрдөн сактанууга жана жакшы амал кылууга куч-кубат Аллахтан гана болот. (Тирмизи)',
  },
  {
    title: 'Кайгы - капаны кетирүү үчүн эртели - кеч окулуучу дуба',
    text: 'Азирети Абу Дардаа (разияллааху анху) мындай деп рабаят кылган: «Кимде-ким эртели-кеч жети жолу ушул дубаны окуса, Алла Таала дүйнө жана акырет жөнүндөгү анын бардык кайгы-капаларын кетирет»',
    arabic:
      'حَسۡبِیَ اللّٰہُ ٭ۖ لَاۤ اِلٰہَ اِلَّا ہُوَ  عَلَیۡہِ تَوَکَّلۡتُ وَہُوَ رَبُّ الۡعَرۡشِ الۡعَظِیۡمِ',
    transcription:
      'Хасбияллааху лаа илаха илла хуу, Алейхи таваккалту ва хува раббул-аршил-азиим. (9:129)',
    kyrgyz:
      'Алла мага жетиштүү; Андан бөлөк эч кандай кудай жок: мен Ага гана тобокел кыламын жана Ал улуу Арштын Раббиси» («Ат-Тавба» сүрөөсү:129)',
  },
  {
    title: 'Кыямат күнү соопторуңуз толук болуусу үчун окулуучу дуба.',
    text: 'Али (р.а) айтат:"Ким өзүнүнүн сооптору Кыямат күнү толук болуусун кааласа анда ушул аятты үч жолу окусун!"',
    arabic: 'سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ',
    transcription: 'Субхаана роббика роббил ъиззати ъаммааясифуун (Соффат.180)',
    kyrgyz: 'Улуу  Эгең алардын кошкон шериктеринен аруу!',
  },
  {
    title: 'Кырсык балээден сактоочу дуба',
    arabic:
      'بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transcription:
      '"БИСМИЛЛААХИЛЛАЗИИ ЛАА ЯДУРРУ МАЬА СМИХИИ ШАЙ-УН ФИЛ-АРДИ ВА ЛАА ФИС-САМАА-И ВА ХУВА-ССАМИИЬУЛ ЬАЛИИМ"',
    kyrgyz:
      'Алла Тааланын аты менен баштаймын, Анын аты менен эч бир нерсе жерде да, асманда да зыян жеткире албайт. Ал Зат ар бир нерсени угуп туруучу жана ар бир нерсени билип туруучу.',
  },
  {
    title: 'Уйку келбегенде окулуучу дуба',
    arabic:
      'اللَّهُمْ غَارَتِ النُّجُومُ وَهَدَأَتِ الْعُيُونُ وَأَنْتَ حَيٌّ قَيُّومٌ لَا تَأْخُذُكَ سِنَةٌ وَ لَا نَوْمٌ يَا حَيُّ يَا قَيُّومُ اهْدِعْ لَيْلِي وَأَنِمْ عَيْنِي. (موط مالك)',
    transcription:
      'Аллоохумма гооротин нужууму ва хада атил ъуйууну ва анта хаййун коййум. Лаа та хузука синатув валаа науум, йаа хаййу йаа коййууму, ахди лайлии ва аним ъайнии. ',
    kyrgyz:
      'Оо, Аллах! Жылдыздар көрүнбөй калды жана көздөр уйкуга киришти. Сен гана Тирүү, Түбөлүктүүсүң. Сен эч качан үргүлөбөйсүң жана уктабайсың. Оо, Тирүү жана Түбөлүктүү Зат! Сен менин түнүмдү - бейпил кыл жана мага уйку бер.',
  },
  {
    title: 'Дин жана дүйнө жакшылыгын тилөө дубасы',
    text: 'Сүйүктүү Пайгамбарыбыз Мухаммад (саллаллааху алайхи ва саллам)дын кызматчысы Азирети Анас (разияллааху анху)дан: «Сүйүктүү Пайгамбарыбыз Мухаммад (саллаллааху алайхи ва саллам) баарынан көбүрөөк кайсы дубаны окучу?» – деп суралганда, ал (разияллааху анху) (Ташаххуддан кийин окулуучу) төмөндөгүдөй дуба экенин айткан:',
    arabic:
      'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transcription:
      'Аллаахумма Раббанаа аатинаа фид-дуня хасанатан ва фил-аахирати хасанатан вакинаа азаабан-наар.',
    kyrgyz:
      'Оо, Аллах, Биздин Раббибиз! Бизге дүйнөдө да жакшылык тартуулагын жана акыретте да, ошондой эле бизди от азабынан сактагын.',
  },
  {
    title: 'Жеңишке жетишүү, карыздан кутулуу жана кеңири ырыскы үчүн дуба',

    arabic:
      'اللّٰہُمَّ مٰلِکَ الۡمُلۡکِ تُؤۡتِی الۡمُلۡکَ مَنۡ تَشَآءُ وَتَنۡزِعُ الۡمُلۡکَ مِمَّنۡ تَشَآءُ  وَتُعِزُّ مَنۡ تَشَآءُ وَتُذِلُّ مَنۡ تَشَآءُ  بِیَدِکَ الۡخَیۡرُ  اِنَّکَ عَلٰی کُلِّ شَیۡءٍ قَدِیۡرٌ تُوۡلِجُ   الَّیۡلَ فِی النَّہَارِ وَتُوۡلِجُ النَّہَارَ فِی الَّیۡلِ  وَتُخۡرِجُ الۡحَیَّ مِن الۡمَیِّتِ وَتُخۡرِجُ الۡمَیِّتَ مِنَ الۡحَیِّ  وَتَرۡزُقُ مَنۡ تَشَآءُ بِغَیۡرِ حِسَابٍ',
    transcription:
      'АЛЛААХУММА МААЛИКАЛ-МУЛКИ ТУ′ТИЛ-МУЛКА МАН ТАШАААУ ВА ТАНЗИЪУЛ-МУЛКА МИММАН ТАШАААУ ВА ТУЪИЗЗУ МАН ТАШАААУ ВА ТУЗИЛЛУ МАН ТАШАААУ БИ-ЯДИКАЛ-ХАЙИР. ИННАКА АЛАА КУЛЛИ ШАЙ′ИН КАДИЙР. ТУУЛИЖУЛ-ЛАЙЛА ФИН-НАХААРИ ВА ТУУЛИЖУН-НАХААРА ФИЛ-ЛАЙИЛИ ВА ТУХРИЖУЛ-ХАЙЙА МИНАЛ-МАЙЙИТИ ВА ТУХРИЖУЛ-МАЙЙИТА МИНАЛ-ХАЙЙИ ВА ТУРЗУКУ МАН ТАШАААУ БИ-ГАЙРИ ХИСААБ.',
    kyrgyz:
      'Оо, Роббим, падышачылык Ээси! Сен каалаганыңа бийлик бересиң жана каалаганыңдан бийликти тартып аласың. Ошондой эле Сен каалаганыңды урматтуу кыласың жана каалаганыңды кор кыласың. Бүт бардык жакшылык болгону Сенин колуңда. Албетте, Сен каалаган ар бир нерсеге дайыма кудуреттүүсүң. Сен түндү күндүзгө кийиресиң жана күндүздү түнгө кийиресиң. Ошондой эле өлүктөн тирүүнү чыгарасың жана тирүүдөн өлүктү чыгарасың. Сен каалаганыңа эсеп-кысапсыз ырыскы бересиң. ',
  },
  {
    title: 'Жүрөктүн тынчтыгы жана иштин жеңилдиги үчүн окулуучу дуба',
    text: 'Кайсыл бир иште жүрөк тынч болбой жатса, же окуучу сабагын түшүнө албай жатса, анда бул дубаны окусун:',
    arabic:
      'ربِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَ احْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي.',
    transcription:
      'Роббиш рохлии содрии, уа йассир лии амрии. Уахлул ъукдатам мил лисаании, Йафкохуу коулии. (Тоха 24.25.27.28)',
    kyrgyz:
      'Оо, Роббим! Менин дилимди кенен жана ишимди жеңил кыл. Оо, Роббим! Адамдардын менин сөзүмдү түшүнүүсү үчүн, тилимден түйүндү чечкин!.',
  },
  {
    title: 'Таңда жана кечте 100 жолу окулуучу дуба',
    text: 'Таңда жана кечте 100 жолу окулса бардык күнөөлөр кечириле турчу таспих:',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
    transcription: 'Субханаллоохи ва би-хамдихии, субханаллоохил азиим',
    kyrgyz:
      'Толук сыпаттар менен сыпатталган, жана кемчилик сыппаттардан алыс болгон Аллахты мактоо менен Аруулаймын',
  },
  {
    title: 'Намазда таспихтерди тарткандан кийин окулуучу дуба',
    text: 'дубага колдорду көтөрүп жатканда окулганда күнөөлөр кечириле турган дуа:',
    arabic:
      'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transcription:
      'Лаа илахаа иллаллооху вахдооху лаа шариикаа лах лахулмулку ва лахулхамду ва хува алаа кулли шайин кадиир',
    kyrgyz:
      'Жалгыз Аллахтан башка сыйынууга татыктуу зат жок анын шериги жок ага бардык падышачылык таандык ага бардык мактоо таандык жана ал ар бир нерсеге кадыр зат.',
  },
  {
    title: 'Кыйынчылыктардан кутулуу',
    text: 'Кыйынчылыктардан кутулуу үчүн окулган калима-и тамжид:',
    arabic: 'لا حول ولا قوة الا بالله العلي العظيم',
    transcription: 'Лаа хавла валаа куввата иллаа биллахил алиййилазиим',
    kyrgyz:
      'Аллахтан башка күч ээси жок. Бардыгына кубат жана күч берген бир гана затий жана субутий сыфаттардын ээси улук Аллах.',
  },
  {
    title: 'Коркуу жана балээлерден кутулуу үчүн окулуучу дуба',
    text: 'Коркуу жана балээлерден кутулуу үчүн таңда жана кечте үч жолу окулган дуба:',
    arabic:
      'بِسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ، وَهُوَ السَّمِيعُ العَلِيم ',
    transcription:
      'БисмиЛляхи ллязии лаа ядурру маасмихи шайун филь арди ва ля фии ссамааи ва хува Ссамиуль Алиим',
    kyrgyz:
      'Аллах Таалынын аты менен баштаймын анын аты менен жерде да асманда да эч нерсе зыян бере албайт Ал бардык нерсени угуучу билүүчү',
  },
  {
    title: 'Эртең менен жана кечинде окулуу керек болгон истигфар:',
    text: 'Муну күндө эртең менен окуган адам кечке чейин, кечинде окуган эртең мененкиге чейин өлө турган болсо шейит болот',
    arabic:
      'للّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ',
    transcription:
      'Аллахумма анта рабби лааилаха илла анта халактании ва анаа абдука ва анаа ъала ахдика ва ваъдика маста таъту аузу бика мин шарри мааъ санату абуу лакаа би-ниъматика алаййа ва абуу у би заанби  фагфирлии фаа иннахуу ла йагфируззуннуба илла анта. Ла илаха илла анта субханака инни кунту миназ зоолимиин',
    kyrgyz:
      'Аллахым, Сен менин Раббимсиң. Сенден башка сыйынууга татыктуу зат жок, мени жоктон жараткан Сенсиң жана мен Сенин кулуңмун, күчүмдүн жетишинче Сага берген убадамда жана сөзүмдө турам, Кылган жаман нерселеримдин зыянынан Сага баш калкалайм, Мага болгон жакшылыктарыңды жана күнөөлөрүмдү моюндаймын, менин күнөөлөрүмдү кечир!, себеби, Сенден башка багыштоочу жок. Сенден башка эч бир илах жок, Сени бардык кемчиликтерден танзих кыламын. Чындыгында мен напсиме акысыздык кылгандарданмын.',
  },
  {
    title: 'Динде бекем болуу үчүн окулуучу дуба',
    text: 'Динде бекем туруп, акыркы демде ыйман менен өлүү үчүн:',
    arabic: 'يا مقلب القلوب ثبت قلبي على دينك',
    transcription: 'Я мукаллиба-ль-куулюби, саббит кальбии ‘аля диини-ка',
    kyrgyz:
      'Оо, улук Аллахым, көңүлдөрдү жакшыдан жаманга, жамандан жакшыга бурган бир гана Сенсиң. Көңүлүмдү дининде бекем кыл, дининен кайтарба, Мусулмандыктан айырба!',
  },
  {
    title: 'Ар түрдүү зыяндардан коргонуу үчүн окулуучу дуба',
    text: 'Назардан жана ар түрдүү зыяндардан коргонуу үчүн окулган дуба:',
    arabic: 'أعوذ بكلمات الله التامات من شر ما خلق',
    transcription: 'А‘узуу бикалимаати Лляхи т-тааммати мин шарри маа халяк.',
    kyrgyz:
      'Бардык жаратылгандардын зыянынан Аллахтын кемчиликсиз сөздөрүнө калкаланам.',
  },
  {
    title: 'Көз тийгенге окулган дуба:',
    text: 'Бул дуба күн сайын таңда жана кечте үч жолу окулуп, өзүнүн үстүнө үйлөнсө, көз тийүүдөн жана шайтандардын жана да айбанаттардын зыяндарынан корголот.',
    arabic:
      'أعوذ بِكَلِمَاتِ اللهِ التَّامَّةِ مِن كُلِّ شَيطَانٍ وَهَامَّة ، وَمِن كُلِّ عَينٍ لَامَّة',
    transcription:
      'А‘уузу бикалимаати Лляхи т-тааммати мин кулли шайтонин ва хаамматин ва мин кулли ‘айнин ляммаатин.',
    kyrgyz:
      'Шайтандардын, жаныбарлардын жана кем көздөрдүн зыянынан Аллахтын кемчиликсиз сөздөрүнө калкаланам.',
  },
  {
    title: ' Үй-бүлөөсү жана балдарынын бактылуулугун тилеген дуба',
    text: 'Ким аялы жана балдарынын бактылуулугун жана ортодогу мамилелеринин жакшылыгын кааласа, төмөнкү дубаны окуп жүрсүн:',
    arabic:
      'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transcription:
      'Роббанаа хабланаа мин азваажинаа, ва зуррий йаатинаа, куррота ьайун. Важ-ьалнаа лил муттакиина имаамаа". (Фуркан сүрөсү, 74-аят)',
    kyrgyz:
      'Оо, биздин Роббибиз! Бизге жубайларыбыз, жана балдарыбыз аркылуу көздүн ырахатын бер жана бизди такыбаларга башчы кыл!.',
  },
  {
    title: 'Ата-энеге жакшылык каалоо',
    text: 'Ата-эне үчүн (тирүү болсун, же көз жумган болсун) Куранда бул дуба айтылган:',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transcription: 'Роббирхам хумаа камаа роббаййаании сагиироо',
    kyrgyz:
      'Оо, Роббим! Мени кичинемден багып-өстүргөндөй ата-энеме ырайым кыл!.',
  },
  {
    title: 'Жаңы иш баштоодо окулуучу дуба',
    text: 'Же жаңы жерге киргенде окулуучу дуба',
    arabic:
      'رَّبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا',
    transcription:
      '"Робби адхилнии мудхола сидкин. Ва ахрижнии мухрожа сидкин. Важ-ьал лии милладуңка султоонан насиироо',
    kyrgyz:
      'Оо, Роббим! Мага туура кирүүгө жана туура чыгууга жардам бер!. Мага өзгөчө Өзүң тараптан жардам берүүчү күч-кубат бер!.',
  },
];

export default duaData;
