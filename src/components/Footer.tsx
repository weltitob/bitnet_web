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
            <a href="/ideas" className="submit-idea-btn">
              Submit an Idea
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>API</h4>
              <ul>
                <li><a href="/developer-portal">Developer Portal</a></li>
                <li><a href="/api">API Documentation</a></li>
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

        .submit-idea-btn {
          margin-top: 1rem;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(135deg, #ff8a00, #ff5e00);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: inline-block;
          font-weight: 500;
          box-shadow: 0 3px 10px rgba(255, 94, 0, 0.2);
          border: 1px solid rgba(255, 140, 0, 0.3);
        }

        .submit-idea-btn:hover {
          background: linear-gradient(135deg, #ff7a00, #ff5000);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(255, 94, 0, 0.3);
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