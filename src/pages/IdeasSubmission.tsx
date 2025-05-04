
import React, { useState, useEffect } from 'react';
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
  
  // Animation state
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
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
  
  // Get category background color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'feature': return 'rgba(255, 140, 0, 0.2)';
      case 'improvement': return 'rgba(60, 145, 230, 0.2)';
      case 'bugfix': return 'rgba(220, 0, 78, 0.2)';
      case 'integration': return 'rgba(76, 175, 80, 0.2)';
      default: return 'rgba(255, 140, 0, 0.2)';
    }
  };
  
  // Get category text color
  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case 'feature': return '#ff8c00';
      case 'improvement': return '#3c91e6';
      case 'bugfix': return '#dc004e';
      case 'integration': return '#4caf50';
      default: return '#ff8c00';
    }
  };

  return (
    <div className="idea-submission-page">
      <Header />
      
      <div className="background-gradient"></div>
      
      <main className={`idea-submission-container ${isVisible ? 'animate-reveal' : 'animate-hidden'}`}>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="tab-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Submit an Idea
            </button>
            <button
              className={`idea-tab ${activeTab === 'leaderboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('leaderboard')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="tab-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
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
                <p className="text-gray-300">Your idea has been submitted successfully. The community can now vote on it!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Share Your Vision</h2>
                  <p>Your ideas help us build a better BitNet for everyone</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="form-group md:col-span-2">
                    <label htmlFor="title">Idea Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Give your idea a catchy title"
                      required
                    />
                  </div>
                  
                  <div className="form-group md:col-span-2">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      className="form-textarea"
                      placeholder="Describe your idea in detail - what problem does it solve?"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group md:col-span-2">
                    <label htmlFor="category">Category</label>
                    <div className="category-select-wrapper">
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
                      <div className="select-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {error && (
                  <div className="error-message">
                    <svg xmlns="http://www.w3.org/2000/svg" className="error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error}
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="form-button"
                  >
                    {submitting ? (
                      <>
                        <span className="button-spinner"></span>
                        Submitting...
                      </>
                    ) : 'Submit Your Idea'}
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
              <div className="leaderboard-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="leaderboard-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3>Community Idea Leaderboard</h3>
                  <p>Vote for your favorite ideas to help prioritize development</p>
                </div>
              </div>
              <div className="sort-filter">
                <span>Sorted by: </span>
                <span className="sort-label">Most Votes</span>
              </div>
            </div>
            
            {ideasLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading brilliant ideas...</p>
              </div>
            ) : ideas.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3>No Ideas Yet</h3>
                <p>Be the first to contribute an idea and help shape the future of BitNet!</p>
                <button
                  onClick={() => setActiveTab('submit')}
                  className="form-button"
                >
                  Submit an Idea
                </button>
              </div>
            ) : (
              <div className="idea-grid">
                {ideas.map((idea) => (
                  <div key={idea.id} className="idea-card">
                    <div className="idea-card-header">
                      <span className="idea-card-title">{idea.title}</span>
                      <span className="idea-category" style={{ 
                        backgroundColor: getCategoryColor(idea.category),
                        color: getCategoryTextColor(idea.category)
                      }}>
                        {getCategoryLabel(idea.category)}
                      </span>
                    </div>
                    <p className="idea-card-description">{idea.description}</p>
                    <div className="idea-card-footer">
                      <div className="idea-meta">
                        <div className="submitter">
                          <svg xmlns="http://www.w3.org/2000/svg" className="submitter-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          <span>{idea.name}</span>
                        </div>
                        <div className="submission-date">
                          <svg xmlns="http://www.w3.org/2000/svg" className="date-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>Recently</span>
                        </div>
                      </div>
                      <button
                        className={`vote-button ${votedIdeas.has(idea.id) ? 'voted' : ''}`}
                        onClick={() => handleVote(idea.id)}
                        disabled={votedIdeas.has(idea.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="vote-icon" viewBox="0 0 20 20" fill="currentColor">
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
