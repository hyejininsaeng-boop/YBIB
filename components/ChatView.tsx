
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, MessageRole } from '../types';
import { getChatbotResponse } from '../services/hfService';
import { MessageBubble } from './MessageBubble';

interface ChatViewProps {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

export const ChatView: React.FC<ChatViewProps> = ({ chatHistory, setChatHistory }) => {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [chatHistory, isLoading]);
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
        setAttachedFile(event.target.files[0]);
    }
    if(event.target) {
      event.target.value = '';
    }
  };

  const processMessage = async (content: string, file?: File | null) => {
    if (isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: MessageRole.User,
      content: content,
      timestamp: new Date().toISOString(),
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setIsLoading(true);

    let fileData: { mimeType: string; data: string; } | undefined = undefined;
    if (file) {
        try {
            const base64String = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve((reader.result as string).split(',')[1]);
                reader.onerror = error => reject(error);
            });
            fileData = {
                mimeType: file.type,
                data: base64String,
            };
        } catch (e) {
            console.error("File reading error", e);
        }
    }

    const geminiHistory = chatHistory
        .slice(-10)
        .filter(msg => msg.role !== MessageRole.System)
        .map(msg => ({
            role: msg.role === MessageRole.AI ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

    try {
        const aiResponseData = await getChatbotResponse(content, null, geminiHistory, fileData);
        
        const aiMessage: ChatMessage = {
          id: `ai-${Date.now()}`,
          role: MessageRole.AI,
          summary: aiResponseData.summary,
          content: aiResponseData.details,
          timestamp: new Date().toISOString(),
        };

        setChatHistory(prev => [...prev, aiMessage]);
    } catch (error: any) {
        const errorMessage: ChatMessage = {
            id: `ai-err-${Date.now()}`,
            role: MessageRole.AI,
            summary: "❌ 오류가 발생했습니다.",
            content: "일시적인 네트워크 문제이거나 모델 호출 제한에 도달했을 수 있습니다. 잠시 후 다시 시도해 주세요.",
            timestamp: new Date().toISOString(),
        };
        setChatHistory(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    const isInputEmpty = userInput.trim() === '';
    if ((isInputEmpty && !attachedFile) || isLoading) return;

    const content = isInputEmpty && attachedFile 
        ? `첨부된 파일('${attachedFile.name}')의 내용을 요약하고 설명해주세요.`
        : userInput;

    const currentFile = attachedFile;
    setUserInput('');
    setAttachedFile(null);
    
    await processMessage(content, currentFile);
  };

  const handleQuickQuery = (query: string) => {
    setUserInput('');
    setAttachedFile(null);
    processMessage(query, null);
  };

  return (
    <div className="flex flex-col h-full">
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-4 p-2 scroll-smooth">
        {chatHistory.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 animate-in fade-in duration-1000">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
                    🤖
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">YBIB 톡톡 가이드</h2>
                <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xs">
                    용북중학교 IB 프로그램에 대해 궁금한 점을 무엇이든 물어보세요! <br/>
                    <span className="text-xs mt-2 block opacity-70">(예: MYP 평가 기준이 뭐야?)</span>
                </p>
                <div className="mt-8 grid grid-cols-1 gap-2 w-full max-w-xs">
                    <button onClick={() => handleQuickQuery("IB MYP가 뭐야?")} className="p-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300 transition-all text-left flex items-center group">
                        <i className="fas fa-lightbulb mr-3 text-yellow-500 group-hover:scale-125 transition-transform"></i> IB MYP가 뭐야?
                    </button>
                    <button onClick={() => handleQuickQuery("평가 기준 A, B, C, D가 뭐야?")} className="p-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300 transition-all text-left flex items-center group">
                        <i className="fas fa-tasks mr-3 text-green-500 group-hover:scale-125 transition-transform"></i> 평가 기준 A~D가 뭐야?
                    </button>
                </div>
            </div>
        )}
        {chatHistory.map((msg) => (
          <MessageBubble 
            key={msg.id} 
            message={msg}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start items-end space-x-2 animate-pulse">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs">🤖</div>
            <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none p-4 max-w-sm shadow-sm">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
        {attachedFile && (
            <div className="mb-3 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-2 px-3 rounded-xl text-xs border border-blue-100 dark:border-blue-800">
                <span className="text-blue-700 dark:text-blue-300 truncate flex items-center">
                    <i className="fas fa-file-pdf mr-2 text-red-500"></i>
                    {attachedFile.name}
                </span>
                <button onClick={() => setAttachedFile(null)} className="text-slate-400 hover:text-red-500 p-1" aria-label="Remove file">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        )}
        <div className="flex items-center space-x-2">
            <div className="relative flex-1 group">
                 <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                    placeholder={isLoading ? "답변을 생성 중입니다..." : "질문을 입력하세요..."}
                    className="w-full p-3.5 pl-11 pr-4 border rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors p-1"
                    aria-label="Attach file"
                    disabled={isLoading}
                   >
                    <i className="fas fa-paperclip"></i>
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileSelect} 
                    className="hidden" 
                    accept="application/pdf,image/png,image/jpeg,image/webp"
                  />
            </div>
          <button
            onClick={handleSendMessage}
            disabled={isLoading || (userInput.trim() === '' && !attachedFile)}
            className="bg-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 shadow-md hover:shadow-lg transition-all active:scale-90"
            aria-label="Send message"
          >
            <i className="fas fa-paper-plane text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
