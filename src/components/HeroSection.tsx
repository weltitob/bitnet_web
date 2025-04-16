import { useEffect, useRef } from 'react'

const HeroSection = () => {
  const featureCardsRef = useRef<{ [key: string]: HTMLDivElement | null }>({
    leftCard: null,
    rightCard: null,
    bottomCard: null
  });
  const cardsRevealedRef = useRef(false);

  useEffect(() => {
    // NFT Counter animation
    const counterElement = document.getElementById('nft-counter');
    let currentValue = 1000000;
    const minValue = 100000;
    
    // Create a random decrement between 50-150 for each step
    const randomDecrement = () => Math.floor(Math.random() * 100) + 50;
    
    // Function to update the counter with fixed width
    const updateCounter = () => {
      if (currentValue > minValue) {
        currentValue -= randomDecrement();
        if (currentValue < minValue) currentValue = minValue;
      }
      
      // Format with commas and maintain consistent width
      if (counterElement) {
        const formattedValue = currentValue.toLocaleString('en-US');
        counterElement.textContent = formattedValue;
        
        // Ensure the counter has consistent width by using monospace font
        counterElement.style.fontFeatureSettings = "'tnum'";
        counterElement.style.fontVariantNumeric = "tabular-nums";
      }
    };
    
    // Initial display with fixed width
    if (counterElement) {
      counterElement.textContent = currentValue.toLocaleString('en-US');
      counterElement.style.fontFeatureSettings = "'tnum'";
      counterElement.style.fontVariantNumeric = "tabular-nums";
    }
    
    // Update counter every 1-2 seconds
    const interval = setInterval(updateCounter, Math.floor(Math.random() * 1000) + 1000);
    
    // NFT Rarity tabs functionality
    const rarityTabs = document.querySelectorAll('.rank-tier');
    const nftCards = document.querySelectorAll('.nft-card');
    
    // Function to switch active tab and card
    const switchRarity = (rarity: string) => {
      // Remove active class from all tabs and cards
      rarityTabs.forEach(tab => tab.classList.remove('active'));
      nftCards.forEach(card => card.classList.remove('active'));
      
      // Add active class to selected tab and card
      const selectedTab = document.querySelector(`.rank-tier[data-rarity="${rarity}"]`);
      const selectedCard = document.querySelector(`#${rarity}-card`);
      
      if (selectedTab) selectedTab.classList.add('active');
      if (selectedCard) selectedCard.classList.add('active');
    };
    
    // Add click event listeners to tabs
    rarityTabs.forEach(tab => {
      tab.addEventListener('click', function(this: HTMLElement) {
        const rarity = this.getAttribute('data-rarity');
        if (rarity) switchRarity(rarity);
      });
    });

    // Feature card animations
    const isInViewport = (element: HTMLElement, threshold = 0.5) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Only return true if we've scrolled at least 100px
      return rect.top <= (windowHeight * threshold) && window.scrollY > 100;
    };
    
    // Reveal cards one by one
    const revealCards = () => {
      // Exit if cards are already revealed
      if (cardsRevealedRef.current) return;
      
      const heroSection = document.querySelector('.hero');
      
      // Check if we've scrolled enough to reveal cards
      if (heroSection && isInViewport(heroSection as HTMLElement, 0.6)) {
        cardsRevealedRef.current = true;
        
        // Define the order of appearance
        const cardOrder = [
          featureCardsRef.current.rightCard,  // First
          featureCardsRef.current.leftCard,   // Second
          featureCardsRef.current.bottomCard  // Last
        ];
        
        // Reveal in the specified order
        cardOrder.forEach((card, index) => {
          if (card) {
            setTimeout(() => {
              card.style.opacity = '1';
              // Maintain the transforms we set in the inline styles
              if (card === featureCardsRef.current.leftCard) {
                // Left card is at top 50%
                card.style.transform = 'translateY(-50%)';
              } else if (card === featureCardsRef.current.rightCard) {
                // Right card is at top 30%
                card.style.transform = 'translateY(-50%)';
              } else if (card === featureCardsRef.current.bottomCard) {
                // Keep bottom card at its original position
                card.style.transform = 'translateY(0)';
              }
            }, 300 + (index * 500)); 
          }
        });
      }
    };

    // Add scroll listener for card reveals
    window.addEventListener('scroll', revealCards);
    
    // Clean up
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', revealCards);
      
      rarityTabs.forEach(tab => {
        tab.removeEventListener('click', function(this: HTMLElement) {
          const rarity = this.getAttribute('data-rarity');
          if (rarity) switchRarity(rarity);
        });
      });
    };
  }, []);

  // Feature card hover handlers
  const handleCardMouseEnter = (card: HTMLDivElement | null, icon: HTMLDivElement | null) => {
    if (card && cardsRevealedRef.current) {
      if (card === featureCardsRef.current.leftCard) {
        // Left card is at top 50%
        card.style.transform = 'translateY(-50%) translateY(-5px)';
      } else if (card === featureCardsRef.current.rightCard) {
        // Right card is at top 30%
        card.style.transform = 'translateY(-50%) translateY(-5px)';
      } else {
        // Bottom card
        card.style.transform = 'translateY(-5px)';
      }
      
      if (icon) {
        icon.style.transform = 'scale(1.1)';
      }
    }
  };
  
  const handleCardMouseLeave = (card: HTMLDivElement | null, icon: HTMLDivElement | null) => {
    if (card && cardsRevealedRef.current) {
      if (card === featureCardsRef.current.leftCard) {
        // Left card is at top 50%
        card.style.transform = 'translateY(-50%)';
      } else if (card === featureCardsRef.current.rightCard) {
        // Right card is at top 30%
        card.style.transform = 'translateY(-50%)';
      } else {
        // Bottom card
        card.style.transform = 'translateY(0)';
      }
      
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    }
  };

  return (
    <section className="hero">
      <div className="chart-line">
        <svg
          viewBox="0 0 1300 280"
          preserveAspectRatio="none"
          width="130%"
          height="100%"
          style={{marginLeft: '-10%', marginRight: '-10%'}}
        >
          {/* Add filter for glow effect */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Gradient for the glow */}
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Area fill with gradient for glow effect */}
          <path
            d="M0,220 C65,200 130,240 195,190 C260,140 325,190 390,150 C455,130 520,190 585,160 C650,130 715,180 780,140 C845,100 910,120 975,90 C1040,60 1105,50 1170,30 C1235,10 1300,5 1300,5 L1300,280 L0,280 Z"
            fill="url(#glowGradient)"
            opacity="0.6"
          />
          
          {/* Main chart line with glow */}
          <path
            d="M0,220 C65,200 130,240 195,190 C260,140 325,190 390,150 C455,130 520,190 585,160 C650,130 715,180 780,140 C845,100 910,120 975,90 C1040,60 1105,50 1170,30 C1235,10 1300,5 1300,5"
            stroke="#4ade80"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="metrics-row">
        <span className="metric-item">Self-Custody</span>
        <span className="metric-separator">|</span>
        <span className="metric-item">Lightning-Fast</span>
        <span className="metric-separator">|</span>
        <span className="metric-item">Open & Decentralized</span>
      </div>
      <h1>We're Flipping the Script: Bitcoin-First Web3 That Works.</h1>
      <p>Web3 capabilities for Bitcoin—secure, seamless, and truly Bitcoin-native.</p>
      <div className="hero-buttons">
        <a href="#get-started" className="btn primary" style={{
          padding: '0.65rem 3rem', 
          minWidth: '180px', 
          borderRadius: '999px', 
          fontWeight: '600',
          fontSize: '1rem',
          lineHeight: '1.5',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '48px',
          boxSizing: 'border-box'
        }}>Get Started</a>
        <a href="#learn-more" className="btn secondary" style={{
          padding: '0.65rem 3rem', 
          minWidth: '180px', 
          borderRadius: '999px', 
          fontWeight: '600',
          fontSize: '1rem',
          lineHeight: '1.5',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '48px',
          boxSizing: 'border-box'
        }}>Learn More</a>
      </div>

      <div className="phone-features-container">
        <div className="mockup">
          <div className="dynamic-island"></div>
          <div className="volume-up"></div>
          <div className="volume-down"></div>
          <img src="/assets/down.jpeg" alt="BitNet Mobile App" className="screen-content" />
        </div>
        
        <div 
          ref={el => featureCardsRef.current.leftCard = el}
          className="feature-card left-card"
          style={{
            top: '50%',
            left: '80px',
            transform: 'translateY(-50%)',
            position: 'absolute',
            width: '280px'
          }}
          onMouseEnter={() => handleCardMouseEnter(
            featureCardsRef.current.leftCard,
            document.querySelector('.left-card .feature-icon') as HTMLDivElement
          )}
          onMouseLeave={() => handleCardMouseLeave(
            featureCardsRef.current.leftCard,
            document.querySelector('.left-card .feature-icon') as HTMLDivElement
          )}
        >
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Instant Payments</h3>
            <p>Lightning-fast Bitcoin transfers, anytime, anywhere</p>
          </div>
        </div>
        
        <div 
          ref={el => featureCardsRef.current.rightCard = el}
          className="feature-card right-card"
          style={{
            top: '30%',
            right: '60px',
            transform: 'translateY(-50%)',
            position: 'absolute',
            width: '280px'
          }}
          onMouseEnter={() => handleCardMouseEnter(
            featureCardsRef.current.rightCard,
            document.querySelector('.right-card .feature-icon') as HTMLDivElement
          )}
          onMouseLeave={() => handleCardMouseLeave(
            featureCardsRef.current.rightCard,
            document.querySelector('.right-card .feature-icon') as HTMLDivElement
          )}
        >
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Bitcoin Made Better</h3>
            <p>Web3 apps and digital collectibles, all on Bitcoin</p>
          </div>
        </div>
        
        <div 
          ref={el => featureCardsRef.current.bottomCard = el}
          className="feature-card bottom-card"
          style={{
            bottom: '100px',
            right: '130px',
            position: 'absolute',
            width: '280px'
          }}
          onMouseEnter={() => handleCardMouseEnter(
            featureCardsRef.current.bottomCard,
            document.querySelector('.bottom-card .feature-icon') as HTMLDivElement
          )}
          onMouseLeave={() => handleCardMouseLeave(
            featureCardsRef.current.bottomCard,
            document.querySelector('.bottom-card .feature-icon') as HTMLDivElement
          )}
        >
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Marketplace</h3>
            <p>Buy, sell, and collect digital treasures on Bitcoin</p>
          </div>
        </div>
      </div>
      
      <div className="social-proof-section">
        <div className="social-proof-header">
          <span>Limited Early Access</span>
          <h3>Revolutionary Bitcoin-native platform coming soon</h3>
        </div>
        
        <div className="users-scroll-container">
          <div className="users-scroll-inner">
            {/* First set of users */}
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#ff8c00'}}></div>
              <span className="username">@btc_max</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#bf5fff'}}></div>
              <span className="username">@sats_stacker</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#00b8ff'}}></div>
              <span className="username">@lightning_node</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#00e676'}}></div>
              <span className="username">@ordinal_fan</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#ff5e00'}}></div>
              <span className="username">@nft_collector</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#8f00ff'}}></div>
              <span className="username">@bitcoin_lisa</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#0070ff'}}></div>
              <span className="username">@satoshi_disciple</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#00c853'}}></div>
              <span className="username">@onchain_analyst</span>
            </div>
            
            {/* Duplicate set for infinite scroll effect */}
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#ff8c00'}}></div>
              <span className="username">@btc_max</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#bf5fff'}}></div>
              <span className="username">@sats_stacker</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#00b8ff'}}></div>
              <span className="username">@lightning_node</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#00e676'}}></div>
              <span className="username">@ordinal_fan</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#ff5e00'}}></div>
              <span className="username">@nft_collector</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#8f00ff'}}></div>
              <span className="username">@bitcoin_lisa</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#0070ff'}}></div>
              <span className="username">@satoshi_disciple</span>
            </div>
            <div className="user-avatar">
              <div className="avatar" style={{backgroundColor: '#00c853'}}></div>
              <span className="username">@onchain_analyst</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="earlybird-section">
        <div className="earlybird-content">
          {/* Two-column layout inspired by the reference design */}
          <div className="earlybird-two-col">
            
            {/* Left column: Access info, CTA button and counter */}
            <div className="earlybird-col-left">
              <div className="title-group">
                <h2>Be an earlybird - get rewarded later.</h2>
                <p>Join the mailing list and be the first when we launch our services.</p>
              </div>
              
              <div className="button-wrapper">
                <a href="/earlybird" className="btn primary">Reserve Your Spot</a>
              </div>
              
              <div className="counter-container">
                <span id="nft-counter">1,000,000</span>
                <p>limited spots remaining</p>
              </div>
            </div>
            
            {/* Right column: NFT card with tabs above */}
            <div className="earlybird-col-right">
              {/* Rank tiers above card */}
              <div className="rank-indicators">
                <button className="rank-tier active" data-rarity="legendary">Top 1,000</button>
                <button className="rank-tier" data-rarity="epic">Top 10,000</button>
                <button className="rank-tier" data-rarity="rare">Top 100,000</button>
                <button className="rank-tier" data-rarity="uncommon">Top 1,000,000</button>
              </div>
              
              <div className="nft-cards-container">
                <div id="legendary-card" className="nft-card active">
                  <div className="rarity-badge legendary">Legendary</div>
                  <div className="nft-card-image">
                    <img src="/genisisstone.webp" alt="Genesis Stone NFT" />
                  </div>
                  <div className="nft-card-info">
                    <div className="nft-card-title">Genesis Stone</div>
                    <div className="nft-card-subtitle">Early Adopter NFT</div>
                    <div className="nft-card-details">
                      <div className="nft-detail">
                        <span className="detail-label">Rarity</span>
                        <span className="detail-value legendary-text">Legendary</span>
                      </div>
                      <div className="nft-detail">
                        <span className="detail-label">Supply</span>
                        <span className="detail-value">1,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="epic-card" className="nft-card">
                  <div className="rarity-badge epic">Epic</div>
                  <div className="nft-card-image">
                    <img src="/hotdog.webp" alt="Digital Hotdog NFT" />
                  </div>
                  <div className="nft-card-info">
                    <div className="nft-card-title">Digital Hotdog</div>
                    <div className="nft-card-subtitle">Early Adopter NFT</div>
                    <div className="nft-card-details">
                      <div className="nft-detail">
                        <span className="detail-label">Rarity</span>
                        <span className="detail-value epic-text">Epic</span>
                      </div>
                      <div className="nft-detail">
                        <span className="detail-label">Supply</span>
                        <span className="detail-value">10,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="rare-card" className="nft-card">
                  <div className="rarity-badge rare">Rare</div>
                  <div className="nft-card-image rare-image">
                    <img src="/genisisstone.webp" alt="Precious Stone NFT" />
                  </div>
                  <div className="nft-card-info">
                    <div className="nft-card-title">Precious Stone</div>
                    <div className="nft-card-subtitle">Early Adopter NFT</div>
                    <div className="nft-card-details">
                      <div className="nft-detail">
                        <span className="detail-label">Rarity</span>
                        <span className="detail-value rare-text">Rare</span>
                      </div>
                      <div className="nft-detail">
                        <span className="detail-label">Supply</span>
                        <span className="detail-value">100,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div id="uncommon-card" className="nft-card">
                  <div className="rarity-badge uncommon">Uncommon</div>
                  <div className="nft-card-image uncommon-image">
                    <img src="/hotdog.webp" alt="Basic Hotdog NFT" />
                  </div>
                  <div className="nft-card-info">
                    <div className="nft-card-title">Basic Hotdog</div>
                    <div className="nft-card-subtitle">Early Adopter NFT</div>
                    <div className="nft-card-details">
                      <div className="nft-detail">
                        <span className="detail-label">Rarity</span>
                        <span className="detail-value uncommon-text">Uncommon</span>
                      </div>
                      <div className="nft-detail">
                        <span className="detail-label">Supply</span>
                        <span className="detail-value">1,000,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="nft-card-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection