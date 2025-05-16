import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#050505' }}>
      <SEO 
        title="Page Not Found | BitNet"
        description="The page you are looking for could not be found. Return to the BitNet homepage for secure crypto wallet solutions."
        canonical="https://bitnet.ai/404"
      />
      <Header />
      
      <main className="not-found-page" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="not-found-container" style={{ padding: '1rem 2rem 0' }}>
          <Breadcrumbs
            customPaths={[{ path: '/404', label: 'Page Not Found' }]}
          />
        </div>
        
        <div className="not-found-content-wrapper" style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '2rem 1rem 4rem'
        }}>
          <div 
            className="glass-container"
            style={{
              background: 'rgba(25, 25, 35, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '3rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '800px',
              width: '100%',
              margin: '0 auto'
            }}
          >
            {/* Orange glow effect */}
            <div style={{
              position: 'absolute',
              top: '-150px',
              right: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            {/* Blue glow effect */}
            <div style={{
              position: 'absolute',
              bottom: '-150px',
              left: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(76, 149, 223, 0.15) 0%, rgba(76, 149, 223, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div className="not-found-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div className="not-found-header" style={{ marginBottom: '2rem' }}>
                <h1 
                  style={{
                    fontSize: 'clamp(6rem, 20vw, 9rem)',
                    fontWeight: 'bold',
                    lineHeight: '1',
                    margin: '0 0 1rem',
                    background: 'linear-gradient(135deg, #ff8c00, #ff5e00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                >
                  404
                  
                  {/* Floating Bitcoin symbol */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '-40px',
                    animation: 'float 3s ease-in-out infinite'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff8c00" width="40" height="40">
                      <path d="M11.5 11.5v-2.5h1c.55 0 1 .45 1 1s-.45 1-1 1h-1zm1 1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1v-3h1zm-2-7c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm1.5-5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5h1.5v1.5h-1.5v1.5z"/>
                    </svg>
                  </div>
                </h1>
                
                <h2 style={{ 
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: '600',
                  color: '#fff',
                  margin: '0 0 1rem'
                }}>
                  Page Not Found
                </h2>
                
                <p style={{ 
                  color: '#aaa',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  maxWidth: '500px',
                  margin: '0 auto 2rem',
                  lineHeight: '1.6'
                }}>
                  The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
              </div>
              
              <div className="navigation-links" style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '1rem'
                }}>
                  {[
                    { to: "/", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", label: "Home" },
                    { to: "/about", icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16v-4 M12 8h.01", label: "About" },
                    { to: "/blog", icon: "M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1 M15 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z", label: "Blog" },
                    { to: "/faq", icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M9.09 8a3 3 0 0 1 5.83 1c0 2-3 3-3 3 M12 17h.01", label: "FAQ" }
                  ].map((link, index) => (
                    <Link 
                      key={index}
                      to={link.to}
                      style={{
                        background: 'rgba(30, 30, 40, 0.5)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '12px',
                        padding: '0.8rem 1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#fff',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 0, 0, 0.3)';
                        e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ff8c00" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d={link.icon}></path>
                      </svg>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="contact-action">
                <Link 
                  to="/#contact"
                  style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff5e00)',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    display: 'inline-block',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 25px -5px rgba(255, 94, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(255, 94, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 94, 0, 0.2)';
                  }}
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;