import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AIStrategy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO 
        title="AI Strategy | Bitcoin for AI Payments | BitNet"
        description="Discover why Bitcoin and Lightning Network provide the ideal payment infrastructure for AI systems. Learn how BitNet connects AI and Bitcoin."
        canonical="https://www.bitnet.com/aistrategy"
        keywords="bitcoin, AI payments, artificial intelligence, lightning network, bitcoin wallet, AI strategy"
      />
      <Header />
      <main style={{ flexGrow: 1, padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem)', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          {/* Hero Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: isMobile ? '-50px' : '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              height: isMobile ? '400px' : '600px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                marginBottom: '0',
                fontWeight: '800'
              }}>
                🤖 <span style={{ color: '#ff8c00' }}>AI & Bitcoin:</span>
              </h1>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                marginTop: '0',
                fontWeight: '800',
                color: 'white'
              }}>
                The Perfect <span style={{ color: '#ff8c00' }}>Symbiosis</span>
              </h1>
              <p style={{ 
                color: '#aaa', 
                fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
                margin: '1rem auto 0', 
                maxWidth: '90%',
                fontWeight: '300',
                letterSpacing: '0.5px'
              }}>
                Why Artificial Intelligence Needs Bitcoin as its Financial Layer
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div style={{
            textAlign: 'center',
            maxWidth: '1050px',
            margin: '0 auto 5rem',
            position: 'relative'
          }}>
            <p style={{
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              lineHeight: '1.7',
              color: '#e0e0e0',
              fontWeight: '300',
              fontStyle: 'italic',
              padding: '0 10px'
            }}>
              "As AI agents become increasingly autonomous, they'll need a trustless, permissionless payment system. Internet-native AI requires internet-native money."
            </p>
          </div>

          {/* Digital Payment for AI Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}>
            <div style={{
              padding: isMobile ? '2.5rem 2rem' : '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: isMobile ? '150px' : '300px',
                height: isMobile ? '150px' : '300px',
                background: 'radial-gradient(circle at top right, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '1.5rem' : '2rem'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    In the Age of AI, <span style={{ color: '#ff8c00' }}>Payment Infrastructure</span> is Critical
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300'
                }}>
                  As AI systems become increasingly autonomous and capable, they will require a payment infrastructure that matches their digital nature. AI needs a payment system that is:
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: isMobile ? '1.2rem' : '1.5rem'
                }}>
                  {[
                    "Programmable at its core, able to execute micropayments and complex conditional transactions",
                    "Global and permissionless, allowing AI to operate across borders without friction",
                    "Secure and trustless, eliminating the need for third-party verification",
                    "Cost-efficient, enabling microtransactions without prohibitive fees",
                    "Available 24/7 without downtime, matching the always-on nature of AI systems"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: isMobile ? '1.8rem' : '2rem',
                      fontSize: isMobile ? '1.05rem' : '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0',
                      marginBottom: isMobile ? '0.5rem' : '0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? '0.5rem' : '0.6rem',
                        width: isMobile ? '7px' : '8px',
                        height: isMobile ? '7px' : '8px',
                        background: '#ff8c00',
                        borderRadius: '50%'
                      }}></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bitcoin and Lightning Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}>
            <div style={{
              padding: isMobile ? '2.5rem 2rem' : '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: isMobile ? '150px' : '300px',
                height: isMobile ? '150px' : '300px',
                background: 'radial-gradient(circle at bottom left, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '1.5rem' : '2rem'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    <span style={{ color: '#ff8c00' }}>Bitcoin & Lightning:</span> The Optimal Solution
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300'
                }}>
                  Bitcoin, particularly with the Lightning Network, provides the ideal payment infrastructure for AI systems:
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: isMobile ? '1.2rem' : '1.5rem'
                }}>
                  {[
                    "Near-zero transaction costs: Lightning enables micropayments at fractions of a cent, dramatically outperforming traditional payment systems like Stripe (2.9% + $0.30) or bank transfers",
                    "Instant settlement: Transactions confirm in milliseconds, not days like traditional banking systems",
                    "Programmable money: Bitcoin's scripting capabilities allow for conditional payments, automated escrow, and other complex financial interactions",
                    "Global accessibility: No geographic restrictions or banking relationships required",
                    "24/7 uptime: The Bitcoin network has maintained 99.98% uptime since its inception, matching the always-on nature of AI systems"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: isMobile ? '1.8rem' : '2rem',
                      fontSize: isMobile ? '1.05rem' : '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0',
                      marginBottom: isMobile ? '0.5rem' : '0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? '0.5rem' : '0.6rem',
                        width: isMobile ? '7px' : '8px',
                        height: isMobile ? '7px' : '8px',
                        background: '#ff8c00',
                        borderRadius: '50%'
                      }}></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Internet Money for Internet Agents Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}>
            <div style={{
              padding: isMobile ? '2.5rem 2rem' : '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: isMobile ? '150px' : '300px',
                height: isMobile ? '150px' : '300px',
                background: 'radial-gradient(circle at top right, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '1.5rem' : '2rem'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    <span style={{ color: '#ff8c00' }}>Internet Agents</span> Need <span style={{ color: '#ff8c00' }}>Internet Money</span>
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300'
                }}>
                  As AI agents become increasingly autonomous, they will need a native digital currency:
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: isMobile ? '1.2rem' : '1.5rem'
                }}>
                  {[
                    "AI agents will need to autonomously pay for resources, services, and information",
                    "Agents will engage in direct economic relationships with each other, requiring a common value system",
                    "Fiat currency systems were designed for humans and human institutions, not digital entities",
                    "Bitcoin is the first truly digital native money, designed from first principles for the internet",
                    "The internet gained a native currency with Bitcoin; now AI can leverage this foundation"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: isMobile ? '1.8rem' : '2rem',
                      fontSize: isMobile ? '1.05rem' : '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0',
                      marginBottom: isMobile ? '0.5rem' : '0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? '0.5rem' : '0.6rem',
                        width: isMobile ? '7px' : '8px',
                        height: isMobile ? '7px' : '8px',
                        background: '#ff8c00',
                        borderRadius: '50%'
                      }}></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Digital Identity Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}>
            <div style={{
              padding: isMobile ? '2.5rem 2rem' : '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: isMobile ? '150px' : '300px',
                height: isMobile ? '150px' : '300px',
                background: 'radial-gradient(circle at bottom left, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '1.5rem' : '2rem'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    <span style={{ color: '#ff8c00' }}>Digital Identity</span> in the AI Era
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300'
                }}>
                  In the age of AI, digital identification of humans becomes critical. While initiatives like Worldcoin represent important steps forward, they still rely on centralized networks:
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: isMobile ? '1.2rem' : '1.5rem'
                }}>
                  {[
                    "Worldcoin attempts to solve human verification, but relies on its own centralized network",
                    "True digital identity requires a decentralized, trustless foundation that no single entity controls",
                    "Bitcoin's blockchain provides the only truly decentralized digital truth layer",
                    "Digital identities stored on Bitcoin are resistant to censorship, tampering, and centralized control",
                    "The future requires both verifiable human identity and trustless digital currency - Bitcoin can enable both"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: isMobile ? '1.8rem' : '2rem',
                      fontSize: isMobile ? '1.05rem' : '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0',
                      marginBottom: isMobile ? '0.5rem' : '0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? '0.5rem' : '0.6rem',
                        width: isMobile ? '7px' : '8px',
                        height: isMobile ? '7px' : '8px',
                        background: '#ff8c00',
                        borderRadius: '50%'
                      }}></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Metaverse Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}>
            <div style={{
              padding: isMobile ? '2.5rem 2rem' : '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: isMobile ? '150px' : '300px',
                height: isMobile ? '150px' : '300px',
                background: 'radial-gradient(circle at bottom left, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '1.5rem' : '2rem'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    <span style={{ color: '#ff8c00' }}>Metaverse</span> Without <span style={{ color: '#ff8c00' }}>Dystopia</span>
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300'
                }}>
                  The convergence of AI and Bitcoin enables a metaverse where ownership and freedom can truly exist:
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: isMobile ? '1.2rem' : '1.5rem'
                }}>
                  {[
                    "A true metaverse can emerge with AI and internet-native money and assets, allowing people to maintain ownership and financial sovereignty",
                    "Without Bitcoin, corporate interests control digital realities, dictating rules and extracting value from users",
                    "Bitcoin provides the foundation for a metaverse where people can truly own their digital assets instead of renting them from platforms",
                    "The combination of AI and Bitcoin enables a self-sovereign digital existence, free from the gatekeepers who would control access",
                    "Digital scarcity through Bitcoin ensures that digital wealth and value creation remain in users' hands rather than being infinitely duplicated by platform owners"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: isMobile ? '1.8rem' : '2rem',
                      fontSize: isMobile ? '1.05rem' : '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0',
                      marginBottom: isMobile ? '0.5rem' : '0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? '0.5rem' : '0.6rem',
                        width: isMobile ? '7px' : '8px',
                        height: isMobile ? '7px' : '8px',
                        background: '#ff8c00',
                        borderRadius: '50%'
                      }}></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}>
            <div style={{
              padding: isMobile ? '2.5rem 2rem' : '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: isMobile ? '150px' : '300px',
                height: isMobile ? '150px' : '300px',
                background: 'radial-gradient(circle at top right, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '1.5rem' : '2rem'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    BitNet's <span style={{ color: '#ff8c00' }}>AI-Ready</span> Approach
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300'
                }}>
                  BitNet is building for the future intersection of AI and finance:
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))',
                  gap: isMobile ? '1.2rem' : '1.5rem'
                }}>
                  {[
                    "Our backend infrastructure is built with Machine Learning Control Plane (MCP) servers, ready for AI agent integration",
                    "We're developing APIs specifically designed for AI agent interaction with Bitcoin and Lightning networks",
                    "Our platform enables autonomous AI agents to send, receive, and hold bitcoin without human intervention",
                    "We're building the foundation for an AI-Bitcoin economy where digital agents can participate fully",
                    "Our technology stack is designed to be the bridge between advanced AI systems and Bitcoin's financial network"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: isMobile ? '1.8rem' : '2rem',
                      fontSize: isMobile ? '1.05rem' : '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0',
                      marginBottom: isMobile ? '0.5rem' : '0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: isMobile ? '0.5rem' : '0.6rem',
                        width: isMobile ? '7px' : '8px',
                        height: isMobile ? '7px' : '8px',
                        background: '#ff8c00',
                        borderRadius: '50%'
                      }}></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            padding: '5rem 1rem',
            position: 'relative',
            margin: '0 auto 4rem',
            maxWidth: '1050px'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              height: isMobile ? '400px' : '600px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                color: '#fff',
                marginBottom: '3rem',
                fontWeight: '800'
              }}>
                Join the <span style={{ color: '#ff8c00' }}>AI-Bitcoin</span> Revolution
              </h2>
              
              <p style={{ 
                fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
                fontWeight: '300',
                lineHeight: '1.8',
                color: '#e0e0e0',
                marginBottom: '3rem',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}>
                Be part of building the future where AI and Bitcoin converge to create a more efficient, fair, and accessible financial system for both humans and digital agents.
              </p>
              
              <div style={{ marginTop: '3rem' }}>
                <a
                  href="/earlybird"
                  style={{
                    display: 'inline-block',
                    padding: isMobile ? '0.8rem 2rem' : '1rem 3rem',
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    color: '#fff',
                    borderRadius: '9999px',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    border: '1px solid transparent',
                    boxShadow: '0 6px 25px rgba(255, 140, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 140, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 140, 0, 0.3)';
                  }}
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIStrategy;