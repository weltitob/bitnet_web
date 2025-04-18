import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FixBitcoin = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1, padding: '4rem 2rem', background: '#0b0b0b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              background: 'linear-gradient(135deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              display: 'inline-block'
            }}>
              ⚡ Fix Bitcoin. Fix the World.
            </h1>
            <p style={{ 
              color: '#ddd', 
              fontSize: '1.3rem', 
              margin: '0 auto', 
              maxWidth: '850px', 
              textAlign: 'center',
              fontWeight: '300'
            }}>
              Why Hyperbitcoinization Will Fix the World
            </p>
          </div>

          {/* Intro Section with Hero Glass Card */}
          <div style={{ 
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
            color: '#e0e0e0'
          }}>
            {/* Red glow effect */}
            <div style={{
              position: 'absolute',
              top: '-150px',
              right: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(229, 46, 113, 0.15) 0%, rgba(229, 46, 113, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    marginRight: '0.5rem',
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #ff8a00, #e52e71)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>🌍</span>
                  <span>The System is Broken — and So is Society</span>
                </div>
              </div>
              
              <p style={{ fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '1.5rem', fontWeight: '300' }}>
                A broken financial system leads to a broken society
              </p>
              
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8a00, #e52e71)', 
                    borderRadius: '50%' 
                  }}></span>
                  The rich keep getting richer — not because they're smarter, but because the rules are written in their favor
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8a00, #e52e71)', 
                    borderRadius: '50%' 
                  }}></span>
                  The gap between rich and poor isn't just widening, it's becoming a chasm that swallows opportunity
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8a00, #e52e71)', 
                    borderRadius: '50%' 
                  }}></span>
                  Wages are stagnant, debt is rising, and the middle class is disappearing
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8a00, #e52e71)', 
                    borderRadius: '50%' 
                  }}></span>
                  Young generations are born into debt, locked out of owning homes, land, or a future
                </li>
                <li style={{ 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8a00, #e52e71)', 
                    borderRadius: '50%' 
                  }}></span>
                  Governments inflate money supply, eroding your savings — while they tell you inflation is good
                </li>
              </ul>
            </div>
          </div>

          {/* Big Tech Section */}
          <div style={{ 
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
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
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    marginRight: '0.5rem',
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>👎</span>
                  <span>Big Tech Was Not the Solution — It Became the Curse</span>
                </div>
              </div>
              
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)', 
                    borderRadius: '50%' 
                  }}></span>
                  We were promised liberation — instead we got surveillance, censorship, and addiction
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)', 
                    borderRadius: '50%' 
                  }}></span>
                  Technology didn't empower the individual — it enslaved them to algorithms and subscription traps
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)', 
                    borderRadius: '50%' 
                  }}></span>
                  Tech platforms and "Everything-as-a-Service" robbed people of ownership — you rent your software, your music, even your data
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)', 
                    borderRadius: '50%' 
                  }}></span>
                  The user became the product — privacy became a relic, and attention the currency of control
                </li>
                <li style={{ 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4a8eff, #2d68c4)', 
                    borderRadius: '50%' 
                  }}></span>
                  AI and automation, instead of freeing us, devalued human labor — making people less essential in the economy they built
                </li>
              </ul>
            </div>
          </div>

          {/* Financial Elites Section */}
          <div style={{ 
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
            color: '#e0e0e0'
          }}>
            {/* Gold glow effect */}
            <div style={{
              position: 'absolute',
              bottom: '-150px',
              right: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    marginRight: '0.5rem',
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #ffd700, #b8860b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>🏦</span>
                  <span>The Financial Elites Robbed the People</span>
                </div>
              </div>
              
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ffd700, #b8860b)', 
                    borderRadius: '50%' 
                  }}></span>
                  Banks and credit card companies are middlemen taxing every transaction with no value given
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ffd700, #b8860b)', 
                    borderRadius: '50%' 
                  }}></span>
                  Bailouts go to bankers — while everyday people get left behind, or worse, blamed
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ffd700, #b8860b)', 
                    borderRadius: '50%' 
                  }}></span>
                  A system where Coachella tickets are 60% financed and billion-dollar banks get free money…
                  <br/>…while the average person can't afford rent — is a system in decay
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ffd700, #b8860b)', 
                    borderRadius: '50%' 
                  }}></span>
                  Buying power is political power — when people lose that, they lose their voice
                </li>
                <li style={{ 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ffd700, #b8860b)', 
                    borderRadius: '50%' 
                  }}></span>
                  You don't live in a true democracy if you can't vote with your money
                </li>
              </ul>
            </div>
          </div>

          {/* Better Tech Section */}
          <div style={{ 
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
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
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    marginRight: '0.5rem',
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>🔥</span>
                  <span>We Need Better Tech — Not Just More of It</span>
                </div>
              </div>
              
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)', 
                    borderRadius: '50%' 
                  }}></span>
                  Technology should serve the people, not extract from them
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)', 
                    borderRadius: '50%' 
                  }}></span>
                  We must build systems that distribute power, not centralize it
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)', 
                    borderRadius: '50%' 
                  }}></span>
                  The next wave of tech must put ownership, privacy, and freedom back into the hands of individuals
                </li>
                <li style={{ 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #ff8c00, #ff5500)', 
                    borderRadius: '50%' 
                  }}></span>
                  We don't reject technology — we reject corrupted incentives
                </li>
              </ul>
            </div>
          </div>

          {/* Bitcoin Solution Section */}
          <div style={{ 
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
            color: '#e0e0e0'
          }}>
            {/* Green glow effect */}
            <div style={{
              position: 'absolute',
              bottom: '-150px',
              left: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(76, 217, 100, 0.15) 0%, rgba(76, 217, 100, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  textAlign: 'center'
                }}>
                  Enter Bitcoin: The Technology of Freedom
                </h2>
              </div>
              
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                fontSize: '1.2rem',
                lineHeight: '1.7'
              }}>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  With Bitcoin, people can save again — in a currency that can't be printed away
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  With Bitcoin, people can own again — truly own, without counterparty risk
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  With Bitcoin, people have power again — not just to consume, but to build
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  Bitcoin is digital property, incorruptible money, and a parallel system of trust
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  It is inclusive by design — no ID, no gatekeepers, no borders
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  It restores long-term thinking — when money holds value, time matters again
                </li>
                <li style={{ 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #4cd964, #2e8a3a)', 
                    borderRadius: '50%' 
                  }}></span>
                  It is not just a currency — it's a peaceful revolution
                </li>
              </ul>
            </div>
          </div>

          {/* Fix the World Section */}
          <div style={{ 
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '4rem',
            position: 'relative',
            background: 'rgba(25, 25, 35, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
            color: '#e0e0e0'
          }}>
            {/* Purple glow effect */}
            <div style={{
              position: 'absolute',
              top: '-150px',
              right: '-150px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(138, 43, 226, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    marginRight: '0.5rem',
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>🛠️</span>
                  <span>Fix the Money. Fix the Incentives. Fix the World.</span>
                </div>
              </div>
              
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', 
                    borderRadius: '50%' 
                  }}></span>
                  The world doesn't change with elections — it changes when people opt out of broken systems
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', 
                    borderRadius: '50%' 
                  }}></span>
                  Bitcoin is an opt-out. A silent protest. A peaceful exit.
                </li>
                <li style={{ 
                  marginBottom: '1.2rem', 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', 
                    borderRadius: '50%' 
                  }}></span>
                  You can't build a just society on a corrupt foundation — fix the money first
                </li>
                <li style={{ 
                  paddingLeft: '2rem', 
                  position: 'relative' 
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.35rem', 
                    width: '10px', 
                    height: '10px', 
                    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', 
                    borderRadius: '50%' 
                  }}></span>
                  Bitcoin isn't a trend — it's a once-in-a-civilization invention that lets humanity start fresh
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginBottom: '3rem',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(25, 25, 35, 0.8), rgba(15, 15, 20, 0.8))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3rem',
            textAlign: 'center',
            color: '#e0e0e0'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                fontSize: '2.8rem',
                marginBottom: '1.5rem',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ 
                  marginRight: '0.8rem',
                  fontSize: '3.2rem',
                  background: 'linear-gradient(135deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>✊</span>
                <span>Join the Movement.</span>
              </div>
            </div>
            
            <div style={{ 
              maxWidth: '700px', 
              margin: '0 auto 2rem',
              fontSize: '1.4rem',
              lineHeight: '2',
              fontWeight: '300'
            }}>
              <p>We don't ask for permission</p>
              <p>We don't beg for reform</p>
              <p>We build the future we want</p>
              <p>One block at a time</p>
            </div>
            
            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '0.8rem 2.5rem',
                  background: 'linear-gradient(135deg, #ff8a00, #e52e71)',
                  color: '#fff',
                  borderRadius: '9999px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  border: '1px solid transparent',
                  boxShadow: '0 4px 20px rgba(229, 46, 113, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(229, 46, 113, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(229, 46, 113, 0.3)';
                }}
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FixBitcoin;