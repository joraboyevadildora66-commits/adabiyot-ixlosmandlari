/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameDetektivQuestion, MatchPairGame, SequenceGame, CrosswordClue } from '../types';

export const detektivQuestions: GameDetektivQuestion[] = [
  {
    id: 'det-1',
    excerpt: '“Yuzi oydek porladi, ko‘zlaridan mehr nuri yog‘ildi.”',
    author: 'Xalq ertaklaridan',
    options: ['Tashbeh (O‘xshatish)', 'Tazod (Zidlantirish)', 'Talmeh (Ishora)', 'Mubolag‘a'],
    correctIndex: 0,
    deviceExplanation: 'Yuzi oyga o‘xshatilgan (“oydek”), shuning uchun bu yerda tashbeh sanʼati qo‘llangan.'
  },
  {
    id: 'det-2',
    excerpt: '“Ochildi gul, ammo ko‘z yoshi bilan sug‘orildi bog‘.”',
    author: 'Bobur',
    options: ['Tazod (Qarama-qarshilik)', 'Istiora', 'Talmeh', 'Tashbeh'],
    correctIndex: 0,
    deviceExplanation: 'Gulning ochilishi (quvonch) bilan ko‘z yoshi (g‘am-hasrat) o‘rtasida go‘zal tazod mavjud.'
  },
  {
    id: 'det-3',
    excerpt: '“Kuzgi shamol daraxt shoxlarini uyg‘otib, barglarga allalar aytdi.”',
    author: 'Zamonaviy lirika',
    options: ['Tashxis (Jonlantirish)', 'Talmeh', 'Tazod', 'Husni taʼlil'],
    correctIndex: 0,
    deviceExplanation: 'Shamolga va daraxtga insoniy xususiyat — alla aytish va uyg‘otish ko‘chirilgan (Tashxis).'
  },
  {
    id: 'det-4',
    excerpt: '“Farhod tosh kesib yo‘l ochdi ishq yo‘lida, Majnun sahrolarda sargardon bo‘ldi.”',
    author: 'Mumtoz g‘azal',
    options: ['Talmeh (Tarixiy/afsonaviy ishora)', 'Tashbeh', 'Tazod', 'Kinoya'],
    correctIndex: 0,
    deviceExplanation: 'Mashhur oshiqlik afsonalari — Farhod va Majnun qissalariga ishora qilingan (Talmeh).'
  },
  {
    id: 'det-5',
    excerpt: '“Bir nafasda dunyoning narigi chetiga uchib yetdi.”',
    author: 'Ertak va dostonlar',
    options: ['Mubolag‘a (Bo‘rttirish)', 'Tashxis', 'Tazod', 'Tashbeh'],
    correctIndex: 0,
    deviceExplanation: 'Vaqt va masofaning favqulodda tezligi bo‘rttirib (mubolag‘a bilan) tasvirlangan.'
  }
];

export const matchHeroPairs: MatchPairGame[] = [
  { id: 'pair-1', hero: 'Otabek', work: 'O‘tkan kunlar', author: 'Abdulla Qodiriy', trait: 'Adolatparvar, yangicha fikrlovchi savdogar' },
  { id: 'pair-2', hero: 'Kumushbibi', work: 'O‘tkan kunlar', author: 'Abdulla Qodiriy', trait: 'Iffatli, sadoqatli va go‘zal qalb egasi' },
  { id: 'pair-3', hero: 'Qoravoy', work: 'Shum bola', author: 'G‘afur G‘ulom', trait: 'Ziyrak, quvnoq va har vaziyatdan yo‘l topuvchi' },
  { id: 'pair-4', hero: 'Zebi', work: 'Kecha va kunduz', author: 'Abdulhamid Cho‘lpon', trait: 'Musaffo tabiatli, qo‘shiqqa oshiq, huquqsiz qiz' },
  { id: 'pair-5', hero: 'Barchinoy', work: 'Alpomish', author: 'Xalq dostoni', trait: 'Aql-zakovatli, 4 buyuk shart qo‘ygan qahramon qiz' },
  { id: 'pair-6', hero: 'Gamlet', work: 'Gamlet', author: 'Vilyam Shekspir', trait: 'Haqiqat va adolat izlovchi Daniya shahzodasi' }
];

export const sequenceGames: SequenceGame[] = [
  {
    id: 'seq-1',
    workTitle: '“O‘tkan kunlar” (Marg‘ilon uchrashuvlari)',
    author: 'Abdulla Qodiriy',
    events: [
      { id: 101, text: 'Otabek Marg‘ilonga karvon bilan kelib, Mirzakarim qutidor xonadonida mehmon bo‘ladi.', correctOrder: 1 },
      { id: 102, text: 'Ariq bo‘yida Kumushbibini ko‘rib, yuragida samimiy muhabbat uyg‘onadi.', correctOrder: 2 },
      { id: 103, text: 'Otabek va Kumushbibining to‘yi bo‘lib o‘tadi.', correctOrder: 3 },
      { id: 104, text: 'Homid hasad va g‘araz bilan qalbaki xat fitnasini uyushtiradi.', correctOrder: 4 },
      { id: 105, text: 'Otabek fitna ortidan haqiqatni aniqlash uchun kurashadi.', correctOrder: 5 }
    ]
  },
  {
    id: 'seq-2',
    workTitle: '“Alpomish” (Barchinoy shartlari)',
    author: 'Xalq dostoni',
    events: [
      { id: 201, text: 'Boysari zakot mojarosi sabab Qalmoq eliga ko‘chib ketadi.', correctOrder: 1 },
      { id: 202, text: 'Qalmoq alplari Barchinoyga sovchi qo‘yib, tazyiq o‘tkazadi.', correctOrder: 2 },
      { id: 203, text: 'Barchinoy mard alpni aniqlash uchun to‘rt buyuk shart e’lon qiladi.', correctOrder: 3 },
      { id: 204, text: 'Alpomish Boychibor oti bilan Qalmoq eliga yetib boradi.', correctOrder: 4 },
      { id: 205, text: 'Barcha shartlarda g‘alaba qozonib, el sha’nini saqlab qoladi.', correctOrder: 5 }
    ]
  }
];

export const authorGuessQuestions = [
  {
    id: 'ag-1',
    quote: '“Odamiy ersang, demagil odami, Onikim, yo‘q xalq g‘amidin g‘ami.”',
    clue: '1441-yilda Hirotda tug‘ilgan, turkiy tilda birinchi “Xamsa” yaratuvchisi.',
    options: ['Alisher Navoiy', 'Bobur', 'Lutfiy', 'Ahmad Yassaviy'],
    correctIndex: 0,
    explanation: 'Bu ulug‘ Navoiyning “Hayrat ul-abror” dostonidan olingan insonparvarlik shioridir.'
  },
  {
    id: 'ag-2',
    quote: '“Toleʼ yo‘qi jonimg‘a balolig‘ bo‘ldi, Har ishniki ayladim, xatolig‘ bo‘ldi...”',
    clue: 'Andijon hokimi, buyuk sarkarda va “Boburnoma” asari muallifi.',
    options: ['Zahriddin Muhammad Bobur', 'Alisher Navoiy', 'Umarshayx Mirzo', 'Husayn Boyqaro'],
    correctIndex: 0,
    explanation: 'Boburning Vatan sog‘inchi va taqdir sinovlari aks etgan eng mashhur ruboiysidir.'
  },
  {
    id: 'ag-3',
    quote: '“Moziyga qaytib ish ko‘rmak xayrlidir...”',
    clue: 'O‘zbek romanchiligi asoschisi, “O‘tkan kunlar” va “Mehrobdan chayon” asarlari muallifi.',
    options: ['Abdulla Qodiriy', 'Cho‘lpon', 'Oybek', 'G‘afur G‘ulom'],
    correctIndex: 0,
    explanation: 'Abdulla Qodiriy “O‘tkan kunlar” debochasida ushbu teran fikrni aytgan.'
  },
  {
    id: 'ag-4',
    quote: '“Ko‘ngil, sen munchalar nega yig‘laysan, bu qora tunlar ham o‘tar, albatta!”',
    clue: 'Andijonlik buyuk lirik shoir, “Kecha va kunduz” romani yaratuvchisi.',
    options: ['Abdulhamid Cho‘lpon', 'Fitrat', 'Usmon Nosir', 'Hamza'],
    correctIndex: 0,
    explanation: 'Cho‘lpon o‘z lirikasi orqali millat ruhiyatini uyg‘otishga intilgan.'
  }
];

export const poetryLabExercises = [
  {
    id: 'rhyme-1',
    line1: 'Bilmagingcha so‘zlama biror kalom,',
    line2Prompt: 'Quyidagilardan qaysi biri birinchi misraga to‘g‘ri qofiya va vazn hosil qiladi?',
    options: [
      'Avval o‘yla, so‘ngra degil sen salom.',
      'Daryo bo‘yida sokin suv oqadi.',
      'Kitoblar javonda chiroyli turar.',
      'Ertalab maktabga yo‘l olamiz.'
    ],
    correctIndex: 0,
    rhymeWord: 'salom - kalom',
    meterInfo: 'Barmoq vazni (11 bo‘g‘inli o‘lchov, 4+4+3 tuzilish)'
  },
  {
    id: 'rhyme-2',
    line1: 'Ona yurtim — oltin beshigim mening,',
    line2Prompt: 'Qofiyadosh va mantiqan davom ettiruvchi ikkinchi misrani tanlang:',
    options: [
      'Ko‘ksim uzra oftob, qo‘shig‘im mening.',
      'Bog‘larda olma va o‘riklar pishdi.',
      'Quyosh ufqdan sekin ko‘tarildi.',
      'Darslarimiz juda qiziqarli o‘tmoqda.'
    ],
    correctIndex: 0,
    rhymeWord: 'beshigim mening - qo‘shig‘im mening',
    meterInfo: 'Barmoq vazni (11 bo‘g‘inli o‘lchov, -im mening radifi bilan)'
  }
];

export const crosswordData: CrosswordClue[] = [
  { number: 1, direction: 'across', word: 'NAVOIY', clue: 'Turkiy “Xamsa” yaratgan buyuk shoir (6 harf)', row: 0, col: 0 },
  { number: 2, direction: 'across', word: 'QODIRIY', clue: '“O‘tkan kunlar” romani muallifi (7 harf)', row: 2, col: 0 },
  { number: 3, direction: 'across', word: 'DOSTON', clue: 'Alpomish, Farhod va Shirin kabi yirik epik asar janri (6 harf)', row: 4, col: 0 },
  { number: 4, direction: 'down', word: 'RUBOIY', clue: 'To‘rt misradan iborat falsafiy she’r shakli (6 harf)', row: 0, col: 1 },
  { number: 5, direction: 'down', word: 'ARUZ', clue: 'Mumtoz she’riyatdagi cho‘ziq va qisqa hijolar vazni (4 harf)', row: 1, col: 3 }
];
