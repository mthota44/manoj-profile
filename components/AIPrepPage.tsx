
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { generateAIMessage, startAIInterview } from '../services/geminiService';
import { SendIcon } from './icons';

const AIPrepPage: React.FC = () => {
  const [jobRole, setJobRole] = useState<string>('');
  const [interviewStarted, setInterviewStarted] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleStartInterview = async () => {
    if (!jobRole.trim()) {
      alert('Please enter a job role.');
      return;
    }
    setIsLoading(true);
    setInterviewStarted(true);
    const firstQuestion = await startAIInterview(jobRole);
    setMessages([{ sender: 'ai', text: firstQuestion }]);
    setIsLoading(false);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;
    
    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    const aiResponse = await generateAIMessage(newMessages, jobRole);
    setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!interviewStarted) {
    return (
      <div className="max-w-md mx-auto text-center flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-4xl font-bold text-white">AI Interviewer</h1>
        <p className="mt-2 text-lg text-gray-400">Practice your interview skills with an AI-powered interviewer.</p>
        <div className="mt-8 w-full">
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="e.g., Senior Java Developer"
            className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
          <button
            onClick={handleStartInterview}
            className="mt-4 w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition-colors"
          >
            Start Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto h-[75vh] flex flex-col bg-gray-800 border border-gray-700 rounded-lg shadow-2xl">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white text-center">Interview for: <span className="text-cyan-400">{jobRole}</span></h2>
      </div>
      <div ref={chatContainerRef} className="flex-grow p-6 space-y-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
             {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center font-bold">AI</div>}
            <div className={`max-w-md p-4 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center font-bold">AI</div>
              <div className="max-w-md p-4 rounded-lg bg-gray-700 text-gray-200 rounded-bl-none">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
                </div>
              </div>
           </div>
        )}
      </div>
      <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
        <div className="flex items-center space-x-2">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Your answer..."
            rows={1}
            className="flex-grow bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none resize-none"
            disabled={isLoading}
          />
          <button onClick={handleSendMessage} disabled={isLoading} className="bg-cyan-500 text-white p-3 rounded-md hover:bg-cyan-600 transition-colors disabled:bg-gray-600">
            <SendIcon className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPrepPage;
