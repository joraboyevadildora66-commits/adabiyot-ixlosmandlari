/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GradeLevel, Language } from '../types';
import { translations } from '../locales/translations';

interface ClassSelectorProps {
  selectedGrade: GradeLevel | null;
  onSelectGrade: (grade: GradeLevel | null) => void;
  lang: Language;
}

export const ClassSelector: React.FC<ClassSelectorProps> = ({
  selectedGrade,
  onSelectGrade,
  lang,
}) => {
  const t = translations[lang];
  const grades: GradeLevel[] = [5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-xl overflow-x-auto max-w-full scrollbar-none border border-stone-200 dark:border-stone-700/60">
      <button
        onClick={() => onSelectGrade(null)}
        className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
          selectedGrade === null
            ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
        }`}
      >
        {t.allGrades}
      </button>

      {grades.map((grade) => {
        const isSelected = selectedGrade === grade;
        return (
          <button
            key={grade}
            onClick={() => onSelectGrade(grade)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              isSelected
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            {grade}{t.gradeSuffix}
          </button>
        );
      })}
    </div>
  );
};
