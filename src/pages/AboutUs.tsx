
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
          <div className="about-us-mission">
            <div className="about-us-card">
              <h2>Our Mission</h2>
              <p>We're not just creating a wallet; we're building a gateway to a world where you truly own your financial future. BitNet is committed to making Bitcoin more accessible, secure, and practical for everyday use.</p>
            </div>
          </div>

          <div className="about-you-section">
            <h2>You</h2>
            <p>The Customer is King</p>
            <div className="about-you-content">
              <p>At BitNet, everything we build starts and ends with you. Your feedback shapes our product, your needs drive our innovation, and your financial freedom is our mission. We exist to serve you with the best Bitcoin experience possible.</p>
            </div>
          </div>
          
          <div className="about-us-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Self-Custody</h3>
                <p>We believe that you should always have full control of your Bitcoin. No third parties, no intermediaries.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3>Security</h3>
                <p>Security is non-negotiable. We use cutting-edge technology to protect your assets.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3>Speed</h3>
                <p>Fast transactions and responsive interfaces for a seamless Bitcoin experience.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Community-Driven</h3>
                <p>We listen to our community and adapt based on your feedback and needs.</p>
              </div>
            </div>
          </div>
          
          <div className="about-us-team">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image-container">
                  <img src={tobiasImage} alt="Tobias Welti" className="member-image" />
                </div>
                <div className="member-info">
                  <h3>Tobias Welti</h3>
                  <span>Techlead, Founder & CEO</span>
                  <p>Pioneering the vision for BitNet, Tobias brings extensive experience in both blockchain development and entrepreneurship.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image-container">
                  <img src={izakImage} alt="Izak Abdullah Al" className="member-image" />
                </div>
                <div className="member-info">
                  <h3>Izak Abdullah Al</h3>
                  <span>Fullstack Developer</span>
                  <p>A talented developer with a passion for creating seamless user experiences and robust backend systems.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image-container">
                  <img src={ulrichImage} alt="Edwin Daitche" className="member-image" />
                </div>
                <div className="member-info">
                  <h3>Edwin Daitche</h3>
                  <span>IT Security & Infrastructure Specialist</span>
                  <p>With a background in cybersecurity, Edwin ensures that BitNet maintains the highest standards of security.</p>
                </div>
              </div>
            </div>
          </div>
          
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
                  <p>Development of core technology and initial product launch.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2025</h3>
                  <p>Expanding to global markets and adding new features to transform the Bitcoin experience.</p>
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
        
        .about-us-team {
          margin-bottom: 4rem;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        
        .team-member {
          background: rgba(25, 25, 35, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        
        .member-image-container {
          height: 250px;
          overflow: hidden;
          position: relative;
        }
        
        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .team-member:hover .member-image {
          transform: scale(1.05);
        }
        
        .member-info {
          padding: 1.5rem;
        }
        
        .member-info h3 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem;
          color: #fff;
        }
        
        .member-info span {
          display: block;
          color: #ff8c00;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .member-info p {
          color: #aaa;
          line-height: 1.6;
          margin: 0;
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
        
        @media (max-width: 900px) {
          .about-us-hero h1 {
            font-size: 2.5rem;
          }
          
          .hero-description p {
            font-size: 1.1rem;
          }
          
          .about-us-card {
            padding: 2rem;
          }
          
          .about-us-card h2,
          .about-you-section h2,
          .about-us-section h2 {
            font-size: 2rem;
          }
          
          .about-you-section {
            padding: 2rem;
          }
          
          .about-you-section > p {
            font-size: 1.3rem;
          }
          
          .journey-timeline::before {
            left: 20px;
          }
          
          .timeline-dot {
            left: 20px;
          }
          
          .timeline-content {
            width: 80%;
            margin-left: auto !important;
            text-align: left !important;
          }
        }
        
        @media (max-width: 600px) {
          .about-us-hero {
            padding: 6rem 1rem 3rem;
          }
          
          .about-us-hero h1 {
            font-size: 2rem;
          }
          
          .hero-description p {
            font-size: 1rem;
          }
          
          .about-us-container {
            padding: 3rem 1rem;
          }
          
          .about-us-card h2,
          .about-you-section h2,
          .about-us-section h2 {
            font-size: 1.8rem;
          }
          
          .about-us-card p,
          .about-you-content p {
            font-size: 1rem;
          }
          
          .about-you-section > p {
            font-size: 1.2rem;
          }
          
          .member-image-container {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
