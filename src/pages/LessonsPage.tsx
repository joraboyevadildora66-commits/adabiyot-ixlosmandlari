/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Clock, CheckCircle2, BookOpen, ArrowRight, Award, ShieldCheck, ChevronRight, RotateCcw, AlertCircle } from 'lucide-react';
import { Language, GradeLevel, Lesson, UserProgress } from '../types';
import { translations } from '../locales/translations';
import { lessonsData } from '../data/lessonsData';
import { ClassSelector } from '../components/ClassSelector';

interface LessonsPageProps {
  lang: Language;
  selectedGrade: GradeLevel | null;
  setSelectedGrade: (grade: GradeLevel | null) => void;
  activeLessonId?: string;
  onSelectLesson: (id: string | null) => void;
  progress: UserProgress;
  onCompleteLesson: (lessonId: string, score: number) => void;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({
  lang,
  selectedGrade,
  setSelectedGrade,
  activeLessonId,
  onSelectLesson,
  progress,
  onCompleteLesson,
}) => {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  
  // Interactive quiz state for active lesson
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [checkpointAnswers, setCheckpointAnswers] = useState<Record<string, number>>({});

  // Find active lesson if one is selected
  const activeLesson: Lesson | undefined = useMemo(() => {
    if (!activeLessonId) return undefined;
    return lessonsData.find((l) => l.id === activeLessonId);
  }, [activeLessonId]);

  // Filter lessons
  const filteredLessons = useMemo(() => {
    return lessonsData.filter((lesson) => {
      const matchesGrade = selectedGrade === null || lesson.grade === selectedGrade;
      const matchesBranch = selectedBranch === 'all' || lesson.branch === selectedBranch;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        lesson.title.toLowerCase().includes(query) ||
        lesson.subtitle.toLowerCase().includes(query) ||
        lesson.intro.toLowerCase().includes(query) ||
        lesson.keyTerms.some((k) => k.term.toLowerCase().includes(query));

      return matchesGrade && matchesBranch && matchesSearch;
    });
  }, [selectedGrade, selectedBranch, searchQuery]);

  // Handle quiz submit
  const handleQuizSubmit = (lesson: Lesson) => {
    let correctCount = 0;
    lesson.quiz.forEach((q, idx) => {
      if (selectedQuizAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });
    const percent = Math.round((correctCount / lesson.quiz.length) * 100);
    setQuizSubmitted(true);
    onCompleteLesson(lesson.id, percent);
  };

  const handleResetQuiz = () => {
    setSelectedQuizAnswers({});
    setQuizSubmitted(false);
  };

  // Branch mapping labels
  const branchLabels: Record<string, string> = {
    all: t.allBranches,
    xalq_ogzaki_ijodi: 'Xalq og‘zaki ijodi',
    mumtoz_adabiyot: 'Mumtoz adabiyot',
    jadid_adabiyoti: 'Jadid adabiyoti',
    xx_asr_adabiyoti: 'XX asr adabiyoti',
    jahon_adabiyoti: 'Jahon adabiyoti',
  };

  // If a specific lesson is open in Reader Mode
  if (activeLesson) {
    const isCompleted = progress.completedLessons.includes(activeLesson.id);
    const existingScore = progress.completedQuizzes[activeLesson.id];

    return (
      <div className="max-w-4xl mx-auto py-6 sm:py-10 space-y-8 animate-in fade-in">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              onSelectLesson(null);
              setQuizSubmitted(false);
              setSelectedQuizAnswers({});
            }}
            className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1.5"
          >
            <span>← Barcha darslarga qaytish</span>
          </button>
          
          <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
            <span className="font-semibold text-stone-800 dark:text-stone-200">
              {activeLesson.grade}-sinf
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {activeLesson.readTimeMinutes} {t.readTime}
            </span>
            {isCompleted && (
              <>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  O‘zlashtirildi ({existingScore || 100}%)
                </span>
              </>
            )}
          </div>
        </div>

        {/* Lesson Header */}
        <header className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            {branchLabels[activeLesson.branch] || activeLesson.branch}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
            {activeLesson.title}
          </h1>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
            {activeLesson.subtitle}
          </p>

          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-400">
            <div className="w-5 h-5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div>
              <strong className="text-stone-900 dark:text-stone-200 font-semibold">{t.objective}:</strong>{' '}
              {activeLesson.learningObjective}
            </div>
          </div>
        </header>

        {/* Lesson Body Content */}
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-8 shadow-sm">
          
          {/* Introduction */}
          <div className="text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200 bg-amber-50/50 dark:bg-amber-950/20 p-5 rounded-xl border border-amber-200/50 dark:border-amber-900/30">
            <h3 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2">
              Mavzuga kirish
            </h3>
            <p>{activeLesson.intro}</p>
          </div>

          {/* Progressive Lecture Text */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              Asosiy maʼruza matni
            </h3>
            {activeLesson.lectureContent.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Terminology Matrix */}
          <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-stone-800">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
              Asosiy atamalar va tushunchalar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeLesson.keyTerms.map((term, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-750"
                >
                  <div className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1">
                    {term.term}
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {term.definition}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Literary Excerpt & Pedagogical Analysis */}
          {activeLesson.literaryExcerpt && (
            <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-stone-800">
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                Badiiy parcha va tahlil
              </h3>
              <div className="p-5 rounded-xl bg-stone-100/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 space-y-3">
                <blockquote className="text-sm sm:text-base font-medium font-serif-literary text-stone-900 dark:text-stone-100 whitespace-pre-line italic">
                  {activeLesson.literaryExcerpt.text}
                </blockquote>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium border-t border-stone-200/60 dark:border-stone-700/60 pt-2">
                  Manba: {activeLesson.literaryExcerpt.source}
                </div>
                <div className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-white/70 dark:bg-stone-900/70 p-3 rounded-lg border border-stone-200/50 dark:border-stone-700/50">
                  <strong className="text-amber-700 dark:text-amber-400">Pedagogik tahlil:</strong>{' '}
                  {activeLesson.literaryExcerpt.analysis}
                </div>
              </div>
            </div>
          )}

          {/* Interactive Checkpoints ("Tushundingmi?") */}
          {activeLesson.checkpoints && activeLesson.checkpoints.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                  ?
                </div>
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                  {t.checkpoints}
                </h3>
              </div>

              {activeLesson.checkpoints.map((cp) => {
                const selectedOpt = checkpointAnswers[cp.id];
                const hasAnswered = selectedOpt !== undefined;
                const isCorrect = selectedOpt === cp.correctIndex;

                return (
                  <div
                    key={cp.id}
                    className="p-4 sm:p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 space-y-3"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {cp.question}
                    </p>

                    <div className="space-y-2">
                      {cp.options.map((opt, optIdx) => {
                        const isThisSelected = selectedOpt === optIdx;
                        let btnStyle = 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';
                        if (hasAnswered) {
                          if (optIdx === cp.correctIndex) {
                            btnStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                          } else if (isThisSelected) {
                            btnStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={hasAnswered}
                            onClick={() =>
                              setCheckpointAnswers((prev) => ({ ...prev, [cp.id]: optIdx }))
                            }
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && optIdx === cp.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300'
                          : 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300'
                      }`}>
                        <strong>{isCorrect ? 'Barakalla!' : 'Izoh:'}</strong> {cp.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Mini-Quiz Section */}
          <div className="space-y-5 pt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                  {t.miniTest}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Mavzuni o‘zlashtirganlik darajangizni tekshiring ({activeLesson.quiz.length} ta savol)
                </p>
              </div>

              {quizSubmitted && (
                <button
                  onClick={handleResetQuiz}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.retry}</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              {activeLesson.quiz.map((q, qIndex) => {
                const userSelected = selectedQuizAnswers[qIndex];
                const isCorrect = userSelected === q.correctIndex;

                return (
                  <div
                    key={qIndex}
                    className="p-4 sm:p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {qIndex + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 pt-0.5">
                        {q.question}
                      </p>
                    </div>

                    <div className="space-y-2 pl-8">
                      {q.options.map((opt, optIndex) => {
                        const isThisOptionSelected = userSelected === optIndex;
                        let optionClass = 'bg-stone-50 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';

                        if (quizSubmitted) {
                          if (optIndex === q.correctIndex) {
                            optionClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                          } else if (isThisOptionSelected) {
                            optionClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                          }
                        } else if (isThisOptionSelected) {
                          optionClass = 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 font-semibold';
                        }

                        return (
                          <button
                            key={optIndex}
                            disabled={quizSubmitted}
                            onClick={() =>
                              setSelectedQuizAnswers((prev) => ({ ...prev, [qIndex]: optIndex }))
                            }
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors flex items-center justify-between ${optionClass}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIndex === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="pl-8 pt-1">
                        <p className={`text-xs p-2.5 rounded-lg leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                        }`}>
                          <strong className="block mb-0.5">{t.explanation}:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Submit button */}
            {!quizSubmitted ? (
              <div className="pt-2">
                <button
                  disabled={Object.keys(selectedQuizAnswers).length !== activeLesson.quiz.length}
                  onClick={() => handleQuizSubmit(activeLesson)}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    Object.keys(selectedQuizAnswers).length === activeLesson.quiz.length
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Javoblarni tekshirish va yakunlash</span>
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">
                    Tabriklaymiz! Dars muvaffaqiyatli o‘zlashtirildi.
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    Sizning testingiz natijasi shaxsiy profilingizda saqlandi.
                  </p>
                </div>
                <button
                  onClick={() => onSelectLesson(null)}
                  className="px-4 py-2 bg-emerald-700 text-white text-xs font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  Boshqa darslarga o‘tish
                </button>
              </div>
            )}
          </div>

          {/* Verified Source Attribution Footer */}
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>
                <strong>Manba:</strong> {activeLesson.verifiedSource.name} ({activeLesson.verifiedSource.publishedYear}-yil)
              </span>
            </div>
            <a
              href={activeLesson.verifiedSource.url || 'https://eduportal.uz'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 font-medium"
            >
              <span>Eduportal.uz darsligini ko‘rish</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    );
  }

  // Catalog View of Lessons
  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Top Header */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
              {t.navLessons} — 5–11-sinf adabiyot dasturi
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              O‘zbekiston davlat ta’lim standartlari asosida tayyorlangan interaktiv darsliklar to‘plami
            </p>
          </div>
          <ClassSelector
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
            lang={lang}
          />
        </div>

        {/* Search & Branch Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          
          {/* Branch Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {Object.entries(branchLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedBranch(key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  selectedBranch === key
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search Box */}
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

      {/* Lessons Grid */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            const score = progress.completedQuizzes[lesson.id];

            return (
              <div
                key={lesson.id}
                className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between hover:shadow-md hover:border-amber-400/80 dark:hover:border-amber-600/80 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <span className="font-bold text-amber-700 dark:text-amber-400">
                      {lesson.grade}-sinf
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.readTimeMinutes} {t.readTime}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {score ? `${score}%` : 'O‘zlashtirildi'}
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

                  <div className="text-[11px] text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800 pt-3 mb-4">
                    <strong className="text-stone-700 dark:text-stone-300">Maqsad:</strong> {lesson.learningObjective}
                  </div>
                </div>

                <button
                  onClick={() => onSelectLesson(lesson.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Darsni mutolaa qilish</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 space-y-3">
          <AlertCircle className="w-8 h-8 text-stone-400 mx-auto" />
          <h3 className="text-base font-bold text-stone-800 dark:text-stone-200">
            {t.noResults}
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm mx-auto">
            Qidiruv so‘rovingiz yoki tanlangan filtrlar bo‘yicha hech qanday dars topilmadi. Filtrlarni tozalab ko‘ring.
          </p>
          <button
            onClick={() => {
              setSelectedGrade(null);
              setSelectedBranch('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors"
          >
            Filtrlarni tozalash
          </button>
        </div>
      )}

    </div>
  );
};
