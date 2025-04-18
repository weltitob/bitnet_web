import { useState } from 'react';
import { addEarlybirdSignup, useEarlybirdCount } from '../firebase/services';

const EarlybirdMobilePage = () => {
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
    <div className="iphone-mockup-container" style={{ 
      padding: '20px 14px',
      background: '#f5f5f7',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="iphone-mockup" style={{
        maxWidth: '350px',
        width: '100%',
        height: '740px',
        background: '#0b0b0b',
        borderRadius: '36px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.06)',
        border: '10px solid #000',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* iPhone Notch */}
        <div className="iphone-notch" style={{
          width: '45%',
          height: '25px',
          background: '#000',
          position: 'absolute',
          top: 0,
          left: '27.5%',
          borderBottomLeftRadius: '18px',
          borderBottomRightRadius: '18px',
          zIndex: 10
        }}></div>

        {/* Black space at the top of iPhone before content starts */}
        <div style={{ height: '40px', background: '#0b0b0b' }}></div>
        
        {/* Screen Content */}
        <div className="iphone-screen" style={{ 
          flex: 1, 
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
          background: '#0b0b0b'
        }}>
          {/* Header */}
          <div style={{
            padding: '8px 10px',
            background: '#0b0b0b',
            borderBottom: '1px solid #1f1f1f',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 5
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="/src/assets/logoclean.png" 
                alt="BitNet Logo" 
                style={{
                  height: '22px',
                  width: 'auto'
                }}
              />
              <span style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff'
              }}>BitNet</span>
            </div>
            <div style={{ width: '24px' }}></div> {/* Placeholder for balance */}
          </div>
          
          {/* Main Content */}
          <div style={{ flex: 1, padding: '12px 10px' }}>
            <div style={{
              width: '100%',
              padding: '14px 10px',
              textAlign: 'center',
              background: 'rgba(20, 20, 25, 0.7)',
              backdropFilter: 'blur(15px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  color: '#ff8c00',
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '4px',
                  display: 'block'
                }}>Early Access</span>
                <h2 style={{
                  fontSize: '22px',
                  background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: '0 0 6px 0',
                  lineHeight: 1.2
                }}>Be an earlybird - get rewarded later.</h2>
                <p style={{ color: '#aaa', fontSize: '14px', margin: '0 auto', maxWidth: '100%', lineHeight: '1.4' }}>
                  Join the mailing list and be the first when we launch our services.
                </p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ marginBottom: '18px', width: '100%', padding: '0' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '999px',
                        background: 'rgba(30, 30, 35, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    {error && <p style={{ color: '#ff5e5e', marginTop: '6px', fontSize: '13px' }}>{error}</p>}
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                      padding: '12px 0',
                      width: '100%',
                      borderRadius: '999px',
                      fontWeight: '600',
                      fontSize: '14px',
                      background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                      color: 'white',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      boxShadow: '0 4px 15px rgba(255, 94, 0, 0.3)',
                      marginTop: '6px'
                    }}
                  >
                    {loading ? 'Processing...' : 'Notify me!'}
                  </button>
                </form>
              ) : (
                <div style={{ 
                  background: 'rgba(0, 180, 0, 0.1)', 
                  border: '1px solid rgba(0, 180, 0, 0.3)', 
                  padding: '12px 8px', 
                  borderRadius: '16px',
                  marginBottom: '18px'
                }}>
                  <h3 style={{ color: '#4ade80', marginBottom: '6px', fontSize: '17px' }}>Thank You!</h3>
                  <p style={{ color: '#ddd', fontSize: '14px', lineHeight: '1.4' }}>We saved your email and will notify you on launch day!</p>
                </div>
              )}
              
              <div style={{ 
                background: 'rgba(255, 140, 0, 0.1)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                borderRadius: '16px',
                padding: '12px 8px',
                marginBottom: '10px'
              }}>
                <h3 style={{ color: '#ff8c00', marginBottom: '4px', fontSize: '16px' }}>Early Adopter Bonus</h3>
                <p style={{ color: '#ddd', fontSize: '12px', lineHeight: '1.4', marginBottom: '8px' }}>The first 1,000 users who sign up will receive special benefits when our platform launches.</p>
                <div style={{ marginTop: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#aaa', fontSize: '12px' }}>Spots remaining:</span>
                    <span style={{ 
                      color: '#fff', 
                      fontWeight: '600', 
                      fontSize: '13px',
                      fontFeatureSettings: "'tnum'",
                      fontVariantNumeric: "tabular-nums",
                      fontFamily: "'JetBrains Mono', monospace, sans-serif",
                      minWidth: "70px",
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
                    marginTop: '5px', 
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
          </div>
          
          {/* Footer */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #1f1f1f',
            textAlign: 'center',
            marginTop: 'auto'
          }}>
            <p style={{ color: '#777', fontSize: '11px', margin: 0 }}>© 2025 BitNet. All rights reserved.</p>
          </div>
        </div>
        
        {/* iPhone Home Indicator */}
        <div style={{
          width: '35%',
          height: '4px',
          background: '#ffffff',
          borderRadius: '2px',
          margin: '5px auto',
          marginBottom: '10px'
        }}></div>
      </div>
      
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <p style={{ 
          color: '#666', 
          fontSize: '14px',
          maxWidth: '375px',
          margin: '0 auto'
        }}>Mobile preview of BitNet Early Bird Signup</p>
      </div>
    </div>
  );
};

export default EarlybirdMobilePage;