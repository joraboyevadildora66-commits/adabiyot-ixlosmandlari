/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, GradeLevel, UserProgress, DiaryEntry } from './types';
import { storageService } from './services/storageService';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { LibraryPage } from './pages/LibraryPage';
import { AuthorsPage } from './pages/AuthorsPage';
import { TheoryPage } from './pages/TheoryPage';
import { GamesPage } from './pages/GamesPage';
import { TeacherPage } from './pages/TeacherPage';
import { LiteraryMapPage } from './pages/LiteraryMapPage';
import { SafeInternetPage } from './pages/SafeInternetPage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [lang, setLang] = useState<Language>(() => storageService.getLanguage());
  const [theme, setTheme] = useState<'light' | 'dark'>(() => storageService.getTheme());
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(() =>
    storageService.getSelectedGrade()
  );
  const [progress, setProgress] = useState<UserProgress>(() => storageService.getProgress());

  // Deep linking item IDs
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const [activeAuthorId, setActiveAuthorId] = useState<string | null>(null);
  const [activeTheoryId, setActiveTheoryId] = useState<string | null>(null);

  // Sync theme changes with DOM
  useEffect(() => {
    storageService.setTheme(theme);
  }, [theme]);

  // Sync language changes
  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    storageService.setLanguage(newLang);
  };

  // Sync grade changes
  const handleSetGrade = (newGrade: GradeLevel | null) => {
    setSelectedGrade(newGrade);
    storageService.setSelectedGrade(newGrade);
  };

  // Global navigation handler
  const handleNavigate = (tab: string, itemId?: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tab === 'lessons') {
      setActiveLessonId(itemId || null);
    } else if (tab === 'library') {
      setActiveBookId(itemId || null);
    } else if (tab === 'authors') {
      setActiveAuthorId(itemId || null);
    } else if (tab === 'theory') {
      setActiveTheoryId(itemId || null);
    }
  };

  // Progress handlers
  const handleCompleteLesson = (lessonId: string, score: number) => {
    const updated = storageService.completeLesson(lessonId, score);
    setProgress({ ...updated });
  };

  const handleToggleFavorite = (bookId: string) => {
    const updated = storageService.toggleFavoriteBook(bookId);
    setProgress({ ...updated });
  };

  const handleToggleRead = (bookId: string) => {
    const updated = storageService.toggleReadBook(bookId);
    setProgress({ ...updated });
  };

  const handleAddDiaryEntry = (entry: Omit<DiaryEntry, 'id'>) => {
    const updated = storageService.addDiaryEntry(entry);
    setProgress({ ...updated });
  };

  const handleRecordScore = (points: number) => {
    const updated = storageService.recordGamePlayed(points);
    setProgress({ ...updated });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-200">
      
      {/* Top Bar Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => handleNavigate(tab)}
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        setTheme={setTheme}
        selectedGrade={selectedGrade}
        setSelectedGrade={handleSetGrade}
        userScore={progress.totalScore}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {currentTab === 'home' && (
          <HomePage
            lang={lang}
            selectedGrade={selectedGrade}
            setSelectedGrade={handleSetGrade}
            progress={progress}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'lessons' && (
          <LessonsPage
            lang={lang}
            selectedGrade={selectedGrade}
            setSelectedGrade={handleSetGrade}
            activeLessonId={activeLessonId || undefined}
            onSelectLesson={(id) => setActiveLessonId(id)}
            progress={progress}
            onCompleteLesson={handleCompleteLesson}
          />
        )}

        {currentTab === 'library' && (
          <LibraryPage
            lang={lang}
            selectedGrade={selectedGrade}
            setSelectedGrade={handleSetGrade}
            progress={progress}
            onToggleFavorite={handleToggleFavorite}
            onToggleRead={handleToggleRead}
            initialBookId={activeBookId || undefined}
          />
        )}

        {currentTab === 'authors' && (
          <AuthorsPage
            lang={lang}
            initialAuthorId={activeAuthorId || undefined}
          />
        )}

        {currentTab === 'theory' && (
          <TheoryPage
            lang={lang}
            initialItemId={activeTheoryId || undefined}
            onNavigateToGames={() => handleNavigate('games')}
          />
        )}

        {currentTab === 'games' && (
          <GamesPage
            lang={lang}
            progress={progress}
            onRecordScore={handleRecordScore}
          />
        )}

        {currentTab === 'teacher' && (
          <TeacherPage lang={lang} />
        )}

        {currentTab === 'map' && (
          <LiteraryMapPage
            lang={lang}
            onNavigateToAuthor={(authorId) => handleNavigate('authors', authorId)}
          />
        )}

        {currentTab === 'safety' && (
          <SafeInternetPage lang={lang} />
        )}

        {currentTab === 'profile' && (
          <ProfilePage
            lang={lang}
            progress={progress}
            onAddDiaryEntry={handleAddDiaryEntry}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
