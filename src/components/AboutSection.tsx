import tobiasImage from '../assets/team/tobias.jpeg';
import izakImage from '../assets/team/izak.jpg';
import ulrichImage from '../assets/team/ulrich.png';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-subtitle">About Us</span>
          <h2>Building the Future of Bitcoin</h2>
        </div>
        
        <div className="about-content">
          <p style={{ color: '#aaa', fontSize: '1.2rem', margin: '0 auto 4rem', maxWidth: '1000px', textAlign: 'center' }}>We're forging a financial revolution through self-custody, security, and speed. BitNet builds technology that puts the power of Bitcoin in your hands — no middlemen, no gatekeepers, just freedom. We're not just creating a wallet; we're building a gateway to a world where you truly own your financial future.</p>
          
          <div className="about-team-grid">
            <div className="team-member">
              <img src={tobiasImage} alt="Tobias Welti" className="member-image" style={{ objectFit: 'cover' }} />
              <h3>Tobias Welti</h3>
              <span>Techlead, Founder & CEO</span>
            </div>
            
            <div className="team-member">
              <img src={izakImage} alt="Izak Abdullah Al" className="member-image" style={{ objectFit: 'cover' }} />
              <h3>Izak Abdullah Al</h3>
              <span>Fullstack Developer</span>
            </div>
            
            <div className="team-member">
              <img src={ulrichImage} alt="Edwin Daitche" className="member-image" style={{ objectFit: 'cover' }} />
              <h3>Edwin Daitche</h3>
              <span>IT Security & Infrastructure Specialist</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-section {
          padding: 7rem 2rem;
          background: linear-gradient(180deg, rgba(15, 15, 20, 0) 0%, rgba(15, 15, 20, 0.8) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .about-container {
          max-width: 1050px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .about-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .about-subtitle {
          display: inline-block;
          color: #ff8c00;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .about-header h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1.2;
        }
        
        .about-content {
          color: #ddd;
          font-size: 1.1rem;
          line-height: 1.6;
          text-align: center;
        }
        
        .about-content p {
          max-width: 1000px;
          margin: 0 auto 4rem;
        }
        
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 2rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .team-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .team-member:hover {
          transform: translateY(-10px);
        }
        
        .member-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        
        .team-member:hover .member-image {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }
        
        .team-member h3 {
          font-size: 1.3rem;
          color: #fff;
          margin: 0 0 0.3rem 0;
        }
        
        .team-member span {
          font-size: 0.9rem;
          color: #aaa;
        }
        
        .founder-website {
          font-size: 0.85rem;
          color: #ff8c00;
          margin-top: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .founder-website:hover {
          color: #ffa533;
        }
        
        .founder-website::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #ff8c00;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }
        
        .founder-website:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        
        @media (max-width: 992px) {
          .about-team-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 5rem 1.5rem;
          }
          
          .about-header h2 {
            font-size: 2.2rem;
          }
          
          .about-content {
            font-size: 1rem;
          }
          
          .about-team-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          
          .member-image {
            width: 110px;
            height: 110px;
          }
        }
        
        @media (max-width: 600px) {
          .about-section {
            padding: 4rem 1rem;
          }
          
          .about-header h2 {
            font-size: 1.8rem;
          }
          
          .about-subtitle {
            font-size: 0.9rem;
          }
          
          .about-content {
            font-size: 0.95rem;
          }
          
          .about-team-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 3rem;
            max-width: 300px;
          }
          
          .member-image {
            width: 130px;
            height: 130px;
          }
          
          .team-member h3 {
            font-size: 1.2rem;
          }
          
          .team-member span {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection