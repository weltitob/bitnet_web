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
              <a href="https://x.com/BitNet69" className="social-icon" aria-label="X (formerly Twitter)" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l7.05 8.5L4 19h2.5l5.45-5.5L16.5 19H20l-7.05-8.5L20 4h-2.5l-5.45 5.5L7.5 4z"></path>
                </svg>
              </a>
              <a href="https://t.me/weltitob" className="social-icon" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.666c-.81.375-1.323 1.237-.875 1.85.304.42.889.62 1.446.624.34.001 1.034-.234 1.034-.234l3.832-1.788c.93-.43 1.538.394.809.81l-5.29 3.968c-.728.552-.677 1.3-.233 1.718.448.414 1.133.453 1.588.236l1.732-.992c.843-.48 1.75.238 1.343.983l-1.86 3.402c-.463.847.4 1.45 1.243 1.107l.792-.398c.807-.406 1.672.39 1.323 1.147l-1.866 4.058c-.508 1.103.611 2.049 1.677 1.362l12.313-7.924c.866-.56 1.067-1.9.405-2.7L23.38 5.397c-.252-.304-.51-.555-1.098-.63-.206-.027-1.084-.334-1.084-.334z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>BitNet</h4>
              <ul>
                <li><a href="/#hero">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#mission">Mission</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="/#contact">Contact Us</a></li>
                <li><a href="https://t.me/weltitob" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="https://x.com/BitNet69" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>More Info</h4>
              <ul>
                <li><a href="/fixbitcoin">Fix Bitcoin Initiative</a></li>
                <li><a href="/aistrategy">AI & Bitcoin Strategy</a></li>
                <li><a href="/investorrelations">Investor Relations</a></li>
                <li><a href="mailto:contact@mybitnet.com">Email Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} BitNet. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="mailto:contact@mybitnet.com">Contact</a>
            <a href="https://t.me/weltitob" target="_blank" rel="noopener noreferrer">Support</a>
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
          
          .footer-brand {
            align-items: center;
            text-align: center;
          }
          
          .brand-description {
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
          }
          
          .footer-bottom-links {
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer