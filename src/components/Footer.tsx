/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../locales/translations';

interface FooterProps {
  lang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {t.appName}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              O‘zbekiston maktab o‘quvchilari va o‘qituvchilari uchun adabiyot fani bo‘yicha interaktiv ta’lim platformasi. 5–11-sinf o‘quv dasturlari asosida yaratilgan.
            </p>
            <p className="text-xs text-amber-400/90 italic font-serif-literary">
              “{t.appSlogan}”
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3">
              Asosiy bo‘limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('lessons')} className="text-stone-400 hover:text-white transition-colors">
                  {t.navLessons} (5–11-sinflar)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('library')} className="text-stone-400 hover:text-white transition-colors">
                  {t.navLibrary} va elektron asarlar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('authors')} className="text-stone-400 hover:text-white transition-colors">
                  {t.navAuthors} ensiklopediyasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('theory')} className="text-stone-400 hover:text-white transition-colors">
                  {t.navTheory} va badiiy san’atlar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('games')} className="text-stone-400 hover:text-white transition-colors">
                  {t.navGames}
                </button>
              </li>
            </ul>
          </div>

          {/* Teacher & Classrooms */}
          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3">
              Pedagogik vositalar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('teacher')} className="text-stone-400 hover:text-white transition-colors">
                  {t.teacherPanel}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('map')} className="text-stone-400 hover:text-white transition-colors">
                  {t.navMap}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('safety')} className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {t.navSafeInternet}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profile')} className="text-stone-400 hover:text-white transition-colors">
                  {t.readingDiary} va nishonlar
                </button>
              </li>
            </ul>
          </div>

          {/* Official Education Portals */}
          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3">
              Rasmiy ta’lim manbalari
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a
                  href="https://eduportal.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors group"
                >
                  <span>Eduportal.uz (Elektron darsliklar)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://ziyonet.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors group"
                >
                  <span>ZiyoNET axborot-ta’lim tarmog‘i</span>
                  <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://lex.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors group"
                >
                  <span>Lex.uz davlat qonunchilik bazasi</span>
                  <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://natlib.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors group"
                >
                  <span>Alisher Navoiy nomidagi Milliy kutubxona</span>
                  <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Adabiyot ixlosmandlari. O‘zbekiston maktab ta’limi standartlariga muvofiq ishlab chiqilgan.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Eduportal.uz rasmiy manbalari bilan tekshirilgan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
