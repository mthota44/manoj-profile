
import React from 'react';
import { Section, InterviewPost, Skill, Experience, Project, Achievement, Education } from './types';
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

export const personalInfo = {
  name: "Thota Venkata Manoj Kumar",
  title: "Java Full Stack Developer",
  bio: "Results-driven developer with expertise in Java, Spring Boot, JavaScript, and React.js. Over 3.5 years of experience in designing, developing, and maintaining web based applications that meet client requirements and industry standards. Proficient in both backend and frontend development, with a strong focus on delivering scalable and responsive solutions. Passionate about creating efficient and user-friendly applications, I am committed to staying updated with emerging technologies and industry trends.",
  email: "venkatamanojkumarthota@gmail.com",
  phone: "628-102-4750",
  linkedin: "https://www.linkedin.com/in/venkata-manoj-kumar-thota",
  github: "https://github.com/mthota44",
  profileImage: "https://raw.githubusercontent.com/mthota44/my-profile-assets/refs/heads/main/mthota_mss.jpg" 
};

export const technicalSkills: Skill[] = [
  { name: "Languages", items: ["Java 8+", "Python", "JavaScript", "C"] },
  { name: "Frameworks", items: ["Spring Boot", "Spring Security", "Spring Cloud", "JPA/Hibernate", "OAuth", "Swagger", "Actuator"] },
  { name: "Frontend", items: ["ReactJS", "Angular", "HTML5", "CSS3", "Bootstrap"] },
  { name: "Cloud & DevOps", items: ["AWS", "Docker", "Jenkins", "CI/CD"] },
  { name: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { name: "Tools", items: ["Git", "Maven", "JIRA", "Postman", "IntelliJ IDEA", "VS Code"] },
  { name: "Messaging", items: ["Apache Kafka", "RabbitMQ", "WebSocket"] },
  { name: "Monitoring", items: ["OpenTelemetry", "Distributed Tracing"] },
];

export const professionalExperience: Experience[] = [
  {
    role: "Java Full Stack Developer",
    company: "MIRACLE SOFTWARE SYSTEMS",
    period: "Jul 2022 - Present",
    location: "Bhongapuram, Vizianagaram",
    description: [
      "Developed and maintained Spring Boot based microservices, focusing on building RESTful APIs, data access layers, and integrations.",
      "Worked extensively with MySQL and PostgreSQL, writing optimized SQL queries and implementing indexing strategies.",
      "Participated in migrating modules from a monolithic design to a microservices-based architecture.",
      "Implemented authentication and authorization using Spring Security and JWT tokens.",
      "Gained frontend exposure by building and enhancing ReactJS and Angular modules for dashboards and forms."
    ],
  },
  {
    role: "Software Development Intern",
    company: "MIRACLE SOFTWARE SYSTEMS",
    period: "Jan 2021 – Jun 2022",
    location: "Bhongapuram, Vizianagaram",
    description: [
      "Assisted in building Spring Boot applications, developing CRUD operations, and writing JUnit test cases.",
      "Gained hands-on experience with microservices architecture and RESTful web service development.",
      "Built small-scale web applications using Angular and ReactJS with backend API integration.",
      "Learned Docker basics by containerizing applications and participating in CI/CD pipeline setups.",
    ],
  },
];

export const keyProjects: Project[] = [
  {
    name: "RESOURCE MANAGEMENT PORTAL",
    description: "Enterprise HR Management System",
    period: "Jan 2024 – Present",
    techStack: ["Spring Boot", "ReactJS", "PostgreSQL", "Docker", "Jenkins"],
    details: [
      "Developed an end-to-end recruitment application serving 500+ HR professionals.",
      "Architected using Spring Boot microservices (6 services) with ReactJS and Redux for state management.",
      "Implemented a sophisticated workflow engine for multi-stage recruitment and an interview scheduling system.",
      "Achieved 99.95% uptime through circuit breakers, retry mechanisms, and graceful degradation patterns.",
    ],
  },
  {
    name: "HEALTH MANAGEMENT PORTAL",
    description: "Web-Based Healthcare Application",
    period: "Jun 2022 - Dec 2024",
    techStack: ["Spring Boot", "React", "MySQL", "AWS", "Bootstrap"],
    details: [
      "Built a full-stack health management web application enabling patients to manage appointments and view medical records.",
      "Implemented secure user authentication with Spring Security, password encryption using BCrypt, and JWT tokens.",
      "Developed an appointment booking system with calendar integration and email notifications.",
      "Deployed the application on AWS EC2 with RDS for database hosting and a load balancer handling 1,000+ concurrent users.",
    ],
  },
];

export const achievements: Achievement[] = [
    { title: "Best Employee Award (FY24)", description: "Recognized for outstanding contributions and consistent performance in delivering high-quality microservices solutions." },
    { title: "Best Performer Award (FY23)", description: "Awarded for key role in successful migration of modules from monolithic to microservices architecture." },
    { title: "Technical Speaker", description: "Conducted internal technical sessions on Spring Boot and Docker, sharing best practices." },
    { title: "Knowledge Contributor", description: "Published knowledge-sharing articles on backend development and microservices in the company's internal tech forum." },
];

export const education: Education = {
    institution: "MIRACLE EDUCATIONAL SOCIETY GROUP OF INSTITUTIONS",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "2018 - 2022",
    location: "Bhongapuram, Vizianagaram district",
    details: [
        "CGPA: 7.26/10",
        "Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, Computer Networks.",
        "Led the technical club, organizing coding competitions and workshops for 200+ students."
    ]
};
