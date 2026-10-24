/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Award, Sparkles, BookOpen, Shuffle, HelpCircle, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import { Language, UserProgress } from '../types';
import { translations } from '../locales/translations';
import {
  detektivQuestions,
  matchHeroPairs,
  sequenceGames,
  authorGuessQuestions,
  poetryLabExercises,
  crosswordData,
} from '../data/gamesData';

interface GamesPageProps {
  lang: Language;
  progress: UserProgress;
  onRecordScore: (points: number) => void;
}

export const GamesPage: React.FC<GamesPageProps> = ({
  lang,
  progress,
  onRecordScore,
}) => {
  const t = translations[lang];
  const [activeGame, setActiveGame] = useState<
    'detektiv' | 'muallif' | 'moslashtirish' | 'ketma_ketlik' | 'sheʼriyat' | 'krossvord'
  >('detektiv');

  // --- Game 1: Detektiv State ---
  const [detektivIdx, setDetektivIdx] = useState(0);
  const [detektivChoice, setDetektivChoice] = useState<number | null>(null);
  const [detektivChecked, setDetektivChecked] = useState(false);
  const [detektivScore, setDetektivScore] = useState(0);

  // --- Game 2: Muallifni Top State ---
  const [authorIdx, setAuthorIdx] = useState(0);
  const [authorChoice, setAuthorChoice] = useState<number | null>(null);
  const [authorChecked, setAuthorChecked] = useState(false);
  const [authorScore, setAuthorScore] = useState(0);

  // --- Game 3: Moslashtirish State ---
  const [selectedHero, setSelectedHero] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [matchScore, setMatchScore] = useState(0);
  const [matchWrongFlash, setMatchWrongFlash] = useState<string | null>(null);

  // --- Game 4: Ketma-ketlik State ---
  const [seqGameIdx, setSeqGameIdx] = useState(0);
  const currentSeqGame = sequenceGames[seqGameIdx];
  const [orderedEvents, setOrderedEvents] = useState(() =>
    [...currentSeqGame.events].sort(() => Math.random() - 0.5)
  );
  const [seqChecked, setSeqChecked] = useState(false);
  const [seqIsCorrect, setSeqIsCorrect] = useState(false);

  // --- Game 5: She'riyat Laboratoriyasi State ---
  const [poetryIdx, setPoetryIdx] = useState(0);
  const [poetryChoice, setPoetryChoice] = useState<number | null>(null);
  const [poetryChecked, setPoetryChecked] = useState(false);
  const [poetryScore, setPoetryScore] = useState(0);

  // --- Game 6: Krossvord State ---
  const [crosswordInputs, setCrosswordInputs] = useState<Record<number, string>>({});
  const [crosswordChecked, setCrosswordChecked] = useState(false);

  // --- Handlers ---
  const handleCheckDetektiv = () => {
    if (detektivChoice === null) return;
    setDetektivChecked(true);
    const q = detektivQuestions[detektivIdx];
    if (detektivChoice === q.correctIndex) {
      setDetektivScore((s) => s + 20);
      onRecordScore(20);
    }
  };

  const handleNextDetektiv = () => {
    setDetektivChecked(false);
    setDetektivChoice(null);
    if (detektivIdx < detektivQuestions.length - 1) {
      setDetektivIdx((i) => i + 1);
    } else {
      setDetektivIdx(0);
    }
  };

  const handleCheckAuthor = () => {
    if (authorChoice === null) return;
    setAuthorChecked(true);
    const q = authorGuessQuestions[authorIdx];
    if (authorChoice === q.correctIndex) {
      setAuthorScore((s) => s + 25);
      onRecordScore(25);
    }
  };

  const handleNextAuthor = () => {
    setAuthorChecked(false);
    setAuthorChoice(null);
    if (authorIdx < authorGuessQuestions.length - 1) {
      setAuthorIdx((i) => i + 1);
    } else {
      setAuthorIdx(0);
    }
  };

  const handleSelectHeroToMatch = (heroName: string) => {
    if (matchedPairs.includes(heroName)) return;
    setSelectedHero(heroName);
  };

  const handleSelectWorkToMatch = (workName: string) => {
    if (!selectedHero) return;
    const targetPair = matchHeroPairs.find((p) => p.hero === selectedHero);
    if (targetPair && targetPair.work === workName) {
      setMatchedPairs((prev) => [...prev, selectedHero]);
      setSelectedHero(null);
      setMatchScore((s) => s + 20);
      onRecordScore(20);
    } else {
      setMatchWrongFlash(workName);
      setTimeout(() => setMatchWrongFlash(null), 1000);
      setSelectedHero(null);
    }
  };

  const handleMoveEvent = (index: number, direction: 'up' | 'down') => {
    if (seqChecked) return;
    const newEvents = [...orderedEvents];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newEvents.length) return;
    const temp = newEvents[index];
    newEvents[index] = newEvents[targetIndex];
    newEvents[targetIndex] = temp;
    setOrderedEvents(newEvents);
  };

  const handleCheckSequence = () => {
    const isSuccess = orderedEvents.every((e, idx) => e.correctOrder === idx + 1);
    setSeqIsCorrect(isSuccess);
    setSeqChecked(true);
    if (isSuccess) {
      onRecordScore(40);
    }
  };

  const handleResetSequence = () => {
    setOrderedEvents([...currentSeqGame.events].sort(() => Math.random() - 0.5));
    setSeqChecked(false);
  };

  const handleCheckPoetry = () => {
    if (poetryChoice === null) return;
    setPoetryChecked(true);
    const ex = poetryLabExercises[poetryIdx];
    if (poetryChoice === ex.correctIndex) {
      setPoetryScore((s) => s + 20);
      onRecordScore(20);
    }
  };

  const handleNextPoetry = () => {
    setPoetryChecked(false);
    setPoetryChoice(null);
    if (poetryIdx < poetryLabExercises.length - 1) {
      setPoetryIdx((i) => i + 1);
    } else {
      setPoetryIdx(0);
    }
  };

  const handleCheckCrossword = () => {
    setCrosswordChecked(true);
    let rightCount = 0;
    crosswordData.forEach((item) => {
      if ((crosswordInputs[item.number] || '').toUpperCase().trim() === item.word) {
        rightCount += 1;
      }
    });
    if (rightCount > 0) {
      onRecordScore(rightCount * 15);
    }
  };

  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
            {t.navGames} — Interaktiv adabiy laboratoriya
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
            Bilimingizni sinovdan o‘tkazuvchi, xatolarni tushuntiruvchi va ball to‘plashga yordam beruvchi ta’limiy o‘yinlar
          </p>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-semibold text-amber-900 dark:text-amber-200">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Jami to‘plangan: <strong className="tabular-nums font-mono">{progress.totalScore} ball</strong></span>
        </div>
      </div>

      {/* Game Selector Segmented Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-xl overflow-x-auto scrollbar-none border border-stone-200 dark:border-stone-700">
        {[
          { id: 'detektiv', label: '1. Badiiy san’at detektivi' },
          { id: 'muallif', label: '2. Muallifni top' },
          { id: 'moslashtirish', label: '3. Asar va qahramon' },
          { id: 'ketma_ketlik', label: '4. Voqealar tartibi' },
          { id: 'sheʼriyat', label: '5. She’riyat laboratoriyasi' },
          { id: 'krossvord', label: '6. Adabiy krossvord' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveGame(tab.id as any)}
            className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeGame === tab.id
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* GAME 1: Badiiy san'at detektivi */}
      {activeGame === 'detektiv' && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl mx-auto animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              Savol {detektivIdx + 1} / {detektivQuestions.length}
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              Detektiv balli: {detektivScore}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-center space-y-3">
            <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
              Quyidagi matnda qaysi badiiy vosita qo‘llangan?
            </p>
            <blockquote className="text-lg sm:text-xl font-bold font-serif-literary text-stone-900 dark:text-stone-100 italic">
              {detektivQuestions[detektivIdx].excerpt}
            </blockquote>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Manba: {detektivQuestions[detektivIdx].author}
            </p>
          </div>

          <div className="space-y-2.5">
            {detektivQuestions[detektivIdx].options.map((opt, idx) => {
              const isSelected = detektivChoice === idx;
              const isCorrect = idx === detektivQuestions[detektivIdx].correctIndex;
              let btnCls = 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';

              if (detektivChecked) {
                if (isCorrect) {
                  btnCls = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                } else if (isSelected) {
                  btnCls = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                }
              } else if (isSelected) {
                btnCls = 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 font-semibold';
              }

              return (
                <button
                  key={idx}
                  disabled={detektivChecked}
                  onClick={() => setDetektivChoice(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnCls}`}
                >
                  <span>{opt}</span>
                  {detektivChecked && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {detektivChecked && (
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs text-stone-800 dark:text-stone-200 leading-relaxed space-y-1">
              <strong className="text-amber-700 dark:text-amber-400 font-semibold block">
                Detektiv tahlili va sababi:
              </strong>
              <p>{detektivQuestions[detektivIdx].deviceExplanation}</p>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            {!detektivChecked ? (
              <button
                disabled={detektivChoice === null}
                onClick={handleCheckDetektiv}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  detektivChoice !== null
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                }`}
              >
                Javobni tasdiqlash
              </button>
            ) : (
              <button
                onClick={handleNextDetektiv}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5"
              >
                <span>Keyingi savol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* GAME 2: Muallifni top */}
      {activeGame === 'muallif' && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl mx-auto animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              Topshiriq {authorIdx + 1} / {authorGuessQuestions.length}
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              Ball: {authorScore}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Iqtibos kimning qalamiga mansub?
            </p>
            <blockquote className="text-lg sm:text-xl font-serif-literary font-bold text-stone-900 dark:text-stone-100 italic">
              {authorGuessQuestions[authorIdx].quote}
            </blockquote>
            <p className="text-xs text-stone-600 dark:text-stone-300">
              <strong>Ishora:</strong> {authorGuessQuestions[authorIdx].clue}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {authorGuessQuestions[authorIdx].options.map((opt, idx) => {
              const isSelected = authorChoice === idx;
              const isCorrect = idx === authorGuessQuestions[authorIdx].correctIndex;
              let btnCls = 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';

              if (authorChecked) {
                if (isCorrect) {
                  btnCls = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                } else if (isSelected) {
                  btnCls = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                }
              } else if (isSelected) {
                btnCls = 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 font-semibold';
              }

              return (
                <button
                  key={idx}
                  disabled={authorChecked}
                  onClick={() => setAuthorChoice(idx)}
                  className={`p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnCls}`}
                >
                  <span>{opt}</span>
                  {authorChecked && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {authorChecked && (
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs text-stone-800 dark:text-stone-200 leading-relaxed">
              <strong className="text-amber-700 dark:text-amber-400 font-semibold block mb-0.5">Izoh:</strong>
              {authorGuessQuestions[authorIdx].explanation}
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            {!authorChecked ? (
              <button
                disabled={authorChoice === null}
                onClick={handleCheckAuthor}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  authorChoice !== null
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                }`}
              >
                Tasdiqlash
              </button>
            ) : (
              <button
                onClick={handleNextAuthor}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5"
              >
                <span>Keyingisi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* GAME 3: Asar va qahramon moslashtirish */}
      {activeGame === 'moslashtirish' && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm max-w-4xl mx-auto animate-in fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                Qahramonlarni asarlarga bog‘lang
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Avval chap ustundagi qahramonni bosing, so‘ng o‘ng ustundagi tegishli asarni tanlang
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Moslashtirildi: {matchedPairs.length} / {matchHeroPairs.length}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Left: Heroes */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-1">
                Qahramonlar
              </span>
              {matchHeroPairs.map((pair) => {
                const isMatched = matchedPairs.includes(pair.hero);
                const isSelected = selectedHero === pair.hero;

                return (
                  <button
                    key={pair.hero}
                    disabled={isMatched}
                    onClick={() => handleSelectHeroToMatch(pair.hero)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-800 dark:text-emerald-300 opacity-60'
                        : isSelected
                        ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-600 text-amber-900 dark:text-amber-100 font-bold shadow-sm'
                        : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400'
                    }`}
                  >
                    <div>
                      <span className="font-bold">{pair.hero}</span>
                      <span className="text-[11px] text-stone-500 dark:text-stone-400 block font-normal">
                        {pair.trait}
                      </span>
                    </div>
                    {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            {/* Right: Works */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-1">
                Asarlar
              </span>
              {/* Shuffled works */}
              {[...matchHeroPairs]
                .sort((a, b) => a.work.localeCompare(b.work))
                .map((pair) => {
                  const isMatched = matchedPairs.includes(pair.hero);
                  const isWrong = matchWrongFlash === pair.work;

                  return (
                    <button
                      key={pair.id}
                      disabled={isMatched}
                      onClick={() => handleSelectWorkToMatch(pair.work)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isMatched
                          ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-800 dark:text-emerald-300 opacity-60'
                          : isWrong
                          ? 'bg-rose-100 dark:bg-rose-950/60 border-rose-500 text-rose-900 animate-shake'
                          : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400'
                      }`}
                    >
                      <div>
                        <span className="font-bold font-serif-literary">“{pair.work}”</span>
                        <span className="text-[11px] text-stone-500 dark:text-stone-400 block font-normal">
                          Muallif: {pair.author}
                        </span>
                      </div>
                      {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </button>
                  );
                })}
            </div>

          </div>

          {matchedPairs.length === matchHeroPairs.length && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center space-y-2">
              <Sparkles className="w-6 h-6 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-sm">Ofarin! Barcha juftliklar to‘g‘ri topildi.</h4>
              <button
                onClick={() => setMatchedPairs([])}
                className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                Qayta o‘ynash
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 4: Voqealar ketma-ketligi */}
      {activeGame === 'ketma_ketlik' && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl mx-auto animate-in fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                Syujet voqealari xronologiyasini tuzing
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {currentSeqGame.workTitle} ({currentSeqGame.author})
              </p>
            </div>
            <button
              onClick={handleResetSequence}
              className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Aralashtirish</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {orderedEvents.map((event, idx) => {
              const isCorrectPosition = seqChecked && event.correctOrder === idx + 1;
              const isWrongPosition = seqChecked && event.correctOrder !== idx + 1;

              return (
                <div
                  key={event.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                    isCorrectPosition
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-900 dark:text-emerald-200'
                      : isWrongPosition
                      ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-400 text-rose-900 dark:text-rose-200'
                      : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm">{event.text}</span>
                  </div>

                  {!seqChecked && (
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        disabled={idx === 0}
                        onClick={() => handleMoveEvent(idx, 'up')}
                        className="p-1.5 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 disabled:opacity-30 text-stone-600 dark:text-stone-300"
                        aria-label="Yuqoriga siljitish"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <button
                        disabled={idx === orderedEvents.length - 1}
                        onClick={() => handleMoveEvent(idx, 'down')}
                        className="p-1.5 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 disabled:opacity-30 text-stone-600 dark:text-stone-300"
                        aria-label="Pastga siljitish"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-stone-500 dark:text-stone-400">
              O‘qlar orqali voqealarni to‘g‘ri ketma-ketlikda joylashtiring
            </span>

            {!seqChecked ? (
              <button
                onClick={handleCheckSequence}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                Tartibni tekshirish
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold ${seqIsCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {seqIsCorrect ? 'To‘g‘ri tartiblangan! (+40 ball)' : 'Xatoliklar bor, qayta urinib ko‘ring'}
                </span>
                <button
                  onClick={handleResetSequence}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Qayta boshlash
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* GAME 5: She'riyat Laboratoriyasi */}
      {activeGame === 'sheʼriyat' && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl mx-auto animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              Qofiya va vazn mashqi {poetryIdx + 1} / {poetryLabExercises.length}
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              Ball: {poetryScore}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-center space-y-2">
            <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
              Birinchi misra:
            </p>
            <blockquote className="text-lg sm:text-xl font-bold font-serif-literary text-stone-900 dark:text-stone-100 italic">
              “{poetryLabExercises[poetryIdx].line1}”
            </blockquote>
            <p className="text-xs text-amber-800 dark:text-amber-300 font-medium">
              {poetryLabExercises[poetryIdx].line2Prompt}
            </p>
          </div>

          <div className="space-y-2.5">
            {poetryLabExercises[poetryIdx].options.map((opt, idx) => {
              const isSelected = poetryChoice === idx;
              const isCorrect = idx === poetryLabExercises[poetryIdx].correctIndex;
              let optCls = 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';

              if (poetryChecked) {
                if (isCorrect) {
                  optCls = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                } else if (isSelected) {
                  optCls = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                }
              } else if (isSelected) {
                optCls = 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 font-semibold';
              }

              return (
                <button
                  key={idx}
                  disabled={poetryChecked}
                  onClick={() => setPoetryChoice(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${optCls}`}
                >
                  <span>{opt}</span>
                  {poetryChecked && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {poetryChecked && (
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs text-stone-800 dark:text-stone-200 space-y-1.5">
              <p>
                <strong className="text-amber-700 dark:text-amber-400">Qofiyadosh so‘zlar:</strong>{' '}
                {poetryLabExercises[poetryIdx].rhymeWord}
              </p>
              <p>
                <strong className="text-stone-700 dark:text-stone-300">Vazn va o‘lchov:</strong>{' '}
                {poetryLabExercises[poetryIdx].meterInfo}
              </p>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            {!poetryChecked ? (
              <button
                disabled={poetryChoice === null}
                onClick={handleCheckPoetry}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  poetryChoice !== null
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                }`}
              >
                Qofiyani tekshirish
              </button>
            ) : (
              <button
                onClick={handleNextPoetry}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5"
              >
                <span>Keyingi mashq</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* GAME 6: Adabiy Krossvord */}
      {activeGame === 'krossvord' && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl mx-auto animate-in fade-in">
          <div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              Adabiyot krossvordi: So‘zlarni toping
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Savollar bo‘yicha atama yoki muallif ismini yozing
            </p>
          </div>

          <div className="space-y-3">
            {crosswordData.map((item) => {
              const userInput = crosswordInputs[item.number] || '';
              const isCorrect = userInput.toUpperCase().trim() === item.word;

              return (
                <div
                  key={item.number}
                  className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                      {item.number}. {item.direction === 'across' ? 'Gorizontal' : 'Vertikal'}:
                    </span>
                    <span className="text-[11px] text-stone-400">{item.word.length} ta harf</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
                    {item.clue}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      maxLength={item.word.length}
                      value={userInput}
                      onChange={(e) =>
                        setCrosswordInputs((prev) => ({
                          ...prev,
                          [item.number]: e.target.value,
                        }))
                      }
                      placeholder={`${item.word.length} ta harf...`}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono uppercase tracking-widest focus:outline-none w-48 ${
                        crosswordChecked
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                            : 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200'
                          : 'border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100'
                      }`}
                    />
                    {crosswordChecked && (
                      <span className="text-xs font-semibold">
                        {isCorrect ? (
                          <span className="text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> To‘g‘ri
                          </span>
                        ) : (
                          <span className="text-rose-600">Javob: {item.word}</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={handleCheckCrossword}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              Krossvordni tekshirish
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
