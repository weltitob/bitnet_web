import { useState, useEffect } from 'react'
import logo from '../assets/logoclean.webp'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Responsive style adjustments
  const getResponsiveStyles = () => {
    if (windowWidth <= 600) {
      return {
        header: {
          padding: '1rem',
        },
        container: {
          padding: '0',
        },
        headerLogo: {
          height: '28px',
        },
        headerTitle: {
          fontSize: '1.2rem',
        },
        headerLeft: {
          gap: '0.6rem',
        },
        headerRight: {
          gap: '0.8rem',
        },
        nav: {
          gap: '0.8rem',
        },
        navLink: {
          fontSize: '0.8rem',
        },
        headerBtn: {
          padding: '0.4rem 0.9rem',
          fontSize: '0.85rem',
        }
      }
    } else if (windowWidth <= 768) {
      return {
        header: {
          padding: '1rem',
        },
        container: {
          padding: '0',
        },
        headerLogo: {
          height: '30px',
        },
        headerTitle: {
          fontSize: '1.3rem',
        },
        headerLeft: {
          gap: '0.7rem',
        },
        headerRight: {
          gap: '1rem',
        },
        nav: {
          gap: '1rem',
        },
        navLink: {
          fontSize: '0.85rem',
        },
        headerBtn: {
          padding: '0.45rem 1.1rem',
          fontSize: '0.9rem',
        }
      }
    }

    return {
      header: {
        padding: '1.2rem 0',
      },
      container: {
        padding: '0 0.5rem',
      },
      headerLogo: {
        height: '34px',
      },
      headerTitle: {
        fontSize: '1.55rem',
      },
      headerLeft: {
        gap: '0.8rem',
      },
      headerRight: {
        gap: '1.5rem',
      },
      nav: {
        gap: '1.5rem',
      },
      navLink: {
        fontSize: '0.9rem',
      },
      headerBtn: {
        padding: '0.5rem 1.2rem',
        fontSize: '0.9rem',
      }
    }
  }

  const responsiveStyles = getResponsiveStyles()

  return (
    <header 
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: windowWidth <= 600 ? '1.2rem 2rem' : windowWidth <= 768 ? '1.25rem 2rem' : '1.3rem 2rem',
        backgroundColor: '#0b0b0b',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div className="header-container" style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="header-left">
          <a href="/" aria-label="BitNet Homepage" style={{
            display: 'flex',
            alignItems: 'center',
            gap: responsiveStyles.headerLeft.gap,
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <img
              src={logo}
              alt="BitNet Logo"
              style={{
                height: responsiveStyles.headerLogo.height,
                width: 'auto',
                display: 'block',
              }}
            />
            <div
              className="site-logo-text"
              style={{
                fontSize: responsiveStyles.headerTitle.fontSize,
                fontWeight: 700,
              }}
            >
              BitNet
            </div>
          </a>
        </div>
      
      {/* Hamburger menu for mobile */}
      {windowWidth <= 768 && (
        <div 
          onClick={toggleMobileMenu}
          style={{
            cursor: 'pointer',
            zIndex: 1002,
            padding: '8px',
          }}
        >
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#fff',
            margin: '5px 0',
            transition: 'all 0.3s',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}></div>
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#fff',
            margin: '5px 0',
            transition: 'all 0.3s',
            opacity: mobileMenuOpen ? 0 : 1,
          }}></div>
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#fff',
            margin: '5px 0',
            transition: 'all 0.3s',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}></div>
        </div>
      )}
      
      {/* Desktop navigation */}
      {windowWidth > 768 && (
        <div 
          className="header-right"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: responsiveStyles.headerRight.gap,
          }}
        >
          <nav
            style={{
              display: 'flex',
              gap: responsiveStyles.nav.gap,
            }}
          >
            <a
              href="https://bitnet.ai/"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              About
            </a>
            <a 
              href={window.location.pathname === '/' ? '#mission' : '/#mission'} 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Mission
            </a>
            <a 
              href={window.location.pathname === '/' ? '#jobs' : '/#jobs'} 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Jobs
            </a>
            <a 
              href="/investors" 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Investors
            </a>
            <a 
              href="/blog" 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Blog
            </a>
            <a 
              href={window.location.pathname === '/' ? '#contact' : '/#contact'} 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: responsiveStyles.navLink.fontSize,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#aaa'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Contact
            </a>
          </nav>
          <a 
            href="/earlybird" 
            className="btn primary header-btn"
            style={{
              padding: responsiveStyles.headerBtn.padding,
              fontSize: responsiveStyles.headerBtn.fontSize,
              background: 'linear-gradient(135deg, #ffa500, #ff5e00)',
              color: '#fff',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.3s',
              display: 'inline-block',
              textAlign: 'center',
              border: '1px solid transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Get Started
          </a>
        </div>
      )}
      
      {/* Mobile menu overlay */}
      {windowWidth <= 768 && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#0b0b0b',
          zIndex: 1001,
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s',
        }}>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <a
              href="https://bitnet.ai/"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href={window.location.pathname === '/' ? '#mission' : '/#mission'} 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Mission
            </a>
            <a 
              href={window.location.pathname === '/' ? '#jobs' : '/#jobs'} 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </a>
            <a 
              href="/investors" 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors
            </a>
            <a 
              href="/blog" 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href={window.location.pathname === '/' ? '#contact' : '/#contact'} 
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.2rem',
                transition: 'color 0.3s',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          <a 
            href="/earlybird" 
            className="btn primary header-btn"
            style={{
              padding: '0.6rem 1.5rem',
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #ffa500, #ff5e00)',
              color: '#fff',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
              border: '1px solid transparent',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
      </div>
    </header>
  )
}

export default Header