export enum Section {
    Home = 'home',
    Community = 'community',
    AIPrep = 'ai-prep',
    Contact = 'contact',
}
  
export interface InterviewPost {
    id: string;
    name: string;
    company_name: string;
    role: string;
    experience: string;
    created_at: string;
    user_id?: string;
}
  
export interface Skill {
    name: string;
    items: string[];
}
  
export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
}
  
export interface Project {
    name: string;
    description: string;
    period: string;
    techStack: string[];
    details: string[];
}
  
export interface Achievement {
    title: string;
    description: string;
}
  
export interface Education {
    institution: string;
    degree: string;
    period: string;
    location: string;
    details: string[];
}
  