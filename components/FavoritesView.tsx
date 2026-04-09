
import React from 'react';
import { ChatMessage } from '../types';
import { MessageBubble } from './MessageBubble';

interface FavoritesViewProps {
  favorites: ChatMessage[];
  toggleFavorite: (message: ChatMessage) => void;
  isFavorited: (messageId: string) => boolean;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({ favorites, toggleFavorite, isFavorited }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">즐겨찾기</h2>
      {favorites.length > 0 ? (
        <div className="space-y-4">
          {favorites.map(msg => (
            <MessageBubble key={msg.id} message={msg} isExpandedDefault={true} />
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-500 dark:text-slate-400 mt-16">
          <div className="text-5xl mb-4">⭐</div>
          <p className="text-lg">아직 즐겨찾기에 추가된 답변이 없습니다.</p>
          <p className="mt-2">채팅 답변에서 별표 아이콘을 눌러 중요한 정보를 저장하세요.</p>
        </div>
      )}
    </div>
  );
};
