
import React, { useState, useEffect, useRef } from 'react';
import { Platform } from '../types';

interface HeaderProps {
  platform: Platform;
  onPlatformChange: (platform: Platform) => void;
}

export const Header: React.FC<HeaderProps> = ({ platform, onPlatformChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handlePlatformSelect = (selectedPlatform: Platform) => {
        onPlatformChange(selectedPlatform);
        setIsDropdownOpen(false);
    };

    return (
        <header className="flex items-center justify-between p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 shadow-sm">
            {/* 좌측 정렬을 유지하기 위한 빈 공간 (설정 아이콘 제거됨) */}
            <div className="w-10 h-10"></div>

            <div className="flex items-center space-x-2">
                <span className="text-2xl animate-bounce-slow">🤖</span>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                    YBIB 톡톡
                </h1>
            </div>

            <div className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" aria-label="Change platform view">
                    <i className={`fas ${platform === Platform.Web ? 'fa-desktop' : 'fa-mobile-alt'} text-slate-600 dark:text-slate-300`}></i>
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 z-[60]">
                        <ul className="py-1">
                            <li>
                                <button onClick={() => handlePlatformSelect(Platform.Mobile)} className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
                                    <i className="fas fa-mobile-alt w-5 mr-2"></i> 모바일
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handlePlatformSelect(Platform.Web)} className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
                                    <i className="fas fa-desktop w-5 mr-2"></i> 웹
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </header>
    );
};
