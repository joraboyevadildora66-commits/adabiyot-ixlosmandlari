/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Navigation, BookOpen, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Language, LiteraryMapLocation } from '../types';
import { translations } from '../locales/translations';
import { literaryMapLocations } from '../data/mapData';

interface LiteraryMapPageProps {
  lang: Language;
  onNavigateToAuthor?: (authorId: string) => void;
}

export const LiteraryMapPage: React.FC<LiteraryMapPageProps> = ({
  lang,
  onNavigateToAuthor,
}) => {
  const t = translations[lang];
  const [selectedLocation, setSelectedLocation] = useState<LiteraryMapLocation>(
    literaryMapLocations[0]
  );
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = ['all', 'Toshkent', 'Samarqand viloyati', 'Andijon viloyati', 'Buxoro viloyati', 'Xorazm viloyati', 'Farg‘ona viloyati'];

  const filteredLocations = literaryMapLocations.filter((loc) => {
    if (selectedRegion === 'all') return true;
    return loc.region === selectedRegion;
  });

  return (
    <div className="space-y-8 py-6 sm:py-10">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 font-serif-literary tracking-tight">
          {t.navMap} — O‘zbekiston adabiy meros manzillari
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
          Buyuk allomalar, shoir va yozuvchilar hayoti bilan bog‘liq tarixiy shaharlar, adabiy muzeylar va meʼmoriy obidalar
        </p>

        {/* Region Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-4 pb-1">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedRegion === reg
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              {reg === 'all' ? 'Barcha hududlar' : reg}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Location Cards List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredLocations.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;

            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 dark:border-amber-700 shadow-sm'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-600' : 'text-stone-400'}`} />
                    <h3 className={`text-sm font-bold font-serif-literary ${
                      isSelected ? 'text-amber-900 dark:text-amber-100' : 'text-stone-900 dark:text-stone-100'
                    }`}>
                      {loc.name}
                    </h3>
                  </div>
                  <span className="text-[11px] text-stone-400 whitespace-nowrap">{loc.city}</span>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-2 leading-relaxed pl-6">
                  {loc.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-400 pl-6 mt-3">
                  {loc.relatedAuthors.slice(0, 3).map((author, aIdx) => (
                    <React.Fragment key={aIdx}>
                      <span className="font-medium text-stone-700 dark:text-stone-300">{author}</span>
                      {aIdx < Math.min(loc.relatedAuthors.length, 3) - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Interactive Selected Location Viewport */}
        <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6 shadow-sm">
          
          {/* Visual stylized map pin viewport */}
          <div className="relative rounded-2xl bg-gradient-to-br from-amber-100/70 via-stone-100 to-amber-200/50 dark:from-stone-950 dark:via-stone-900 dark:to-amber-950/40 p-8 border border-stone-200 dark:border-stone-800 text-center space-y-3 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg mb-2">
                <Navigation className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-widest">
                {selectedLocation.region}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-literary text-stone-900 dark:text-stone-100 mt-1">
                {selectedLocation.name}
              </h2>
              <div className="text-xs font-mono text-stone-600 dark:text-stone-400 mt-1">
                Koordinatalar: {selectedLocation.lat}° N, {selectedLocation.lng}° E
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Tarixiy va adabiy ahamiyati
              </h3>
              <p className="text-sm leading-relaxed text-stone-800 dark:text-stone-200">
                {selectedLocation.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 space-y-1">
                <span className="text-[11px] font-bold uppercase text-stone-500 tracking-wider">
                  Tarixiy davri
                </span>
                <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                  {selectedLocation.historicalEra}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 space-y-1">
                <span className="text-[11px] font-bold uppercase text-stone-500 tracking-wider">
                  Tashrif maʼlumoti
                </span>
                <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                  {selectedLocation.visitingInfo}
                </p>
              </div>
            </div>

            {/* Related Authors */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Bu manzil bilan bog‘liq adiblar
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLocation.relatedAuthors.map((author, aIdx) => (
                  <span
                    key={aIdx}
                    className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-xs font-semibold text-amber-900 dark:text-amber-200"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Source */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Tasdiqlangan manba: {selectedLocation.verifiedSource}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
