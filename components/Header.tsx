
import React from 'react';
import { Section } from '../types';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-gray-700/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span
              onClick={() => setActiveSection(Section.Home)}
              className="text-2xl font-bold text-white cursor-pointer hover:text-cyan-400 transition-colors"
            >
              mthota
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.section
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
