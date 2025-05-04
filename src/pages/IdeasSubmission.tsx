
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitIdea, useIdeas, voteForIdea } from '../firebase/services';

const IdeasSubmission = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    category: 'feature'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('submit');
  const { ideas, loading: ideasLoading } = useIdeas();

  // Track which ideas the user has already voted for in this session
  const [votedIdeas, setVotedIdeas] = useState<Set<string>>(new Set());
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.title || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    try {
      setSubmitting(true);
      setError('');
      
      await submitIdea({
        name: formData.name,
        email: formData.email,
        title: formData.title,
        description: formData.description,
        category: formData.category
      });
      
      // Show success state
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        title: '',
        description: '',
        category: 'feature'
      });
      
      // Switch to leaderboard tab after successful submission
      setTimeout(() => {
        setActiveTab('leaderboard');
        setSubmitted(false);
      }, 3000);
      
    } catch (err: any) {
      setError('An error occurred while submitting your idea. Please try again.');
      console.error('Error submitting idea:', err);
    } finally {
      setSubmitting(false);
    }
  };
  
  const handleVote = async (ideaId: string) => {
    // Prevent multiple votes on the same idea
    if (votedIdeas.has(ideaId)) return;
    
    try {
      await voteForIdea(ideaId);
      // Add to voted set
      setVotedIdeas(prev => new Set(prev).add(ideaId));
    } catch (err) {
      console.error('Error voting:', err);
    }
  };
  
  // Get category display name
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'feature': return 'New Feature';
      case 'improvement': return 'Improvement';
      case 'bugfix': return 'Bug Fix';
      case 'integration': return 'Integration';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0b0b0b' }}>
      <Header />
      
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ 
              background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              BitNet Community Ideas
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Help shape the future of BitNet by submitting your ideas and voting on community suggestions.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 rounded-full p-1 inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'submit' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab('submit')}
              >
                Submit an Idea
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'leaderboard' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab('leaderboard')}
              >
                Idea Leaderboard
              </button>
            </div>
          </div>
          
          {/* Submit Idea Form */}
          {activeTab === 'submit' && (
            <div className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-xl border border-gray-800">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400">Your idea has been submitted successfully. The community can now vote on it!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    
                    <div className="form-group md:col-span-2">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">Idea Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="A short title for your idea"
                        required
                      />
                    </div>
                    
                    <div className="form-group md:col-span-2">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Describe your idea in detail"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="feature">New Feature</option>
                        <option value="improvement">Improvement</option>
                        <option value="bugfix">Bug Fix</option>
                        <option value="integration">Integration</option>
                      </select>
                    </div>
                  </div>
                  
                  {error && (
                    <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-md text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="mt-6 text-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-md shadow-lg transition-all disabled:opacity-70"
                    >
                      {submitting ? 'Submitting...' : 'Submit Your Idea'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
          
          {/* Ideas Leaderboard */}
          {activeTab === 'leaderboard' && (
            <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white">Idea Leaderboard</h3>
                <p className="text-gray-400 text-sm mt-1">Vote for your favorite ideas to help prioritize development</p>
              </div>
              
              {ideasLoading ? (
                <div className="flex items-center justify-center p-12">
                  <div className="w-10 h-10 border-4 border-gray-600 border-t-orange-500 rounded-full animate-spin"></div>
                </div>
              ) : ideas.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-400">No ideas have been submitted yet. Be the first!</p>
                  <button
                    onClick={() => setActiveTab('submit')}
                    className="mt-4 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                  >
                    Submit an Idea
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-800">
                  {ideas.map((idea) => (
                    <div key={idea.id} className="p-4 md:p-6 hover:bg-gray-800/50 transition-colors">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 flex flex-col items-center gap-1 min-w-[60px]">
                          <button
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                              votedIdeas.has(idea.id) 
                                ? 'bg-orange-600 text-white' 
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                            onClick={() => handleVote(idea.id)}
                            disabled={votedIdeas.has(idea.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <span className="text-lg font-bold text-white">{idea.votes}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-medium text-white">{idea.title}</h4>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-800 text-orange-400">
                              {getCategoryLabel(idea.category)}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-3">{idea.description}</p>
                          <div className="flex items-center text-gray-500 text-sm">
                            <span>Submitted by {idea.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IdeasSubmission;
