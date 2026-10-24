/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SafeSourceItem } from '../types';

export const safeSourcesData: SafeSourceItem[] = [
  {
    id: 'src-1',
    name: 'Eduportal.uz',
    domain: 'eduportal.uz',
    category: 'tavsiya_etilgan',
    description: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligining rasmiy elektron darsliklar va o‘quv-metodik portali.',
    url: 'https://eduportal.uz',
    verifiedDate: '2024-yil avgust',
    agency: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi'
  },
  {
    id: 'src-2',
    name: 'ZiyoNET Ta’lim tarmog‘i',
    domain: 'ziyonet.uz',
    category: 'tavsiya_etilgan',
    description: 'Yoshlar, o‘quvchilar va o‘qituvchilar uchun tasdiqlangan elektron kutubxona, adabiyotlar, ilmiy maqolalar va multimedia darslari bazasi.',
    url: 'https://ziyonet.uz',
    verifiedDate: '2024-yil sentabr',
    agency: 'Raqamli ta’limni rivojlantirish markazi'
  },
  {
    id: 'src-3',
    name: 'Lex.uz — Qonunchilik ma’lumotlari milliy bazasi',
    domain: 'lex.uz',
    category: 'tavsiya_etilgan',
    description: 'Ta’lim to‘g‘risidagi qonunlar, davlat ta’lim standartlari va me’yoriy huquqiy hujjatlarning rasmiy davlat manbasi.',
    url: 'https://lex.uz',
    verifiedDate: '2024-yil doimiy',
    agency: 'O‘zbekiston Respublikasi Adliya vazirligi'
  },
  {
    id: 'src-4',
    name: 'Natlib.uz — Alisher Navoiy nomidagi Milliy kutubxona',
    domain: 'natlib.uz',
    category: 'tavsiya_etilgan',
    description: 'Nodir kitoblar, adabiy qo‘lyozmalar, gazeta-jurnallar arxivi va milliy bibliografiya portali.',
    url: 'https://natlib.uz',
    verifiedDate: '2024-yil avgust',
    agency: 'Alisher Navoiy nomidagi O‘zbekiston Milliy kutubxonasi'
  },
  {
    id: 'src-5',
    name: 'Noma’lum blog va ijtimoiy tarmoq kanallari',
    domain: 'blog-post-share.example',
    category: 'tekshirish_kerak',
    description: 'Muallifligi noma’lum, tahrirlanmagan, qonuniy litsenziyasi va iqtibos manbasi ko‘rsatilmagan shaxsiy sahifalar.',
    url: '#',
    verifiedDate: 'Tekshiruv zarur',
    agency: 'Noma’lum manba'
  },
  {
    id: 'src-6',
    name: 'Anonim test va shubhali fayl almashuv saytlari',
    domain: 'download-free-books-suspicious.example',
    category: 'bloklangan',
    description: 'Zararli dasturlar, fishing va maktab tarmog‘i xavfsizligiga tahdid soluvchi tekshirilmagan resurslar.',
    url: '#',
    verifiedDate: 'Maktab siyosatiga ko‘ra taqiqlangan',
    agency: 'Axborot xavfsizligi filtri'
  }
];

export const safetyRules = [
  {
    title: 'Manbaning muallifligini va sanasini tekshiring',
    description: 'Har qanday maqola, dars yoki tahlilni o‘qiganda, uning muallifi kimligi va qachon nashr qilinganiga e’tibor bering. Rasmiy darslik va ilmiy manbalarga ustuvorlik bering.'
  },
  {
    title: 'Mualliflik huquqi va havolalarni ko‘rsatish madaniyati',
    description: 'Insho yoki taqriz yozganda birovning fikrini o‘z nomingizdan yozmang (plagiat qilmang). Asarlardan olingan har bir iqtibos uchun muallif va asar nomini ko‘rsating.'
  },
  {
    title: 'Shubhali havolalarni ochmang va shaxsiy ma’lumotlarni bermang',
    description: 'Ta’lim saytlaridan foydalanganda begonalarga parol, telefon raqami yoki shaxsiy ma’lumotlarni bermang. Noma’lum .exe yoki shubhali fayllarni yuklab olmang.'
  },
  {
    title: 'Axborotni tanqidiy baholash',
    description: 'Tarixiy shaxslar yoki asarlar haqida internetda tarqalgan har qanday mish-mishni haqiqat deb qabul qilmang. Har doim kamida ikkita ishonchli manbadan tekshiring.'
  }
];
