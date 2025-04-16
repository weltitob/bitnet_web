import { useState } from 'react';
import { addEarlybirdSignup } from '../firebase/services';

const EarlybirdMobilePage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      padding: '40px 10px',
      background: '#f5f5f7',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="iphone-mockup" style={{
        maxWidth: '375px',
        width: '100%',
        height: '812px',
        background: '#0b0b0b',
        borderRadius: '45px',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.06)',
        border: '16px solid #000',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* iPhone Notch */}
        <div className="iphone-notch" style={{
          width: '50%',
          height: '30px',
          background: '#000',
          position: 'absolute',
          top: 0,
          left: '25%',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          zIndex: 10
        }}></div>

        {/* Black space at the top of iPhone before content starts */}
        <div style={{ height: '50px', background: '#0b0b0b' }}></div>
        
        {/* Screen Content */}
        <div className="iphone-screen" style={{ 
          flex: 1, 
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header */}
          <div style={{
            padding: '10px 16px',
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
                  height: '24px',
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
          <div style={{ flex: 1, padding: '20px 10px' }}>
            <div style={{
              width: '100%',
              padding: '10px 5px',
              textAlign: 'center',
              background: 'rgba(20, 20, 25, 0.7)',
              backdropFilter: 'blur(15px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  color: '#ff8c00',
                  fontSize: '15px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                  display: 'block'
                }}>Early Access</span>
                <h2 style={{
                  fontSize: '24px',
                  background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: '0 0 12px 0',
                  lineHeight: 1.2
                }}>Be an earlybird - get rewarded later.</h2>
                <p style={{ color: '#aaa', fontSize: '16px', margin: '0 auto', maxWidth: '320px', lineHeight: '1.4' }}>
                  Join the mailing list and be the first when we launch our services.
                </p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ marginBottom: '24px', width: '100%', padding: '0 15px' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '999px',
                        background: 'rgba(30, 30, 35, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#fff',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {error && <p style={{ color: '#ff5e5e', marginTop: '8px', fontSize: '14px' }}>{error}</p>}
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                      padding: '14px 0',
                      width: '100%',
                      borderRadius: '999px',
                      fontWeight: '600',
                      fontSize: '16px',
                      background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                      color: 'white',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      boxShadow: '0 4px 12px rgba(255, 94, 0, 0.3)'
                    }}
                  >
                    {loading ? 'Processing...' : 'Notify me!'}
                  </button>
                </form>
              ) : (
                <div style={{ 
                  background: 'rgba(0, 180, 0, 0.1)', 
                  border: '1px solid rgba(0, 180, 0, 0.3)', 
                  padding: '18px', 
                  borderRadius: '16px',
                  marginBottom: '24px',
                  margin: '0 15px'
                }}>
                  <h3 style={{ color: '#4ade80', marginBottom: '8px', fontSize: '18px' }}>Thank You!</h3>
                  <p style={{ color: '#ddd', fontSize: '15px', lineHeight: '1.4' }}>We saved your email and will notify you on launch day!</p>
                </div>
              )}
              
              <div style={{ 
                background: 'rgba(255, 140, 0, 0.1)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                borderRadius: '16px',
                padding: '18px',
                margin: '0 15px 15px'
              }}>
                <h3 style={{ color: '#ff8c00', marginBottom: '8px', fontSize: '18px' }}>Early Adopter Bonus</h3>
                <p style={{ color: '#ddd', fontSize: '15px', lineHeight: '1.5' }}>The first 1,000 users who sign up will receive special benefits when our platform launches.</p>
                <div style={{ marginTop: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#aaa', fontSize: '13px' }}>Spots remaining:</span>
                    <span style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>1,000,000</span>
                  </div>
                  <div style={{ 
                    height: '6px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '3px', 
                    marginTop: '8px', 
                    overflow: 'hidden' 
                  }}>
                    <div style={{ 
                      width: '90%', 
                      height: '100%', 
                      background: 'linear-gradient(to right, #ff8a00, #ff5e00)',
                      borderRadius: '3px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid #1f1f1f',
            textAlign: 'center'
          }}>
            <p style={{ color: '#777', fontSize: '12px', margin: 0 }}>© 2025 BitNet. All rights reserved.</p>
          </div>
        </div>
        
        {/* iPhone Home Indicator */}
        <div style={{
          width: '40%',
          height: '5px',
          background: '#ffffff',
          borderRadius: '3px',
          margin: '8px auto',
          marginBottom: '16px'
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