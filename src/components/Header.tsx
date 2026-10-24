/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Moon, Sun, Globe, Menu, X, GraduationCap, Award } from 'lucide-react';
import { Language, GradeLevel } from '../types';
import { translations } from '../locales/translations';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  selectedGrade: GradeLevel | null;
  setSelectedGrade: (grade: GradeLevel | null) => void;
  userScore: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  theme,
  setTheme,
  selectedGrade,
  setSelectedGrade,
  userScore,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'lessons', label: t.navLessons },
    { id: 'library', label: t.navLibrary },
    { id: 'authors', label: t.navAuthors },
    { id: 'theory', label: t.navTheory },
    { id: 'games', label: t.navGames },
    { id: 'teacher', label: t.navTeacher },
    { id: 'map', label: t.navMap },
    { id: 'safety', label: t.navSafeInternet },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'uz-Latn', name: 'O‘zbekcha (Lotin)' },
    { code: 'uz-Cyrl', name: 'Ўзбекча (Кирилл)' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ];

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-600 dark:bg-amber-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight whitespace-nowrap block">
                  {t.appName}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 hidden sm:block whitespace-nowrap">
                  5–11-sinflar ta’lim portali
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Single-line, unboxed text with active underline) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors hover:text-stone-900 dark:hover:text-white ${
                    isActive
                      ? 'text-amber-700 dark:text-amber-400 font-semibold'
                      : 'text-stone-600 dark:text-stone-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Grade filter, Language, Theme, Profile Score) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Quick Grade Badge / Filter */}
            <div className="hidden md:flex items-center text-xs text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 rounded-lg p-1 bg-stone-50 dark:bg-stone-800/60">
              <span className="px-2 font-medium flex items-center gap-1 text-stone-500 dark:text-stone-400">
                <GraduationCap className="w-3.5 h-3.5" />
                {selectedGrade ? `${selectedGrade}-sinf` : t.allGrades}
              </span>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1 text-xs font-medium"
                aria-label="Tilni tanlash"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-semibold tracking-wider">{lang.split('-')[0]}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-stone-200 dark:border-stone-800 py-1.5 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1 text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    Til / Language
                  </div>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLang(item.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                        lang === item.code
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                          : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                    >
                      <span>{item.name}</span>
                      {lang === item.code && <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Mavzuni almashtirish"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* User Profile CTA */}
            <button
              onClick={() => handleTabClick('profile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                currentTab === 'profile'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span className="tabular-nums font-mono">{userScore}</span>
              <span className="hidden sm:inline">ball</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
              aria-label="Menyuni ochish"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-4 pt-3 pb-6 space-y-1">
          <div className="grid grid-cols-2 gap-1 pb-3 mb-3 border-b border-stone-100 dark:border-stone-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  currentTab === link.id
                    ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Grade Quick Switcher */}
          <div className="pt-2">
            <span className="text-xs text-stone-500 dark:text-stone-400 block mb-2 font-medium">
              {t.classSelector}:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedGrade(null)}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                  selectedGrade === null
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                }`}
              >
                {t.allGrades}
              </button>
              {([5, 6, 7, 8, 9, 10, 11] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g)}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                    selectedGrade === g
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                  }`}
                >
                  {g}-sinf
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
