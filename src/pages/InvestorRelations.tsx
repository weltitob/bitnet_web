import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvestorRelations = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1, padding: isMobile ? '2rem 1rem' : '4rem 2rem', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              background: 'linear-gradient(135deg, #ffffff, #aaaaaa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: isMobile ? '1rem' : '1.5rem'
            }}>
              Investor Relations
            </h1>
            <p style={{ 
              color: '#aaa', 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              margin: '0 auto', 
              maxWidth: '1000px', 
              textAlign: 'center' 
            }}>
              BitNet is building the future of Bitcoin wallets. Learn about our vision, strategy, and investment opportunities.
            </p>
          </div>
          
          <div style={{ 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            marginBottom: isMobile ? '3rem' : '4rem',
            background: '#111',
            height: isMobile ? '400px' : '600px',
            maxWidth: '100%'
          }}>
            <iframe 
              src="https://www.canva.com/design/DAGh693KAtE/al8Rp6MaZmgEQDJqyiwSRQ/view?embed" 
              width="100%" 
              height="100%" 
              title="BitNet Investor Presentation"
              style={{ border: 'none' }}
              allow="fullscreen"
            />
          </div>
          
          <div style={{ 
            maxWidth: '1050px', 
            margin: '0 auto 4rem',
            color: '#e0e0e0'
          }}>
            {/* Intro Section with Glass Card */}
            <div style={{
              background: 'rgba(25, 25, 35, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: isMobile ? '16px' : '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: isMobile ? '1.5rem' : '2.5rem',
              marginBottom: isMobile ? '2rem' : '3rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Green glow in top right */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(76, 217, 100, 0.15) 0%, rgba(76, 217, 100, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: isMobile ? '1.5rem' : '2rem', flexDirection: isMobile ? 'column' : 'row' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    borderRadius: isMobile ? '12px' : '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 5px 15px rgba(255, 140, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={isMobile ? "26" : "30"} height={isMobile ? "26" : "30"} fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <h2 style={{ margin: 0, fontSize: isMobile ? '1.6rem' : '1.8rem', color: '#ffffff' }}>Our Vision</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#aaa', fontSize: isMobile ? '0.9rem' : '1rem' }}>Transforming Bitcoin for everyday digital finance</p>
                  </div>
                </div>
                
                <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  BitNet is driving a fundamental shift: elevating Bitcoin from a passive store of value to a dynamic, high-velocity payment platform. Our tech delivers transactions in less than a second with fees under $0.01 and seamless web3 integration, unlocking Bitcoin's massive $1.2T network for real-world utility.
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: isMobile ? '0.8rem' : '1rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '10px',
                  marginBottom: '1.5rem'
                }}>
                  <img 
                    src="/assets/team/tobias.jpeg" 
                    alt="Tobias Welti" 
                    style={{
                      width: isMobile ? '45px' : '50px',
                      height: isMobile ? '45px' : '50px',
                      borderRadius: '10px',
                      marginRight: isMobile ? '0' : '1rem',
                      marginBottom: isMobile ? '0.8rem' : '0',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ textAlign: isMobile ? 'center' : 'left', width: isMobile ? '100%' : 'auto' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaa' }}>From the Founder</p>
                    <p style={{ margin: '0.3rem 0 0 0', fontSize: isMobile ? '1rem' : '1.05rem' }}>"If you don't believe me or don't get it, I have time to try to convince you."</p>
                    <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.9rem', color: '#f0f0f0' }}>— Tobias Welti, Founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why We Need BitNet Section */}
            <h3 style={{ textAlign: 'center', fontSize: isMobile ? '1.4rem' : '1.7rem', marginBottom: isMobile ? '1.5rem' : '2rem', color: '#fff' }}>
              Why We Need BitNet
            </h3>
            
            {/* Current State of Bitcoin - Section */}
            <div style={{ 
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              marginBottom: '2.5rem',
              position: 'relative',
              background: 'rgba(25, 25, 35, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2.5rem',
              color: '#e0e0e0'
            }}>
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
              
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : 'row', 
                  alignItems: isMobile ? 'center' : 'flex-start', 
                  marginBottom: '1.5rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    borderRadius: isMobile ? '12px' : '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 5px 15px rgba(255, 140, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={isMobile ? "26" : "30"} height={isMobile ? "26" : "30"} fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="8" />
                    </svg>
                  </div>
                  <h2 style={{ 
                    margin: 0, 
                    fontSize: isMobile ? '1.6rem' : '1.8rem', 
                    color: '#ffffff',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>The Current State of Bitcoin</h2>
                </div>
                
                <p style={{ 
                  fontSize: isMobile ? '1rem' : '1.1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '1rem',
                  textAlign: isMobile ? 'center' : 'left' 
                }}>
                  Bitcoin has established itself as the world's premier digital store of value, but its potential as a dynamic financial layer remains largely untapped. The current ecosystem faces several challenges that restrict its widespread adoption and daily utility.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}>
              {/* Card 1: Speed & Cost */}
              <div style={{
                flex: '1 1 300px',
                background: 'rgba(25, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, rgba(255, 140, 0, 0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: '#fff' }}>Speed & Cost Limitations</h4>
                  <p style={{ margin: 0, lineHeight: '1.6' }}>
                    Traditional Bitcoin transactions can be slow and expensive during network congestion, making it impractical for everyday transactions and micropayments.
                  </p>
                </div>
              </div>
              
              {/* Card 2: User Experience */}
              <div style={{
                flex: '1 1 300px',
                background: 'rgba(25, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(100, 149, 237, 0.1) 0%, rgba(100, 149, 237, 0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 5px 15px rgba(42, 104, 196, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: '#fff' }}>User Experience Gaps</h4>
                  <p style={{ margin: 0, lineHeight: '1.6' }}>
                    Existing solutions often sacrifice security for convenience or vice versa, making the experience frustrating for mainstream users who expect seamless financial interactions.
                  </p>
                </div>
              </div>
              
              {/* Card 3: Web3 Integration */}
              <div style={{
                flex: '1 1 300px',
                background: 'rgba(25, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(76, 217, 100, 0.1) 0%, rgba(76, 217, 100, 0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 5px 15px rgba(46, 138, 58, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: '#fff' }}>Limited Web3 Integration</h4>
                  <p style={{ margin: 0, lineHeight: '1.6' }}>
                    Bitcoin has largely been left out of the web3 innovation wave. While other blockchains have embraced DeFi, NFTs, and dApps, Bitcoin's potential in these areas remains mostly untapped.
                  </p>
                </div>
              </div>
            </div>
            
            {/* The BitNet Solution Section */}
            <div style={{
              background: 'rgba(25, 25, 35, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '3rem',
              color: '#e0e0e0'
            }}>
              {/* Blue glow effect */}
              <div style={{
                position: 'absolute',
                top: '-150px',
                left: '-150px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(76, 149, 223, 0.15) 0%, rgba(76, 149, 223, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : 'row', 
                  alignItems: isMobile ? 'center' : 'flex-start', 
                  marginBottom: '1.5rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)',
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    borderRadius: isMobile ? '12px' : '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 5px 15px rgba(42, 104, 196, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={isMobile ? "26" : "30"} height={isMobile ? "26" : "30"} fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h2 style={{ 
                    margin: 0, 
                    fontSize: isMobile ? '1.6rem' : '1.8rem', 
                    color: '#ffffff',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>The BitNet Solution</h2>
                </div>
                
                <p style={{ 
                  fontSize: isMobile ? '1rem' : '1.1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  textAlign: isMobile ? 'center' : 'left' 
                }}>
                  BitNet is pioneering the first comprehensive solution that brings Web3 capabilities to Bitcoin through Taproot Assets. As the <strong style={{ color: '#fff' }}>first mover</strong> in this space, we're revolutionizing how people interact with the world's largest cryptocurrency network.
                </p>
                
                <p style={{ 
                  fontSize: isMobile ? '1rem' : '1.1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  textAlign: isMobile ? 'center' : 'left' 
                }}>
                  Our groundbreaking platform delivers <strong style={{ color: '#fff' }}>transactions in less than a second</strong> with fees under $0.01, while maintaining Bitcoin's core principles of security and decentralization. By unlocking Bitcoin's massive $1.2T network for practical utility, we're creating an ecosystem where digital assets, tokens, and applications can flourish on Bitcoin's unmatched foundation.
                </p>
                
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '12px',
                  marginTop: '1.5rem'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start', 
                    marginBottom: '1rem' 
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                      width: isMobile ? '35px' : '40px',
                      height: isMobile ? '35px' : '40px',
                      borderRadius: isMobile ? '8px' : '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: isMobile ? '0' : '1rem',
                      marginBottom: isMobile ? '0.8rem' : '0',
                      flexShrink: 0,
                      boxShadow: '0 5px 15px rgba(255, 94, 0, 0.2)'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={isMobile ? "18" : "20"} height={isMobile ? "18" : "20"} fill="none" stroke="white" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: isMobile ? '1.1rem' : '1.2rem', 
                      color: '#fff',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>Innovation Leadership</h4>
                  </div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: isMobile ? '1rem' : '1.1rem', 
                    lineHeight: '1.6',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    BitNet is the <strong style={{ color: '#ff8c00' }}>first to market</strong> with a complete platform integrating Taproot Assets, bringing the full spectrum of Web3 capabilities to Bitcoin. This positions us at the forefront of a massive technological shift that's just beginning to gain momentum.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Advantages Section */}
            <h3 style={{ textAlign: 'center', fontSize: isMobile ? '1.4rem' : '1.7rem', marginBottom: isMobile ? '1.5rem' : '2rem', color: '#fff' }}>
              Why BitNet Will Dominate
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}>
              {/* Card 1: Pioneering Technology */}
              <div style={{
                flex: '1 1 300px',
                background: 'rgba(25, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, rgba(255, 140, 0, 0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: '#fff' }}>Pioneering Technology</h4>
                  <p style={{ margin: 0, lineHeight: '1.6' }}>
                    We've built the first solution that seamlessly merges Bitcoin's unparalleled security with the frictionless payment experience users demand.
                  </p>
                </div>
              </div>
              
              {/* Card 2: Proprietary Cloud Architecture */}
              <div style={{
                flex: '1 1 300px',
                background: 'rgba(25, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(100, 149, 237, 0.1) 0%, rgba(100, 149, 237, 0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 5px 15px rgba(42, 104, 196, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 12H2M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    </svg>
                  </div>
                  
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: '#fff' }}>Proprietary Cloud Architecture</h4>
                  <p style={{ margin: 0, lineHeight: '1.6' }}>
                    Our platform delivers a smooth, intuitive experience without compromising on self-custody – a critical advantage that sets us apart.
                  </p>
                </div>
              </div>
              
              {/* Card 3: Strategic Infrastructure Layer */}
              <div style={{
                flex: '1 1 300px',
                background: 'rgba(25, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(76, 217, 100, 0.1) 0%, rgba(76, 217, 100, 0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 5px 15px rgba(46, 138, 58, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="10" x2="6" y2="14"></line>
                      <line x1="12" y1="10" x2="12" y2="14"></line>
                      <line x1="18" y1="10" x2="18" y2="14"></line>
                    </svg>
                  </div>
                  
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: '#fff' }}>Strategic Infrastructure Layer</h4>
                  <p style={{ margin: 0, lineHeight: '1.6' }}>
                    We're positioning between Bitcoin's core protocol and next-gen applications, building a formidable technical moat that's hard to replicate.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Market Momentum Card */}
            <div style={{
              background: 'rgba(25, 25, 35, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '3rem'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, rgba(255, 140, 0, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'center' : 'flex-start', 
                  marginBottom: '1.5rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    width: isMobile ? '45px' : '50px',
                    height: isMobile ? '45px' : '50px',
                    borderRadius: isMobile ? '10px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: isMobile ? '0' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '0',
                    boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={isMobile ? "22" : "24"} height={isMobile ? "22" : "24"} fill="none" stroke="white" strokeWidth="2">
                      <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                      <path d="M17 6h6v6"></path>
                    </svg>
                  </div>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: isMobile ? '1.5rem' : '1.6rem', 
                    color: '#fff',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>Market Momentum</h3>
                </div>
                
                <p style={{ 
                  lineHeight: '1.6',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  User feedback from our initial testing has been gold, and recent developments like Tether's Bitcoin integration via Taproot Assets Protocol perfectly align with our strategy. The momentum is building, and BitNet is ready to capitalize on fast and easy payments, digital assets and tokens coming to bitcoin in a big way.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(20, 20, 25, 0.5)',
            borderRadius: '1rem',
            padding: isMobile ? '1.5rem' : '2.5rem',
            textAlign: 'center',
            maxWidth: '1050px',
            margin: '0 auto 2rem'
          }}>
            <h2 style={{ 
              color: '#fff', 
              fontSize: '1.7rem',
              marginBottom: '1.2rem'
            }}>
              Join Us in Revolutionizing Bitcoin
            </h2>
            <p style={{ 
              color: '#ddd', 
              fontSize: '1.1rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              We're positioning Bitcoin as the digital trust layer of the internet—a vision that will reshape finance as we know it. Join us as we build the financial infrastructure of tomorrow.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: isMobile ? '1rem' : '1.5rem', 
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <a 
                href="mailto:contact@mybitnet.com" 
                style={{
                  display: 'inline-block',
                  padding: '0.65rem 2rem',
                  background: 'linear-gradient(135deg, #ffa500, #ff5e00)',
                  color: '#fff',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Our Team
              </a>
              <a 
                href="/fixbitcoin" 
                style={{
                  display: 'inline-block',
                  padding: '0.65rem 2rem',
                  background: 'transparent',
                  color: '#fff',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  border: '1px solid rgba(255, 165, 0, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 165, 0, 0.8)';
                  e.currentTarget.style.background = 'rgba(255, 165, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 165, 0, 0.5)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Learn About "Fix Bitcoin. Fix the World" ⚡
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestorRelations;