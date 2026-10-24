/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, BookOpen, Star, Plus, CheckCircle2, Calendar, Quote, Sparkles, BookMarked, Trophy } from 'lucide-react';
import { Language, UserProgress, DiaryEntry } from '../types';
import { translations } from '../locales/translations';

interface ProfilePageProps {
  lang: Language;
  progress: UserProgress;
  onAddDiaryEntry: (entry: Omit<DiaryEntry, 'id'>) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  lang,
  progress,
  onAddDiaryEntry,
}) => {
  const t = translations[lang];
  const [showAddModal, setShowAddModal] = useState(false);

  // New Diary Form State
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [summaryThoughts, setSummaryThoughts] = useState('');
  const [favoriteQuote, setFavoriteQuote] = useState('');
  const [lessonLearned, setLessonLearned] = useState('');

  const badgesList = [
    { id: 'birinchi_dars', name: 'Birinchi qadam', desc: 'Platformada ilk darsni muvaffaqiyatli yakunlaganlik uchun', icon: '🌟' },
    { id: 'ertakchi', name: 'Xalq donishmandi', desc: 'Xalq og‘zaki ijodi va ertaklar tahlilini bajarganlik uchun', icon: '📜' },
    { id: 'uchta_dars', name: 'Izlanuvchan kitobxon', desc: 'Kamida 3 ta to‘liq darsni o‘zlashtirganlik uchun', icon: '📚' },
    { id: 'birinchi_kitob', name: 'Mutolaa qahramoni', desc: 'Kutubxonadagi asarni to‘liq o‘qib chiqqanlik uchun', icon: '📖' },
    { id: 'oyinlar_bilimdoni', name: 'Adabiyot detektivi', desc: 'Interaktiv o‘yinlarda yuksak natija ko‘rsatganlik uchun', icon: '🔍' },
    { id: 'adabiy_kundalik', name: 'Qalamkash', desc: 'Kitobxonlar kundaligiga ilk shaxsiy taqrizini yozganlik uchun', icon: '✍️' },
  ];

  const handleDiarySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle.trim() || !author.trim()) return;

    onAddDiaryEntry({
      bookTitle,
      author,
      rating,
      dateFinished: new Date().toISOString().split('T')[0],
      summaryThoughts,
      favoriteQuote,
      lessonLearned,
    });

    // Reset
    setBookTitle('');
    setAuthor('');
    setSummaryThoughts('');
    setFavoriteQuote('');
    setLessonLearned('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-10 py-6 sm:py-10 max-w-5xl mx-auto">
      
      {/* Profile Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-stone-100 dark:from-stone-900 dark:via-stone-900/80 dark:to-stone-950 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              Kitobxon shaxsiy profili
            </h1>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              O‘quv progressi, to‘plangan bilim ballari va mutolaa kundaligi
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <div className="p-3 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
            <span className="text-[11px] text-stone-400 block font-medium">To‘plangan ball</span>
            <span className="text-lg font-bold text-amber-700 dark:text-amber-400 tabular-nums font-mono">
              {progress.totalScore}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
            <span className="text-[11px] text-stone-400 block font-medium">O‘zlashtirilgan</span>
            <span className="text-lg font-bold text-emerald-600 tabular-nums font-mono">
              {progress.completedLessons.length} dars
            </span>
          </div>
        </div>
      </div>

      {/* Reading Goal Progress */}
      <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">
              {t.readingGoal}
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Yil davomida kamida {progress.readingGoal} ta badiiy asar o‘qish maqsadi
            </p>
          </div>
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tabular-nums font-mono">
            {progress.readBooks.length} / {progress.readingGoal} {t.booksRead}
          </span>
        </div>

        <div className="w-full h-3 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, (progress.readBooks.length / progress.readingGoal) * 100)}%` }}
          />
        </div>
      </div>

      {/* Earned Badges Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
            {t.badgesEarned} ({progress.badges.length} / {badgesList.length})
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Darslar, o‘yinlar va kitob mutolaasi orqali ochiladigan adabiy nishonlar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badgesList.map((badge) => {
            const isEarned = progress.badges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isEarned
                    ? 'bg-white dark:bg-stone-900 border-amber-300 dark:border-amber-800 shadow-sm'
                    : 'bg-stone-50/60 dark:bg-stone-900/30 border-stone-200 dark:border-stone-800/80 opacity-50'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xl shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      {badge.name}
                    </h3>
                    {isEarned && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reader's Diary (Kitobxonlar kundaligi) */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              {t.readingDiary}
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              O‘qilgan asarlar bo‘yicha shaxsiy fikrlar, iqtiboslar va taqrizlar
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>{t.addDiaryEntry}</span>
          </button>
        </div>

        {/* Diary Entries List */}
        {progress.diary.length > 0 ? (
          <div className="space-y-4">
            {progress.diary.map((entry) => (
              <div
                key={entry.id}
                className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-750 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 dark:border-stone-700 pb-2.5">
                  <div>
                    <h3 className="text-base font-bold font-serif-literary text-stone-900 dark:text-stone-100">
                      “{entry.bookTitle}”
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      Muallif: {entry.author}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center text-amber-500">
                      {Array.from({ length: entry.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </span>
                    <span className="text-stone-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {entry.dateFinished}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                    <strong className="text-stone-900 dark:text-stone-100">Fikr va taassurot:</strong>{' '}
                    {entry.summaryThoughts}
                  </p>
                  {entry.favoriteQuote && (
                    <blockquote className="p-2.5 rounded-lg bg-white/70 dark:bg-stone-900/60 border border-amber-200/50 dark:border-amber-900/30 text-stone-800 dark:text-stone-200 italic font-serif-literary">
                      “{entry.favoriteQuote}”
                    </blockquote>
                  )}
                  {entry.lessonLearned && (
                    <p className="text-emerald-800 dark:text-emerald-300 font-medium">
                      <strong>Xulosa:</strong> {entry.lessonLearned}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-stone-400 space-y-2">
            <BookMarked className="w-8 h-8 mx-auto text-stone-300" />
            <p className="text-xs">Hozircha hech qanday mutolaa qaydlari yo‘q.</p>
          </div>
        )}
      </div>

      {/* Add Diary Entry Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95">
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                Kitobxonlar kundaligiga yangi qayd
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                O‘qigan asaringizdan olgan taassurotlaringizni yozib qoldiring
              </p>
            </div>

            <form onSubmit={handleDiarySubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  {t.bookTitle}
                </label>
                <input
                  type="text"
                  required
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Masalan: Kecha va kunduz"
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  {t.authorName}
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Masalan: Abdulhamid Cho‘lpon"
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Baholang (1 dan 5 yulduzgacha)
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-500 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-5 h-5 ${star <= rating ? 'fill-current' : 'text-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Asar haqida qisqacha fikringiz
                </label>
                <textarea
                  required
                  rows={2}
                  value={summaryThoughts}
                  onChange={(e) => setSummaryThoughts(e.target.value)}
                  placeholder="Asar menga juda yoqdi, qahramonning kurashi..."
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Yoqqan iqtibos
                </label>
                <input
                  type="text"
                  value={favoriteQuote}
                  onChange={(e) => setFavoriteQuote(e.target.value)}
                  placeholder="Haq berilmas, haq olinur!"
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  {t.keyTakeaway}
                </label>
                <input
                  type="text"
                  value={lessonLearned}
                  onChange={(e) => setLessonLearned(e.target.value)}
                  placeholder="Inson har doim o‘z huquqi va erkinligi uchun kurashishi kerak..."
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors"
                >
                  Saqlash (+25 ball)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
