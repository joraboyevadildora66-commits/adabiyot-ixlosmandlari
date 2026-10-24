/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TheoryItem } from '../types';

export const theoryData: TheoryItem[] = [
  {
    id: 'tashbeh',
    name: 'Tashbeh (O‘xshatish)',
    category: 'badiiy_sanʼat',
    definition: 'Biror narsa, hodisa yoki tushunchani uning belgi-xususiyatlarini yanada bo‘rttirib, go‘zalroq ifodalash uchun boshqa narsaga qiyoslash sanʼati. Tashbeh to‘rt unsurdan iborat bo‘ladi: o‘xshatilmish, o‘xshatilgan narsa, o‘xshatish asosi va o‘xshatish vositasi (kabi, yanglig‘, misli, -dek).',
    classicExample: {
      lines: [
        'Oydek yuzingni ko‘rgach, lol bo‘ldi aqlimiz,',
        'Zulfing misoli zanjir, band ayladi ko‘ngilni.'
      ],
      author: 'Lutfiy',
      work: 'Devon',
      explanation: 'Birinchi misrada yorning yuzi oyga (vosita: -dek), ikkinchi misrada esa sochlari zanjirga (vosita: misoli) o‘xshatilgan.'
    },
    commonMistake: 'O‘xshatish vositasi (kabi, -dek) tushib qolganda tashbeh bilan istiorani adashtirish. Agar o‘xshatilayotgan narsaning o‘zi to‘g‘ridan-to‘g‘ri boshqa nom bilan atalsa, bu tashbeh emas, balki istioradir.',
    practiceExercise: {
      task: 'Quyidagi misrada qaysi tashbeh vositasi ishlatilgan: “Shabboda kabi mayin esadi daryodan shamol”?',
      options: ['kabi', 'daryodan', 'shamol', 'mayin'],
      correctIndex: 0,
      tip: 'Tashbeh vositalari: kabi, singari, -dek, yanglig‘, misli kabi ko‘makchi va qo‘shimchalardir.'
    }
  },
  {
    id: 'istiora',
    name: 'Istiora (Metafora)',
    category: 'badiiy_sanʼat',
    definition: 'Biror narsa yoki hodisaning nomini ularning o‘xshashligiga tayanib boshqa bir narsaga ko‘chirish sanʼati. Tashbehdan farqli ravishda istiorada o‘xshatish vositalari (-dek, kabi) qatnashmaydi, o‘xshatilgan narsa nomi to‘g‘ridan-to‘g‘ri qo‘llanadi.',
    classicExample: {
      lines: [
        'Ochil ey ganch, kim ko‘z gavhari xarj aylay etguncha,',
        'Yuzing ko‘rmak uchun jon naqdin nisor etsam.'
      ],
      author: 'Alisher Navoiy',
      work: 'G‘azallar',
      explanation: 'Ko‘z yoshi bu yerda “gavhar” deb atalgan. O‘xshatish vositasisiz, to‘g‘ridan-to‘g‘ri maʼno ko‘chirilgan.'
    },
    commonMistake: 'Istiorani oddiy tashbeh bilan aralashtirib yuborish. Istiorada qiyos yashirin bo‘ladi: “quyoshim keldi” deganda farzand yoki sevgilini quyosh deyish.',
    practiceExercise: {
      task: '“Kipriklaridan yulduzlar to‘kildi” jumlasida “yulduzlar” so‘zi qaysi maʼnoda istiora bo‘lib kelmoqda?',
      options: ['Ko‘z yoshlari maʼnosida', 'Tungi osmon maʼnosida', 'Qor parchalari maʼnosida', 'Tilla tangalar maʼnosida'],
      correctIndex: 0,
      tip: 'Ko‘z yoshining yaltirashi va miltillashi yulduzlarga qiyosan ko‘chirilgan.'
    }
  },
  {
    id: 'tashxis',
    name: 'Tashxis va Intoq (Jonlantirish)',
    category: 'badiiy_sanʼat',
    definition: 'Jonsiz narsalar, tabiat hodisalari, hayvon yoki o‘simliklarga insoniy his-tuyg‘u, fikrlash, gapirish va xatti-harakatlarni ko‘chirish sanʼati. Tashxis — shaxslashtirish, intoq esa ularni gapirtirishdir.',
    classicExample: {
      lines: [
        'Daraxtlar shivirlab dardin so‘ylaydi,',
        'Bulutlar ko‘zidan yosh to‘kib yig‘lar.'
      ],
      author: 'Cho‘lpon',
      work: 'She’rlar',
      explanation: 'Daraxtlarning shivirlashi va dardi borligi, bulutlarning ko‘z yosh to‘kib yig‘lashi insoniy holatlarning tabiatga ko‘chirilishidir.'
    },
    commonMistake: 'Jonlantirishni majoz (allegoriya) bilan aynan bir xil deb o‘ylash. Majoz butun bir ertak yoki masal syujetida davom etsa, tashxis alohida misra yoki jumlada ham qo‘llanaveradi.',
    practiceExercise: {
      task: 'Quyidagi jumlalardan qaysi birida tashxis (jonlantirish) mavjud?',
      options: [
        'Kuzgi shamol g‘amgin kuy chalib, barglarni raqsga chorladi',
        'Kuzda kunlar ancha qisqarib qoldi',
        'Daraxtlarning mevalari pishib yetildi',
        'O‘quvchilar yangi darsliklarni ochishdi'
      ],
      correctIndex: 0,
      tip: 'Shamolning kuy chalishi va barglarni raqsga chorlashi insonga xos sifatlarning ko‘chirilishidir.'
    }
  },
  {
    id: 'tazod',
    name: 'Tazod (Zidlantirish)',
    category: 'badiiy_sanʼat',
    definition: 'Sheʼr yoki nasriy matnda qarama-qarshi maʼnoli tushuncha, so‘z va timsollarni (kecha-kunduz, oq-qora, yaxshi-yomon, hayot-o‘lim) yonma-yon qo‘llash orqali fikrning taʼsirchanligini oshirish sanʼati.',
    classicExample: {
      lines: [
        'Kecha kelgumdur debon ul sarvi gulro‘ kelmadi,',
        'Ko‘zlarimga kecha oqshom uyqu aslo kelmadi.'
      ],
      author: 'Alisher Navoiy',
      work: 'G‘azallar',
      explanation: 'Bu yerda kelgumdur — kelmadi feʼllaridagi zidlik, shuningdek, yorning kelmasligi bilan ko‘zga uyqu kelmasligi go‘zal tazod hosil qilgan.'
    },
    commonMistake: 'Tazodni oddiy antonimlar ro‘yxati deb qarash. Badiiy asarda tazod shunchaki so‘z o‘yini emas, balki qahramonning ichki iztirobi va dunyoning murakkabligini ochishga xizmat qiladi.',
    practiceExercise: {
      task: 'Quyidagi qaysi misrada tazod sanʼati yorqin ifodalangan?',
      options: [
        'Yig‘latma meni, bir bor kulsun ko‘nglim',
        'Bahor faslida gullar ochildi',
        'Daryo bo‘yida yugurib o‘ynadik',
        'Kitob mutolaasi qalbni yoritadi'
      ],
      correctIndex: 0,
      tip: 'Yig‘latma va kulmoq qarama-qarshi holatlarni bildiradi.'
    }
  },
  {
    id: 'talmeh',
    name: 'Talmeh (Ishora)',
    category: 'badiiy_sanʼat',
    definition: 'Tarixiy shaxs, afsonaviy qahramon, mashhur voqea, Qurʼoni karim qissalari yoki adabiy asarlarga ishora qilish sanʼati. Shoir uzoq tushuntirmasdan, birgina nom bilan o‘quvchi xotirasida butun bir voqeani gavdalantiradi.',
    classicExample: {
      lines: [
        'Farhod tosh kesib o‘tsa ishq tog‘idan,',
        'Majnun sahroda kezdi yor dog‘idan.'
      ],
      author: 'Mumtoz she’riyat',
      work: 'Baytlar',
      explanation: 'Farhod (tosh yo‘nib Shirin sevgisiga erishgan) va Majnun (sahroda Layli ishqida o‘rtangan) obrazlariga qilingan ishora talmehdir.'
    },
    commonMistake: 'Talmehni shunchaki odam ismini aytish deb tushunish. Talmeh bo‘lishi uchun o‘sha shaxs yoki voqea orqasida katta tarixiy, afsonaviy maʼno yotishi kerak.',
    practiceExercise: {
      task: '“Yusuf kabi go‘zal husni bor” misrasida qaysi mashhur qissaga talmeh qilingan?',
      options: ['Hazrati Yusuf va Zulayho qissasiga', 'Rustam dostoniga', 'Alpomish eposiga', 'Sindbod sarguzashtiga'],
      correctIndex: 0,
      tip: 'Hazrati Yusuf go‘zallik va sabr timsoli sifatida sharq adabiyotida keng talmeh qilinadi.'
    }
  },
  {
    id: 'barmoq_vazni',
    name: 'Barmoq vazni',
    category: 'vazn',
    definition: 'O‘zbek xalq og‘zaki ijodi va zamonaviy sheʼriyatining asosiy sheʼriy o‘lchovi. U misralardagi bo‘g‘inlar sonining tengligiga va turoqlanishiga (pauzalarga) asoslanadi. Masalan, 7 bo‘g‘inli (4+3), 8 bo‘g‘inli (4+4), 11 bo‘g‘inli (6+5 yoki 4+4+3).',
    classicExample: {
      lines: [
        'Ona tilim, sen borsan, shaksiz, (4+4 = 8)',
        'Bulbul kuyin sheʼrga solaman. (4+4 = 8)'
      ],
      author: 'Erkin Vohidov',
      work: 'Ona tilim',
      explanation: 'Har bir misra 8 ta bo‘g‘indan iborat bo‘lib, to‘rtinchi bo‘g‘indan keyin turoq (qisqa nafas to‘xtashi) mavjud.'
    },
    commonMistake: 'Barmoq vaznini aruz vazni bilan adashtirish. Aruz cho‘ziq va qisqa hijolarning almashinishiga tayansa, barmoq vazni bo‘g‘inlar sonining hisobiga tayanadi.',
    practiceExercise: {
      task: '“Vatan bitta, unga jon fido bo‘lur” misrasida nechta bo‘g‘in bor?',
      options: ['11 ta bo‘g‘in', '8 ta bo‘g‘in', '7 ta bo‘g‘in', '14 ta bo‘g‘in'],
      correctIndex: 0,
      tip: 'So‘zlardagi unli tovushlar sonini hisoblang: Va-tan bit-ta, un-ga jon fi-do bo‘-lur (11 ta unli = 11 bo‘g‘in).'
    }
  }
];
