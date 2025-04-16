import Header from '../components/Header';
import Footer from '../components/Footer';

const InvestorRelations = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1, padding: '4rem 2rem', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem'
            }}>
              Investor Relations
            </h1>
            <p style={{ 
              color: '#aaa', 
              fontSize: '1.2rem', 
              margin: '0 auto', 
              maxWidth: '1000px', 
              textAlign: 'center' 
            }}>
              BitNet is building the future of Bitcoin wallets. Learn about our vision, strategy, and investment opportunities.
            </p>
          </div>
          
          <div style={{ 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            background: '#111',
            height: '600px'
          }}>
            <iframe 
              src="https://www.canva.com/design/DAGh693KAtE/al8Rp6MaZmgEQDJqyiwSRQ/view?embed" 
              width="100%" 
              height="100%" 
              title="BitNet Investor Presentation"
              style={{ border: 'none' }}
              allow="fullscreen"
            />
          </div>
          
          <div style={{
            background: 'rgba(20, 20, 25, 0.5)',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{ 
              color: '#fff', 
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              Interested in investing?
            </h2>
            <p style={{ 
              color: '#ddd', 
              fontSize: '1.1rem',
              marginBottom: '1.5rem'
            }}>
              We're always looking for strategic partners who share our vision for the future of Bitcoin.
            </p>
            <a 
              href="mailto:contact@mybitnet.com" 
              style={{
                display: 'inline-block',
                padding: '0.65rem 2rem',
                background: 'linear-gradient(135deg, #ffa500, #ff5e00)',
                color: '#fff',
                borderRadius: '9999px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestorRelations;