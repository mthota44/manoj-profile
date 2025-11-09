
import React from 'react';
import { SKILLS, professionalExperience, keyProjects, achievements, education, personalInfo } from '../constants';
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
               {personalInfo.name}
          </h1>
          <p
            className="text-xl md:text-2xl text-cyan-400 font-medium animate-fade-in-down"
            style={{ animationDelay: "200ms" }}
          >
            {personalInfo.title}
          </p>
          <p
            className="text-gray-300 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            {personalInfo.bio}
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
              src={personalInfo.profileImage}
              alt={personalInfo.name}
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

       {/* Professional Experience Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
                <div className="relative border-l-2 border-cyan-500 ml-6 space-y-12">
                     {professionalExperience.map((exp, index) => (
                        <div key={index} className="pl-10">
                            <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 bg-gray-800 rounded-full ring-4 ring-cyan-500"></span>
                            <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                            <p className="text-lg text-cyan-400">{exp.company}</p>
                            <p className="text-sm text-gray-400 mb-2">{exp.period} | {exp.location}</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                {exp.description.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

             {/* Key Projects Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Key Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {keyProjects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
                            <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                            <p className="text-md text-cyan-400 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-400 mb-4">{project.period}</p>
                            <div className="mb-4">
                                {project.techStack.map((tech, i) => <span key={i} className="inline-block bg-gray-700 text-cyan-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{tech}</span>)}
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-300 flex-grow">
                                {project.details.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Achievements & Certifications</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((ach, index) => (
                         <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center gap-4">
                             <div className="flex-shrink-0 text-cyan-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                             </div>
                             <div>
                                <h3 className="text-xl font-semibold text-white">{ach.title}</h3>
                                <p className="text-gray-300">{ach.description}</p>
                             </div>
                         </div>
                    ))}
                </div>
            </section>

             {/* Education Section */}
            <section>
                 <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                 <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-white">{education.institution}</h3>
                    <p className="text-lg text-cyan-400">{education.degree}</p>
                    <p className="text-sm text-gray-400 mb-4">{education.period} | {education.location}</p>
                     <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {education.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                 </div>
            </section>
    </div>
  );
};

export default HomePage;
