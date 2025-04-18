import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FixBitcoin = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1, padding: '4rem 2rem', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ 
                fontSize: '4.5rem', 
                color: '#fff',
                marginBottom: '0',
                fontWeight: '800'
              }}>
                ⚡ <span style={{ 
                  background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Fix Bitcoin</span>.
              </h1>
              <h1 style={{ 
                fontSize: '4.5rem', 
                color: '#fff',
                marginTop: '0',
                fontWeight: '800'
              }}>
                Fix the <span style={{ 
                  background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>World</span>.
              </h1>
              <p style={{ 
                color: '#aaa', 
                fontSize: '1.5rem', 
                margin: '1rem auto 0', 
                maxWidth: '850px',
                fontWeight: '300',
                letterSpacing: '0.5px'
              }}>
                Why Hyperbitcoinization Will Fix the World
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 5rem',
            position: 'relative'
          }}>
            <p style={{
              fontSize: '1.5rem',
              lineHeight: '1.7',
              color: '#e0e0e0',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              "The world doesn't change with elections — it changes when people<br/>opt out of broken systems. Bitcoin is that opt-out."
            </p>
          </div>

          {/* System is Broken Card */}
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
              padding: '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle at top right, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem'
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
                    marginRight: '1.5rem',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: '2.4rem', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    The System is Broken — and So is Society
                  </h2>
                </div>
                
                <p style={{ 
                  fontSize: '1.3rem', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  fontWeight: '300',
                  color: '#ff8c00'
                }}>
                  A broken financial system leads to a broken society
                </p>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    "The rich keep getting richer — not because they're smarter, but because the rules are written in their favor",
                    "The gap between rich and poor isn't just widening, it's becoming a chasm that swallows opportunity",
                    "Wages are stagnant, debt is rising, and the middle class is disappearing",
                    "Young generations are born into debt, locked out of owning homes, land, or a future",
                    "Governments inflate money supply, eroding your savings — while they tell you inflation is good"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: '2rem',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6rem',
                        width: '8px',
                        height: '8px',
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

          {/* Big Tech Section */}
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
              padding: '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle at bottom left, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem'
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
                    marginRight: '1.5rem',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"></path>
                      <path d="M22 8h-10"></path>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: '2.4rem', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    Big Tech Was Not the Solution — It Became the Curse
                  </h2>
                </div>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    "We were promised liberation — instead we got surveillance, censorship, and addiction",
                    "Technology didn't empower the individual — it enslaved them to algorithms and subscription traps",
                    "Tech platforms and \"Everything-as-a-Service\" robbed people of ownership — you rent your software, your music, even your data",
                    "The user became the product — privacy became a relic, and attention the currency of control",
                    "AI and automation, instead of freeing us, devalued human labor — making people less essential in the economy they built"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: '2rem',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6rem',
                        width: '8px',
                        height: '8px',
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

          {/* Financial Elites Section */}
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
              padding: '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle at top right, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem'
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
                    marginRight: '1.5rem',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: '2.4rem', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    The Financial Elites Robbed the People
                  </h2>
                </div>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    "Banks and credit card companies are middlemen taxing every transaction with no value given",
                    "Bailouts go to bankers — while everyday people get left behind, or worse, blamed",
                    "A system where Coachella tickets are 60% financed and billion-dollar banks get free money while the average person can't afford rent — is a system in decay",
                    "Buying power is political power — when people lose that, they lose their voice",
                    "You don't live in a true democracy if you can't vote with your money"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: '2rem',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6rem',
                        width: '8px',
                        height: '8px',
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

          {/* Better Tech Section */}
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
              padding: '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle at bottom left, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem'
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
                    marginRight: '1.5rem',
                    boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <h2 style={{ 
                    fontSize: '2.4rem', 
                    margin: 0,
                    color: '#fff',
                    fontWeight: '700',
                  }}>
                    We Need Better Tech — Not Just More of It
                  </h2>
                </div>
                
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    "Technology should serve the people, not extract from them",
                    "We must build systems that distribute power, not centralize it",
                    "The next wave of tech must put ownership, privacy, and freedom back into the hands of individuals",
                    "We don't reject technology — we reject corrupted incentives"
                  ].map((text, index) => (
                    <li key={index} style={{
                      position: 'relative',
                      paddingLeft: '2rem',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: '#e0e0e0'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6rem',
                        width: '8px',
                        height: '8px',
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

          {/* Bitcoin Solution - Feature Section */}
          <div style={{ 
            position: 'relative',
            marginBottom: '5rem',
          }}>
            <div style={{
              position: 'absolute',
              top: '-200px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '800px',
              height: '800px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, marginBottom: '3rem' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem'
              }}>
                Enter Bitcoin: The Technology of Freedom
              </h2>
              <div style={{ 
                width: '80px', 
                height: '4px', 
                background: 'linear-gradient(to right, #ff8c00, #ff5500)', 
                margin: '0 auto 3rem',
                borderRadius: '2px' 
              }}></div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              {[
                {
                  icon: "💰",
                  title: "Save Again",
                  desc: "With Bitcoin, people can save again — in a currency that can't be printed away"
                },
                {
                  icon: "🏠",
                  title: "Own Again",
                  desc: "With Bitcoin, people can own again — truly own, without counterparty risk"
                },
                {
                  icon: "⚡",
                  title: "Have Power Again",
                  desc: "With Bitcoin, people have power again — not just to consume, but to build"
                },
                {
                  icon: "🔐",
                  title: "Digital Property",
                  desc: "Bitcoin is digital property, incorruptible money, and a parallel system of trust"
                },
                {
                  icon: "🌐",
                  title: "Inclusive by Design",
                  desc: "It is inclusive by design — no ID, no gatekeepers, no borders"
                },
                {
                  icon: "⏳",
                  title: "Long-term Thinking",
                  desc: "It restores long-term thinking — when money holds value, time matters again"
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  borderRadius: '20px',
                  background: 'rgba(25, 25, 35, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                    color: 'white',
                    borderRadius: '10px',
                    marginBottom: '1.2rem',
                    boxShadow: '0 4px 12px rgba(255, 94, 0, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 94, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 94, 0, 0.3)';
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon === "💰" && <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
                      {feature.icon === "🏠" && <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />}
                      {feature.icon === "⚡" && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />}
                      {feature.icon === "🔐" && (<>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </>)}
                      {feature.icon === "🌐" && (<>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </>)}
                      {feature.icon === "⏳" && (<>
                        <path d="M6.8 21.8A10 10 0 0 1 2 10C2 4.5 6.5 0 12 0s10 4.5 10 10a10 10 0 0 1-4.8 11.8" />
                        <path d="M12 6v6l4 2" />
                      </>)}
                    </svg>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    color: '#fff',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#e0e0e0',
                    margin: 0,
                    flexGrow: 1
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fix the World Section */}
          <div style={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '5rem',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 20, 0.8))',
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
              padding: '3.5rem',
              color: '#e0e0e0',
              position: 'relative',
            }}>
              {/* Orange corner glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle at top right, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '3rem'
                }}>
                  <h2 style={{ 
                    fontSize: '3rem', 
                    color: '#fff',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                      color: 'white',
                      borderRadius: '8px',
                      marginRight: '1rem',
                      boxShadow: '0 2px 8px rgba(255, 94, 0, 0.3)'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    Fix the Money. Fix the Incentives. Fix the World.
                  </h2>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                  gap: '2rem'
                }}>
                  {[
                    "The world doesn't change with elections — it changes when people opt out of broken systems",
                    "Bitcoin is an opt-out. A silent protest. A peaceful exit.",
                    "You can't build a just society on a corrupt foundation — fix the money first",
                    "Bitcoin isn't a trend — it's a once-in-a-civilization invention that lets humanity start fresh"
                  ].map((text, index) => (
                    <div key={index} style={{
                      padding: '1.5rem',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      color: '#e0e0e0',
                      transition: 'transform 0.3s, background 0.3s, box-shadow 0.3s',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      zIndex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.background = 'rgba(255, 140, 0, 0.05)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
                    }}>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            padding: '5rem 1rem',
            position: 'relative',
            margin: '0 auto 4rem',
            maxWidth: '900px'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.2) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ 
                fontSize: '3.5rem', 
                color: '#fff',
                marginBottom: '3rem',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #ff8a00, #ff5e00)',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '1rem',
                  boxShadow: '0 4px 16px rgba(255, 94, 0, 0.3)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                Join the Movement
              </h2>
              
              <div style={{ 
                fontSize: '1.8rem',
                fontWeight: '300',
                lineHeight: '2',
                color: '#e0e0e0',
                marginBottom: '3rem'
              }}>
                <p>We don't ask for permission</p>
                <p>We don't beg for reform</p>
                <p>We build the future we want</p>
                <p>One block at a time</p>
              </div>
              
              <div style={{ marginTop: '3rem' }}>
                <a
                  href="/"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 3rem',
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    color: '#fff',
                    borderRadius: '9999px',
                    fontSize: '1.3rem',
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
                  Return to Home
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

export default FixBitcoin;