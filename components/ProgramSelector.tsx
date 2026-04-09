
import React from 'react';
import { IB_PROGRAMS } from '../constants';
import { IBProgram } from '../types';

interface ProgramSelectorProps {
  selectedProgram: IBProgram | null;
  onSelectProgram: (program: IBProgram | null) => void;
}

export const ProgramSelector: React.FC<ProgramSelectorProps> = ({ selectedProgram, onSelectProgram }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {IB_PROGRAMS.map(program => {
        const isSelected = selectedProgram === program;
        return (
          <button
            key={program}
            onClick={() => onSelectProgram(isSelected ? null : program)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 border
              ${isSelected
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
          >
            {program.split(' (')[0]}
          </button>
        );
      })}
    </div>
  );
};
