import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addEarlybirdSignup, useEarlybirdCount } from '../firebase/services';

const EarlybirdPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { formattedRemaining, loading: countLoading } = useEarlybirdCount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    try {
      setLoading(true);
      // Send the email to Firebase
      await addEarlybirdSignup(email);
      
      // Show success state
      setSubmitted(true);
      setError('');
    } catch (err: any) {
      if (err.message === 'Email already registered') {
        setError('This email is already registered. Thank you for your interest!');
      } else {
        setError('An error occurred. Please try again later.');
        console.error('Error saving email:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0b0b' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        <section className="earlybird-signup-section" style={{ 
          padding: '7rem 2rem',
          background: 'linear-gradient(180deg, rgba(15, 15, 20, 0.8) 0%, rgba(15, 15, 20, 0) 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 200px)'
        }}>
          <div className="signup-container" style={{
            maxWidth: '1050px',
            width: '100%',
            background: 'rgba(20, 20, 25, 0.7)',
            backdropFilter: 'blur(15px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <div className="signup-header" style={{ marginBottom: '2.5rem' }}>
              <span style={{
                color: '#ff8c00',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                display: 'block'
              }}>Early Access</span>
              <h2 style={{
                fontSize: '2.2rem',
                background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.2
              }}>Be an earlybird - get rewarded later.</h2>
              <p style={{ color: '#aaa', fontSize: '1.1rem', margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
                Join the mailing list and be the first when we launch our services.
              </p>
            </div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ marginBottom: '2.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      borderRadius: '999px',
                      background: 'rgba(30, 30, 35, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  {error && <p style={{ color: '#ff5e5e', marginTop: '0.5rem', fontSize: '0.9rem' }}>{error}</p>}
                </div>
                <button 
                  type="submit" 
                  className="btn primary"
                  disabled={loading}
                  style={{
                    padding: '0.8rem 3rem',
                    minWidth: '180px',
                    borderRadius: '999px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {loading ? 'Processing...' : 'Notify me!'}
                </button>
              </form>
            ) : (
              <div className="success-message" style={{ 
                background: 'rgba(0, 180, 0, 0.1)', 
                border: '1px solid rgba(0, 180, 0, 0.3)', 
                padding: '1.5rem', 
                borderRadius: '1rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ color: '#ddd' }}>We saved your email and will notify you on launch day!</p>
              </div>
            )}
            
            <div className="nft-teaser" style={{ 
              background: 'rgba(255, 140, 0, 0.1)',
              border: '1px solid rgba(255, 140, 0, 0.2)',
              borderRadius: '1rem',
              padding: '1.8rem',
              marginTop: '0.5rem'
            }}>
              <h3 style={{ color: '#ff8c00', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Early Adopter Bonus</h3>
              <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: '1.5' }}>The first 1,000 users who sign up will receive special benefits when our platform launches.</p>
              <div className="spots-counter" style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Spots remaining:</span>
                  <span id="spots-counter" style={{ 
                    color: '#fff', 
                    fontWeight: '600', 
                    fontSize: '1.1rem',
                    fontFeatureSettings: "'tnum'",
                    fontVariantNumeric: "tabular-nums",
                    fontFamily: "'JetBrains Mono', monospace, sans-serif",
                    minWidth: "120px",
                    display: "inline-block",
                    textAlign: "right"
                  }}>
                    {countLoading ? "Loading..." : formattedRemaining}
                  </span>
                </div>
                <div style={{ 
                  height: '8px', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: '4px', 
                  marginTop: '0.5rem', 
                  overflow: 'hidden' 
                }}>
                  <div style={{ 
                    width: countLoading ? '10%' : `${Math.min(100 - (parseInt(formattedRemaining.replace(/,/g, '')) / 1000000) * 100, 100)}%`, 
                    height: '100%', 
                    background: 'linear-gradient(to right, #ff8a00, #ff5e00)',
                    borderRadius: '4px',
                    transition: 'width 0.5s ease-in-out'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EarlybirdPage;