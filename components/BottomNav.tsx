
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
}> = ({ view, activeView, setActiveView, iconClass, label }) => {
  const isActive = activeView === view;
  const activeClasses = 'text-blue-600 dark:text-blue-400';
  const inactiveClasses = 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400';
  
  return (
    <button
      onClick={() => setActiveView(view)}
      className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
    >
      <i className={`${iconClass} text-xl`}></i>
      <span className="text-xs mt-1">{label}</span>
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
        iconClass="fas fa-user-headset"
        label="문의"
      />
    </nav>
  );
};
