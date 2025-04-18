const MissionSection = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        <div className="mission-graphics">
          <div className="mission-bg-glow"></div>
        </div>
        
        <div className="mission-content">
          <div className="mission-header">
            <span className="mission-subtitle">Our Mission</span>
            <h2>Bitcoin Freedom for Everyone</h2>
          </div>
          
          <div className="mission-body">
            <p style={{ color: '#aaa', fontSize: '1.2rem', margin: '0 auto 2.5rem', maxWidth: '800px', textAlign: 'center' }}>Making Bitcoin accessible to all by reimagining how you send, save, and use money in the digital age.</p>
            
            <div className="mission-values">
              <div className="mission-value">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Self-Custody</h3>
                  <p>Your keys, your coins. Complete ownership without third-party dependencies.</p>
                </div>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Security First</h3>
                  <p>Strongest protection for your bitcoin, built into our foundation.</p>
                </div>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Decentralized</h3>
                  <p>Resilient architecture with no central control or single point of failure.</p>
                </div>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
                    <polyline points="4 12 12 16 20 12"></polyline>
                    <polyline points="4 16 12 20 20 16"></polyline>
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Fast & Affordable</h3>
                  <p>Lightning-fast transactions with minimal fees, making Bitcoin practical for daily use.</p>
                </div>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="value-content">
                  <h3>User Empowerment</h3>
                  <p>You own your assets. We're giving power back to the players, not the platforms.</p>
                </div>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <polyline points="16 3 12 7 8 3"></polyline>
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Financial Freedom</h3>
                  <p>Enabling direct peer-to-peer commerce without third-party gatekeepers.</p>
                </div>
              </div>
            </div>
            
            <a href="/fixbitcoin" style={{ textDecoration: 'none' }}>
              <div className="fix-bitcoin-banner" style={{ marginTop: '3rem', cursor: 'pointer' }}>
                <div className="fix-bitcoin-content">
                  <div className="fix-bitcoin-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  </div>
                  <div className="fix-bitcoin-text">
                    <h4>
                      <span style={{ color: '#ff8c00' }}>Fix Bitcoin</span>. Fix the <span style={{ color: '#ff8c00' }}>World</span>.
                    </h4>
                    <p>Learn why we believe Bitcoin will fix the world</p>
                  </div>
                  <div className="fix-bitcoin-button">Learn More</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .mission-section {
          padding: 7rem 2rem;
          background: linear-gradient(180deg, rgba(15, 15, 20, 0.8) 0%, rgba(15, 15, 20, 0) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .mission-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .mission-graphics {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: -1;
        }
        
        .mission-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 136, 0, 0.1) 0%, rgba(255, 136, 0, 0) 70%);
          border-radius: 50%;
          z-index: -1;
        }
        
        .mission-content {
          max-width: 1050px;
          width: 100%;
          margin: 0 auto;
        }
        
        .mission-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .mission-subtitle {
          display: inline-block;
          color: #ff8c00;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .mission-header h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1.2;
        }
        
        .mission-body {
          color: #ddd;
          font-size: 1rem;
          line-height: 1.5;
          text-align: center;
        }
        
        .mission-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.3rem;
          margin-top: 2.5rem;
        }
        
        .mission-value {
          background: rgba(20, 20, 25, 0.7);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 1rem;
          padding: 1.6rem 1.8rem;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          min-height: 185px;
          width: 100%;
        }
        
        .mission-value:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .value-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff8a00, #ff5e00);
          color: white;
          border-radius: 8px;
          padding: 8px;
          margin-bottom: 1.2rem;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(255, 94, 0, 0.3);
          align-self: flex-start;
        }
        
        .mission-value:hover .value-icon {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(255, 94, 0, 0.4);
        }
        
        .value-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.6rem 0;
          letter-spacing: 0.01em;
        }
        
        .value-content p {
          font-size: 0.9rem;
          color: #aaa;
          margin: 0;
          line-height: 1.5;
          font-weight: 400;
        }
        
        @media (max-width: 992px) {
          .mission-values {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .mission-section {
            padding: 5rem 1.5rem;
          }
          
          .mission-header h2 {
            font-size: 2.2rem;
          }
          
          .mission-body {
            font-size: 1rem;
          }
          
          .mission-values {
            gap: 1.5rem;
          }
          
          .mission-value {
            min-height: 180px;
          }
        }
        
        @media (max-width: 600px) {
          .mission-section {
            padding: 4rem 1rem;
          }
          
          .mission-header h2 {
            font-size: 1.8rem;
          }
          
          .mission-subtitle {
            font-size: 0.9rem;
          }
          
          .mission-body {
            font-size: 0.95rem;
          }
          
          .mission-values {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          
          .mission-value {
            padding: 1.25rem;
            max-width: 350px;
            margin: 0 auto;
            min-height: auto;
          }
          
          .value-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 1.2rem;
            padding: 6px;
          }
          
          .value-content h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
          
          .value-content p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}

export default MissionSection