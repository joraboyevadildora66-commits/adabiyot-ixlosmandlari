/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson } from '../types';

export const lessonsData: Lesson[] = [
  {
    id: 'lesson-5-1',
    grade: 5,
    branch: 'xalq_ogzaki_ijodi',
    title: '“Susambil” ertagi va xalq og‘zaki ijodi tabiati',
    subtitle: 'Birdamlik, hamjihatlik va o‘z taqdirini o‘zi belgilash g‘oyasi',
    readTimeMinutes: 5,
    learningObjective: 'Ertak janrining hayvonlar haqidagi turini o‘rganish, majoziy obrazlar vositasida birdamlik g‘oyasini tahlil qilish.',
    intro: 'Xalq ertaklari asrlar davomida ota-bobolarimizning adolat, mehr-oqibat va hamjihatlik haqidagi orzu-umidlarini ifoda etib kelgan. “Susambil” ertagi — hayvonlar haqidagi ramziy ertaklarning yorqin namunasidir.',
    lectureContent: [
      '“Susambil” ertagida o‘z egalari tomonidan tashlab ketilgan yoki nohaqlik ko‘rgan uy hayvonlari — eshak, ho‘kiz, qo‘chqor, xo‘roz va asalari birlashib, erkin va tinch o‘lka — Susambilni qidirib yo‘lga chiqadilar.',
      'Ertakdagi har bir obraz insoniy xarakterlarni ifodalaydi: eshak — sabrli va vazmin, ho‘kiz — quvvatli va mehnatkash, xo‘roz — hushyor va ogoh, asalari esa ziyrak va chaqqon.',
      'Ular yo‘lda bo‘ri va tulki kabi yirtqichlarga duch kelganda alohida-alohida emas, balki bir tan, bir jon bo‘lib kurashadilar. Bu orqali xalq donishmandligi yengilmas kuch faqat ittifoqlikda ekanini uqtiradi.'
    ],
    keyTerms: [
      { term: 'Majoziy obraz', definition: 'Hayvon yoki jonsiz narsalar vositasida inson feʼl-atvori va xatti-harakatlarini ifodalash.' },
      { term: 'Ertak', definition: 'To‘qima va sehrli voqealarga asoslangan xalq og‘zaki ijodi janri.' },
      { term: 'G‘oya', definition: 'Muallif yoki xalq tomonidan asar orqali ifodalangan asosiy yetakchi fikr.' }
    ],
    literaryExcerpt: {
      text: '— Ey birodarlar, kelinglar, hammamiz bir bo‘laylik. Bizni kamsitgan, qadrimizga yetmagan joydan ketib, Susambil degan yam-yashil, erkin o‘lkaga yo‘l olaylik. Birlashgan daryo bo‘lur, tarqalgan tomchi bo‘lur!',
      source: '“Susambil” o‘zbek xalq ertagi (5-sinf “Adabiyot” darsligi, Toshkent)',
      analysis: 'Ushbu parchada qahramonlarning ittifoq tuzish onidagi xitobi keltirilgan. “Birlashgan daryo bo‘lur, tarqalgan tomchi bo‘lur” maqoli orqali asarning bosh g‘oyasi yorqin ko‘rsatilgan.'
    },
    checkpoints: [
      {
        id: 'cp-5-1',
        question: 'Ertakda nima sababdan hayvonlar o‘z uylarini tashlab ketishga qaror qilishdi?',
        options: [
          'Ular qadrsizlanib, xizmati evaziga mehr ko‘rmagani sababli',
          'Ular shunchaki sayohat qilishni xohlaganlari uchun',
          'O‘rmon hayvonlari ularni majburlagani sababli',
          'Faqat boylik topish maqsadida'
        ],
        correctIndex: 0,
        explanation: 'Ertakda egalari ularning qadriga yetmagani va keksayib qolgach keraksiz deb hisoblagani sabab bo‘lgan.'
      }
    ],
    quiz: [
      {
        question: '“Susambil” ertagining bosh falsafiy g‘oyasi nima?',
        options: [
          'Katta kuchga ega bo‘lish har narsadan muhim',
          'Birdamlik va o‘zaro hamjihatlik har qanday yovuzlikni yengadi',
          'Sayohat qilish insonni boyitadi',
          'Yovvoyi tabiat uy hayotidan ustundir'
        ],
        correctIndex: 1,
        explanation: 'To‘g‘ri! Ertak zaif va kamsitilganlar birlashsa, har qanday qudratli yirtqichni yenga olishini uqtiradi.'
      },
      {
        question: 'Ertakda asalari qanday fazilati bilan yirtqichlarni sarosimaga soladi?',
        options: [
          'Baland ovozda sayrashi bilan',
          'Ziyraklik va kutilmagan chaqqon hujumi bilan',
          'Katta jussasi bilan',
          'Ko‘p asal berishi bilan'
        ],
        correctIndex: 1,
        explanation: 'Asalari kichik bo‘lsa-da, chaqqonligi va o‘z vaqtida zarba berishi bilan dushmanni chekintiradi.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 5-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  },
  {
    id: 'lesson-6-1',
    grade: 6,
    branch: 'xalq_ogzaki_ijodi',
    title: '“Alpomish” dostoni — mardlik va or-nomus qomusi',
    subtitle: 'Barchinoy shartlari, xalq qahramoni va vatanparvarlik ruhi',
    readTimeMinutes: 6,
    learningObjective: 'Qahramonlik dostoni xususiyatlari, Alpomish va Barchinoy timsollarining badiiy talqini bilan tanishish.',
    intro: '“Alpomish” — o‘zbek xalqining eng qadimiy va ulug‘vor qahramonlik dostonidir. Unda mardlik, vafodorlik, yurt yaxlitligi va adolat g‘oyalari tarannum etiladi.',
    lectureContent: [
      'Dostonda Qo‘ng‘irot elining ikki birodari — Boybo‘ri va Boysari o‘rtasidagi zakot mojarosi tufayli yurt bo‘linishi, Boysarining Qalmoq eliga ko‘chishi bilan voqealar boshlanadi.',
      'Barchinoy Qalmoq shohlari taʼqibidan qutulish uchun to‘rt buyuk shart qo‘yadi: poyga, yoy tortish, tanga otish va kurash. Bu shartlar shunchaki musobaqa emas, balki erkinlik va o‘z elining mard o‘g‘loniga sodiqlik ifodasi edi.',
      'Alpomish Boychibor otini jilovlab, xalqining shaʼni va sevgilisi ahdini himoya qilish uchun maydonga tushadi. Doston o‘quvchida vatanparvarlik va so‘zida turish fazilatini shakllantiradi.'
    ],
    keyTerms: [
      { term: 'Doston', definition: 'Voqealari sheʼriy yoki sheʼriy-nasriy aralash bayon qilinadigan yirik epik asar.' },
      { term: 'Baxshi', definition: 'Xalq dostonlarini do‘mbira jo‘rligida yoddan kuylaydigan xalq shoiri va ijrochisi.' },
      { term: 'Epik ko‘lam', definition: 'Butun bir xalq yoki el taqdirini qamrab olgan keng miqyosli tasvir.' }
    ],
    literaryExcerpt: {
      text: 'Barchin aytdi: “Menga teng kelar mard bo‘lsa, to‘rt shartimni bajarsin. Oti poygada o‘zsin, yoyidan otgan o‘qi temir qalqonni teshib o‘tsin, miltig‘i bilan tilla tangani ursin, maydonda kurashib yengsin!”',
      source: 'Fozil Yo‘ldosh o‘g‘li aytgan “Alpomish” dostoni varianti',
      analysis: 'Barchinoy shartlari — o‘zbek ayolining aql-zakovati, mustaqil irodasi va yuksak talabchanligining badiiy ifodasidir.'
    },
    checkpoints: [
      {
        id: 'cp-6-1',
        question: 'Barchinoy nima sababdan Qalmoq alpiga turmushga chiqishdan bosh tortadi va 4 shart qo‘yadi?',
        options: [
          'Alpomishga bergan vaʼdasiga sodiq qolish va el shaʼnini asrash uchun',
          'Qalmoq shohidan ko‘proq boylik talab qilish uchun',
          'Musobaqani shunchaki tomosha qilish niyatida',
          'Otasiga qarshi isyon ko‘tarish uchun'
        ],
        correctIndex: 0,
        explanation: 'Barchinoy o‘z sevgisiga, xalqiga sodiq qolish uchun dushman alplari uddalay olmaydigan qiyin shartlarni rejalashtiradi.'
      }
    ],
    quiz: [
      {
        question: '“Alpomish” dostonining eng mukammal varianti qaysi baxshi tomonidan kuylangan?',
        options: [
          'Fozil Yo‘ldosh o‘g‘li',
          'Ergash Jumanbulbul o‘g‘li',
          'Po‘lkan shoir',
          'Islom shoir'
        ],
        correctIndex: 0,
        explanation: 'To‘g‘ri! Fozil Yo‘ldosh o‘g‘li aytgan variant 14 ming misraga yaqin bo‘lib, dostonning eng to‘liq va mukammal nusxasidir.'
      },
      {
        question: 'Alpomishning sadoqatli oti qanday nomlanadi?',
        options: ['Boychibor', 'G‘irot', 'Tarlon', 'Qoraqashqa'],
        correctIndex: 0,
        explanation: 'Boychibor — dostonda Alpomishning ajralmas do‘sti, qiyin damlarda yo‘l ko‘rsatuvchi sadoqatli tulporidir.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 6-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  },
  {
    id: 'lesson-7-1',
    grade: 7,
    branch: 'mumtoz_adabiyot',
    title: 'Alisher Navoiy: “Hayrat ul-abror” va rostgo‘ylik tarannumi',
    subtitle: 'Nafs tarbiyasi, haqiqatgo‘ylik va axloqiy komillik talqini',
    readTimeMinutes: 7,
    learningObjective: 'Mumtoz doston tuzilishi, Navoiyning pand-nasihat g‘oyalari hamda rostgo‘ylik haqidagi qarashlarini anglash.',
    intro: 'Hazrat Alisher Navoiyning “Xamsa”siga kirgan birinchi doston — “Hayrat ul-abror” (Yaxshi kishilarning hayrati) falsafiy-taʼlimiy asar bo‘lib, 20 maqolat va 20 hikoyatdan iborat.',
    lectureContent: [
      'Navoiy ushbu dostonda insonni kamolotga yetaklovchi eng oliy fazilatlarni tahlil qiladi: iymon, saxovat, adolat, kamtarlik va so‘z qadri.',
      'Muallif yolg‘onchilikni inson qadrini to‘kuvchi eng tuban illat deb biladi. “Rostlik” bobida shoir rostgo‘y inson har ikki dunyoda aziz bo‘lishini, yolg‘onchi esa o‘z so‘zining asiriga aylanishini taʼkidlaydi.',
      'Dostondagi “Sher va Durroj” hikoyati orqali tilni tiyish va behuda gapirmaslik, rost so‘zlash odobi ajoyib majoziy shaklda tasvirlangan.'
    ],
    keyTerms: [
      { term: 'Xamsa', definition: 'Besh dostonni o‘z ichiga olgan buyuk adabiy majmua.' },
      { term: 'Maqolat va Hikoyat', definition: 'Nazariy pand-nasihat qismi (maqolat) va unga misol tariqasida keltirilgan ibratli voqea (hikoyat).' },
      { term: 'Didaktik asar', definition: 'Taʼlimiy-axloqiy yo‘nalishdagi, o‘quvchiga ibrat beruvchi asar.' }
    ],
    literaryExcerpt: {
      text: 'Rostlik — ko‘ngil mulkining oftobi, \nRost kishi — har ikki olamning sarvari. \nKimki so‘zinda qilsa yolg‘onni odat, \nTopmag‘ay aslo saodatdin nishon!',
      source: 'Alisher Navoiy, “Hayrat ul-abror” dostoni (Soddalashtirilgan nazmiy mazmun)',
      analysis: 'Navoiy rostlikni qalb oftobiga qiyoslaydi. Yolg‘on so‘zlovchi esa chin saodatdan bebahra qolishi qatʼiy uqtirilgan.'
    },
    checkpoints: [
      {
        id: 'cp-7-1',
        question: '“Hayrat ul-abror” dostonining o‘ziga xos tuzilishi qanday?',
        options: [
          '20 maqolat va ularga bog‘langan 20 ta ibratli hikoyat',
          'Faqat jangnoma voqealaridan iborat',
          'Besh yuzta mustaqil g‘azaldan tashkil topgan',
          'Nasriy savol-javob shaklida yozilgan'
        ],
        correctIndex: 0,
        explanation: 'Asar 20 ta mavzuni (maqolat) bayon etadi va har bir maqolat ketidan uni isbotlovchi ibratli hikoyat keltiradi.'
      }
    ],
    quiz: [
      {
        question: 'Alisher Navoiy “Xamsa”si nechanchi yillarda yaratilgan?',
        options: [
          '1483–1485-yillarda',
          '1441–1445-yillarda',
          '1501–1505-yillarda',
          '1469–1472-yillarda'
        ],
        correctIndex: 0,
        explanation: 'To‘g‘ri! Navoiy o‘z “Xamsa”sini qisqa muddatda — 1483–1485-yillar oralig‘ida Hirotda yozib tamomlagan.'
      },
      {
        question: 'Navoiy qarashiga ko‘ra, inson qadrini oshiruvchi eng go‘zal fazilat qaysi?',
        options: ['Rostgo‘ylik va halollik', 'Boylik va mansab', 'G‘oliblik', 'Tanho yashash'],
        correctIndex: 0,
        explanation: 'Navoiy butun ijodi davomida rostgo‘ylik, odamiylik va xalqqa naf keltirishni insonning bosh ziynati deb bilgan.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 7-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  },
  {
    id: 'lesson-8-1',
    grade: 8,
    branch: 'jadid_adabiyoti',
    title: 'Cho‘lpon: “Kecha va kunduz” romani va ma’rifatparvarlik',
    subtitle: 'Zebi qismati, jaholat fojiasi va erkinlik ideali',
    readTimeMinutes: 7,
    learningObjective: 'Jadid adabiyotining yetakchi g‘oyalari, roman kompozitsiyasi va qahramon ruhiyatini tahlil qilish.',
    intro: 'Abdulhamid Sulaymon o‘g‘li Cho‘lponning “Kecha va kunduz” romani o‘zbek milliy romanchiligining cho‘qqilaridan biridir. “Kecha” qismida mustamlakachilik va jaholat changalidagi fojiaviy hayot ochib beriladi.',
    lectureContent: [
      'Roman bosh qahramoni Zebi — musaffo tabiatli, qo‘shiq va sanʼatga oshiq yosh qiz. Biroq o‘sha davrdagi nodonlik va xurofot muhiti uning taqdirini boy Razzoq so‘fi va qari Mingboshiga tutqun qiladi.',
      'Cho‘lpon asarda jamiyatning og‘ir dardlarini ochadi: ayollarning huquqsizligi, maʼrifatsizlik, poraxo‘rlik va chor maʼmurlarining adolatsiz siyosati.',
      'Asarning “Kunduz” deb atalgan ikkinchi qismi shoir qatag‘on qilingan yillarda yo‘q qilingan, ammo “Kecha”ning o‘ziyoq o‘zbek xalqini maʼrifatga va uyg‘onishga chorlovchi buyuk qo‘ng‘iroqdir.'
    ],
    keyTerms: [
      { term: 'Jadidizm', definition: 'XIX asr oxiri va XX asr boshida Turkiyada, Kavkazda va Turkistonda shakllangan maʼrifatparvarlik va islohotchilik harakati.' },
      { term: 'Psixologik tahlil', definition: 'Qahramonning ichki kechinmalari, his-tuyg‘ulari va ruhiy iztiroblarini chuqur ko‘rsatish usuli.' },
      { term: 'Ijtimoiy fojea', definition: 'Shaxsiy muammo emas, balki butun jamiyat tuzumi va nuqsonlaridan kelib chiquvchi qayg‘uli qismat.' }
    ],
    literaryExcerpt: {
      text: 'Zebi qafasdagi sayroqi qushga o‘xshardi. Uning ovozi bor edi, sevgisi bor edi, ammo parvoz qilishga keng osmoni yo‘q edi. Har bir qadamida taqiq, har bir so‘zida gunoh topishardi...',
      source: 'Abdulhamid Cho‘lpon, “Kecha va kunduz” romani',
      analysis: 'Ushbu tasvirda Zebining ichki ruhiyati qafasdagi qushga tashbeh qilinadi. Bu nafaqat Zebining, balki o‘sha davr turkistonlik ayollarining ramziy holatidir.'
    },
    checkpoints: [
      {
        id: 'cp-8-1',
        question: 'Cho‘lponning “Kecha va kunduz” romanida qanday bosh ijtimoiy masala ko‘tarilgan?',
        options: [
          'Jaholat, xurofot va maʼrifatsizlik keltirib chiqaradigan fojialar',
          'Sayohat qoidalari',
          'Faqat dehqonchilik texnikalari',
          'Savdogarlar o‘rtasidagi raqobat'
        ],
        correctIndex: 0,
        explanation: 'Asar xalqning uyg‘onishi, ilm-fan va erkinliksiz baxtli kelajak bo‘lmasligini dadil ko‘rsatib beradi.'
      }
    ],
    quiz: [
      {
        question: 'Cho‘lpon qaysi adabiy harakatning yirik vakili hisoblanadi?',
        options: ['Jadid maʼrifatparvarligi', 'Klassitsizm', 'Futurizm', 'Sentimentalizm'],
        correctIndex: 0,
        explanation: 'Cho‘lpon Behbudiy, Fitrat, Avloniy kabi maʼrifatparvar jadid adiblari safida Turkiston uyg‘onishi uchun kurashgan.'
      },
      {
        question: 'Romanda Zebining otasi qanday obraz sifatida gavdalanadi?',
        options: [
          'Razzoq so‘fi — qotib qolgan xurofotchi va qattiqqo‘l ota',
          'Ochiqko‘ngil maʼrifatli muallim',
          'Katta davlat arbobi',
          'Sayohatchi tabib'
        ],
        correctIndex: 0,
        explanation: 'Razzoq so‘fi qizining his-tuyg‘ularini tushunmaydigan, jamiyatdagi soxta obro‘ ortidan quvuvchi xurofotchi sifatida berilgan.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 8-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  },
  {
    id: 'lesson-9-1',
    grade: 9,
    branch: 'xx_asr_adabiyoti',
    title: 'Abdulla Qodiriy: “O‘tkan kunlar” — millat ko‘zgusi',
    subtitle: 'Otabek va Kumush sevgisi, fitna va yurt birligi dardi',
    readTimeMinutes: 7,
    learningObjective: 'O‘zbek romanchiligi asoschisi Abdulla Qodiriy uslubi, tarixiy voqelik va qahramonlar fojiasini badiiy tahlil qilish.',
    intro: '1925-yilda kitob holida chop etilgan “O‘tkan kunlar” — o‘zbek adabiyotidagi birinchi tarixiy romandir. Qodiriy o‘tmish voqealari orqali zamondoshlariga millat birligi zarurligini uqtirgan.',
    lectureContent: [
      'Romanda XIX asr o‘rtalaridagi Qo‘qon xonligi davri, xonlikdagi ichki nizolar, qipchoq va sarart qirg‘inlari, xalqning og‘ir turmushi fonida Otabek va Kumushning pok sevgisi tasvirlanadi.',
      'Otabek — yangicha fikrlovchi, savdo madaniyatini tushungan, adolatparvar yigit. Kumushbibi esa o‘zbek ayolining iffati, go‘zalligi va sadoqatining yuksak timsoli.',
      'Romandagi bosh fojia faqat sevgishohlarning ayrilishi emas, balki “o‘zimizdan chiqqan balolar” — Homid kabi hasadgo‘y fitnachilar va yurt boshliqlarining kaltabinligi oqibatida butun bir avlodning xazon bo‘lishidir.'
    ],
    keyTerms: [
      { term: 'Tarixiy roman', definition: 'Tarixiy shaxslar va voqealar asosida yozilgan, davr ruhini haqqoniy aks ettiruvchi yirik badiiy asar.' },
      { term: 'Retrospektiva', definition: 'Voqealar rivojida o‘tmishga qaytish va xotiralarni jonlantirish usuli.' },
      { term: 'Dramatik ziddiyat', definition: 'Qahramonlar manfaatlari va dunyoqarashlari o‘rtasidagi keskin to‘qnashuv.' }
    ],
    literaryExcerpt: {
      text: '“Modomiki, bizlar bir-birimizning go‘shtimizni yeb, ichki nizo bilan ovora bo‘lsak, o‘zimizdan chiqqan Homidlar yurtni dushman oyog‘i ostiga tashlasa, bizning holimiz ne kechar?!”',
      source: 'Abdulla Qodiriy, “O‘tkan kunlar” romani (Otabek nutqidan)',
      analysis: 'Qodiriy Otabek tilidan o‘sha davr Turkistonining bosh fojiasi — parokandalik va o‘zaro nizo ekanini aytadi. Bu chaqiriq har bir davr uchun dolzarbdir.'
    },
    checkpoints: [
      {
        id: 'cp-9-1',
        question: 'Abdulla Qodiriy “O‘tkan kunlar” romanini yozishdan asosiy maqsadini qanday izohlagan?',
        options: [
          'Tarix ko‘zgusiga qarab xatolardan saboq chiqarish va yangi zamon uchun ibrat olish',
          'Faqat Marg‘ilon shahrining go‘zalligini maqtagani uchun',
          'Eski xonlarni madh etish uchun',
          'Savdo yo‘llarini xaritalashtirish maqsadida'
        ],
        correctIndex: 0,
        explanation: 'Qodiriy so‘zboshida: “Moziyga qaytib ish ko‘rmak xayrlidir...” deydi va o‘tmish xatolaridan to‘g‘ri xulosa chiqarishni maqsad qiladi.'
      }
    ],
    quiz: [
      {
        question: '“O‘tkan kunlar” romani ilk bor to‘liq holda nechanchi yilda nashr etilgan?',
        options: ['1925–1926-yillarda', '1910-yilda', '1945-yilda', '1938-yilda'],
        correctIndex: 0,
        explanation: 'To‘g‘ri! Roman avval “Inqilob” jurnalida parcha-parcha, so‘ng 1925–1926-yillarda alohida kitob holida bosilgan.'
      },
      {
        question: 'Romandagi Otabek va Kumush sevgisiga xiyonatkorona fitna uyushtirgan salbiy qahramon kim?',
        options: ['Homid', 'Mirzakarim qutidor', 'Usta Olim', 'Hasanali'],
        correctIndex: 0,
        explanation: 'Homid — hasad, xudbinlik va buzg‘unchilik ramzi bo‘lib, qalbaki xat orqali pokiza insonlar hayotiga zomin bo‘ladi.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 9-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  },
  {
    id: 'lesson-10-1',
    grade: 10,
    branch: 'jadid_adabiyoti',
    title: 'Mahmudxo‘ja Behbudiy: “Padarkush” — ilk milliy drama',
    subtitle: 'Ilmsizlik oqibati, axloqiy tubanlik va ma’naviy uyg‘onish da’vati',
    readTimeMinutes: 6,
    learningObjective: 'O‘zbek dramaturgiyasining boshlanishi, teatr sanʼatining maʼrifiy roli va fojia janri tahlili.',
    intro: '1911-yilda yozilgan va 1913-yilda sahnaga qo‘yilgan “Padarkush yoxud o‘qimagan bolaning holi” asari o‘zbek adabiyotidagi birinchi pyesa (drama) hisoblanadi.',
    lectureContent: [
      'Mahmudxo‘ja Behbudiy Samarqandda yashab, gazeta, maktab va teatr orqali xalqni zulmatdan yorug‘likka olib chiqishga intilgan buyuk allomadir. U teatrni “ibratxona” deb atagan.',
      'Asarda o‘z o‘g‘li Toshmurodni o‘qitmagan, “boy bola o‘qib muallim bo‘larmidi, puli bo‘lsa bas” degan xato tushunchadagi boyning fojiasi ko‘rsatiladi.',
      'Ilmsiz, maishatga berilgan o‘g‘il o‘z otasining boyligini talash uchun uning qonini to‘kadi — padarkush (ota qotili)ga aylanadi. Behbudiy bu bilan ilmsizlik qanday dahshatli jinoyatlarga yo‘l ochishini ko‘rsatadi.'
    ],
    keyTerms: [
      { term: 'Drama', definition: 'Sahnada aktyorlar ijrosi orqali ko‘rsatish uchun mo‘ljallangan, dialog va harakatlarga asoslangan adabiy tur.' },
      { term: 'Remarka', definition: 'Dramatik asarda muallifning qahramonlar harakati, kiyimi va sahnadagi jihozlar haqidagi izohlari.' },
      { term: 'Ibratxona', definition: 'Behbudiy tomonidan teatrga berilgan taʼrif: jamiyat o‘z nuqsonlarini ko‘rib xulosa chiqaradigan muqaddas maskan.' }
    ],
    literaryExcerpt: {
      text: 'Domla: “Boy afandi! Bolani o‘qitmoq lozim. Zamona o‘zgardi. Bugun ilmi yo‘q odam xor bo‘lur. Mol qolur, davlat qolur, ammo ilm kishining haqiqiy yo‘ldoshidur!” Boy: “E, domla, qornim to‘q, pulim ko‘p, o‘g‘limga ilmning nima keragi bor?!”',
      source: 'Mahmudxo‘ja Behbudiy, “Padarkush” dramasi',
      analysis: 'Ushbu dialogda ikki xil dunyoqarash to‘qnashadi: kelajakni ilmda ko‘ruvchi ziyoli domla va boylikni hamma narsadan ustun qo‘yuvchi johil boy.'
    },
    checkpoints: [
      {
        id: 'cp-10-1',
        question: 'Behbudiy teatr sanʼatiga qanday baho bergan?',
        options: [
          '“Teatr — bu ibratxonadur, u yerda xalq o‘z holini ko‘rib ko‘zi ochilur”',
          '“Teatr shunchaki vaqtichog‘lik joyidir”',
          '“Teatr faqat musiqa tinglash uchun kerak”',
          '“Teatr qadimgi ertaklarni eslatuvchi maskandir”'
        ],
        correctIndex: 0,
        explanation: 'Behbudiy teatrni xalqni tezkor uyg‘otish, nuqsonlarni ko‘zgu kabi ko‘rsatish vositasi — “ibratxona” deb bilgan.'
      }
    ],
    quiz: [
      {
        question: '“Padarkush” so‘zining lug‘aviy maʼnosi nima?',
        options: ['Ota qotili', 'Boy kishi', 'Olim inson', 'Otasiga xizmatkor'],
        correctIndex: 0,
        explanation: '“Padar” — ota, “kush” — o‘ldiruvchi, yaʼni o‘z otasining qotili degan maʼnoni anglatadi.'
      },
      {
        question: 'Asar nima uchun fojea (tragediya) hisoblanadi?',
        options: [
          'Voqealar qahramonlarning halokati va tuzatib bo‘lmas maʼnaviy yo‘qotish bilan tugagani uchun',
          'Unda faqat kulgili sahnalar bo‘lgani uchun',
          'Hamma qahramonlar boyib ketgani uchun',
          'Unda sheʼrlar ko‘p bo‘lgani uchun'
        ],
        correctIndex: 0,
        explanation: 'To‘g‘ri! Ilmsizlik sabab ota vafot etadi, o‘g‘il surgunga hukm qilinadi — bu insoniy va ijtimoiy fojeadir.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 10-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  },
  {
    id: 'lesson-11-1',
    grade: 11,
    branch: 'jahon_adabiyoti',
    title: 'Vilyam Shekspir: “Gamlet” tragediyasi va insoniylik mohiyati',
    subtitle: '“Bo‘lmoq yo bo‘lmaslik”, vijdon amri va haqiqat iztirobi',
    readTimeMinutes: 7,
    learningObjective: 'Uyg‘onish davri dramaturgiyasi, Gamlet xarakterining murakkabligi va jahon adabiyotidagi abadiy savollarni o‘rganish.',
    intro: 'Vilyam Shekspirning “Gamlet” asari jahon teatri va adabiyotining cho‘qqisi hisoblanadi. Unda insonning vijdoni, yovuzlikka qarshi kurashdagi masʼuliyati chuqur falsafiy tahlil qilinadi.',
    lectureContent: [
      'Shahzoda Gamlet o‘z otasining shubhali o‘limi va amakisi Klavdiyning taxtni noqonuniy egallab olganidan xabar topadi. Uning iztirobi shaxsiy qasos doirasidan chiqib, butun dunyodagi adolatsizlikka qarshi kurashga aylanadi.',
      'Mashhur “Bo‘lmoq yo bo‘lmaslik — mana shu masala!” monologida qahramon hayot qiyinchiliklariga bo‘yin egish yoki nohaqlik to‘lqiniga qarshi mardonavor kurashish o‘rtasidagi ruhiy tanlovni boshdan kechiradi.',
      'Asar o‘zbek tiliga buyuk yozuvchi va shoir Maqsud Shayxzoda tomonidan yuksak mahorat bilan tarjima qilingan bo‘lib, o‘zbek sahnalarida ham o‘nlab yillar davomida namoyish etib kelinmoqda.'
    ],
    keyTerms: [
      { term: 'Monolog', definition: 'Qahramonning o‘z-o‘zi bilan yoki tomoshabinga qarata aytgan cho‘ziq ichki nutqi.' },
      { term: 'Falsafiy tragediya', definition: 'Insoniyatning eng muhim borliq, o‘lim, hayot mazmuni va adolat haqidagi savollarini ko‘taruvchi fojia.' },
      { term: 'Katarsis', definition: 'Tomoshabinning tragediya qahramoni qayg‘usini his qilish orqali qalbining poklanishi va ruhan yuksalishi.' }
    ],
    literaryExcerpt: {
      text: '“Bo‘lmoq yo bo‘lmaslik — mana shu masala! \nQaysi biri mardlik: yo beshafqat taqdir toshlariga chidamoqmi \nYo beadad kulfatlar ummoniga qarshi ko‘ksingni qalqon qilib, \nKurashib chek qo‘ymoqmi ularga?!”',
      source: 'Vilyam Shekspir, “Gamlet” tragediyasi (Maqsud Shayxzoda tarjimasi)',
      analysis: 'Ushbu monolog inson irodasining erkinligini va hayotning mazmuni kurashda ekanini ifodalovchi jahon adabiyotidagi eng qudratli sheʼriy parchalardan biridir.'
    },
    checkpoints: [
      {
        id: 'cp-11-1',
        question: 'Gamlet monologidagi “Bo‘lmoq yo bo‘lmaslik” iborasi nima haqida?',
        options: [
          'Insonning adolatsizlikka qarshi turishi yoki jim bo‘yin egishi o‘rtasidagi ruhiy tanlovi',
          'Faqat boy yoki kambag‘al bo‘lish haqida',
          'Qaysi kasbni tanlash haqida',
          'Sayohatga chiqish yoki chiqmaslik haqida'
        ],
        correctIndex: 0,
        explanation: 'Gamlet insoniy vijdonga xiyonat qilmasdan yashashning og‘ir masʼuliyatini tahlil qiladi.'
      }
    ],
    quiz: [
      {
        question: '“Gamlet” asarini o‘zbek tiliga mahorat bilan o‘girgan zabardast adib kim?',
        options: ['Maqsud Shayxzoda', 'G‘afur G‘ulom', 'Oybek', 'Abdulla Qahhor'],
        correctIndex: 0,
        explanation: 'To‘g‘ri! Maqsud Shayxzoda “Gamlet”ni g‘oyat nozik badiiy go‘zallik va aruz ohangiga yaqin nafislik bilan o‘zbekchalashtirgan.'
      },
      {
        question: 'Gamlet qaysi mamlakatning shahzodasi edi?',
        options: ['Daniya', 'Angliya', 'Fransiya', 'Italiya'],
        correctIndex: 0,
        explanation: 'Asar voqealari Daniya qirolligi saroyi — Elsinor qasrida kechadi.'
      }
    ],
    verifiedSource: {
      name: 'O‘zbekiston Respublikasi MMT vazirligi, 11-sinf Adabiyot darsligi',
      url: 'https://eduportal.uz',
      publishedYear: 2024,
      status: 'rasmiy'
    }
  }
];
