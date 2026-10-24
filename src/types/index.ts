/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en';

export type GradeLevel = 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type LiteraryBranch =
  | 'xalq_ogzaki_ijodi'
  | 'mumtoz_adabiyot'
  | 'jadid_adabiyoti'
  | 'xx_asr_adabiyoti'
  | 'mustaqillik_davri'
  | 'zamonaviy_adabiyot'
  | 'jahon_adabiyoti'
  | 'adabiyot_nazariyasi';

export interface CheckpointQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  grade: GradeLevel;
  branch: LiteraryBranch;
  title: string;
  subtitle: string;
  readTimeMinutes: number;
  learningObjective: string;
  intro: string;
  lectureContent: string[];
  keyTerms: { term: string; definition: string }[];
  literaryExcerpt?: {
    text: string;
    source: string;
    analysis: string;
  };
  checkpoints: CheckpointQuestion[];
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  verifiedSource: {
    name: string;
    url?: string;
    publishedYear: number;
    status: 'rasmiy' | 'tavsiya_etilgan';
  };
}

export interface Book {
  id: string;
  title: string;
  author: string;
  grade: GradeLevel;
  genre: 'doston' | 'qissa' | 'roman' | 'ertak' | 'drama' | 'sheʼriyat' | 'hikoyalar';
  period: string;
  description: string;
  excerpt: string;
  sourceUrl: string;
  officialSource: string;
  themes: string[];
  learningObjective: string;
}

export interface Author {
  id: string;
  name: string;
  years: string;
  period: string;
  movement: string;
  biography: string[];
  keyWorks: string[];
  contribution: string;
  famousQuote: string;
  timeline: { year: string; event: string }[];
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface TheoryItem {
  id: string;
  name: string;
  category: 'badiiy_sanʼat' | 'vazn' | 'janr' | 'kompozitsiya';
  definition: string;
  classicExample: {
    lines: string[];
    author: string;
    work: string;
    explanation: string;
  };
  commonMistake: string;
  practiceExercise: {
    task: string;
    options: string[];
    correctIndex: number;
    tip: string;
  };
}

export interface GameDetektivQuestion {
  id: string;
  excerpt: string;
  author: string;
  options: string[];
  correctIndex: number;
  deviceExplanation: string;
}

export interface MatchPairGame {
  id: string;
  hero: string;
  work: string;
  author: string;
  trait: string;
}

export interface SequenceGame {
  id: string;
  workTitle: string;
  author: string;
  events: { id: number; text: string; correctOrder: number }[];
}

export interface CrosswordClue {
  number: number;
  direction: 'across' | 'down';
  word: string;
  clue: string;
  row: number;
  col: number;
}

export interface LiteraryMapLocation {
  id: string;
  name: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  relatedAuthors: string[];
  historicalEra: string;
  visitingInfo: string;
  verifiedSource: string;
}

export interface SafeSourceItem {
  id: string;
  name: string;
  domain: string;
  category: 'tavsiya_etilgan' | 'tekshirish_kerak' | 'bloklangan';
  description: string;
  url: string;
  verifiedDate: string;
  agency: string;
}

export interface DiaryEntry {
  id: string;
  bookTitle: string;
  author: string;
  rating: number; // 1-5
  dateFinished: string;
  summaryThoughts: string;
  favoriteQuote: string;
  lessonLearned: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedQuizzes: Record<string, number>; // lessonId -> percentage score
  favoriteBooks: string[];
  readBooks: string[];
  gamesPlayed: number;
  totalScore: number;
  badges: string[];
  diary: DiaryEntry[];
  readingGoal: number; // target count
}

export interface TeacherAssignment {
  id: string;
  classId: string;
  title: string;
  topic: string;
  grade: GradeLevel;
  dueDate: string;
  questionsCount: number;
  averageScore?: number;
  completedCount: number;
  totalStudents: number;
  struggledTopic?: string;
}
