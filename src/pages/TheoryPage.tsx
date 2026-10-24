/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, HelpCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Play } from 'lucide-react';
import { Language, TheoryItem } from '../types';
import { translations } from '../locales/translations';
import { theoryData } from '../data/theoryData';

interface TheoryPageProps {
  lang: Language;
  initialItemId?: string;
  onNavigateToGames?: () => void;
}

export const TheoryPage: React.FC<TheoryPageProps> = ({
  lang,
  initialItemId,
  onNavigateToGames,
}) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<'all' | 'badiiy_sanʼat' | 'vazn'>('all');
  const [selectedItem, setSelectedItem] = useState<TheoryItem>(() => {
    if (initialItemId) {
      return theoryData.find((item) => item.id === initialItemId) || theoryData[0];
    }
    return theoryData[0];
  });

  // Interactive exercise state
  const [userExerciseChoice, setUserExerciseChoice] = useState<number | null>(null);
  const [exerciseChecked, setExerciseChecked] = useState(false);

  const filteredItems = theoryData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleSelectTheory = (item: TheoryItem) => {
    setSelectedItem(item);
    setUserExerciseChoice(null);
    setExerciseChecked(false);
  };

  const handleCheckExercise = () => {
    setExerciseChecked(true);
  };

  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
          {t.navTheory} — Badiiy san’atlar va adabiyot qonuniyatlari
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
          She’riy va nasriy matnlarning jozibasini taʼminlovchi badiiy tasvir vositalari, vaznlar va janrlar tahlili
        </p>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeCategory === 'all'
                ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            Barchasi
          </button>
          <button
            onClick={() => setActiveCategory('badiiy_sanʼat')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeCategory === 'badiiy_sanʼat'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            Badiiy san’atlar (Tashbeh, Istiora...)
          </button>
          <button
            onClick={() => setActiveCategory('vazn')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeCategory === 'vazn'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            Vazn va ohang (Barmoq, Aruz)
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Terminology Explorer List */}
        <div className="lg:col-span-4 space-y-2.5">
          {filteredItems.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTheory(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 dark:border-amber-700 shadow-sm'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm font-bold ${
                    isSelected ? 'text-amber-900 dark:text-amber-200' : 'text-stone-900 dark:text-stone-100'
                  }`}>
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-stone-400 capitalize">
                    {item.category === 'badiiy_sanʼat' ? 'Sanʼat' : 'Vazn'}
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                  {item.definition}
                </p>
              </button>
            );
          })}

          {/* Quick link to Game Detektiv */}
          {onNavigateToGames && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-300/40 dark:border-amber-700/40 space-y-2 mt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300">
                <Play className="w-3.5 h-3.5 text-amber-600" />
                <span>Badiiy sanʼat detektivi o‘yini</span>
              </div>
              <p className="text-[11px] text-stone-600 dark:text-stone-400">
                Nazariy bilimlaringizni real misralarda sinab ko‘ring!
              </p>
              <button
                onClick={onNavigateToGames}
                className="w-full py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1"
              >
                <span>O‘yinni ochish</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Deep Dive Analysis & Interactive Practice */}
        <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-8 shadow-sm">
          
          {/* Header */}
          <div className="space-y-2 pb-6 border-b border-stone-100 dark:border-stone-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {selectedItem.category === 'badiiy_sanʼat' ? 'Badiiy tasvir vositasi' : 'Sheʼriy vazn o‘lchovi'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              {selectedItem.name}
            </h2>
            <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              {selectedItem.definition}
            </p>
          </div>

          {/* Classic Poetic Example with Analysis */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Klassik adabiyotdan namunaviy misol
            </h3>
            <div className="p-5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-3">
              <div className="space-y-1">
                {selectedItem.classicExample.lines.map((line, idx) => (
                  <p key={idx} className="text-sm sm:text-base font-medium font-serif-literary text-stone-900 dark:text-stone-100 italic">
                    {line}
                  </p>
                ))}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400 border-t border-amber-200/40 dark:border-amber-900/40 pt-2 font-medium">
                Muallif: {selectedItem.classicExample.author} · {selectedItem.classicExample.work}
              </div>
              <div className="text-xs leading-relaxed text-stone-700 dark:text-stone-300 bg-white/70 dark:bg-stone-900/70 p-3 rounded-lg border border-amber-200/50 dark:border-amber-900/30">
                <strong className="text-amber-800 dark:text-amber-300">Badiiy tahlil:</strong>{' '}
                {selectedItem.classicExample.explanation}
              </div>
            </div>
          </div>

          {/* Common Mistake & Distinction */}
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-800 dark:text-stone-200">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Keng tarqalgan xato va farqlash usuli</span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              {selectedItem.commonMistake}
            </p>
          </div>

          {/* Interactive Practice Exercise */}
          <div className="space-y-4 pt-4 border-t border-stone-100 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                  Mustaqil mashq: O‘zingiz sinab ko‘ring
                </h3>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200 leading-snug">
                {selectedItem.practiceExercise.task}
              </p>

              <div className="space-y-2">
                {selectedItem.practiceExercise.options.map((opt, idx) => {
                  const isThisSelected = userExerciseChoice === idx;
                  const isCorrect = idx === selectedItem.practiceExercise.correctIndex;
                  let optCls = 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-400';

                  if (exerciseChecked) {
                    if (isCorrect) {
                      optCls = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-semibold';
                    } else if (isThisSelected) {
                      optCls = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300';
                    }
                  } else if (isThisSelected) {
                    optCls = 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={exerciseChecked}
                      onClick={() => setUserExerciseChoice(idx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors flex items-center justify-between ${optCls}`}
                    >
                      <span>{opt}</span>
                      {exerciseChecked && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {!exerciseChecked ? (
                <button
                  disabled={userExerciseChoice === null}
                  onClick={handleCheckExercise}
                  className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    userExerciseChoice !== null
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Javobni tekshirish
                </button>
              ) : (
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  <strong className="text-amber-700 dark:text-amber-400">Tushuntirish va maslahat:</strong>{' '}
                  {selectedItem.practiceExercise.tip}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
