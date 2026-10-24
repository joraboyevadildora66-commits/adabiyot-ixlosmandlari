# Adabiyot ixlosmandlari (Literature Enthusiasts)

O‘zbekiston maktablarining 5–11-sinf o‘quvchilari va adabiyot fani o‘qituvchilari uchun yaratilgan professional interaktiv ta’lim platformasi.

## Asosiy imkoniyatlar

1. **Davlat ta’lim dasturiga mos darslar (5–11-sinflar):**
   - Xalq og‘zaki ijodi, Mumtoz adabiyot, Jadid adabiyoti, XX asr va zamonaviy o‘zbek adabiyoti, Jahon adabiyoti durdonalari.
   - Har bir dars: o‘quv maqsadi, 3–7 daqiqalik qiziqarli ma’ruza, asosiy atamalar, badiiy parcha va tahlil, "Tushundingmi?" nazorat savollari, mini-test va rasmiy manba havolasi (eduportal.uz).
2. **Kutubxona:**
   - Dostonlar, qissalar, romanlar, dramalar bo‘yicha ko‘p parametrli qidiruv.
   - Asarlardan parchalar, sevimlilarga qo‘shish va "o‘qilgan" deb belgilash funksiyasi.
3. **Adiblar ensiklopediyasi:**
   - Alisher Navoiy, Bobur, Abdulla Qodiriy, Cho‘lpon, Oybek, Abdulla Oripov va boshqalar.
   - Tarixiy xronologiya, asarlar ro‘yxati, iqtiboslar va adib mini-viktorinasi.
4. **Adabiyot nazariyasi va badiiy san’atlar:**
   - Tashbeh, Istiora, Jonlantirish (Tashxis), Tazod, Talmeh, Mubolag‘a, Barmoq va Aruz vaznlari.
   - Klassik baytlar tahlili, keng tarqalgan xatolar va interaktiv mashqlar.
5. **Interaktiv O‘yinlar olami:**
   - *Badiiy san’at detektivi* (matndan vositani topish va sababini tushunish).
   - *Muallifni top* (iqtibos va ishoralar asosida adibni aniqlash).
   - *Asar va qahramon* (qahramonlarni asarlarga bog‘lash).
   - *Voqealar tartibi* (syujet xronologiyasini qayta tuzish).
   - *She’riyat laboratoriyasi* (qofiya va vazn mashqlari).
   - *Adabiy krossvord* (so‘z topish).
6. **O‘qituvchi paneli:**
   - Sinf xonasi Smartboard taqdimot rejimi (proyektor uchun yirik shriftlar).
   - Test tuzuvchi va sinfga muddat bilan biriktirish.
   - O‘quvchilar ko‘p xato qilayotgan mavzular diagnostikasi.
   - Chop etishga tayyor tarqatma material (Printable worksheets).
7. **Adabiy xarita:**
   - O‘zbekiston bo‘ylab adabiy meros obidalari, muzeylar va meʼmoriy maskanlar.
8. **Xavfsiz internet va ishonchli manbalar:**
   - Ta’limiy axborot xavfsizligi qoidalari, plagiatga qarshi madaniyat, tasdiqlangan rasmiy portallar (eduportal.uz, ziyonet.uz, lex.uz, natlib.uz) va tashqi havola ogohlantirishlari.
9. **Shaxsiy profil va kitobxonlar kundaligi:**
   - Shaxsiy mutolaa maqsadi, erishilgan nishonlar, reyting ballari va shaxsiy taqrizlar kundaligi.
10. **4 ta til rejimi va mavzular:**
    - `uz-Latn` (O‘zbekcha lotin)
    - `uz-Cyrl` (Ўзбекча кирилл)
    - `ru` (Русский)
    - `en` (English)
    - Tungi (Dark) va Kunduzgi (Light) rejimlar (xotirada saqlanadi).

## O‘rnatish va ishga tushirish

```bash
# Kutubxonalarni o‘rnatish
npm install

# Dasturchi serverini ishga tushirish
npm run dev

# Ishchi (Production) versiyani yig‘ish
npm run build
```

## Vercel yoki boshqa serverlarga joylashtirish

Loyihani GitHub’ga yuklab, Vercel orqali bir marta bosish orqali joylashtirish mumkin. Build sozlamalari:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
