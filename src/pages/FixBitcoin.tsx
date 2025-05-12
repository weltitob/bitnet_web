import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// Create a simpler version with minimal effects to avoid loading issues
const FixBitcoin: React.FC = () => {
  // Clear any browser errors when component mounts
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes?.('browser is not defined') ||
          args[0]?.toString?.()?.includes?.('browser is not defined')) {
        // Suppress browser not defined errors
        return;
      }
      originalConsoleError(...args);
    };

    // Clean up
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO
        title="Fix Bitcoin, Fix the World | BitNet Solutions"
        description="Discover why hyperbitcoinization is key to fixing our broken financial system. Learn how Bitcoin can restore freedom, ownership, and long-term value."
        canonical="https://bitnet.ai/fixbitcoin"
        keywords="bitcoin, hyperbitcoinization, fix bitcoin, bitcoin wallet, financial freedom, bitcoin solutions"
      />
      <Header />
      <main style={{ flexGrow: 1, padding: '2rem 1rem', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          {/* Hero Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                marginBottom: '0',
                fontWeight: '800'
              }}>
                ⚡ <span style={{ color: '#ff8c00' }}>Fix Bitcoin.</span>
              </h1>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                marginTop: '0',
                fontWeight: '800',
                color: 'white'
              }}>
                Fix the <span style={{ color: '#ff8c00' }}>World.</span>
              </h1>
              <p style={{ 
                color: '#aaa', 
                fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
                margin: '1rem auto 0', 
                maxWidth: '90%',
                fontWeight: '300',
                letterSpacing: '0.5px'
              }}>
                Why Hyperbitcoinization Will Fix the World
              </p>
            </div>
          </div>

          {/* Content */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '3rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '3rem',
            color: '#e0e0e0'
          }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem' }}>
              The <span style={{ color: '#ff8c00' }}>System is Broken</span> — and So is <span style={{ color: '#ff8c00' }}>Society</span>
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              A <span style={{ color: '#ff8c00', fontWeight: '500' }}>broken financial system</span> leads to a <span style={{ color: '#ff8c00', fontWeight: '500' }}>broken society</span>
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 1.5rem' }}>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                <span style={{ position: 'absolute', left: 0, top: '0.6rem', width: '8px', height: '8px', background: '#ff8c00', borderRadius: '50%' }}></span>
                The rich keep getting richer — not because they're smarter, but because the rules are written in their favor
              </li>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                <span style={{ position: 'absolute', left: 0, top: '0.6rem', width: '8px', height: '8px', background: '#ff8c00', borderRadius: '50%' }}></span>
                The gap between rich and poor isn't just widening, it's becoming a chasm that swallows opportunity
              </li>
              <li style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                <span style={{ position: 'absolute', left: 0, top: '0.6rem', width: '8px', height: '8px', background: '#ff8c00', borderRadius: '50%' }}></span>
                Wages are stagnant, debt is rising, and the middle class is disappearing
              </li>
            </ul>
          </div>

          {/* Bitcoin Solution */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '3rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '3rem',
            color: '#e0e0e0'
          }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem' }}>
              Enter <span style={{ color: '#ff8c00' }}>Bitcoin</span>: The Technology of <span style={{ color: '#ff8c00' }}>Freedom</span>
            </h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              <div style={{ borderRadius: '16px', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ color: '#ff8c00', marginBottom: '1rem' }}>Save Again</h3>
                <p>With Bitcoin, people can save again — in a currency that can't be printed away</p>
              </div>
              <div style={{ borderRadius: '16px', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ color: '#ff8c00', marginBottom: '1rem' }}>Own Again</h3>
                <p>With Bitcoin, people can own again — truly own, without counterparty risk</p>
              </div>
              <div style={{ borderRadius: '16px', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ color: '#ff8c00', marginBottom: '1rem' }}>Have Power Again</h3>
                <p>With Bitcoin, people have power again — not just to consume, but to build</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            position: 'relative',
            margin: '0 auto'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 6vw, 3rem)', 
              color: '#fff',
              marginBottom: '2rem'
            }}>
              <span style={{ color: '#ff8c00' }}>Join</span> the <span style={{ color: '#ff8c00' }}>Movement</span>
            </h2>
            
            <div style={{ 
              fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#e0e0e0',
              marginBottom: '2rem'
            }}>
              <p>We don't ask for permission</p>
              <p>We don't beg for reform</p>
              <p>We build the future we want</p>
              <p>One block at a time</p>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '1rem 3rem',
                  background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                  color: '#fff',
                  borderRadius: '9999px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1px solid transparent',
                  boxShadow: '0 6px 25px rgba(255, 140, 0, 0.3)'
                }}
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FixBitcoin;