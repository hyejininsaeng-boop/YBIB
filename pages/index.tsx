import React, { useState, useEffect } from 'react';
import { ChatView } from '../components/ChatView';
import { FaqView } from '../components/FaqView';
import { BottomNav } from '../components/BottomNav';
import { AppView, ChatMessage, Platform } from '../types';
import { Header } from '../components/Header';
import { SplashScreen } from '../components/SplashScreen';
import { YongbukView } from '../components/YongbukView';
import { LetterView } from '../components/LetterView';
import { ContactView } from '../components/ContactView';
import Head from 'next/head';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeView, setActiveView] = useState<AppView>(AppView.Chat);
  const [platform, setPlatform] = useState<Platform>(Platform.Mobile);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedPlatform = localStorage.getItem('platform') as Platform;
      if (savedPlatform) setPlatform(savedPlatform);
      const savedHistory = localStorage.getItem('chatHistory');
      if (savedHistory) setChatHistory(JSON.parse(savedHistory));
    } catch {}
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    } catch {}
  }, [chatHistory, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('platform', platform);
  }, [platform, mounted]);

  const renderView = () => {
    switch (activeView) {
      case AppView.Chat:
        return <ChatView chatHistory={chatHistory} setChatHistory={setChatHistory} />;
      case AppView.Yongbuk:
        return <YongbukView />;
      case AppView.Letter:
        return <LetterView />;
      case AppView.FAQ:
        return <FaqView />;
      case AppView.Contact:
        return <ContactView />;
      default:
        return <ChatView chatHistory={chatHistory} setChatHistory={setChatHistory} />;
    }
  };

  if (!mounted) return null;
  if (showSplash) return <SplashScreen />;

  return (
    <>
      <Head>
        <title>YBIB 톡톡</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div
        className={`flex flex-col h-screen ${
          platform === Platform.Web ? 'max-w-5xl' : 'max-w-2xl'
        } mx-auto bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 ease-in-out`}
      >
        <Header platform={platform} onPlatformChange={setPlatform} />
        <main className="flex-1 overflow-y-auto p-4 pb-20 scrollbar-hide">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {renderView()}
          </div>
        </main>
        <BottomNav activeView={activeView} setActiveView={setActiveView} platform={platform} />

        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-in { animation: fade-in 0.4s ease-out forwards; }
        `}</style>
      </div>
    </>
  );
};

export default App;
