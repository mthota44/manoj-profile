
import React from 'react';
import { SKILLS } from '../constants';
import { Section } from '../types';

interface HomePageProps {
  setActiveSection: (section: Section) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveSection }) => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-down">
               Thota Venkata Manoj Kumar
          </h1>
          <p
            className="text-xl md:text-2xl text-cyan-400 font-medium animate-fade-in-down"
            style={{ animationDelay: "200ms" }}
          >
            Java Full Stack Developer
          </p>
          <p
            className="text-gray-300 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Results-driven developer with expertise in Java, Spring Boot,
            JavaScript, and React.js. Over 3.5 years of experience in designing,
            developing, and maintaining web based applications that meet client
            requirements and industry standards. Proficient in both backend and
            frontend development, with a strong focus on delivering scalable and
            responsive solutions. Passionate about creating efficient and
            user-friendly applications, I am committed to staying updated with
            emerging technologies and industry trends.
          </p>
          <button
            onClick={() => setActiveSection(Section.Contact)}
            className="mt-6 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            Get in Touch
          </button>
        </div>
        <div
          className="md:w-1/3 flex justify-center animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl animate-pulse"></div>
            <img
              src="https://raw.githubusercontent.com/mthota44/my-profile-assets/refs/heads/main/mthota_mss.jpg"
              alt="Venkata Manoj Kumar Thota"
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="animate-fade-in-up"
        style={{ animationDelay: "800ms" }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-700 hover:text-white transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
