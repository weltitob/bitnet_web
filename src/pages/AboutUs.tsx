import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import tobiasImage from '../assets/team/tobias.jpeg';
import izakImage from '../assets/team/izak.jpg';
import ulrichImage from '../assets/team/ulrich.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#050505' }}>
      <Header />
      <main className="about-us-page">
        <div className="about-us-hero">
          <div className="about-us-hero-content">
            <span className="about-subtitle">About Us</span>
            <h1>Building the Future of Bitcoin</h1>
            <div className="hero-description">
              <p>We're forging a financial revolution through self-custody, security, and speed. BitNet builds technology that puts the power of Bitcoin in your hands — no middlemen, no gatekeepers, just freedom.</p>
            </div>
          </div>
        </div>

        <div className="about-us-container">
          {/* Team section first - with landing page UI */}
          <div className="about-us-team">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="you-team-member"> {/*Added You as a team member*/}
                <div className="you-avatar">
                  {/* Person with crown icon */}
                  <div className="crown-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="crown">
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="person">
                    <path d="M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM16 15a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h8z" />
                  </svg>
                </div>
                <h3>You</h3>
                <span>Customer is King</span>
                <a href="/ideas" className="small-ideas-link">Got an idea? Share it!</a>
              </div>

              <div className="team-member">
                <img src={tobiasImage} alt="Tobias Welti" className="member-image" />
                <h3>Tobias Welti</h3>
                <span>Techlead, Founder & CEO</span>
              </div>

              <div className="team-member">
                <img src={izakImage} alt="Izak Abdullah Al" className="member-image" />
                <h3>Izak Abdullah Al</h3>
                <span>Fullstack Developer</span>
              </div>

              <div className="team-member">
                <img src={ulrichImage} alt="Edwin Daitche" className="member-image" />
                <h3>Edwin Daitche</h3>
                <span>IT Security & Infrastructure Specialist</span>
              </div>
            </div>
            <div className="team-action">
            </div>
          </div>

          

          {/* Values section third */}
          <div className="about-us-section">
            <h2>Our Team Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Customer Focus</h3>
                <p>We don't have users — we have customers. Each is an individual human being deserving of respect, not a number on a screen. Their success is our success.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </div>
                <h3>Fast Failure</h3>
                <p>We embrace mistakes as learning opportunities. We move quickly, test ideas, fail fast, adapt faster, and continuously improve through honest feedback.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m16 0-2-5H8l-2 5"></path>
                    <path d="M12 4v9"></path>
                    <path d="M12 16v2"></path>
                  </svg>
                </div>
                <h3>Work Hard & Play Hard</h3>
                <p>We're a high-performing team that believes in celebrating wins. Our environment is energetic, ambitious, and filled with young, fun people who enjoy what they do.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"></path>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3>Freedom</h3>
                <p>We don't micromanage. We empower our team to be inspired, generate ideas, and work autonomously. We encourage, enable, and trust our people to do their best work.</p>
              </div>
            </div>
          </div>

          {/* Timeline section last */}
          <div className="about-us-journey">
            <h2>Our Journey</h2>
            <div className="journey-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p>BitNet founded with a vision to revolutionize Bitcoin self-custody.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2024</h3>
                  <p>Development of core product.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2025</h3>
                  <p>Testing and iterating on the product for a small test user group pre-launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .about-us-page {
          flex: 1;
          background: linear-gradient(180deg, #050505 0%, #0a0a0a 100%);
          color: #fff;
        }

        .about-us-hero {
          padding: 8rem 2rem 4rem;
          text-align: center;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('/assets/genisisstone.webp') center/cover no-repeat;
          position: relative;
        }

        .about-us-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(to top, #050505, transparent);
        }

        .about-us-hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
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

        .about-us-hero h1 {
          font-size: 3.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1.5rem;
          line-height: 1.2;
        }

        .hero-description {
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-description p {
          font-size: 1.3rem;
          color: #ddd;
          line-height: 1.6;
        }

        .about-us-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .about-us-mission {
          margin-bottom: 4rem;
        }

        .about-us-card {
          background: rgba(25, 25, 35, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .about-us-card h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ff8c00, #ff5e00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1.5rem;
        }

        .about-us-card p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #ddd;
        }

        .about-you-section {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem;
          border-radius: 16px;
          background: rgba(255, 140, 0, 0.05);
          border: 1px solid rgba(255, 140, 0, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .about-you-section h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ff8c00, #ffa533);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.5rem 0;
        }

        .about-you-section > p {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .about-you-content p {
          color: #ddd;
          font-size: 1.2rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .about-us-section {
          margin-bottom: 4rem;
        }

        .about-us-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: rgba(25, 25, 35, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s, box-shadow 0.3s;
          text-align: center;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 140, 0, 0.1);
          border-color: rgba(255, 140, 0, 0.2);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 140, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #ff8c00;
        }

        .value-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .value-card p {
          color: #aaa;
          line-height: 1.6;
        }

        /* Team section matching the landing page style */
        .about-us-team {
          margin-bottom: 4rem;
          text-align: center;
        }

        .about-us-team h2 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 3rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          max-width: 900px;
          margin: 0 auto;
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
          object-fit: cover;
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

        .about-us-journey {
          margin-bottom: 2rem;
        }

        .journey-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .journey-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #ff8c00, transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff8c00;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 15px rgba(255, 140, 0, 0.5);
        }

        .timeline-content {
          width: 45%;
          padding: 1.5rem;
          background: rgba(25, 25, 35, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: auto;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
        }

        .timeline-content h3 {
          font-size: 1.3rem;
          color: #ff8c00;
          margin: 0 0 0.8rem;
        }

        .timeline-content p {
          color: #ddd;
          margin: 0;
          line-height: 1.6;
        }

        .you-team-member {
          position: relative;
          background: rgba(255, 140, 0, 0.05);
          border: 1px solid rgba(255, 140, 0, 0.15);
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .you-team-member:hover {
          background: rgba(255, 140, 0, 0.1);
          border-color: rgba(255, 140, 0, 0.3);
        }

        .you-avatar {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff8c00, #ff5e00);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .you-avatar {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .you-avatar .person {
          width: 80px;
          height: 80px;
          opacity: 0.9;
        }
        
        .crown-icon {
          position: absolute;
          top: -25px;
          z-index: 2;
        }
        
        .crown-icon .crown {
          width: 40px;
          height: 40px;
          color: gold;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
        }

        .you-team-member:hover .you-avatar {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(255, 140, 0, 0.2);
        }
        
        .small-ideas-link {
          font-size: 0.8rem;
          color: #ff8c00;
          margin-top: 0.5rem;
          display: inline-block;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .small-ideas-link:hover {
          color: #ffa533;
          transform: translateY(-2px);
          text-decoration: underline;
        }

        .team-action {
          margin-top: 3rem;
          text-align: center;
          padding: 2rem;
          background: rgba(25, 25, 35, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .team-action p {
          font-size: 1.2rem;
          color: #ddd;
          margin-bottom: 1.5rem;
        }

        .ideas-link {
          display: inline-block;
          background: linear-gradient(135deg, #ff8c00, #ff5e00);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 5px 15px rgba(255, 94, 0, 0.3);
        }

        .ideas-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 94, 0, 0.4);
        }

        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .team-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 3rem;
            max-width: 300px;
          }

          .member-image {
            width: 130px;
            height: 130px;
          }

          .you-avatar {
            width: 130px;
            height: 130px;
          }

          .team-action {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;