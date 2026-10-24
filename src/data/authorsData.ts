/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Author } from '../types';

export const authorsData: Author[] = [
  {
    id: 'navoiy',
    name: 'Alisher Navoiy',
    years: '1441 — 1501',
    period: 'Temuriylar davri / XV asr',
    movement: 'Mumtoz o‘zbek adabiyoti, gumanizm',
    biography: [
      'Nizomiddin Mir Alisher Navoiy 1441-yil 9-fevralda Hirot shahrida tug‘ilgan. Bolaligidanoq zukkoligi, sheʼriyat va sanʼatga muhabbati bilan ajralib turgan.',
      'Mashhad, Samarqand va Hirot madrasalarida taʼlim olgan. Buyuk mutafakkir, davlat arbobi, vazir va turkiy tilning tengsiz himoyachisi sifatida tarixda qolgan.',
      '1483–1485-yillarda turkiy tilda birinchi bo‘lib “Xamsa” yaratdi. “Muhokamat ul-lug‘atayn” asarida turkiy tilning arab va fors tillaridan boyligini ilmiy asoslab berdi.'
    ],
    keyWorks: ['Xamsa (Besh doston)', 'Xazoyin ul-maoniy (Chor devon)', 'Muhokamat ul-lug‘atayn', 'Lison ut-tayr', 'Majolis un-nafois', 'Mahbub ul-qulub'],
    contribution: 'Turkiy tilni jahon adabiyoti maydoniga olib chiqdi, o‘zbek mumtoz adabiy tiliga asos soldi va gumanistik qarashlarni tarannum etdi.',
    famousQuote: 'Odamiy ersang, demagil odami, Onikim, yo‘q xalq g‘amidin g‘ami.',
    timeline: [
      { year: '1441', event: 'Hirot shahrida G‘iyosiddin Kichkina xonadonida tavallud topdi.' },
      { year: '1469', event: 'Husayn Boyqaro taxtga o‘tirgach, muhrdorlik va keyin vazirlik lavozimiga tayinlandi.' },
      { year: '1483-1485', event: 'Turkiy tildagi buyuk “Xamsa” asarini yaratdi.' },
      { year: '1499', event: 'Turkiy til boyligini isbotlagan “Muhokamat ul-lug‘atayn” risolasini yozdi.' },
      { year: '1501', event: 'Hirotda vafot etdi va o‘zi barpo ettirgan Qudsiyya maqbarasiga dafn etildi.' }
    ],
    quiz: [
      {
        question: 'Alisher Navoiy turkiy tilda yaratgan besh dostonlik majmua qanday ataladi?',
        options: ['Xamsa', 'Devon', 'Chor kitob', 'Tazkira'],
        correctIndex: 0,
        explanation: 'Navoiy turkiy tilda ilk bor “Xamsa” (Hayrat ul-abror, Farhod va Shirin, Layli va Majnun, Sab’ai sayyor, Saddi Iskandariy) yaratgan.'
      },
      {
        question: 'Navoiy turkiy tilning boyligini qaysi asarida ilmiy asoslagan?',
        options: ['Muhokamat ul-lug‘atayn', 'Lison ut-tayr', 'Mahbub ul-qulub', 'Majolis un-nafois'],
        correctIndex: 0,
        explanation: '“Muhokamat ul-lug‘atayn” — “Ikki til muhokamasi” asarida turkiy tilning lug‘aviy qudrati fors tiliga qiyosan isbotlangan.'
      }
    ]
  },
  {
    id: 'bobur',
    name: 'Zahriddin Muhammad Bobur',
    years: '1483 — 1530',
    period: 'Temuriylar davri / XV-XVI asrlar',
    movement: 'Lirika, memuaristika, davlat arbobi',
    biography: [
      '1483-yil 14-fevralda Andijonda tug‘ilgan. Farg‘ona viloyati hokimi Umarshayx Mirzoning to‘ng‘ich o‘g‘li bo‘lib, 12 yoshida taxtga o‘tirgan.',
      'Murakkab siyosiy kurashlar oqibatida Afg‘oniston va Hindistonga yurish qilib, ulug‘ Boburiylar saltanatiga asos solgan.',
      'U nafaqat buyuk sarkarda va davlat arbobi, balki nozik qalb egasi, ajoyib lirik shoir va “Boburnoma” kabi betakror tarixiy-memuar asar muallifidir.'
    ],
    keyWorks: ['Boburnoma (Vaqoe)', 'Bobur devoni (Lirik she’rlar)', 'Xatti Boburiy', 'Mufassal (Aruz risolasi)', 'Mubayyin'],
    contribution: 'Turkiy memuar janriga asos soldi, ruboiy janrini yangi lirik cho‘qqiga ko‘tardi va Xatti Boburiy alifbosini ixtiro qildi.',
    famousQuote: 'Har kimki vafo qilsa, vafo topqusidur, Har kimki jafo qilsa, jafo topqusidur.',
    timeline: [
      { year: '1483', event: 'Andijon shahrida dunyoga keldi.' },
      { year: '1494', event: 'Otasining vafotidan so‘ng 12 yoshida Farg‘ona taxtiga o‘tirdi.' },
      { year: '1504', event: 'Kobul shahrini egallab, yangi davlat tuzdi.' },
      { year: '1526', event: 'Panipat jangidagi g‘alabadan so‘ng Hindistonda Boburiylar saltanatini o‘rnatdi.' },
      { year: '1530', event: 'Agra shahrida vafot etdi, keyinchalik xoki Kobuldagi Bobur bog‘iga ko‘chirildi.' }
    ],
    quiz: [
      {
        question: 'Boburning jahon adabiyotida mashhur tarixiy-memuar asari nima?',
        options: ['Boburnoma', 'Tarixi Rashidiy', 'Zafarnoma', 'Shajarai turk'],
        correctIndex: 0,
        explanation: '“Boburnoma” — Boburning shaxsiy kechinmalari, geografik kuzatuvlari va tarixiy voqealar aks etgan bebaho xazinadir.'
      }
    ]
  },
  {
    id: 'qodiriy',
    name: 'Abdulla Qodiriy',
    years: '1894 — 1938',
    period: 'XX asr / Jadidchilik va milliy uyg‘onish',
    movement: 'O‘zbek romanchiligi, satira va publitsistika',
    biography: [
      '1894-yil 10-aprelda Toshkent shahrida bog‘bon oilasida tug‘ilgan. Eski maktab, rus-tuzem maktabi va madrasada o‘qigan.',
      '“Mushtum” jurnali asoschilaridan biri, “Julqunboy”, “Kalvak Mahzum” taxalluslari bilan o‘tkir satirik asarlar yozgan.',
      '1925-yilda o‘zbek adabiyotidagi ilk roman — “O‘tkan kunlar”ni, 1928-yilda esa “Mehrobdan chayon” romanini chop ettirdi. 1938-yilda qatag‘on qurboni bo‘ldi.'
    ],
    keyWorks: ['O‘tkan kunlar (roman)', 'Mehrobdan chayon (roman)', 'Obid ketmon (qissa)', 'Kalvak Mahzum xotira daftaridan', 'Toshpo‘lat tajang nima deydi?'],
    contribution: 'O‘zbek milliy romanchiligiga tamal toshini qo‘ydi, badiiy til va psixologik tasvir anʼanasini jahon darajasiga olib chiqdi.',
    famousQuote: 'Moziyga qaytib ish ko‘rmak xayrlidir...',
    timeline: [
      { year: '1894', event: 'Toshkent shahrida tavallud topdi.' },
      { year: '1915', event: '“To‘y”, “Ahvolimiz”, “Millatimga” kabi she’r va hikoyalarini e’lon qildi.' },
      { year: '1925', event: '“O‘tkan kunlar” romani kitob holida bosildi.' },
      { year: '1928', event: '“Mehrobdan chayon” tarixiy romani nashrdan chiqdi.' },
      { year: '1938', event: 'Noqonuniy qatag‘on qilinib, 4-oktabrda Toshkentda qatl etildi (keyinchalik oqlandi).' }
    ],
    quiz: [
      {
        question: 'Abdulla Qodiriy o‘zining satirik maqolalarini ko‘pincha qaysi taxallus bilan e’lon qilgan?',
        options: ['Julqunboy', 'O‘lmas', 'Navoiyxon', 'Sayyor'],
        correctIndex: 0,
        explanation: 'Qodiriy “Mushtum” jurnalida “Julqunboy” taxallusi bilan xalqning sevimli felyetonchisiga aylangan.'
      }
    ]
  },
  {
    id: 'cholpon',
    name: 'Abdulhamid Cho‘lpon',
    years: '1897 — 1938',
    period: 'XX asr boshlari / Jadidchilik',
    movement: 'Lirika, romanchilik, dramaturgiya, tarjima',
    biography: [
      '1897-yilda Andijon shahrida tug‘ilgan. Ilk tahsilini madrasada olgan, so‘ng rus-tuzem maktabida o‘qib, sharq va g‘arb madaniyatini chuqur o‘rgangan.',
      'O‘zbek sheʼriyatiga erkinlik, samimiyat va yangi vazn nafasi olib kirdi. Uning “Go‘zal”, “Buzilgan o‘lkaga”, “Kishan” kabi sheʼrlari millat ozodligi madhiyasiga aylandi.',
      '“Kecha va kunduz” romani orqali jamiyatning maʼnaviy qiyofasini yuksak mahorat bilan ko‘rsatib berdi.'
    ],
    keyWorks: ['Kecha va kunduz (roman)', 'Uyg‘onish (she’riy to‘plam)', 'Buloqlar', 'Tong sirlari', 'Yorqinoy (drama)', 'Shekspirning “Gamlet” tarjimasi'],
    contribution: 'Yangi o‘zbek sheʼriyatining asoschilaridan biri, erkin lirik tuyg‘u va chuqur milliy g‘oya kuychisi.',
    famousQuote: 'Ko‘ngil, sen munchalar nega yig‘laysan, bu qora tunlar ham o‘tar, albatta!',
    timeline: [
      { year: '1897', event: 'Andijon shahrida Sulaymonqul xonadonida tug‘ildi.' },
      { year: '1922', event: 'Birinchi she’riy to‘plami “Uyg‘onish” bosilib chiqdi.' },
      { year: '1936', event: '“Kecha va kunduz” romanining birinchi qismi “Kecha” nashr etildi.' },
      { year: '1938', event: 'Qatag‘on qurboni bo‘lib, 4-oktabrda shahid ketdi.' }
    ],
    quiz: [
      {
        question: 'Cho‘lponning mashhur romani qanday nomlanadi?',
        options: ['Kecha va kunduz', 'Sarob', 'Qutlug‘ qon', 'Navoiy'],
        correctIndex: 0,
        explanation: '“Kecha va kunduz” — Cho‘lponning eng yirik epik asari bo‘lib, unda Zebi fojiasi tasvirlangan.'
      }
    ]
  },
  {
    id: 'oybek',
    name: 'Oybek (Muso Toshmuhammad o‘g‘li)',
    years: '1905 — 1968',
    period: 'XX asr o‘zbek adabiyoti',
    movement: 'Lirika, epik nasr, akademik olim',
    biography: [
      '1905-yilda Toshkentda to‘quvchi oilasida tug‘ilgan. O‘rta Osiyo davlat universitetini tamomlagan.',
      'O‘zbekiston Fanlar akademiyasi akademigi, O‘zbekiston xalq yozuvchisi. Alisher Navoiy hayoti va ijodiga bag‘ishlangan “Navoiy” romani bilan jahonga tanilgan.',
      '“Qutlug‘ qon” romanida XX asr boshidagi xalq hayoti, “Oltin vodiydan shabadalar” asarlarida zamon nafasi aks etgan.'
    ],
    keyWorks: ['Navoiy (roman)', 'Qutlug‘ qon (roman)', 'Quyosh qoraymas', 'Tuyg‘ular (she’rlar)', 'Bolalik xotiralari'],
    contribution: 'Navoiyshunoslik ilmini yuksaltirdi, o‘zbek nasriga teran falsafiy va lirik go‘zallik olib kirdi.',
    famousQuote: 'Buyuk Navoiy qalbining har bir zarbi — xalqining baxti uchun urgan yurakdir.',
    timeline: [
      { year: '1905', event: 'Toshkent shahrida tug‘ildi.' },
      { year: '1940', event: '“Qutlug‘ qon” romani nashr qilindi.' },
      { year: '1944', event: 'Buyuk “Navoiy” romani chop etildi va yuksak e’tirofga sazovor bo‘ldi.' },
      { year: '1968', event: 'Toshkentda vafot etdi.' }
    ],
    quiz: [
      {
        question: 'Oybek Alisher Navoiy hayoti va ijodi haqida qaysi mashhur romanni yozgan?',
        options: ['Navoiy', 'Ulug‘bek xazinasi', 'Xamsa sirlari', 'Iskandar'],
        correctIndex: 0,
        explanation: '“Navoiy” romani shoirning hayoti, davlatdagi adolatli ishlari va xalq bilan munosabatlarini yuksak mahorat bilan ko‘rsatgan.'
      }
    ]
  },
  {
    id: 'oripov',
    name: 'Abdulla Oripov',
    years: '1941 — 2016',
    period: 'Mustaqillik davri va XX asr oxiri',
    movement: 'Falsafiy lirika, O‘zbekiston Qahramoni',
    biography: [
      '1941-yil 21-martda Qashqadaryo viloyatining Neko‘z qishlog‘ida tug‘ilgan. Toshkent Davlat universitetini tamomlagan.',
      'O‘zbekiston xalq shoiri, O‘zbekiston Qahramoni. O‘zbekiston Respublikasi Davlat madhiyasining matn muallifi.',
      'Uning “Mitti yulduz”, “Ko‘zlarim yo‘lingda”, “Yurtim shamoli”, “Jannatga yo‘l”, “Hakim va ajal” kabi asarlari o‘zbek sheʼriyatining oltin merosidir. Dante “Ilohiy komediya”sini o‘zbekchaga tarjima qilgan.'
    ],
    keyWorks: ['O‘zbekiston Respublikasi Davlat Madhiyasi', 'Jannatga yo‘l (dramatik doston)', 'Mitti yulduz', 'Men nechun sevaman O‘zbekistonni?', 'Hakim va ajal'],
    contribution: 'Davlat madhiyasi muallifi, o‘zbek sheʼriyatiga chuqur intellektual va samimiy vatanparvarlik ruhiyatini olib kirgan milliy faxr.',
    famousQuote: 'Yurtim, seni boyligingchun sevganim yo‘qdir, Mitti giyohing ham men uchun aziz!',
    timeline: [
      { year: '1941', event: 'Qashqadaryo viloyatida tavallud topdi.' },
      { year: '1965', event: 'Birinchi she’riy to‘plami “Mitti yulduz” nashr etildi.' },
      { year: '1992', event: 'O‘zbekiston Respublikasi Davlat madhiyasi matni tasdiqlandi.' },
      { year: '1998', event: 'O‘zbekiston Qahramoni unvoni berildi.' },
      { year: '2016', event: 'Vafot etdi, Toshkentdagi Chig‘atoy qabristoniga dafn etildi.' }
    ],
    quiz: [
      {
        question: 'O‘zbekiston Respublikasi Davlat madhiyasi matnini kim yozgan?',
        options: ['Abdulla Oripov', 'Erkin Vohidov', 'G‘afur G‘ulom', 'Hamid Olimjon'],
        correctIndex: 0,
        explanation: 'Davlat madhiyasining matni Abdulla Oripov tomonidan yozilgan, musiqasi Mutal Burhonovga tegishli.'
      }
    ]
  }
];
