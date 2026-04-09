
import React, { useState } from 'react';
import { ChatMessage, MessageRole } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
  isExpandedDefault?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isExpandedDefault = false }) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedDefault);
  const [isCopied, setIsCopied] = useState(false);
  
  const isUser = message.role === MessageRole.User;

  const handleCopy = () => {
    const textToCopy = message.summary
      ? `${message.summary}\n\n${message.content}`
      : message.content;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {});
  };

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const renderContent = (content: string) => {
    const safe = escapeHtml(content);
    const htmlContent = safe
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700 dark:text-blue-300">$1</strong>')
      .replace(/^# (.*$)/gm, '<h1 class="text-xl font-bold mt-4 mb-2">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-lg font-bold mt-3 mb-1">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-md font-bold mt-2 mb-1">$1</h3>')
      .replace(/\n\s*-\s/g, '<br>• ')
      .replace(/\n\s*\d\.\s/g, '<br> ')
      .replace(/\n/g, '<br>');

    return <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  if (isUser) {
    return (
      <div className="flex justify-end animate-in fade-in slide-in-from-right-2 duration-300">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-none p-3.5 px-5 max-w-[85%] shadow-md border border-blue-500/20">
          <p className="text-sm md:text-base leading-snug font-medium">{message.content}</p>
        </div>
      </div>
    );
  }

  // AI Message
  return (
    <div className="flex justify-start items-start space-x-2 animate-in fade-in slide-in-from-left-2 duration-300">
      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 flex items-center justify-center text-xs shadow-inner">🤖</div>
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-none p-4 max-w-[90%] shadow-sm w-full group relative">
        <div className="flex justify-between items-center mb-1.5">
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">핵심 요약</p>
            <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                    onClick={handleCopy} 
                    className="p-1.5 text-slate-400 hover:text-blue-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                    title="Copy response"
                 >
                    <i className={`fas ${isCopied ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
                </button>
            </div>
        </div>
        <p className="text-slate-800 dark:text-slate-100 font-medium leading-relaxed mb-1">{message.summary}</p>
        
        {isExpanded ? (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 animate-in fade-in duration-500">
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">상세 설명</p>
            <div className="whitespace-pre-wrap">
              {renderContent(message.content)}
            </div>
            
            <button 
                onClick={() => setIsExpanded(false)} 
                className="text-xs text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mt-4 block mx-auto underline underline-offset-4 decoration-slate-300 dark:decoration-slate-600"
            >
                간략히 보기
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsExpanded(true)} 
            className="w-full mt-3 py-2 bg-slate-50 dark:bg-slate-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <span>상세 설명 보기</span>
            <i className="fas fa-chevron-down text-[10px]"></i>
          </button>
        )}
      </div>
    </div>
  );
};
