/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Award, CheckCircle2, ChevronRight, BookOpen, Quote, Calendar, AlertCircle } from 'lucide-react';
import { Author, Language } from '../types';
import { translations } from '../locales/translations';
import { authorsData } from '../data/authorsData';
import { navoiyImage } from '../assets/images';

interface AuthorsPageProps {
  lang: Language;
  onSelectAuthorQuiz?: (authorId: string) => void;
  initialAuthorId?: string;
}

export const AuthorsPage: React.FC<AuthorsPageProps> = ({
  lang,
  initialAuthorId,
}) => {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(() => {
    if (initialAuthorId) {
      return authorsData.find((a) => a.id === initialAuthorId) || authorsData[0];
    }
    return authorsData[0];
  });

  // Author quiz state
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const filteredAuthors = authorsData.filter((a) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.period.toLowerCase().includes(q) ||
      a.keyWorks.some((w) => w.toLowerCase().includes(q))
    );
  });

  const handleAuthorClick = (author: Author) => {
    setSelectedAuthor(author);
    setSelectedQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleQuizAnswer = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    setSelectedQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
          {t.navAuthors} — O‘zbek adabiyoti darg‘alari
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
          Alisher Navoiydan zamonaviy adabiyotgacha bo‘lgan buyuk shoir va yozuvchilar hayoti, ijodi va xronologiyasi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Author Selector List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Adib ismi yoki asarini qidiring..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filteredAuthors.map((author) => {
              const isSelected = selectedAuthor.id === author.id;
              return (
                <button
                  key={author.id}
                  onClick={() => handleAuthorClick(author)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 dark:border-amber-700 shadow-sm'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <div>
                    <h3 className={`text-sm font-bold font-serif-literary ${
                      isSelected ? 'text-amber-900 dark:text-amber-200' : 'text-stone-900 dark:text-stone-100'
                    }`}>
                      {author.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mt-1">
                      <span>{author.years}</span>
                      <span aria-hidden="true">·</span>
                      <span className="line-clamp-1">{author.period}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-amber-600 dark:text-amber-400 translate-x-1' : 'text-stone-400'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Author Profile */}
        <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-8 shadow-sm">
          
          {/* Author Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-stone-100 dark:border-stone-800">
            {selectedAuthor.id === 'navoiy' ? (
              <img
                src={navoiyImage}
                alt={selectedAuthor.name}
                className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl object-cover border border-amber-300 dark:border-amber-800 shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl bg-gradient-to-br from-amber-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 border border-stone-300 dark:border-stone-700 flex flex-col items-center justify-center text-stone-700 dark:text-stone-300 shrink-0 p-3 text-center">
                <BookOpen className="w-8 h-8 mb-2 text-amber-600 dark:text-amber-400" />
                <span className="text-[11px] font-bold font-serif-literary">{selectedAuthor.name}</span>
              </div>
            )}

            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                {selectedAuthor.period}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                {selectedAuthor.name}
              </h2>
              <p className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                Hayot yillari: {selectedAuthor.years}
              </p>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
                {selectedAuthor.contribution}
              </p>
            </div>
          </div>

          {/* Famous Quote Block */}
          {selectedAuthor.famousQuote && (
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-1">
                  Mashhur iqtibos
                </span>
                <p className="text-sm font-serif-literary text-stone-800 dark:text-stone-200 italic font-medium leading-relaxed">
                  “{selectedAuthor.famousQuote}”
                </p>
              </div>
            </div>
          )}

          {/* Biography Paragraphs */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
              Hayoti va ijodiy yo‘li
            </h3>
            {selectedAuthor.biography.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Key Works */}
          <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-stone-800">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
              Asosiy asarlari va merosi
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedAuthor.keyWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-medium text-stone-800 dark:text-stone-200"
                >
                  {work}
                </div>
              ))}
            </div>
          </div>

          {/* Chronological Timeline */}
          {selectedAuthor.timeline && selectedAuthor.timeline.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                  Muhim voqealar xronologiyasi
                </h3>
              </div>
              <div className="relative border-l-2 border-stone-200 dark:border-stone-700 ml-3 space-y-4 py-2">
                {selectedAuthor.timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-400 border-2 border-white dark:border-stone-900" />
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400 font-mono">
                      {item.year}-yil:
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Author Mini-Quiz */}
          {selectedAuthor.quiz && selectedAuthor.quiz.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                    {selectedAuthor.name} haqida mini-test
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    O‘qigan maʼlumotlaringizni tekshirib ko‘ring
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {selectedAuthor.quiz.map((q, qIdx) => {
                  const userChoice = selectedQuizAnswers[qIdx];
                  const isSubmitted = quizSubmitted;
                  const isCorrect = userChoice === q.correctIndex;

                  return (
                    <div
                      key={qIdx}
                      className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 space-y-3"
                    >
                      <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {qIdx + 1}. {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isThis = userChoice === optIdx;
                          let btnCls = 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';
                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnCls = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                            } else if (isThis) {
                              btnCls = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                            }
                          } else if (isThis) {
                            btnCls = 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isSubmitted}
                              onClick={() => handleQuizAnswer(qIdx, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs sm:text-sm transition-colors flex items-center justify-between ${btnCls}`}
                            >
                              <span>{opt}</span>
                              {isSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                        }`}>
                          <strong>Izoh:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted && (
                <button
                  disabled={Object.keys(selectedQuizAnswers).length !== selectedAuthor.quiz.length}
                  onClick={() => setQuizSubmitted(true)}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    Object.keys(selectedQuizAnswers).length === selectedAuthor.quiz.length
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Javobni tekshirish
                </button>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
