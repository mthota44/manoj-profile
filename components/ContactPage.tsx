
import React from 'react';
import { MailIcon, PhoneIcon } from './icons';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold text-white animate-fade-in-down">Get In Touch</h1>
      <p className="mt-4 text-lg text-gray-400 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
      </p>
      <div className="mt-12 space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <a href="mailto:venkatamanojkumarthota@gmail.com" className="inline-flex items-center justify-center gap-3 bg-gray-800 border border-gray-700 rounded-lg p-4 transition-all hover:border-cyan-500 hover:bg-gray-700 w-full md:w-auto">
            <MailIcon className="w-6 h-6 text-cyan-400" />
            <span className="text-lg text-white">venkatamanojkumarthota@gmail.com</span>
        </a>
         <div className="inline-flex items-center justify-center gap-3 bg-gray-800 border border-gray-700 rounded-lg p-4 w-full md:w-auto md:ml-4">
            <PhoneIcon className="w-6 h-6 text-cyan-400" />
            <span className="text-lg text-white">628-102-4750</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
