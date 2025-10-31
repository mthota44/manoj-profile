
import React, { useState } from 'react';
import { InterviewPost } from '../types';
import { INITIAL_POSTS } from '../constants';

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<InterviewPost[]>(INITIAL_POSTS);
  const [newPost, setNewPost] = useState({ author: '', company: '', role: '', experience: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.author || !newPost.company || !newPost.role || !newPost.experience) {
      alert("Please fill out all fields.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => { // Simulate API call
        const postToAdd: InterviewPost = {
            id: Date.now(),
            ...newPost,
            timestamp: 'Just now',
        };
        setPosts([postToAdd, ...posts]);
        setNewPost({ author: '', company: '', role: '', experience: '' });
        setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Interview Community</h1>
        <p className="mt-2 text-lg text-gray-400">Share your interview experience and learn from others.</p>
      </div>
      
      {/* Share Experience Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Share Your Experience</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="author" placeholder="Your Name" value={newPost.author} onChange={handleInputChange} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            <input type="text" name="company" placeholder="Company Name" value={newPost.company} onChange={handleInputChange} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          </div>
          <input type="text" name="role" placeholder="Role (e.g., Software Engineer)" value={newPost.role} onChange={handleInputChange} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          <textarea name="experience" placeholder="Describe your experience..." value={newPost.experience} onChange={handleInputChange} rows={4} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
            {isSubmitting ? 'Sharing...' : 'Share Experience'}
          </button>
        </form>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 animate-fade-in-up">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{post.role}</h3>
                <p className="text-md text-white font-semibold">{post.company}</p>
                <p className="text-sm text-gray-400">by {post.author}</p>
              </div>
              <span className="text-xs text-gray-500">{post.timestamp}</span>
            </div>
            <p className="mt-4 text-gray-300 whitespace-pre-wrap">{post.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
