
export enum Section {
  Home = 'home',
  Community = 'community',
  AIPrep = 'ai-prep',
  Contact = 'contact',
}

export interface InterviewPost {
  id: number;
  author: string;
  company: string;
  role: string;
  experience: string;
  timestamp: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
