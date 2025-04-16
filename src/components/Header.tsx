import { useState, useEffect } from 'react'
import logo from '../assets/logoclean.png'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive style adjustments
  const getResponsiveStyles = () => {
    if (windowWidth <= 600) {
      return {
        header: {
          padding: '1rem',
        },
        headerLogo: {
          height: '24px',
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
          padding: '0.3rem 0.8rem',
          fontSize: '0.8rem',
        }
      }
    } else if (windowWidth <= 768) {
      return {
        header: {
          padding: '1rem',
        },
        headerLogo: {
          height: '28px',
        },
        headerLeft: {
          gap: '0.6rem',
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
          padding: '0.4rem 1rem',
          fontSize: '0.85rem',
        }
      }
    }

    return {
      header: {
        padding: '1.2rem 2rem',
      },
      headerLogo: {
        height: '32px',
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
        padding: responsiveStyles.header.padding,
        backgroundColor: '#0b0b0b',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div 
        className="header-left"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: responsiveStyles.headerLeft.gap,
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = '/'}
      >
        <img 
          src={logo} 
          alt="BitNet Logo" 
          style={{
            height: responsiveStyles.headerLogo.height,
            width: 'auto',
            display: 'block',
          }}
        />
        <h1 
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
          }}
        >
          BitNet
        </h1>
      </div>
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
            href="#about" 
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
            href="#insights" 
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
            Insights
          </a>
          <a 
            href="#jobs" 
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
            href="#contact" 
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
          href="#get-started" 
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
    </header>
  )
}

export default Header