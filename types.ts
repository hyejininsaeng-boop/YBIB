export enum AppView {
  Chat = 'Chat',
  Yongbuk = 'Yongbuk',
  Letter = 'Letter',
  FAQ = 'FAQ',
  Contact = 'Contact',
}

export enum MessageRole {
  User = 'user',
  AI = 'ai',
  System = 'system',
}

export enum Platform {
  Mobile = 'mobile',
  Web = 'web',
}

export enum IBProgram {
  PYP = 'PYP (초등)',
  MYP = 'MYP (중등)',
  DP = 'DP (고등)',
  CP = 'CP (직업)',
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  summary?: string;
  timestamp: string;
}
