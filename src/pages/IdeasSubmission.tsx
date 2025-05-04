
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
    <div className="idea-submission-page">
      <Header />
      
      <main className="idea-submission-container">
        <div className="idea-submission-header">
          <h1>BitNet Community Ideas</h1>
          <p>Help shape the future of BitNet by submitting your ideas and voting on community suggestions.</p>
        </div>
        
        {/* Tabs */}
        <div className="idea-tabs">
          <div className="idea-tab-container">
            <button
              className={`idea-tab ${activeTab === 'submit' ? 'active' : ''}`}
              onClick={() => setActiveTab('submit')}
            >
              Submit an Idea
            </button>
            <button
              className={`idea-tab ${activeTab === 'leaderboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('leaderboard')}
            >
              Idea Leaderboard
            </button>
          </div>
        </div>
        
        {/* Submit Idea Form */}
        {activeTab === 'submit' && (
          <div className="idea-form">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      className="form-input"
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
                      className="form-input"
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
                      className="form-input"
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
                      className="form-textarea"
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
                      className="form-select"
                    >
                      <option value="feature">New Feature</option>
                      <option value="improvement">Improvement</option>
                      <option value="bugfix">Bug Fix</option>
                      <option value="integration">Integration</option>
                    </select>
                  </div>
                </div>
                
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="form-button"
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
          <div className="idea-leaderboard">
            <div className="leaderboard-header">
              <h3>Idea Leaderboard</h3>
              <p>Vote for your favorite ideas to help prioritize development</p>
            </div>
            
            {ideasLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            ) : ideas.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-gray-400 mb-4">No ideas have been submitted yet. Be the first!</p>
                <button
                  onClick={() => setActiveTab('submit')}
                  className="form-button"
                >
                  Submit an Idea
                </button>
              </div>
            ) : (
              <div>
                {ideas.map((idea) => (
                  <div key={idea.id} className="idea-card">
                    <div className="idea-card-header">
                      <span className="idea-card-title">{idea.title}</span>
                      <span className="idea-category">
                        {getCategoryLabel(idea.category)}
                      </span>
                    </div>
                    <p className="idea-card-description">{idea.description}</p>
                    <div className="idea-card-footer">
                      <span>Submitted by {idea.name}</span>
                      <button
                        className={`vote-button ${votedIdeas.has(idea.id) ? 'voted' : ''}`}
                        onClick={() => handleVote(idea.id)}
                        disabled={votedIdeas.has(idea.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span>{votedIdeas.has(idea.id) ? 'Voted' : `Vote (${idea.votes})`}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default IdeasSubmission;
