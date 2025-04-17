import logo from '../assets/logoclean.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="BitNet Logo" className="logo-image" />
              <h3>BitNet</h3>
            </div>
            <p className="brand-description">Fix Bitcoin. Fix the world.</p>
            
            <div className="footer-social">
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#github" className="social-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#discord" className="social-icon" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#jobs">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} BitNet. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: #0b0b0b;
          border-top: 1px solid #1f1f1f;
          padding: 4rem 2rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
        }
        
        .logo-image {
          height: 32px;
          width: auto;
        }
        
        .footer-logo h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        
        .brand-description {
          color: #999;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          text-align: left;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: rgba(255, 140, 0, 0.2);
          color: #ff8c00;
          transform: translateY(-3px);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .footer-links-column h4 {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1.2rem 0;
        }
        
        .footer-links-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links-column li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links-column a {
          color: #aaa;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .footer-links-column a:hover {
          color: #ff8c00;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .copyright p {
          color: #777;
          font-size: 0.85rem;
          margin: 0;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-bottom-links a {
          color: #777;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }
        
        .footer-bottom-links a:hover {
          color: #ff8c00;
        }
        
        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .footer-brand {
            max-width: 500px;
          }
          
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1.5rem 2rem;
          }
        }
        
        @media (max-width: 600px) {
          .footer {
            padding: 3rem 1rem 1.5rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .footer-bottom-links {
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer