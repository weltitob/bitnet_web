import atashImage from '../assets/feedbackimages/atash.png';
import robinImage from '../assets/feedbackimages/robin.png';
import jonahImage from '../assets/feedbackimages/jonah.png';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header" style={{ marginBottom: '3rem' }}>
          <span style={{
            color: '#ff8c00',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
            display: 'block'
          }}>User Feedback</span>
          <h2>What Our Users Say</h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', margin: '0 auto', maxWidth: '650px', textAlign: 'center' }}>Be among the first to experience the future of Bitcoin</p>
        </div>
        
        <div className="testimonials-grid" style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {/* Testimonial 1 */}
          <div className="testimonial-card" style={{ 
            background: 'rgba(20, 20, 25, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '330px',
            flexBasis: 'calc(33.333% - 2.5rem)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
          }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                position: 'relative',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{ 
                  color: '#ddd', 
                  fontSize: '1.15rem', 
                  lineHeight: '1.6',
                  margin: '0',
                  position: 'relative',
                  flex: '1 0 auto'
                }}>
                  I've tried a lot of Bitcoin wallets, but BitNet just feels different. It's so much easier to use and finally makes Bitcoin feel modern.
                </p>
              </div>
              
              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                paddingTop: '1.75rem', 
                marginTop: '2rem',
                display: 'flex', 
                alignItems: 'center',
                height: '85px',  /* Fixed height for all author sections */
                flexShrink: 0    /* Prevent shrinking */
              }}>
                <img 
                  src={atashImage} 
                  alt="Atash Hauschild" 
                  style={{
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    marginRight: '1.25rem'
                  }} 
                />
                <div>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    color: '#fff',
                    marginBottom: '0.3rem'
                  }}>Atash Hauschild</span>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#aaa',
                    fontWeight: '300'
                  }}>Bitcoiner & ITler</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card" style={{ 
            background: 'rgba(20, 20, 25, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '330px',
            flexBasis: 'calc(33.333% - 2.5rem)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
          }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                position: 'relative',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{ 
                  color: '#ddd', 
                  fontSize: '1.15rem', 
                  lineHeight: '1.6',
                  margin: '0',
                  position: 'relative',
                  flex: '1 0 auto'
                }}>
                  I was always intimidated by crypto until I found BitNet. Now I can actually use Bitcoin without feeling lost in technical jargon.
                </p>
              </div>
              
              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                paddingTop: '1.75rem', 
                marginTop: '2rem',
                display: 'flex', 
                alignItems: 'center',
                height: '85px',  /* Fixed height for all author sections */
                flexShrink: 0    /* Prevent shrinking */
              }}>
                <img 
                  src={robinImage} 
                  alt="Robin Göpper" 
                  style={{
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    marginRight: '1.25rem'
                  }} 
                />
                <div>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    color: '#fff',
                    marginBottom: '0.3rem'
                  }}>Robin Göpper</span>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#aaa',
                    fontWeight: '300'
                  }}>Cryptobeginner</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="testimonial-card" style={{ 
            background: 'rgba(20, 20, 25, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '330px',
            flexBasis: 'calc(33.333% - 2.5rem)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
          }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                position: 'relative',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{ 
                  color: '#ddd', 
                  fontSize: '1.15rem', 
                  lineHeight: '1.6',
                  margin: '0',
                  position: 'relative',
                  flex: '1 0 auto'
                }}>
                  BitNet's NFT marketplace is a game-changer for me. It's simple to use and helps my art reach the right people.
                </p>
              </div>
              
              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                paddingTop: '1.75rem', 
                marginTop: '2rem',
                display: 'flex', 
                alignItems: 'center',
                height: '85px',  /* Fixed height for all author sections */
                flexShrink: 0    /* Prevent shrinking */
              }}>
                <img 
                  src={jonahImage} 
                  alt="Jonah Ike" 
                  style={{
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    marginRight: '1.25rem'
                  }} 
                />
                <div>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    color: '#fff',
                    marginBottom: '0.3rem'
                  }}>Jonah Ike</span>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    color: '#aaa',
                    fontWeight: '300'
                  }}>Investor & Artist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonials-section {
          padding: 6rem 2rem;
          position: relative;
          background: linear-gradient(180deg, rgba(15, 15, 20, 0.8) 0%, rgba(15, 15, 20, 0) 100%);
        }
        
        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .testimonial-card {
          flex: 1 0 calc(33.333% - 2.5rem);
          min-width: 300px;
          height: 400px !important; /* Increased height for the testimonials */
        }
        
        @media (max-width: 960px) {
          .testimonial-card {
            flex: 1 0 calc(50% - 2rem);
            padding: 2rem !important;
            min-width: 280px;
          }
          
          .testimonials-grid {
            gap: 2rem;
          }
          
          .testimonial-card p {
            font-size: 1.05rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .testimonials-grid {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          
          .testimonial-card {
            flex: 1 0 100%;
            max-width: 340px;
            padding: 1.75rem !important;
            height: 360px !important;
          }
          
          .testimonials-section {
            padding: 4rem 1.5rem;
          }
          
          .testimonial-card p {
            font-size: 1rem !important;
          }
          
          .testimonials-header h2 {
            font-size: 1.75rem;
          }
          
          .testimonials-header p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection