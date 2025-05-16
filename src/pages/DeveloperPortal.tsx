
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DeveloperPortal = () => {
  const [accountType, setAccountType] = useState('individual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: '',
    aiAgent: false,
    agentDetails: '',
    terms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleAccountTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would call an API to generate and store the key
    // For demo purposes, we'll just generate a mock API key
    const mockApiKey = `bitnet_${accountType}_${Math.random().toString(36).substring(2, 15)}`;
    setApiKey(mockApiKey);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
      <Header />
      
      <main style={{ flex: '1', paddingTop: '2rem' }}>
        <div className="developer-container">
          <div className="developer-header">
            <h1>BitNet Developer Portal</h1>
            <p className="developer-description">
              Access the power of Bitcoin through our developer-friendly API. 
              Get your API key and start building the future of decentralized finance.
            </p>
          </div>

          <div className="developer-card info-section">
            <h2>Blockchain Wallet for Developers</h2>
            <div className="info-content">
              <div className="info-text">
                <div className="info-paragraph">
                  <h3>Simplified Blockchain Integration</h3>
                  <p>
                    BitNet provides a comprehensive blockchain wallet for developers seeking to integrate Bitcoin functionality into their applications. Our easy-to-use API empowers you to create secure, scalable crypto solutions without the complexity traditionally associated with blockchain development.
                  </p>
                </div>
                
                <div className="info-paragraph">
                  <h3>Flexible Development Tools</h3>
                  <p>
                    Whether you're building a decentralized application, implementing payment processing, or creating a custom wallet experience, our developer tools offer the flexibility and security your projects demand. With BitNet's wallet infrastructure, you can focus on creating value for your users while we handle the complexities of blockchain interactions.
                  </p>
                </div>
                
                <div className="info-paragraph">
                  <h3>End-to-End Wallet Solutions</h3>
                  <p>
                    Our blockchain wallet solutions offer end-to-end capabilities including secure key management, transaction processing, and real-time blockchain data access. The BitNet API is designed with developers in mind, featuring comprehensive documentation, language-specific SDKs, and a dedicated support team to help you succeed.
                  </p>
                </div>
                
                <div className="info-paragraph">
                  <h3>Enterprise-Ready Infrastructure</h3>
                  <p>
                    Join thousands of developers already building on BitNet's infrastructure and discover why our platform is the preferred choice for blockchain integration. From startups to enterprise solutions, our scalable architecture grows with your needs while maintaining the highest security standards in the industry.
                  </p>
                </div>
              </div>
              <div className="info-features">
                <div className="dev-feature">
                  <div className="dev-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <span>RESTful API</span>
                </div>
                <div className="dev-feature">
                  <div className="dev-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <span>Multi-platform SDKs</span>
                </div>
                <div className="dev-feature">
                  <div className="dev-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span>Enterprise-grade Security</span>
                </div>
                <div className="dev-feature">
                  <div className="dev-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <span>Global Availability</span>
                </div>
                <div className="dev-feature">
                  <div className="dev-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10"></polyline>
                      <polyline points="23 20 23 14 17 14"></polyline>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg>
                  </div>
                  <span>Automated Backups</span>
                </div>
                <div className="dev-feature">
                  <div className="dev-feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
          
          {!submitted ? (
            <div className="developer-card">
              <h2>Get Your API Key</h2>
              <p>
                Complete the form below to receive your API key. This key will give you access 
                to our suite of Bitcoin services and functionalities.
              </p>
              
              <form onSubmit={handleSubmit} className="api-form">
                <div className="form-section">
                  <h3>Account Type</h3>
                  <div className="account-type-options">
                    <label className={`account-type-option ${accountType === 'individual' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="accountType" 
                        value="individual" 
                        checked={accountType === 'individual'} 
                        onChange={handleAccountTypeChange}
                      />
                      <div className="account-type-icon" style={{
                        background: 'linear-gradient(135deg, #ff8c00, #ff5e00)'
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="option-content">
                        <h4>Individual</h4>
                        <p>Personal projects and small applications</p>
                      </div>
                    </label>
                    
                    <label className={`account-type-option ${accountType === 'organization' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="accountType" 
                        value="organization" 
                        checked={accountType === 'organization'} 
                        onChange={handleAccountTypeChange}
                      />
                      <div className="account-type-icon" style={{
                        background: 'linear-gradient(135deg, #ff8c00, #ff5e00)'
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                      <div className="option-content">
                        <h4>Organization</h4>
                        <p>Business and enterprise applications</p>
                      </div>
                    </label>
                    
                    <label className={`account-type-option ${accountType === 'ai-agent' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="accountType" 
                        value="ai-agent" 
                        checked={accountType === 'ai-agent'} 
                        onChange={handleAccountTypeChange}
                      />
                      <div className="account-type-icon" style={{
                        background: 'linear-gradient(135deg, #ff8c00, #ff5e00)'
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                          <circle cx="9" cy="10" r="2"></circle>
                          <circle cx="15" cy="10" r="2"></circle>
                          <path d="M8 16s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="3" y1="12" x2="6" y2="12"></line>
                          <line x1="18" y1="12" x2="21" y2="12"></line>
                        </svg>
                      </div>
                      <div className="option-content">
                        <h4>AI Agent</h4>
                        <p>Autonomous AI systems and agents</p>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div className="form-section">
                  <h3>Your Details</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  {accountType === 'organization' && (
                    <div className="form-group">
                      <label htmlFor="organization">Organization Name</label>
                      <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        required={accountType === 'organization'}
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Enter your organization name"
                      />
                    </div>
                  )}
                  
                  {accountType === 'ai-agent' && (
                    <div className="form-group">
                      <label htmlFor="agentDetails">AI Agent Details</label>
                      <textarea 
                        id="agentDetails" 
                        name="agentDetails" 
                        required={accountType === 'ai-agent'}
                        value={formData.agentDetails}
                        onChange={handleInputChange}
                        placeholder="Describe your AI agent and its intended use of our API"
                        rows={4}
                      />
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="useCase">Intended Use Case</label>
                    <textarea 
                      id="useCase" 
                      name="useCase" 
                      required 
                      value={formData.useCase}
                      onChange={handleInputChange}
                      placeholder="Describe how you plan to use the BitNet API"
                      rows={4}
                    />
                  </div>
                </div>
                
                <div className="form-group terms-group">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      name="terms" 
                      required 
                      checked={formData.terms}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    <span>I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">API Usage Policy</a></span>
                  </label>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-button">Generate API Key</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="developer-card success-card">
              <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2>Your API Key is Ready!</h2>
              <p>Keep your API key secure. Do not share it publicly or commit it to version control systems.</p>
              
              <div className="api-key-container">
                <code className="api-key">{apiKey}</code>
                <button 
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText(apiKey);
                    alert('API key copied to clipboard!');
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
              
              <div className="next-steps">
                <h3>Next Steps</h3>
                <ul>
                  <li>
                    <span className="step-number">1</span>
                    <div>
                      <h4>Read the Documentation</h4>
                      <p>Learn how to authenticate and use our API endpoints</p>
                      <a href="/api" className="step-link">View Documentation</a>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">2</span>
                    <div>
                      <h4>Download an SDK</h4>
                      <p>Use our language-specific SDKs for easier integration</p>
                      <a href="/api#libraries" className="step-link">Browse SDKs</a>
                    </div>
                  </li>
                  <li>
                    <span className="step-number">3</span>
                    <div>
                      <h4>Join the Community</h4>
                      <p>Get help and share your projects with other developers</p>
                      <a href="#" className="step-link">Developer Community</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          <div className="developer-card info-card">
            <h2>API Features</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3>Wallet Management</h3>
                <p>Create and manage Bitcoin wallets programmatically</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #4cd964, #2e8a3a)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <path d="M12 12h.01" />
                    <path d="M17 12h.01" />
                    <path d="M7 12h.01" />
                  </svg>
                </div>
                <h3>Transaction Processing</h3>
                <p>Send, receive, and verify Bitcoin transactions</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #ff8c00, #d17300)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="M14.83 9.17a4 4 0 0 0-5.66 5.66" />
                    <path d="M9.17 14.83a4 4 0 0 0 5.66-5.66" />
                  </svg>
                </div>
                <h3>Blockchain Data</h3>
                <p>Access and query real-time blockchain information</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #a855f7, #6b21a8)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 14v.01" />
                  </svg>
                </div>
                <h3>Smart Contracts</h3>
                <p>Deploy and interact with Bitcoin-based smart contracts</p>
              </div>
            </div>
          </div>
          
          <div className="developer-card pricing-card">
            <h2>API Pricing</h2>
            <div className="pricing-tiers">
              <div className="pricing-tier">
                <div className="tier-header">
                  <h3>Developer</h3>
                  <div className="tier-price">
                    <span className="price">Free</span>
                  </div>
                </div>
                <ul className="tier-features">
                  <li>1,000 requests / day</li>
                  <li>Basic wallet functionality</li>
                  <li>Standard rate limits</li>
                  <li>Community support</li>
                </ul>
                <div className="tier-cta">
                  <span className="tier-badge">Current</span>
                </div>
              </div>
              
              <div className="pricing-tier">
                <div className="tier-header">
                  <h3>Business</h3>
                  <div className="tier-price">
                    <span className="price-currency">$</span>
                    <span className="price">99</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <ul className="tier-features">
                  <li>50,000 requests / day</li>
                  <li>Advanced wallet features</li>
                  <li>Higher rate limits</li>
                  <li>Email support</li>
                  <li>Custom webhooks</li>
                </ul>
                <div className="tier-cta">
                  <button className="upgrade-button">Upgrade</button>
                </div>
              </div>
              
              <div className="pricing-tier">
                <div className="tier-header">
                  <h3>Enterprise</h3>
                  <div className="tier-price">
                    <span className="price">Custom</span>
                  </div>
                </div>
                <ul className="tier-features">
                  <li>Unlimited requests</li>
                  <li>Full API access</li>
                  <li>Dedicated infrastructure</li>
                  <li>24/7 priority support</li>
                  <li>Custom integration</li>
                  <li>SLA guarantees</li>
                </ul>
                <div className="tier-cta">
                  <button className="contact-button">Contact Sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .developer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem 4rem;
        }
        
        .developer-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem 1rem;
        }
        
        .developer-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #ff8c00, #ff5e00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .developer-description {
          font-size: 1.2rem;
          color: #ccc;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 300;
        }
        
        .developer-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }
        
        .developer-card h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        
        .developer-card p {
          color: #bbb;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .form-section {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-section h3 {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        
        .account-type-options {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .account-type-option {
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .account-type-option.selected {
          border-color: #ff8c00;
          background: rgba(255, 140, 0, 0.05);
        }
        
        .account-type-option:hover {
          border-color: rgba(255, 140, 0, 0.5);
        }
        
        .account-type-option input {
          position: absolute;
          opacity: 0;
        }
        
        .account-type-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .account-type-option:hover .account-type-icon {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(255, 140, 0, 0.25);
        }
        
        .account-type-option.selected .account-type-icon {
          box-shadow: 0 8px 20px rgba(255, 140, 0, 0.4);
          transform: translateY(-8px);
        }
        
        .option-content {
          margin-left: 0;
          text-align: center;
        }
        
        .option-content h4 {
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }
        
        .option-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #aaa;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          color: #ddd;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #ff8c00;
          box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .checkbox-container {
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          position: relative;
          padding-left: 30px;
          font-size: 0.95rem;
          color: #ddd;
        }
        
        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .checkmark {
          position: absolute;
          top: 2px;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .checkbox-container:hover input ~ .checkmark {
          border-color: rgba(255, 140, 0, 0.5);
        }
        
        .checkbox-container input:checked ~ .checkmark {
          background-color: #ff8c00;
          border-color: #ff8c00;
        }
        
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }
        
        .checkbox-container .checkmark:after {
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        .terms-link {
          color: #ff8c00;
          text-decoration: none;
        }
        
        .terms-link:hover {
          text-decoration: underline;
        }
        
        .form-actions {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
        }
        
        .submit-button {
          background: linear-gradient(90deg, #ff8c00, #ff5e00);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 140, 0, 0.2);
        }
        
        .success-card {
          text-align: center;
          padding: 3rem 2rem;
        }
        
        .success-icon {
          margin: 0 auto 2rem;
          width: 80px;
          height: 80px;
          background: rgba(52, 211, 153, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .api-key-container {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          padding: 1.5rem;
          margin: 2rem auto;
          max-width: 600px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .api-key {
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          color: #34d399;
          font-size: 1rem;
          word-break: break-all;
        }
        
        .copy-button {
          background: transparent;
          border: none;
          color: #aaa;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 0.5rem;
          margin-left: 1rem;
        }
        
        .copy-button:hover {
          color: #fff;
        }
        
        .next-steps {
          margin-top: 3rem;
          text-align: left;
        }
        
        .next-steps h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .next-steps ul {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .next-steps li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          padding: 1.5rem;
        }
        
        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(90deg, #ff8c00, #ff5e00);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .next-steps h4 {
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0 0 0.5rem 0;
        }
        
        .next-steps p {
          margin: 0 0 0.8rem 0;
          font-size: 0.95rem;
          color: #bbb;
        }
        
        .step-link {
          color: #ff8c00;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
        }
        
        .step-link:hover {
          text-decoration: underline;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }
        
        .feature {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .feature h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #fff;
        }
        
        .feature p {
          margin: 0;
          font-size: 0.95rem;
          color: #aaa;
        }
        
        .pricing-tiers {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }
        
        .pricing-tier {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .pricing-tier:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 140, 0, 0.3);
        }
        
        .tier-header {
          margin-bottom: 2rem;
        }
        
        .tier-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: #fff;
        }
        
        .tier-price {
          display: flex;
          align-items: baseline;
        }
        
        .price-currency {
          font-size: 1.5rem;
          font-weight: 500;
          color: #fff;
        }
        
        .price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
        }
        
        .price-period {
          color: #aaa;
          margin-left: 0.5rem;
        }
        
        .tier-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          flex-grow: 1;
        }
        
        .tier-features li {
          padding: 0.7rem 0;
          color: #bbb;
          font-size: 0.95rem;
          position: relative;
          padding-left: 1.8rem;
        }
        
        .tier-features li::before {
          content: "✓";
          color: #4cd964;
          position: absolute;
          left: 0;
        }
        
        .tier-cta {
          margin-top: auto;
          display: flex;
          justify-content: center;
        }
        
        .upgrade-button, .contact-button {
          width: 100%;
          padding: 0.8rem 0;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .upgrade-button {
          background: linear-gradient(90deg, #ff8c00, #ff5e00);
          color: white;
          border: none;
        }
        
        .contact-button {
          background: transparent;
          color: #ff8c00;
          border: 1px solid #ff8c00;
        }
        
        .upgrade-button:hover, .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 140, 0, 0.1);
        }
        
        .tier-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          color: #aaa;
          font-size: 0.9rem;
        }
        
        @media (max-width: 900px) {
          .pricing-tiers, .features-grid {
            grid-template-columns: 1fr;
          }
          
          .api-key-container {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .copy-button {
            margin-left: 0;
            margin-top: 1rem;
            align-self: flex-end;
          }
        }
        
        .info-section {
          padding: 2.5rem;
        }
        
        .info-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        
        .info-paragraph {
          margin-bottom: 1.8rem;
        }
        
        .info-paragraph:last-child {
          margin-bottom: 0;
        }
        
        .info-paragraph h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ff8c00;
          margin-bottom: 0.6rem;
        }
        
        .info-paragraph p {
          margin: 0;
          line-height: 1.7;
        }
        
        .info-features {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .dev-feature {
          display: flex;
          align-items: center;
          margin-bottom: 1.2rem;
        }
        
        .dev-feature:last-child {
          margin-bottom: 0;
        }
        
        .dev-feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          background: linear-gradient(135deg, #ff8a00, #ff5e00);
          color: white;
          flex-shrink: 0;
        }
        
        .dev-feature span {
          font-size: 1rem;
          color: #ddd;
        }

        @media (max-width: 900px) {
          .info-content {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 600px) {
          .developer-header h1 {
            font-size: 2rem;
          }
          
          .developer-description {
            font-size: 1rem;
          }
          
          .developer-card {
            padding: 1.5rem;
          }
          
          .account-type-options {
            grid-template-columns: 1fr;
          }
          
          .form-actions {
            justify-content: center;
          }
          
          .next-steps li {
            flex-direction: column;
          }
          
          .step-number {
            margin-bottom: 1rem;
          }
          
          .info-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DeveloperPortal;
