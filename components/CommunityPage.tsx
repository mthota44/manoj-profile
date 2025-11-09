
import React, { useState, useEffect, FormEvent } from 'react';
import { InterviewPost } from '../types';
import { supabase } from '../supabaseClient';
import type { Session } from '@supabase/supabase-js';

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<InterviewPost[]>([]);
  const [newPost, setNewPost] = useState({ name: '', company_name: '', role: '', experience: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('interview_experiences')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError('Could not fetch interview experiences.');
        console.error(error);
      } else {
        setPosts(data as InterviewPost[]);
      }
      setIsLoading(false);
    };

    fetchPosts();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.name || !newPost.company_name || !newPost.role || !newPost.experience) {
      alert("Please fill out all fields.");
      return;
    }
    
    setIsSubmitting(true);
    const { data: { user } } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from('interview_experiences')
      .insert([{ ...newPost, user_id: user?.id }])
      .select()

    if (error) {
      alert("Could not submit your experience. Please try again.");
      console.error(error);
    } else if (data) {
      setPosts([data[0] as InterviewPost, ...posts]);
      setNewPost({ name: '', company_name: '', role: '', experience: '' });
    }
    setIsSubmitting(false);
  };

  const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');

    const handleAuth = async (e: FormEvent) => {
      e.preventDefault();
      setAuthError('');
      const { error } = isLogin
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

      if (error) {
        setAuthError(error.message);
      } else {
        setShowAuth(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-800 p-8 rounded-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-white mb-4">{isLogin ? 'Log In' : 'Sign Up'}</h2>
          <form onSubmit={handleAuth} className="space-y-4">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600" required />
            {authError && <p className="text-red-500 text-sm">{authError}</p>}
            <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 rounded-md hover:bg-cyan-600">
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>
          <div className="text-center mt-4">
            <button onClick={() => setIsLogin(!isLogin)} className="text-cyan-400 hover:underline">
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
            </button>
          </div>
          <button onClick={() => setShowAuth(false)} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
        </div>
      </div>
    );
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    if (session?.user) {
      setNewPost(prev => ({ ...prev, name: session.user.email || '' }));
    }
  }, [session]);
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Interview Community</h1>
        <p className="mt-2 text-lg text-gray-400">Share your interview experience and learn from others.</p>
      </div>
      
      {session ? (
        <>
          <div className="text-right">
            <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
              Logout
            </button>
          </div>
          {/* Share Experience Form */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name (or Email)" value={newPost.name} onChange={handleInputChange} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
                <input type="text" name="company_name" placeholder="Company Name" value={newPost.company_name} onChange={handleInputChange} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
              </div>
              <input type="text" name="role" placeholder="Role (e.g., Software Engineer)" value={newPost.role} onChange={handleInputChange} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
              <textarea name="experience" placeholder="Describe your experience..." value={newPost.experience} onChange={handleInputChange} rows={4} className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
              <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sharing...' : 'Share Experience'}
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="text-center">
          <button onClick={() => setShowAuth(true)} className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-600 transition-colors">
            Log In to Share Your Experience
          </button>
        </div>
      )}
      {showAuth && <AuthForm />}

      {/* Posts Feed */}
      <div className="space-y-6">
        {isLoading && <p className="text-center text-gray-400">Loading experiences...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && posts.map(post => (
          <div key={post.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 animate-fade-in-up">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{post.role}</h3>
                <p className="text-md text-white font-semibold">{post.company_name}</p>
                <p className="text-sm text-gray-400">by {post.name}</p>
              </div>
              <span className="text-xs text-gray-500">
                {new Date(post.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', month: 'long', day: 'numeric' 
                })}
              </span>
            </div>
            <p className="mt-4 text-gray-300 whitespace-pre-wrap">{post.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
