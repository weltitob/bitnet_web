import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

// Mock blog post data - in a real app, this would come from an API or CMS
const BLOG_POSTS = [
  {
    id: 'bitcoin-lightning-network',
    title: 'Understanding the Bitcoin Lightning Network',
    description: 'How the Lightning Network is revolutionizing Bitcoin payments with instant, low-cost transactions.',
    date: 'May 5, 2025',
    author: 'Tobias Welti',
    authorImage: '/src/assets/team/tobias.webp',
    image: '/src/assets/genisisstone.webp',
    category: 'Technology',
    tags: ['Bitcoin', 'Lightning Network', 'Scalability'],
    excerpt: 'The Lightning Network is a "layer 2" payment protocol that operates on top of the Bitcoin blockchain. It enables fast transactions between participating nodes and has been proposed as a solution to the bitcoin scalability problem.'
  },
  {
    id: 'self-custody-importance',
    title: 'Why Self-Custody Matters for Your Bitcoin',
    description: 'The importance of having full control over your Bitcoin and how to achieve it.',
    date: 'April 28, 2025',
    author: 'Izak Abdullah Al',
    authorImage: '/src/assets/team/izak.webp',
    image: '/src/assets/hotdog.webp',
    category: 'Security',
    tags: ['Self-Custody', 'Security', 'Wallets'],
    excerpt: 'In the world of cryptocurrencies, the phrase "not your keys, not your coins" has become a mantra for good reason. Self-custody means having complete control over your private keys, which gives you true ownership of your Bitcoin.'
  },
  {
    id: 'taproot-assets-explained',
    title: 'Taproot Assets: Bringing Digital Collectibles to Bitcoin',
    description: 'How Taproot Assets enables digital collectibles and assets on the Bitcoin blockchain.',
    date: 'April 15, 2025',
    author: 'Edwin Daitche',
    authorImage: '/src/assets/team/ulrich.webp',
    image: '/src/assets/genisisstone-768.webp',
    category: 'Technology',
    tags: ['Taproot', 'Digital Assets', 'NFTs', 'Bitcoin'],
    excerpt: 'Taproot Assets (formerly Taro) is a protocol built on Bitcoin that allows for digital asset issuance and transfers on the Bitcoin blockchain, leveraging the Lightning Network for fast, secure, and private transactions.'
  }
];

// Simplified Blog component without hooks for better stability
const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0b0b' }}>
      <SEO 
        title="BitNet Blog | Bitcoin Wallet News and Insights"
        description="Get the latest insights on Bitcoin, self-custody, Lightning Network, and digital collectibles from the BitNet team."
        canonical="https://bitnet.ai/blog"
        keywords="bitcoin blog, cryptocurrency news, bitcoin wallet, self-custody, lightning network, digital collectibles"
      />
      <Header />
      
      <main style={{ 
        flex: '1', 
        background: 'linear-gradient(180deg, #0b0b0b 0%, #141419 100%)',
        color: '#fff' 
      }}>
        <div style={{ 
          padding: '6rem 2rem 4rem',
          textAlign: 'center',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/src/assets/genisisstone-768.webp") center/cover no-repeat',
          position: 'relative'
        }}>
          <div style={{ 
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <span style={{
              display: 'inline-block',
              color: '#ff8c00',
              fontSize: '1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>Our Blog</span>
            <h1 style={{
              fontSize: '3rem',
              margin: '0 0 1rem',
              lineHeight: '1.2',
              color: 'white'
            }}>BitNet Insights</h1>
            <p style={{
              color: '#ddd',
              fontSize: '1.2rem',
              margin: '0 auto',
              maxWidth: '600px'
            }}>Stay updated with the latest on Bitcoin, self-custody, Lightning Network, and digital collectibles</p>
          </div>
        </div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <Breadcrumbs 
            customPaths={[{ path: '/blog', label: 'Blog' }]} 
            style={{ marginBottom: '2rem' }}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {BLOG_POSTS.map(post => (
              <div key={post.id} style={{
                background: 'rgba(25, 25, 35, 0.6)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  position: 'relative',
                  height: '240px'
                }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{ 
                      width: '100%', 
                      height: '240px', 
                      borderRadius: '12px 12px 0 0',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    background: 'rgba(255, 140, 0, 0.9)',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    zIndex: 2
                  }}>{post.category}</div>
                </div>
                
                <div style={{
                  padding: '2rem',
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2 style={{
                      fontSize: '1.5rem',
                      color: '#fff',
                      margin: '0 0 1rem',
                      lineHeight: '1.4'
                    }}>{post.title}</h2>
                  </Link>
                  <p style={{
                    fontSize: '1rem',
                    color: '#aaa',
                    margin: '0 0 1.5rem',
                    lineHeight: '1.6',
                    flex: '1'
                  }}>{post.excerpt}</p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#ddd',
                      fontSize: '0.9rem'
                    }}>
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }}
                      />
                      <span>{post.author}</span>
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#888'
                    }}>{post.date}</div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: '#ff8c00',
                    border: '1px solid #ff8c00',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    alignSelf: 'flex-start'
                  }}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;