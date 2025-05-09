import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const FAQ = () => {
  // State for managing open/closed accordion items
  const [activeItems, setActiveItems] = useState<number[]>([]);

  // Toggle accordion item
  const toggleItem = (index: number) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter(item => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  // FAQ data structure
  const faqCategories = [
    {
      title: "General Questions",
      icon: "M12 12h.01M12 18h.01M12 6h.01",
      items: [
        {
          question: "What is BitNet?",
          answer: "BitNet is a next-generation crypto wallet solution that makes Bitcoin and digital assets more accessible, secure, and practical. We combine self-custody security with lightning-fast transactions and a seamless user experience for both beginners and advanced users."
        },
        {
          question: "How is BitNet different from other wallets?",
          answer: "BitNet stands out by integrating Taproot Assets and advanced Bitcoin technologies into a user-friendly solution. We offer sub-second transaction times with minimal fees while maintaining complete self-custody of your assets. Our wallet also provides seamless access to the entire Bitcoin ecosystem including digital collectibles, DeFi applications, and Web3 integration all through a single intuitive interface."
        },
        {
          question: "Is BitNet available in my country?",
          answer: "BitNet is available globally as a self-custody wallet. However, certain features may be limited in some regions due to regulatory requirements. We're continually working to expand our services to more regions while maintaining compliance with local regulations."
        }
      ]
    },
    {
      title: "Account & Security",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      items: [
        {
          question: "How does BitNet keep my assets secure?",
          answer: "BitNet employs multiple layers of security including advanced encryption, private key isolation, and multi-factor authentication. Most importantly, we use a true self-custody model where you maintain complete control of your assets at all times. Your private keys never leave your device and are never stored on our servers."
        },
        {
          question: "What happens if I lose my recovery phrase?",
          answer: "Your recovery phrase is the master key to your wallet and funds. If you lose it, BitNet cannot recover your assets. We strongly recommend storing your recovery phrase in multiple secure locations, such as on paper in a safe or using a specialized metal backup solution. Never store your recovery phrase digitally or share it with anyone."
        },
        {
          question: "Does BitNet require KYC verification?",
          answer: "As a self-custody wallet, BitNet does not require KYC verification for basic wallet functionality. However, certain enhanced features or integrations with regulated services may require identity verification in accordance with local regulations."
        }
      ]
    },
    {
      title: "Transactions & Features",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      items: [
        {
          question: "How fast are BitNet transactions?",
          answer: "BitNet transactions typically settle in under a second. We leverage cutting-edge Lightning Network and Layer 2 technologies to provide instant settlement while maintaining Bitcoin's security guarantees. This makes BitNet perfect for everyday payments and microtransactions."
        },
        {
          question: "What assets does BitNet support?",
          answer: "BitNet primarily focuses on Bitcoin and assets built on Bitcoin-based protocols like Taproot Assets. This includes BTC, digital collectibles (NFTs), and tokens issued on the Bitcoin network. We continuously add support for new asset types as the Bitcoin ecosystem evolves."
        },
        {
          question: "How can I convert between different assets?",
          answer: "BitNet includes integrated swap functionality that allows you to seamlessly convert between supported assets directly within the wallet. We connect to multiple liquidity providers to ensure competitive rates and minimal slippage."
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      items: [
        {
          question: "How can I contact BitNet support?",
          answer: "You can reach our support team through the in-app chat, by emailing support@mybitnet.com, or by visiting our contact page. We also have an extensive knowledge base and community forum where you can find answers to common questions."
        },
        {
          question: "What should I do if a transaction is taking too long?",
          answer: "Most BitNet transactions settle instantly. If you're experiencing delays, please check your internet connection and wallet status. For on-chain Bitcoin transactions during periods of network congestion, you may experience longer confirmation times. You can view transaction status in the activity section of your wallet."
        },
        {
          question: "Is BitNet open source?",
          answer: "Yes, core components of BitNet are open source, allowing the community to review and contribute to our codebase. We believe in transparency and collaborate with the broader Bitcoin ecosystem. You can find our repositories on GitHub and participate in our development."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#050505' }}>
      <SEO 
        title="Frequently Asked Questions | BitNet Crypto Wallet"
        description="Find answers to common questions about BitNet crypto wallet, Bitcoin transactions, security features, and support."
        canonical="https://bitnet.ai/faq"
        keywords="Bitcoin wallet FAQ, crypto wallet questions, BitNet help, Bitcoin wallet security, crypto support"
      />
      <Header />
      
      <main className="faq-page" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="faq-container" style={{ padding: '1rem 2rem 0' }}>
          <Breadcrumbs
            customPaths={[{ path: '/faq', label: 'FAQ' }]}
          />
        </div>
        
        <div 
          className="faq-content" 
          style={{ 
            padding: '2rem 1rem 4rem',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {/* Hero Section */}
          <div 
            className="faq-hero"
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              position: 'relative'
            }}
          >
            {/* Glow effect */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ff8c00, #ff5e00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}>
                Frequently Asked Questions
              </h1>
              
              <p style={{ 
                color: '#aaa',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Find answers to common questions about BitNet and our services. If you can't find what you're looking for, feel free to contact our support team.
              </p>
            </div>
          </div>
          
          {/* FAQ Categories */}
          <div className="faq-categories" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {faqCategories.map((category, catIndex) => (
              <div 
                key={catIndex} 
                className="faq-category"
                style={{
                  background: 'rgba(25, 25, 35, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow effect based on category */}
                <div style={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-100px',
                  width: '300px',
                  height: '300px',
                  background: `radial-gradient(circle, rgba(255, 140, ${catIndex * 50}, 0.15) 0%, rgba(255, 140, ${catIndex * 50}, 0) 70%)`,
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="category-header" style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #ff8c00, #ff5e00)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      flexShrink: 0
                    }}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="white" 
                        width="22" 
                        height="22"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                      </svg>
                    </div>
                    
                    <h2 style={{
                      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                      fontWeight: '600',
                      margin: 0,
                      color: '#fff'
                    }}>
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="faq-items" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {category.items.map((item, itemIndex) => {
                      const accordionIndex = catIndex * 100 + itemIndex;
                      const isOpen = activeItems.includes(accordionIndex);
                      
                      return (
                        <div 
                          key={itemIndex} 
                          className="faq-item"
                          style={{
                            background: 'rgba(15, 15, 20, 0.6)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <button 
                            className="faq-question"
                            onClick={() => toggleItem(accordionIndex)}
                            style={{
                              width: '100%',
                              padding: '1.25rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              textAlign: 'left',
                              color: '#fff',
                              borderBottom: isOpen ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                            }}
                          >
                            <span style={{ 
                              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                              fontWeight: '500',
                              flex: 1,
                              paddingRight: '1rem'
                            }}>
                              {item.question}
                            </span>
                            
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="20" 
                              height="20" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="#ff8c00" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              style={{
                                transition: 'all 0.3s ease',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                flexShrink: 0
                              }}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                          
                          <div 
                            className="faq-answer"
                            style={{
                              height: isOpen ? 'auto' : '0',
                              overflow: 'hidden',
                              padding: isOpen ? '1.25rem' : '0 1.25rem',
                              transition: 'all 0.3s ease',
                              opacity: isOpen ? 1 : 0
                            }}
                          >
                            <p style={{ 
                              margin: 0,
                              color: '#aaa',
                              lineHeight: '1.7',
                              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
                            }}>
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Section */}
          <div 
            className="faq-contact"
            style={{
              marginTop: '4rem',
              textAlign: 'center',
              background: 'rgba(25, 25, 35, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Glow effect */}
            <div style={{
              position: 'absolute',
              bottom: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(76, 149, 223, 0.15) 0%, rgba(76, 149, 223, 0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ 
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#fff'
              }}>
                Still have questions?
              </h3>
              
              <p style={{ 
                color: '#aaa',
                marginBottom: '1.5rem',
                maxWidth: '600px',
                margin: '0 auto 1.5rem',
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                lineHeight: '1.7'
              }}>
                Our support team is always ready to help with any questions you might have about BitNet.
              </p>
              
              <a 
                href="mailto:contact@mybitnet.com" 
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
                Contact Our Support Team
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;