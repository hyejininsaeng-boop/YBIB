
import React from 'react';

// The global window.aistudio is already defined as AIStudio in the environment.
// Redeclaring it here causes a conflict with the existing definition.

export const SettingsView: React.FC = () => {
  const handleOpenKeySelector = async () => {
    try {
      // @ts-ignore - aistudio is globally available but might not be in local TS context
      await window.aistudio.openSelectKey();
    } catch (error) {
      console.error("Failed to open key selector", error);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <header className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          <i className="fas fa-cog mr-2 text-blue-500"></i>시스템 설정
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">API 키 및 앱 설정</p>
      </header>

      <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
          <i className="fas fa-key mr-2 text-yellow-500"></i>Gemini API 키 설정
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          YBIB 톡톡은 Google의 최신 AI 모델인 Gemini를 사용하여 답변을 생성합니다. 
          서비스 이용을 위해 유료 프로젝트의 API 키 선택이 필요할 수 있습니다.
        </p>
        
        <button
          onClick={handleOpenKeySelector}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg active:scale-95 transform"
        >
          <i className="fas fa-external-link-alt"></i>
          <span>API 키 선택/변경하기</span>
        </button>

        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center text-sm">
            <i className="fas fa-info-circle mr-2 text-blue-400"></i>발급 및 설정 가이드
          </h4>
          <ol className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-decimal pl-4">
            <li>
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">
                Google AI Studio
              </a>에 접속하여 API 키를 생성합니다.
            </li>
            <li>
              반드시 <strong>유료 결제(Billing)가 설정된 GCP 프로젝트</strong>와 연결된 키여야 원활한 사용이 가능합니다.
            </li>
            <li>위의 [API 키 선택/변경하기] 버튼을 눌러 발급받은 키가 속한 프로젝트를 선택하세요.</li>
            <li>상세한 과금 정책은 <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">공식 문서</a>를 참고하세요.</li>
          </ol>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700 text-center">
        <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">버전 정보</h3>
        <p className="text-xs text-slate-400">v1.2.0 (Gemini 3 Flash Preview)</p>
        <p className="text-[10px] text-slate-400 mt-1">© 2025 Yongbuk Middle School. All Rights Reserved.</p>
      </section>
    </div>
  );
};
