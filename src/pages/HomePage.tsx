/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Sparkles, ArrowRight, Play, CheckCircle2, Award, Clock, BookMarked, UserCheck, ShieldCheck } from 'lucide-react';
import { Language, GradeLevel, UserProgress } from '../types';
import { translations } from '../locales/translations';
import { lessonsData } from '../data/lessonsData';
import { booksData } from '../data/booksData';
import { authorsData } from '../data/authorsData';
import { heroImage, navoiyImage, gamesBannerImage } from '../assets/images';
import { ClassSelector } from '../components/ClassSelector';

interface HomePageProps {
  lang: Language;
  selectedGrade: GradeLevel | null;
  setSelectedGrade: (grade: GradeLevel | null) => void;
  progress: UserProgress;
  onNavigate: (tab: string, itemId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  selectedGrade,
  setSelectedGrade,
  progress,
  onNavigate,
}) => {
  const t = translations[lang];

  // Filter lessons based on grade
  const filteredLessons = selectedGrade
    ? lessonsData.filter((l) => l.grade === selectedGrade)
    : lessonsData;

  const spotlightAuthor = authorsData.find((a) => a.id === 'navoiy') || authorsData[0];

  return (
    <div className="space-y-16 py-6 sm:py-10">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-stone-100 dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-950 border border-stone-200/80 dark:border-stone-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-3 tracking-wide uppercase">
                <Sparkles className="w-4 h-4" />
                <span>O‘zbekiston maktab ta’limi platformasi</span>
                <span aria-hidden="true">·</span>
                <span>5–11-sinflar</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight mb-4 font-serif-literary text-balance">
                Kitobni o‘qi. Ma’noni angla. Fikringni kashf et.
              </h1>

              <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                Adabiyot — shunchaki yodlash emas, balki qalb tarbiyasi va erkin fikrlash maktabidir. Darsliklar, badiiy asarlar tahlili, adabiy o‘yinlar va o‘qituvchilar bilan hamkorlikda adabiyot olamini kashf eting.
              </p>
            </div>

            {/* CTAs and Stats */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('lessons')}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold shadow-sm transition-all flex items-center gap-2 group"
                >
                  <span>{t.startLearning}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('games')}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-750 text-stone-800 dark:text-stone-200 text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{t.exploreGames}</span>
                </button>
                <button
                  onClick={() => onNavigate('teacher')}
                  className="px-4 py-2.5 rounded-xl text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <UserCheck className="w-4 h-4 text-stone-500" />
                  <span>{t.teacherPanel}</span>
                </button>
              </div>

              {/* Quiet Meta Stats (Zero-pill text separators) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 pt-4 border-t border-stone-200/60 dark:border-stone-800/80">
                <span className="font-medium text-stone-700 dark:text-stone-300">7 ta sinf dasturi</span>
                <span aria-hidden="true">·</span>
                <span>Rasmiy Eduportal.uz manbalari</span>
                <span aria-hidden="true">·</span>
                <span>6+ interaktiv o‘yinlar</span>
                <span aria-hidden="true">·</span>
                <span>O‘qituvchi taqdimot rejimi</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={heroImage}
              alt="O‘zbek adabiyoti va qadimiy kutubxona"
              className="w-full h-full object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hidden sm:block">
              <p className="font-medium">Nodir qo‘lyozmalar va milliy meros</p>
              <p className="text-white/80 text-[11px]">Buxoro va Samarqand adabiy merosi xazinasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selector & Filter Bar */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-b border-stone-200 dark:border-stone-800">
        <div>
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Sinflar bo‘yicha o‘quv dasturi
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            {selectedGrade ? `${selectedGrade}-sinf adabiyot fani darslari ko‘rsatilmoqda` : 'Barcha sinflar uchun umumlashtirilgan darslar'}
          </p>
        </div>
        <ClassSelector
          selectedGrade={selectedGrade}
          onSelectGrade={setSelectedGrade}
          lang={lang}
        />
      </section>

      {/* Bento Spotlight: Topic of Day, Quote of Day, Author Spotlight, Reading Goal */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Kun mavzusi */}
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-amber-600/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                {t.topicOfDay}
              </span>
              <span className="text-[11px] text-stone-400">9-sinf</span>
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-2 font-serif-literary">
              Abdulla Qodiriy va millat birligi g‘oyasi
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              “O‘tkan kunlar” romanidagi ichki nizolarning oqibati va Otabekning xalqqa qilgan daʼvatining bugungi kundagi ahamiyati.
            </p>
          </div>
          <button
            onClick={() => onNavigate('lessons', 'lesson-9-1')}
            className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1 pt-2 border-t border-stone-100 dark:border-stone-800"
          >
            <span>Darsni o‘rganish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Kun hikmati */}
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-amber-600/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                {t.quoteOfDay}
              </span>
              <span className="text-[11px] text-stone-400">Navoiy hikmati</span>
            </div>
            <blockquote className="text-sm font-medium text-stone-900 dark:text-stone-100 italic mb-2 font-serif-literary leading-snug">
              “Odamiy ersang, demagil odami, <br />
              Onikim, yo‘q xalq g‘amidin g‘ami!”
            </blockquote>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              <strong className="text-stone-700 dark:text-stone-300">Maʼnosi:</strong> Agar inson bo‘lsang, o‘z xalqining dardi va quvonchi bilan yashamagan kimsani inson deb atama.
            </p>
          </div>
          <button
            onClick={() => onNavigate('theory', 'tashbeh')}
            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 pt-2 border-t border-stone-100 dark:border-stone-800"
          >
            <span>Badiiy sanʼat tahlili</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: Haftaning adibi (Alisher Navoiy with real portrait) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-amber-600/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                {t.authorOfWeek}
              </span>
              <span className="text-[11px] text-stone-400">1441–1501</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={navoiyImage}
                alt={spotlightAuthor.name}
                className="w-14 h-14 rounded-xl object-cover border border-amber-200 dark:border-amber-800 shadow-sm shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                  {spotlightAuthor.name}
                </h3>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2">
                  {spotlightAuthor.contribution}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('authors', 'navoiy')}
            className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1 pt-2 border-t border-stone-100 dark:border-stone-800"
          >
            <span>Biografiya va mini-test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 4: Progress & Goals */}
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-amber-600/60 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                Mening mutolaam
              </span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-stone-500 dark:text-stone-400">Tugallangan darslar</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100 tabular-nums font-mono">
                    {progress.completedLessons.length} ta dars
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                  <div
                    className="h-full bg-amber-600 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (progress.completedLessons.length / 6) * 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-stone-500 dark:text-stone-400">O‘qilgan asarlar</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100 tabular-nums font-mono">
                    {progress.readBooks.length} / {progress.readingGoal}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (progress.readBooks.length / progress.readingGoal) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('profile')}
            className="text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 pt-2 border-t border-stone-100 dark:border-stone-800"
          >
            <span>Shaxsiy kundalikni ochish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* Recommended Curriculum Lessons */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 tracking-tight font-serif-literary">
              {t.recommendedLessons}
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Davlat taʼlim standartlari asosida tuzilgan interaktiv mashg‘ulotlar
            </p>
          </div>
          <button
            onClick={() => onNavigate('lessons')}
            className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>Barcha darslar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.slice(0, 3).map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <span className="font-semibold text-amber-700 dark:text-amber-400">
                      {lesson.grade}-sinf
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.readTimeMinutes} {t.readTime}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          O‘zlashtirildi
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 font-serif-literary group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 mb-4 leading-relaxed">
                    {lesson.intro}
                  </p>

                  <div className="text-[11px] text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800/80 pt-3 mb-4">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">Maqsad:</span> {lesson.learningObjective}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('lessons', lesson.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Darsni boshlash</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Games Promotional Card */}
      <section className="relative overflow-hidden rounded-2xl bg-stone-900 text-white border border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
              <Play className="w-3.5 h-3.5" />
              <span>O‘yinlashtirilgan ta’lim</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-literary mb-3 text-balance">
              “O‘yinlar olami”: Badiiy san’at detektivi va adabiy kvestlar
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl mb-6">
              Adabiyot qoidalarini zerikarli yodlashdan voz keching! Badiiy vositalarni aniqlang, qahramonlarni asarlarga bog‘lang, voqealar xronologiyasini tuzing va bilimingiz uchun nishonlar to‘plang.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('games')}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
              >
                <span>O‘yinlarni boshlash</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-400">
                Detektiv · Muallifni top · Krossvord · Ketma-ketlik
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 h-56 sm:h-72 lg:h-full relative min-h-[220px]">
            <img
              src={gamesBannerImage}
              alt="Adabiy o‘yinlar va kvestlar"
              className="w-full h-full object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Featured Books from the Curriculum Library */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 tracking-tight font-serif-literary">
              Tavsiya etilgan durdona asarlar
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Maktab adabiyot darsliklari va mutolaa ro‘yxatidagi eng sara kitoblar
            </p>
          </div>
          <button
            onClick={() => onNavigate('library')}
            className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>Kutubxonani ochish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {booksData.slice(0, 4).map((book) => (
            <div
              key={book.id}
              className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 flex flex-col justify-between hover:border-amber-400/80 dark:hover:border-amber-600/80 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                  <span className="font-semibold text-amber-700 dark:text-amber-400 capitalize">
                    {book.genre}
                  </span>
                  <span>{book.grade}-sinf</span>
                </div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-1 font-serif-literary group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {book.author}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-3 leading-relaxed mb-4">
                  {book.description}
                </p>
              </div>
              <button
                onClick={() => onNavigate('library', book.id)}
                className="w-full py-2 rounded-lg bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <BookMarked className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Asarni mutolaa qilish</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Safe Education Notice */}
      <section className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
              Ishonchli va xavfsiz ta’lim muhiti
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Barcha matnlar O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi o‘quv standartlari va rasmiy manbalariga asoslangan.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('safety')}
          className="whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-50 transition-colors"
        >
          Xavfsizlik qoidalarini o‘qish
        </button>
      </section>

    </div>
  );
};
