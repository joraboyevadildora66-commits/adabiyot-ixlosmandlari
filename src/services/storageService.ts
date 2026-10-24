/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, GradeLevel, UserProgress, DiaryEntry, TeacherAssignment } from '../types';

const PROGRESS_KEY = 'adabiyot_user_progress_v1';
const LANG_KEY = 'adabiyot_language_v1';
const THEME_KEY = 'adabiyot_theme_v1';
const GRADE_KEY = 'adabiyot_selected_grade_v1';
const ASSIGNMENTS_KEY = 'adabiyot_teacher_assignments_v1';

export const initialProgress: UserProgress = {
  completedLessons: ['lesson-5-1'],
  completedQuizzes: { 'lesson-5-1': 100 },
  favoriteBooks: ['book-1', 'book-3'],
  readBooks: ['book-5'],
  gamesPlayed: 3,
  totalScore: 240,
  badges: ['birinchi_dars', 'ertakchi', 'kitobxon_boshlangich'],
  diary: [
    {
      id: 'd-1',
      bookTitle: 'Dunyoning ishlari',
      author: 'O‘tkir Hoshimov',
      rating: 5,
      dateFinished: '2026-10-15',
      summaryThoughts: 'Ona mehri va bolalik xotiralari juda samimiy tasvirlangan. Har bir hikoyasi ko‘zga yosh keltiradi.',
      favoriteQuote: 'Ona qalbi — dunyodagi eng beg‘ubor daryodir.',
      lessonLearned: 'Ota-onamizning tirikligida qadriga yetishimiz va ularga mehr berishimiz kerak.'
    }
  ],
  readingGoal: 12
};

export const initialAssignments: TeacherAssignment[] = [
  {
    id: 'asg-1',
    classId: '9-A',
    title: '“O‘tkan kunlar” asari tahlili va millat dardi',
    topic: 'Tarixiy roman, Otabek va Kumush sevgisi',
    grade: 9,
    dueDate: '2026-11-05',
    questionsCount: 10,
    averageScore: 84,
    completedCount: 28,
    totalStudents: 32,
    struggledTopic: 'Fitnaning ijtimoiy sabablari va retrospektiv tahlil'
  },
  {
    id: 'asg-2',
    classId: '8-B',
    title: 'Cho‘lpon lirikasi va badiiy san’atlar',
    topic: 'Tashbeh, istiora va tazod san’atlari amaliyoti',
    grade: 8,
    dueDate: '2026-11-02',
    questionsCount: 8,
    averageScore: 78,
    completedCount: 24,
    totalStudents: 30,
    struggledTopic: 'Istiora va tashbeh o‘rtasidagi nozik farq'
  }
];

export const storageService = {
  getLanguage(): Language {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && ['uz-Latn', 'uz-Cyrl', 'ru', 'en'].includes(saved)) {
        return saved as Language;
      }
    } catch {}
    return 'uz-Latn';
  },

  setLanguage(lang: Language) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {}
  },

  getTheme(): 'light' | 'dark' {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch {}
    return 'light';
  },

  setTheme(theme: 'light' | 'dark') {
    try {
      localStorage.setItem(THEME_KEY, theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {}
  },

  getSelectedGrade(): GradeLevel | null {
    try {
      const saved = localStorage.getItem(GRADE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 5 && parsed <= 11) return parsed as GradeLevel;
      }
    } catch {}
    return null; // null means "Barcha sinflar" (All grades)
  },

  setSelectedGrade(grade: GradeLevel | null) {
    try {
      if (grade === null) {
        localStorage.removeItem(GRADE_KEY);
      } else {
        localStorage.setItem(GRADE_KEY, grade.toString());
      }
    } catch {}
  },

  getProgress(): UserProgress {
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialProgress;
  },

  saveProgress(progress: UserProgress) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {}
  },

  completeLesson(lessonId: string, quizScore: number) {
    const progress = this.getProgress();
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    }
    progress.completedQuizzes[lessonId] = Math.max(progress.completedQuizzes[lessonId] || 0, quizScore);
    progress.totalScore += Math.round(quizScore / 2);

    // Badge awards
    if (progress.completedLessons.length >= 1 && !progress.badges.includes('birinchi_dars')) {
      progress.badges.push('birinchi_dars');
    }
    if (progress.completedLessons.length >= 3 && !progress.badges.includes('uchta_dars')) {
      progress.badges.push('uchta_dars');
    }
    this.saveProgress(progress);
    return progress;
  },

  toggleFavoriteBook(bookId: string) {
    const progress = this.getProgress();
    if (progress.favoriteBooks.includes(bookId)) {
      progress.favoriteBooks = progress.favoriteBooks.filter(id => id !== bookId);
    } else {
      progress.favoriteBooks.push(bookId);
    }
    this.saveProgress(progress);
    return progress;
  },

  toggleReadBook(bookId: string) {
    const progress = this.getProgress();
    if (progress.readBooks.includes(bookId)) {
      progress.readBooks = progress.readBooks.filter(id => id !== bookId);
    } else {
      progress.readBooks.push(bookId);
      progress.totalScore += 50;
      if (progress.readBooks.length >= 1 && !progress.badges.includes('birinchi_kitob')) {
        progress.badges.push('birinchi_kitob');
      }
    }
    this.saveProgress(progress);
    return progress;
  },

  addDiaryEntry(entry: Omit<DiaryEntry, 'id'>) {
    const progress = this.getProgress();
    const newEntry: DiaryEntry = {
      ...entry,
      id: 'd-' + Date.now()
    };
    progress.diary.unshift(newEntry);
    progress.totalScore += 25;
    if (!progress.badges.includes('adabiy_kundalik')) {
      progress.badges.push('adabiy_kundalik');
    }
    this.saveProgress(progress);
    return progress;
  },

  recordGamePlayed(pointsEarned: number) {
    const progress = this.getProgress();
    progress.gamesPlayed += 1;
    progress.totalScore += pointsEarned;
    if (progress.gamesPlayed >= 5 && !progress.badges.includes('oyinlar_bilimdoni')) {
      progress.badges.push('oyinlar_bilimdoni');
    }
    this.saveProgress(progress);
    return progress;
  },

  getTeacherAssignments(): TeacherAssignment[] {
    try {
      const saved = localStorage.getItem(ASSIGNMENTS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialAssignments;
  },

  saveTeacherAssignment(assignment: Omit<TeacherAssignment, 'id' | 'completedCount' | 'totalStudents'>) {
    const assignments = this.getTeacherAssignments();
    const newAssignment: TeacherAssignment = {
      ...assignment,
      id: 'asg-' + Date.now(),
      completedCount: 0,
      totalStudents: 30
    };
    assignments.unshift(newAssignment);
    try {
      localStorage.setItem(ASSIGNMENTS_KEY, JSON.stringify(assignments));
    } catch {}
    return assignments;
  }
};
