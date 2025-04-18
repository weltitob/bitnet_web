import { useState } from 'react';
import { sendContactMessage } from '../firebase/services';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{ success: boolean; message: string } | null>(null);
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">Get In Touch</span>
          <h2>Contact Us</h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>Have a question or want to learn more about BitNet? We'd love to hear from you.</p>
        </div>
        
        <div className="contact-form-container">
          <div className="contact-info">
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Chat With Us</h3>
                <p>Our team is available on our community Discord for quick questions and support.</p>
                <a href="#discord" className="contact-link">Join Discord</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>For business inquiries and partnerships, reach out to our team via email.</p>
                <a href="mailto:contact@mybitnet.com" className="contact-link">contact@mybitnet.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Follow Us</h3>
                <p>Stay updated with our latest news and developments on social media.</p>
                <div className="social-links">
                  <a href="#twitter" className="social-link">Twitter</a>
                  <a href="#linkedin" className="social-link">LinkedIn</a>
                  <a href="#github" className="social-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              
              // Validate form
              if (!email || !subject || !message) {
                setSendStatus({
                  success: false,
                  message: 'Please fill in all fields'
                });
                return;
              }
              
              // Basic email validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                setSendStatus({
                  success: false,
                  message: 'Please enter a valid email address'
                });
                return;
              }
              
              // Send message to Firebase
              try {
                setIsSending(true);
                await sendContactMessage({
                  email,
                  subject,
                  message
                });
                
                // Success
                setSendStatus({
                  success: true,
                  message: 'Your message has been sent successfully!'
                });
                
                // Clear form
                setEmail('');
                setSubject('');
                setMessage('');
              } catch (error) {
                console.error('Error sending message:', error);
                setSendStatus({
                  success: false,
                  message: 'Failed to send message. Please try again later.'
                });
              } finally {
                setIsSending(false);
              }
            }}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="What's this about?" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us more..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              
              {sendStatus && (
                <div className={`form-status ${sendStatus.success ? 'success' : 'error'}`}>
                  {sendStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn primary"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-section {
          padding: 7rem 2rem;
          background: linear-gradient(180deg, rgba(15, 15, 20, 0) 0%, rgba(15, 15, 20, 0.8) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .contact-container {
          max-width: 1050px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .contact-subtitle {
          display: inline-block;
          color: #ff8c00;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .contact-header h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }
        
        .contact-header p {
          font-size: 1.1rem;
          color: #ccc;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-form-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: flex-start;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-method {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: rgba(20, 20, 25, 0.7);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 1rem;
          padding: 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .contact-method:hover {
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          transform: translateY(-5px);
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff8a00, #ff5e00);
          color: white;
          border-radius: 8px;
          padding: 6px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(255, 94, 0, 0.3);
        }
        
        .contact-method:hover .contact-icon {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(255, 94, 0, 0.4);
        }
        
        .contact-details {
          flex-grow: 1;
        }
        
        .contact-details h3 {
          font-size: 1.2rem;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        
        .contact-details p {
          font-size: 0.95rem;
          color: #bbb;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .contact-link {
          display: inline-block;
          color: #ff8c00;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #ffa533;
          text-decoration: underline;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .social-link {
          display: inline-block;
          color: #ff8c00;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #ffa533;
          text-decoration: underline;
        }
        
        .contact-form {
          background: rgba(20, 20, 25, 0.7);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 1rem;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .contact-form h3 {
          font-size: 1.4rem;
          color: #fff;
          margin: 0 0 1.5rem 0;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          font-size: 0.9rem;
          color: #ccc;
          margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          background: rgba(30, 30, 40, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          background: rgba(40, 40, 50, 0.7);
          border-color: rgba(255, 140, 0, 0.5);
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.2);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }
        
        .btn {
          padding: 0.65rem 2rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s, color 0.3s, opacity 0.3s, border 0.3s;
          border: 1px solid transparent;
          display: inline-block;
          text-align: center;
          cursor: pointer;
        }
        
        .btn.primary {
          background: linear-gradient(135deg, #ffa500, #ff5e00);
          color: #fff;
          border-color: transparent;
          font-size: 0.95rem;
        }
        
        .btn.primary:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(255, 94, 0, 0.3);
        }
        
        @media (max-width: 900px) {
          .contact-form-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .contact-info {
            order: 2;
          }
          
          .contact-form {
            order: 1;
          }
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 5rem 1.5rem;
          }
          
          .contact-header h2 {
            font-size: 2.2rem;
          }
          
          .contact-header p {
            font-size: 1rem;
          }
          
          .contact-method {
            padding: 1.5rem;
          }
        }
        
        /* Status message styling */
        .form-status {
          margin-bottom: 1.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        
        .form-status.success {
          background: rgba(0, 200, 83, 0.15);
          border: 1px solid rgba(0, 200, 83, 0.3);
          color: #2ecc71;
        }
        
        .form-status.error {
          background: rgba(231, 76, 60, 0.15);
          border: 1px solid rgba(231, 76, 60, 0.3);
          color: #e74c3c;
        }
        
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        @media (max-width: 600px) {
          .contact-section {
            padding: 4rem 1rem;
          }
          
          .contact-header h2 {
            font-size: 1.8rem;
          }
          
          .contact-subtitle {
            font-size: 0.9rem;
          }
          
          .contact-header p {
            font-size: 0.95rem;
          }
          
          .contact-method {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            padding: 1.5rem;
          }
          
          .contact-form {
            padding: 1.5rem;
          }
          
          .contact-form h3 {
            font-size: 1.2rem;
            margin-bottom: 1.2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactSection