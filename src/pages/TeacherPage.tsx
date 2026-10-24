/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Presentation, PlusCircle, Printer, Users, CheckCircle2, AlertCircle, BarChart3, Calendar, BookOpen, Clock, ChevronRight, X } from 'lucide-react';
import { GradeLevel, Language, TeacherAssignment } from '../types';
import { translations } from '../locales/translations';
import { storageService } from '../services/storageService';
import { lessonsData } from '../data/lessonsData';

interface TeacherPageProps {
  lang: Language;
}

export const TeacherPage: React.FC<TeacherPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [assignments, setAssignments] = useState<TeacherAssignment[]>(() =>
    storageService.getTeacherAssignments()
  );

  const [activeTab, setActiveTab] = useState<'overview' | 'presentation' | 'new_test' | 'worksheet'>('overview');

  // Presentation Mode Slide State
  const [presentationLessonId, setPresentationLessonId] = useState<string>(lessonsData[0].id);
  const [presentationSlide, setPresentationSlide] = useState<number>(0);

  // New Test Form State
  const [newTitle, setNewTitle] = useState('');
  const [newClassId, setNewClassId] = useState('9-A');
  const [newTopic, setNewTopic] = useState('');
  const [newGrade, setNewGrade] = useState<GradeLevel>(9);
  const [newDueDate, setNewDueDate] = useState('2026-11-15');
  const [newQuestionsCount, setNewQuestionsCount] = useState(5);
  const [createSuccess, setCreateSuccess] = useState(false);

  // Active lesson for presentation
  const currentPresentationLesson = lessonsData.find((l) => l.id === presentationLessonId) || lessonsData[0];

  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newTopic.trim()) return;

    const updated = storageService.saveTeacherAssignment({
      classId: newClassId,
      title: newTitle,
      topic: newTopic,
      grade: newGrade,
      dueDate: newDueDate,
      questionsCount: newQuestionsCount,
      averageScore: undefined,
    });
    setAssignments(updated);
    setCreateSuccess(true);
    setTimeout(() => {
      setCreateSuccess(false);
      setActiveTab('overview');
      setNewTitle('');
      setNewTopic('');
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
            <Users className="w-4 h-4" />
            <span>Pedagogik boshqaruv</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
            {t.teacherPanel} — Interaktiv sinf xonasi
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            Dars taqdimotlari, test topshiriqlari va o‘quvchilar bilimi diagnostikasi
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            Sinf natijalari
          </button>
          <button
            onClick={() => setActiveTab('presentation')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'presentation'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Smartboard taqdimot</span>
          </button>
          <button
            onClick={() => setActiveTab('worksheet')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'worksheet'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Chop etish</span>
          </button>
        </div>
      </div>

      {/* TAB 1: OVERVIEW & DIAGNOSTICS */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Birlashtirilgan sinflar</span>
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-mono">4 ta sinf</div>
              <p className="text-[11px] text-stone-400">9-A, 8-B, 6-A, 11-V (Jami 118 o‘quvchi)</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">O‘rtacha o‘zlashtirish ko‘rsatkichi</span>
              <div className="text-2xl font-bold text-emerald-600 font-mono">81.4%</div>
              <p className="text-[11px] text-emerald-600">Davlat ta’lim standarti mezonlariga mos</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Faol topshiriqlar</span>
              <div className="text-2xl font-bold text-amber-600 font-mono">{assignments.length} ta vazifa</div>
              <p className="text-[11px] text-amber-600">Topshirish muddati ochiq</p>
            </div>
          </div>

          {/* Diagnostic Focus: Weak spots / Struggled topics */}
          <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>O‘quvchilar eng ko‘p qiynalayotgan mavzular diagnostikasi</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-stone-900/80 border border-amber-200/50 dark:border-amber-800/40 space-y-1">
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  8-sinf: “Istiora va Tashbeh farqi”
                </span>
                <p className="text-stone-600 dark:text-stone-400">
                  O‘quvchilarning 42 foizi o‘xshatish vositalarisiz berilgan yashirin qiyoslarni tashbeh deb belgilashgan.
                </p>
                <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 block pt-1">
                  Tavsiya: Nazariya bo‘limidagi “Istiora” mashg‘ulotini smartboardda ko‘rsatish.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-stone-900/80 border border-amber-200/50 dark:border-amber-800/40 space-y-1">
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  9-sinf: “O‘tkan kunlar: Fitna va xat ziddiyati”
                </span>
                <p className="text-stone-600 dark:text-stone-400">
                  Retrospektiv tahlilda Homidning fitnasi keltirib chiqargan ijtimoiy sabablarni asoslashda qiyinchilik.
                </p>
                <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 block pt-1">
                  Tavsiya: 9-sinf darsidagi munozara va “Voqealar ketma-ketligi” o‘yinini guruhda ishlash.
                </span>
              </div>
            </div>
          </div>

          {/* Active Assignments Table */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
                  Sinflarga biriktirilgan topshiriqlar
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Har bir sinfning bajarilish foizi va o‘rtacha balli
                </p>
              </div>
              <button
                onClick={() => setActiveTab('new_test')}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Yangi vazifa berish</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-stone-800 text-stone-400 uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-3">Sinf</th>
                    <th className="py-3 px-3">Topshiriq nomi</th>
                    <th className="py-3 px-3">Savollar</th>
                    <th className="py-3 px-3">Muddati</th>
                    <th className="py-3 px-3">Bajarildi</th>
                    <th className="py-3 px-3">O‘rtacha ball</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800/60">
                  {assignments.map((asg) => (
                    <tr key={asg.id} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/40">
                      <td className="py-3.5 px-3 font-bold text-amber-700 dark:text-amber-400">{asg.classId}</td>
                      <td className="py-3.5 px-3 font-semibold text-stone-900 dark:text-stone-100">{asg.title}</td>
                      <td className="py-3.5 px-3 text-stone-600 dark:text-stone-300 font-mono">{asg.questionsCount} ta</td>
                      <td className="py-3.5 px-3 text-stone-500 font-mono">{asg.dueDate}</td>
                      <td className="py-3.5 px-3 text-stone-700 dark:text-stone-300 font-mono">
                        {asg.completedCount} / {asg.totalStudents} ({Math.round((asg.completedCount / asg.totalStudents) * 100)}%)
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="font-bold text-emerald-600 font-mono">
                          {asg.averageScore ? `${asg.averageScore}%` : 'Baholanmoqda'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: SMARTBOARD CLASSROOM PRESENTATION MODE */}
      {activeTab === 'presentation' && (
        <div className="bg-stone-950 text-white rounded-3xl p-6 sm:p-12 space-y-8 shadow-2xl border border-stone-800 animate-in fade-in">
          
          {/* Top Bar for Presentation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <Presentation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight font-serif-literary">
                  Sinf xonasi proyektori / Smartboard rejimi
                </h3>
                <p className="text-xs text-stone-400">
                  Katta shriftlar, jamoaviy bahs va interaktiv nazorat savollari
                </p>
              </div>
            </div>

            {/* Select Lesson for Presentation */}
            <select
              value={presentationLessonId}
              onChange={(e) => {
                setPresentationLessonId(e.target.value);
                setPresentationSlide(0);
              }}
              className="bg-stone-900 border border-stone-700 text-xs text-stone-200 rounded-xl px-3 py-2 focus:outline-none"
            >
              {lessonsData.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.grade}-sinf: {l.title}
                </option>
              ))}
            </select>
          </div>

          {/* Large Slide Projection */}
          <div className="min-h-[380px] flex flex-col justify-between space-y-6 py-4">
            
            {presentationSlide === 0 && (
              <div className="space-y-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  1-Slayd: Mavzu va Maqsad
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-serif-literary leading-tight text-balance">
                  {currentPresentationLesson.title}
                </h2>
                <p className="text-lg text-amber-200/90 font-medium">
                  {currentPresentationLesson.subtitle}
                </p>
                <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 text-stone-300 text-base leading-relaxed">
                  <strong className="text-white block mb-1">Darsning bosh maqsadi:</strong>
                  {currentPresentationLesson.learningObjective}
                </div>
              </div>
            )}

            {presentationSlide === 1 && (
              <div className="space-y-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  2-Slayd: Asosiy tushunchalar va matn tahlili
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPresentationLesson.keyTerms.map((t, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                      <span className="text-sm font-bold text-amber-400">{t.term}</span>
                      <p className="text-sm text-stone-300 leading-relaxed">{t.definition}</p>
                    </div>
                  ))}
                </div>
                {currentPresentationLesson.literaryExcerpt && (
                  <blockquote className="p-5 rounded-2xl bg-amber-950/30 border border-amber-900/40 text-lg font-serif-literary italic text-amber-100">
                    “{currentPresentationLesson.literaryExcerpt.text}”
                  </blockquote>
                )}
              </div>
            )}

            {presentationSlide === 2 && (
              <div className="space-y-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  3-Slayd: Sinf bilan tezkor savol-javob
                </span>
                {currentPresentationLesson.checkpoints[0] ? (
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-literary">
                      {currentPresentationLesson.checkpoints[0].question}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentPresentationLesson.checkpoints[0].options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className="p-5 rounded-2xl bg-stone-900 border border-stone-800 text-stone-200 text-base font-medium"
                        >
                          <span className="text-amber-400 font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-stone-400">Bu dars uchun savollar keyingi sahifada.</p>
                )}
              </div>
            )}

            {/* Slide Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-stone-800">
              <span className="text-xs text-stone-500 font-mono">
                Slayd {presentationSlide + 1} / 3
              </span>
              <div className="flex items-center gap-3">
                <button
                  disabled={presentationSlide === 0}
                  onClick={() => setPresentationSlide((s) => s - 1)}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-30 text-xs font-semibold transition-colors"
                >
                  Oldingi slayd
                </button>
                <button
                  disabled={presentationSlide === 2}
                  onClick={() => setPresentationSlide((s) => s + 1)}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
                >
                  Keyingi slayd
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 3: CREATE NEW TEST MODAL/FORM */}
      {activeTab === 'new_test' && (
        <div className="max-w-2xl mx-auto bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in">
          <div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              {t.createTest} va sinfga topshiriq biriktirish
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              O‘quvchilar mustaqil bajarishi uchun mavzu va savollar sonini belgilang
            </p>
          </div>

          <form onSubmit={handleCreateAssignment} className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Topshiriq nomi
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Masalan: Alisher Navoiy “Hayrat ul-abror” tahlili"
                className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Sinf
                </label>
                <select
                  value={newClassId}
                  onChange={(e) => setNewClassId(e.target.value)}
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
                >
                  <option value="5-A">5-A sinf</option>
                  <option value="6-B">6-B sinf</option>
                  <option value="7-A">7-A sinf</option>
                  <option value="8-B">8-B sinf</option>
                  <option value="9-A">9-A sinf</option>
                  <option value="10-A">10-A sinf</option>
                  <option value="11-V">11-V sinf</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Topshirish oxirgi muddati
                </label>
                <input
                  type="date"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                  className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Mavzu yo‘nalishi va maqsadi
              </label>
              <textarea
                required
                rows={3}
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                placeholder="Didaktik doston, baytlar tahlili va axloqiy xulosalar..."
                className="w-full px-3.5 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className="px-4 py-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors"
              >
                Vazifani biriktirish
              </button>
            </div>

            {createSuccess && (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-center font-semibold">
                Topshiriq muvaffaqiyatli sinfga biriktirildi!
              </div>
            )}
          </form>
        </div>
      )}

      {/* TAB 4: PRINTABLE WORKSHEET VIEW */}
      {activeTab === 'worksheet' && (
        <div className="bg-white text-black p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6 max-w-3xl mx-auto animate-in fade-in">
          <div className="flex items-center justify-between border-b pb-4 no-print">
            <span className="text-xs text-stone-500">Chop etishga tayyor tarqatma material</span>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Chop etish (Print)</span>
            </button>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold font-serif-literary">
              ADABIYOT FANIDAN NAZORAT ISHI VA MASHG‘ULOT
            </h2>
            <p className="text-xs text-stone-600">
              O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi dasturi asosida
            </p>
          </div>

          <div className="flex items-center justify-between text-xs border-y py-2 text-stone-800">
            <span>O‘quvchining F.I.Sh: ___________________________</span>
            <span>Sinf: ______</span>
            <span>Sana: ____________</span>
          </div>

          <div className="space-y-4 text-xs">
            <h3 className="font-bold uppercase tracking-wider text-stone-700">
              1-topshiriq: Badiiy sanʼatni aniqlang va izohlang
            </h3>
            <p className="italic font-serif-literary p-3 bg-stone-50 border rounded-lg">
              “Oydek yuzingni ko‘rgach, lol bo‘ldi aqlimiz, Zulfing misoli zanjir, band ayladi ko‘ngilni.”
            </p>
            <div className="space-y-2 text-stone-700">
              <p>A) Qaysi badiiy sanʼat qo‘llangan? ____________________________</p>
              <p>B) O‘xshatish asosi va vositasi nima? ___________________________</p>
            </div>

            <h3 className="font-bold uppercase tracking-wider text-stone-700 pt-4">
              2-topshiriq: Tarixiy adabiy faktlar
            </h3>
            <div className="space-y-2">
              <p>1. O‘zbek milliy romanchiligining birinchi asari qaysi va uning muallifi kim?</p>
              <p className="h-6 border-b border-dotted"></p>
              <p>2. Alisher Navoiy “Xamsa”siga kiruvchi 5 ta doston nomini yozing:</p>
              <p className="h-6 border-b border-dotted"></p>
            </div>

            <h3 className="font-bold uppercase tracking-wider text-stone-700 pt-4">
              3-topshiriq: Ijodiy fikr
            </h3>
            <p>Otabekning Marg‘ilondagi nutqi orqali Qodiriy qanday bosh milliy dardi ko‘rsatgan?</p>
            <p className="h-16 border rounded p-2 text-stone-400">O‘quvchi javobi uchun joy...</p>
          </div>

          <div className="pt-6 border-t text-center text-[10px] text-stone-500">
            Adabiyot ixlosmandlari ta’limiy platformasi orqali shakllantirildi · eduportal.uz
          </div>
        </div>
      )}

    </div>
  );
};
