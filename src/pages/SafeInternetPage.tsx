/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, XCircle, ExternalLink, Info, CheckCircle2, Lock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../locales/translations';
import { safeSourcesData, safetyRules } from '../data/sourcesData';

interface SafeInternetPageProps {
  lang: Language;
}

export const SafeInternetPage: React.FC<SafeInternetPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [linkWarningModal, setLinkWarningModal] = useState<string | null>(null);

  const filteredSources = safeSourcesData.filter((src) => {
    if (selectedCategory === 'all') return true;
    return src.category === selectedCategory;
  });

  const handleExternalClick = (url: string) => {
    if (url === '#' || url.includes('example')) {
      alert('Bu shubhali yoki bloklangan havola maktab xavfsizlik filtri tomonidan cheklangan!');
      return;
    }
    setLinkWarningModal(url);
  };

  return (
    <div className="space-y-10 py-6 sm:py-10 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Axborot xavfsizligi va madaniyati</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
          {t.safeInternetTitle}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl">
          Internet — cheksiz bilim ummoni, ammo unda haqiqiy ilmiy manba bilan shubhali yoki soxta axborotni ajrata bilish har bir kitobxon uchun zaruriy ko‘nikmadir.
        </p>
      </div>

      {/* Safety Rules for Students */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {safetyRules.map((rule, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                {rule.title}
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pl-8">
              {rule.description}
            </p>
          </div>
        ))}
      </div>

      {/* Directory of Sources by Category */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif-literary">
              {t.verifiedPortals}
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Manbalarning ishonchliligi va mualliflik holati
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 font-semibold rounded-lg transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setSelectedCategory('tavsiya_etilgan')}
              className={`px-3 py-1.5 font-semibold rounded-lg transition-colors ${
                selectedCategory === 'tavsiya_etilgan'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Tavsiya etilgan
            </button>
            <button
              onClick={() => setSelectedCategory('tekshirish_kerak')}
              className={`px-3 py-1.5 font-semibold rounded-lg transition-colors ${
                selectedCategory === 'tekshirish_kerak'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Tekshirish kerak
            </button>
            <button
              onClick={() => setSelectedCategory('bloklangan')}
              className={`px-3 py-1.5 font-semibold rounded-lg transition-colors ${
                selectedCategory === 'bloklangan'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Cheklangan
            </button>
          </div>
        </div>

        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {filteredSources.map((item) => {
            const isApproved = item.category === 'tavsiya_etilgan';
            const isCaution = item.category === 'tekshirish_kerak';
            const isBlocked = item.category === 'bloklangan';

            return (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {isApproved && <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />}
                    {isCaution && <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />}
                    {isBlocked && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}

                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      {item.name}
                    </h4>
                    <span className="text-xs text-stone-400 font-mono">({item.domain})</span>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isApproved
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
                        : isCaution
                        ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
                        : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400'
                    }`}>
                      {isApproved ? 'Rasmiy manba' : isCaution ? 'Tekshirish shart' : 'Bloklangan'}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pl-6">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-stone-400 pl-6">
                    Masʼul idora: {item.agency} · Tekshirilgan sana: {item.verifiedDate}
                  </p>
                </div>

                <div className="sm:shrink-0 pl-6 sm:pl-0">
                  {isApproved ? (
                    <button
                      onClick={() => handleExternalClick(item.url)}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Portalga o‘tish</span>
                      <ExternalLink className="w-3 h-3 text-stone-500" />
                    </button>
                  ) : (
                    <span className="text-xs text-stone-400 italic">Cheklangan</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Disclaimer on Internet Filtering */}
      <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex items-start gap-3.5 text-xs text-stone-600 dark:text-stone-400">
        <Info className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-stone-800 dark:text-stone-200 block font-semibold">
            Muhim texnik eslatma:
          </strong>
          <p className="leading-relaxed">
            Veb-saytning o‘zi o‘quvchining shaxsiy qurilmasidagi butun internet tarmog‘ini avtomatik bloklay olmaydi. Maktab miqyosida xavfsizlikni taʼminlash uchun maktab Wi-Fi tarmog‘i yoki ota-ona nazorati tizimi orqali domenni filtrlash choralari qo‘llanilishi lozim. Ushbu sahifa o‘quvchilarga ishonchli taʼlim manbalarini ko‘rsatish va tanqidiy tafakkurni rivojlantirishga xizmat qiladi.
          </p>
        </div>
      </div>

      {/* External Link Warning Modal */}
      {linkWarningModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-amber-600">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Tashqi ta’lim manbasiga o‘tish
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Siz rasmiy davlat taʼlim portaliga (<span className="font-mono text-amber-700 dark:text-amber-400 font-semibold">{linkWarningModal}</span>) yo‘naltirilmoqdasiz. O‘tishni davom ettirasizmi?
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setLinkWarningModal(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                Qaytish
              </button>
              <a
                href={linkWarningModal}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setLinkWarningModal(null)}
                className="px-4 py-2 text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 rounded-lg transition-colors"
              >
                Ha, o‘tish
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
