import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { addEarlybirdSignup, useEarlybirdCount } from '../firebase/services';

const EarlybirdPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { formattedRemaining, loading: countLoading } = useEarlybirdCount();
  
  useEffect(() => {
    // Function to handle window resize events
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Responsive styles
  const responsiveStyles = {
    section: {
      padding: isMobile ? '2rem 1rem' : '7rem 2rem',
      background: 'linear-gradient(180deg, rgba(15, 15, 20, 0.8) 0%, rgba(15, 15, 20, 0) 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? 'calc(100vh - 150px)' : 'calc(100vh - 200px)'
    },
    container: {
      maxWidth: '1050px',
      width: '100%',
      background: 'rgba(20, 20, 25, 0.7)',
      backdropFilter: 'blur(15px)',
      borderRadius: isMobile ? '0.8rem' : '1rem',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      padding: isMobile ? '1.5rem 1rem' : '3rem',
      textAlign: 'center'
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0b0b' }}>
      <SEO 
        title="Early Access | BitNet Bitcoin Wallet | Get Exclusive Benefits"
        description="Sign up for early access to BitNet's Bitcoin wallet and secure exclusive benefits. Limited spots available for our self-custody Bitcoin solution with Lightning Network support."
        canonical="https://www.bitnet.com/earlybird"
        keywords="bitcoin wallet, early access, bitcoin app, self-custody, lightning network, exclusive benefits"
      />
      <Header />
      
      <main style={{ flex: 1 }}>
        <section className="earlybird-signup-section" style={responsiveStyles.section}>
          <div className="signup-container" style={responsiveStyles.container}>
            <div className="signup-header" style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
              <span style={{
                color: '#ff8c00',
                fontSize: isMobile ? '0.85rem' : '1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: isMobile ? '0.5rem' : '1rem',
                display: 'block'
              }}>Early Access</span>
              <h2 style={{
                fontSize: isMobile ? '1.6rem' : '2.2rem',
                background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.2
              }}>Be an earlybird - get rewarded later.</h2>
              <p style={{ 
                color: '#aaa', 
                fontSize: isMobile ? '0.95rem' : '1.1rem', 
                margin: '0 auto', 
                maxWidth: isMobile ? '100%' : '800px', 
                textAlign: 'center' 
              }}>
                Join the mailing list and be the first when we launch our services.
              </p>
            </div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                <div style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    style={{
                      width: '100%',
                      padding: isMobile ? '0.8rem 1.2rem' : '1rem 1.5rem',
                      borderRadius: '999px',
                      background: 'rgba(30, 30, 35, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#fff',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  {error && <p style={{ color: '#ff5e5e', marginTop: isMobile ? '0.3rem' : '0.5rem', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{error}</p>}
                </div>
                <button 
                  type="submit" 
                  className="btn primary"
                  disabled={loading}
                  style={{
                    padding: isMobile ? '0.8rem 0' : '0.8rem 3rem',
                    width: isMobile ? '100%' : 'auto',
                    minWidth: isMobile ? 'auto' : '180px',
                    borderRadius: '999px',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 94, 0, 0.3)'
                  }}
                >
                  {loading ? 'Processing...' : 'Notify me!'}
                </button>
              </form>
            ) : (
              <div className="success-message" style={{ 
                background: 'rgba(0, 180, 0, 0.1)', 
                border: '1px solid rgba(0, 180, 0, 0.3)', 
                padding: isMobile ? '1rem' : '1.5rem', 
                borderRadius: isMobile ? '0.8rem' : '1rem',
                marginBottom: isMobile ? '1.5rem' : '2rem'
              }}>
                <h3 style={{ color: '#4ade80', marginBottom: isMobile ? '0.3rem' : '0.5rem', fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Thank You!</h3>
                <p style={{ color: '#ddd', fontSize: isMobile ? '0.9rem' : '1rem' }}>We saved your email and will notify you on launch day!</p>
              </div>
            )}
            
            <div className="nft-teaser" style={{ 
              background: 'rgba(255, 140, 0, 0.1)',
              border: '1px solid rgba(255, 140, 0, 0.2)',
              borderRadius: isMobile ? '0.8rem' : '1rem',
              padding: isMobile ? '1.2rem 1rem' : '1.8rem',
              marginTop: '0.5rem'
            }}>
              <h3 style={{ 
                color: '#ff8c00', 
                marginBottom: isMobile ? '0.3rem' : '0.5rem', 
                fontSize: isMobile ? '1rem' : '1.2rem' 
              }}>Early Adopter Bonus</h3>
              <p style={{ 
                color: '#ddd', 
                fontSize: isMobile ? '0.85rem' : '0.95rem', 
                lineHeight: '1.5' 
              }}>
                The first 1,000 users who sign up will receive special benefits when our platform launches.
              </p>
              <div className="spots-counter" style={{ marginTop: isMobile ? '0.7rem' : '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#aaa', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Spots remaining:</span>
                  <span id="spots-counter" style={{ 
                    color: '#fff', 
                    fontWeight: '600', 
                    fontSize: isMobile ? '0.95rem' : '1.1rem',
                    fontFeatureSettings: "'tnum'",
                    fontVariantNumeric: "tabular-nums",
                    fontFamily: "'JetBrains Mono', monospace, sans-serif",
                    minWidth: isMobile ? "90px" : "120px",
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
                  marginTop: isMobile ? '0.4rem' : '0.5rem', 
                  overflow: 'hidden',
                  width: '100%'
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