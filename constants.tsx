
import React from 'react';
import { Section, InterviewPost } from './types';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/icons';

export const NAV_ITEMS: { name: string; section: Section }[] = [
  { name: 'Home', section: Section.Home },
  { name: 'Interview Community', section: Section.Community },
  { name: 'AI Interviewer', section: Section.AIPrep },
  { name: 'Contact', section: Section.Contact },
];

export const SOCIAL_LINKS = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/venkata-manoj-kumar-thota-2410a01ba',
        icon: <LinkedinIcon className="h-6 w-6" />,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/mthota44',
        icon: <GithubIcon className="h-6 w-6" />,
    },
    {
        name: 'Email',
        url: 'mailto:venkatamanojkumarthota@gmail.com',
        icon: <MailIcon className="h-6 w-6" />,
    }
];

export const SKILLS = [
  "Java 8+", "Python", "JavaScript", "Spring Boot", "Spring Security", "Spring Cloud",
  "ReactJS", "Angular", "JPA/Hibernate", "OAuth", "AWS", "Docker", "Jenkins", "CI/CD",
  "MySQL", "PostgreSQL", "MongoDB", "Git", "Maven", "JIRA", "Apache Kafka", "RabbitMQ",
  "OpenTelemetry"
];

export const INITIAL_POSTS: InterviewPost[] = [
    {
        id: 1,
        author: 'Jane Doe',
        company: 'Tech Solutions Inc.',
        role: 'Senior Backend Engineer',
        experience: 'The first round was a coding challenge on HackerRank. The second was a system design interview focusing on scaling a social media feed. The final round was behavioral with the hiring manager. They really focused on my experience with microservices and AWS.',
        timestamp: '2 days ago',
    },
    {
        id: 2,
        author: 'John Smith',
        company: 'Innovate LLC',
        role: 'Frontend Developer (React)',
        experience: 'Interview process was smooth. A take-home project to build a small React app, followed by a technical discussion about my code. They asked a lot about state management with Redux and React Hooks. Be prepared to explain your design choices!',
        timestamp: '5 days ago',
    },
];
