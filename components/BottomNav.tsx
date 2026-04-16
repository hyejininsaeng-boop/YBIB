
import React from 'react';
import { AppView, Platform } from '../types';

interface BottomNavProps {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  platform: Platform;
}

const NavItem: React.FC<{
  view: AppView;
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  iconClass: string;
  label: string;
  highlighted?: boolean;
}> = ({ view, activeView, setActiveView, iconClass, label, highlighted }) => {
  const isActive = activeView === view;
  const activeClasses = 'text-blue-600 dark:text-blue-400';
  const inactiveClasses = highlighted
    ? 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400'
    : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400';

  return (
    <button
      onClick={() => setActiveView(view)}
      className={`relative flex flex-col items-center justify-center w-full transition-colors duration-200
        ${highlighted ? 'bg-blue-50 dark:bg-blue-900/30 border-t-2 border-blue-500' : ''}
        ${isActive ? activeClasses : inactiveClasses}`}
    >
      {highlighted && !isActive && (
        <span className="absolute top-1 right-[calc(50%-14px)] w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      )}
      <i className={`${iconClass} text-xl`}></i>
      <span className={`mt-1 leading-tight text-center whitespace-pre-line ${highlighted ? 'text-[9px]' : 'text-xs'}`}>{label}</span>
    </button>
  );
};

export const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView, platform }) => {
  return (
    <nav className={`fixed bottom-0 left-0 right-0 ${platform === Platform.Web ? 'max-w-5xl' : 'max-w-2xl'} mx-auto h-16 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex justify-around items-center shadow-top transition-all duration-300 ease-in-out`}>
      <NavItem
        view={AppView.Yongbuk}
        activeView={activeView}
        setActiveView={setActiveView}
        iconClass="fas fa-school"
        label="용북중"
      />
      <NavItem
        view={AppView.Letter}
        activeView={activeView}
        setActiveView={setActiveView}
        iconClass="fas fa-newspaper"
        label="YBIB 레터"
      />
      <NavItem
        view={AppView.FAQ}
        activeView={activeView}
        setActiveView={setActiveView}
        iconClass="fas fa-question-circle"
        label="FAQ"
      />
      <NavItem
        view={AppView.Chat}
        activeView={activeView}
        setActiveView={setActiveView}
        iconClass="fas fa-comments"
        label="채팅"
      />
      <NavItem
        view={AppView.Contact}
        activeView={activeView}
        setActiveView={setActiveView}
        iconClass="fas fa-house-chimney-user"
        label={"학부모\n소통방"}
        highlighted={true}
      />
    </nav>
  );
};
