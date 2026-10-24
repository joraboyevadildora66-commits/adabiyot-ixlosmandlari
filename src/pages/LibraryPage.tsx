/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, BookMarked, Bookmark, Heart, ExternalLink, Check, Eye, X, ShieldCheck } from 'lucide-react';
import { Book, GradeLevel, Language, UserProgress } from '../types';
import { translations } from '../locales/translations';
import { booksData } from '../data/booksData';
import { ClassSelector } from '../components/ClassSelector';

interface LibraryPageProps {
  lang: Language;
  selectedGrade: GradeLevel | null;
  setSelectedGrade: (grade: GradeLevel | null) => void;
  progress: UserProgress;
  onToggleFavorite: (bookId: string) => void;
  onToggleRead: (bookId: string) => void;
  initialBookId?: string;
}

export const LibraryPage: React.FC<LibraryPageProps> = ({
  lang,
  selectedGrade,
  setSelectedGrade,
  progress,
  onToggleFavorite,
  onToggleRead,
  initialBookId,
}) => {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [activeBook, setActiveBook] = useState<Book | null>(() => {
    if (initialBookId) {
      return booksData.find((b) => b.id === initialBookId) || null;
    }
    return null;
  });

  const genres = ['all', 'roman', 'doston', 'qissa', 'drama'];

  const filteredBooks = useMemo(() => {
    return booksData.filter((b) => {
      const matchesGrade = selectedGrade === null || b.grade === selectedGrade;
      const matchesGenre = selectedGenre === 'all' || b.genre === selectedGenre;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.description.toLowerCase().includes(query) ||
        b.themes.some((theme) => theme.toLowerCase().includes(query));

      return matchesGrade && matchesGenre && matchesSearch;
    });
  }, [selectedGrade, selectedGenre, searchQuery]);

  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Header & Search */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
              {t.navLibrary} — Maktab elektron kutubxonasi
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              5–11-sinf adabiyot darsliklari va mustaqil mutolaa uchun tasdiqlangan badiiy asarlar
            </p>
          </div>
          <ClassSelector
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
            lang={lang}
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                  selectedGenre === genre
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {genre === 'all' ? 'Barcha janrlar' : genre}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => {
          const isFav = progress.favoriteBooks.includes(book.id);
          const isRead = progress.readBooks.includes(book.id);

          return (
            <div
              key={book.id}
              className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 flex flex-col justify-between hover:shadow-md hover:border-amber-400/80 dark:hover:border-amber-600/80 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2.5">
                  <span className="font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide text-[11px]">
                    {book.genre}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-600 dark:text-stone-300 font-medium">{book.grade}-sinf</span>
                    <button
                      onClick={() => onToggleFavorite(book.id)}
                      className={`p-1 rounded-md transition-colors ${
                        isFav
                          ? 'text-rose-500'
                          : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-200'
                      }`}
                      aria-label="Sevimlilarga qo‘shish"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif-literary mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {book.author}
                </p>

                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed mb-4">
                  {book.description}
                </p>

                {/* Themes unboxed text */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-400 mb-4">
                  {book.themes.map((theme, idx) => (
                    <React.Fragment key={idx}>
                      <span>{theme}</span>
                      {idx < book.themes.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-3 border-t border-stone-100 dark:border-stone-800">
                <button
                  onClick={() => setActiveBook(book)}
                  className="w-full py-2 px-3 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Konspekt va parchani o‘qish</span>
                </button>

                <button
                  onClick={() => onToggleRead(book.id)}
                  className={`w-full py-1.5 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${
                    isRead
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                      : 'text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/60'
                  }`}
                >
                  {isRead ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{t.readStatus} (+50 ball)</span>
                    </>
                  ) : (
                    <>
                      <BookMarked className="w-3 h-3" />
                      <span>{t.markAsRead}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Book Detail Modal */}
      {activeBook && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  {activeBook.genre} · {activeBook.grade}-sinf darsligi
                </span>
                <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary mt-1">
                  {activeBook.title}
                </h2>
                <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
                  {activeBook.author} ({activeBook.period})
                </p>
              </div>
              <button
                onClick={() => setActiveBook(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description & Objective */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Asar haqida qisqacha maʼlumot
              </h3>
              <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                {activeBook.description}
              </p>
              <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
                <strong>O‘rganish maqsadi:</strong> {activeBook.learningObjective}
              </div>
            </div>

            {/* Canonical Excerpt */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Namunaviy matn parchasi
              </h3>
              <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <blockquote className="text-sm font-serif-literary text-stone-800 dark:text-stone-200 italic leading-relaxed whitespace-pre-line">
                  “{activeBook.excerpt}”
                </blockquote>
              </div>
            </div>

            {/* Official Source Link & Copyright Note */}
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{activeBook.officialSource}</span>
              </div>
              <a
                href={activeBook.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>{t.officialReadLink}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
