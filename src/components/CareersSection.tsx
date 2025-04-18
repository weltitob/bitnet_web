const CareersSection = () => {
  return (
    <section id="jobs" className="careers-section">
      <div className="careers-container">
        <div className="careers-header">
          <span className="careers-subtitle">Join Our Team</span>
          <h2>Careers at BitNet</h2>
        </div>
        
        <div className="careers-content">
          <p style={{ color: '#aaa', fontSize: '1.2rem', margin: '0 auto 4rem', maxWidth: '1050px', textAlign: 'center' }}>We're seeking exceptional creators and innovators passionate about our mission: an open, accessible, and empowering Bitcoin for all. Help us fix Bitcoin, help fix the world.</p>
          
          <div className="job-positions">
            <div className="job-card">
              <div className="job-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="M9 12h6"></path>
                  <path d="M9 16h6"></path>
                </svg>
              </div>
              <div className="job-content">
                <h3>Taproot Assets Developer</h3>
                <span className="job-location">Remote • Full-time</span>
                <p>Backend developer with Lightning Labs LND and TAPD experience.</p>
                <a href="mailto:contact@mybitnet.com" className="job-apply-btn">Apply Now</a>
              </div>
            </div>
          </div>
          
          <div className="careers-cta">
            <p>Don't see the right position? We're always looking for exceptional talent.</p>
            <a href="#contact" className="btn secondary">Contact Us</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .careers-section {
          padding: 7rem 2rem;
          background: linear-gradient(180deg, rgba(15, 15, 20, 0.8) 0%, rgba(15, 15, 20, 0) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .careers-container {
          max-width: 1050px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .careers-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .careers-subtitle {
          display: inline-block;
          color: #ff8c00;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .careers-header h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1.2;
        }
        
        .careers-content {
          color: #ddd;
          font-size: 1.1rem;
          line-height: 1.6;
          text-align: center;
        }
        
        .careers-content > p {
          max-width: 1050px;
          margin: 0 auto 4rem;
        }
        
        .job-positions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .job-card {
          background: rgba(20, 20, 25, 0.7);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          padding: 2rem;
          text-align: left;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .job-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .job-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff8a00, #ff5e00);
          color: white;
          border-radius: 8px;
          padding: 6px;
          margin-bottom: 1.2rem;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(255, 94, 0, 0.3);
        }
        
        .job-card:hover .job-icon {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(255, 94, 0, 0.4);
        }
        
        .job-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .job-content h3 {
          font-size: 1.3rem;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        
        .job-location {
          font-size: 0.9rem;
          color: #aaa;
          margin-bottom: 1rem;
          display: block;
        }
        
        .job-content p {
          font-size: 0.95rem;
          color: #bbb;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }
        
        .job-apply-btn {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: rgba(255, 140, 0, 0.15);
          color: #ff8c00;
          border: 1px solid rgba(255, 140, 0, 0.3);
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        
        .job-apply-btn:hover {
          background: rgba(255, 140, 0, 0.25);
          border-color: rgba(255, 140, 0, 0.5);
          transform: translateY(-2px);
        }
        
        .careers-cta {
          margin-top: 2rem;
          background: rgba(20, 20, 25, 0.5);
          border-radius: 1rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }
        
        .careers-cta p {
          margin: 0;
          font-size: 1.1rem;
          color: #ddd;
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
        }
        
        .btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn.secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .careers-section {
            padding: 5rem 1.5rem;
          }
          
          .careers-header h2 {
            font-size: 2.2rem;
          }
          
          .careers-content {
            font-size: 1rem;
          }
          
          .job-positions {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          
          .job-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 600px) {
          .careers-section {
            padding: 4rem 1rem;
          }
          
          .careers-header h2 {
            font-size: 1.8rem;
          }
          
          .careers-subtitle {
            font-size: 0.9rem;
          }
          
          .careers-content {
            font-size: 0.95rem;
          }
          
          .job-positions {
            grid-template-columns: 1fr;
          }
          
          .job-card {
            padding: 1.5rem;
          }
          
          .job-content h3 {
            font-size: 1.2rem;
          }
          
          .careers-cta {
            padding: 1.5rem;
          }
          
          .careers-cta p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default CareersSection