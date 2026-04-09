
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon?: string }> = ({ title, children, icon }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {icon && <i className={`fas ${icon} mr-3 text-blue-500`}></i>}
            {title}
        </h3>
        <div className="space-y-3 text-slate-700 dark:text-slate-300">
            {children}
        </div>
    </div>
);

export const ContactView: React.FC = () => {
    return (
        <div className="p-4">
            <header className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    <i className="fas fa-user-headset mr-2 text-blue-500"></i>문의하기
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">YBIB 연구실</p>
            </header>
            
            <InfoCard title="YBIB 연구실 연락처" icon="fa-user-headset">
                <p>IB 프로그램에 대해 더 궁금한 점이 있으시면 언제든지 문의해주세요.</p>
                <ul className="list-none !pl-0 mt-4 space-y-3">
                    <li className="flex items-center">
                        <i className="fas fa-phone w-5 mr-3 text-slate-500 dark:text-slate-400"></i>
                        <span><strong>전화:</strong> 063-630-9118</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-comment-dots w-5 mr-3 text-slate-500 dark:text-slate-400"></i>
                        <span><strong>카카오톡 오픈채팅방:</strong> <a href="https://open.kakao.com/o/sJpD9Vec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">바로가기</a></span>
                    </li>
                </ul>
            </InfoCard>
        </div>
    );
};
