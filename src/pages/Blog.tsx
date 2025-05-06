import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
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

const Blog: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0b0b' }}>
      <SEO 
        title="BitNet Blog | Bitcoin Wallet News and Insights"
        description="Get the latest insights on Bitcoin, self-custody, Lightning Network, and digital collectibles from the BitNet team."
        canonical="https://www.bitnet.com/blog"
        keywords="bitcoin blog, cryptocurrency news, bitcoin wallet, self-custody, lightning network, digital collectibles"
      />
      <Header />
      
      <main className="blog-page">
        <div className="blog-hero">
          <div className="blog-hero-content">
            <span className="blog-subtitle">Our Blog</span>
            <h1>BitNet Insights</h1>
            <p>Stay updated with the latest on Bitcoin, self-custody, Lightning Network, and digital collectibles</p>
          </div>
        </div>
        
        <div className="blog-container">
          <Breadcrumbs 
            customPaths={[{ path: '/blog', label: 'Blog' }]} 
            style={{ marginBottom: '2rem' }}
          />
          <div className="blog-grid">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <LazyImage 
                    src={post.image} 
                    alt={post.title}
                    style={{ width: '100%', height: '240px', borderRadius: '12px 12px 0 0' }}
                  />
                  <div className="blog-category">{post.category}</div>
                </div>
                
                <div className="blog-card-content">
                  <Link to={`/blog/${post.id}`} className="blog-title-link">
                    <h2>{post.title}</h2>
                  </Link>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-meta">
                    <div className="blog-author">
                      <LazyImage 
                        src={post.authorImage} 
                        alt={post.author}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                      />
                      <span>{post.author}</span>
                    </div>
                    <div className="blog-date">{post.date}</div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .blog-page {
          flex: 1;
          background: linear-gradient(180deg, #0b0b0b 0%, #141419 100%);
          color: #fff;
        }
        
        .blog-hero {
          padding: 6rem 2rem 4rem;
          text-align: center;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('/src/assets/genisisstone-480.webp') center/cover no-repeat;
          position: relative;
        }
        
        /* Media queries need to be separate in styled-jsx */
        @media (min-width: 480px) {
          .blog-hero {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('/src/assets/genisisstone-768.webp') center/cover no-repeat;
          }
        }
        
        @media (min-width: 768px) {
          .blog-hero {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('/src/assets/genisisstone-1280.webp') center/cover no-repeat;
          }
        }
        
        .blog-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(to top, #0b0b0b, transparent);
        }
        
        .blog-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .blog-subtitle {
          display: inline-block;
          color: #ff8c00;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .blog-hero h1 {
          font-size: 3.5rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        
        .blog-hero p {
          color: #ddd;
          font-size: 1.2rem;
          margin: 0 auto;
          max-width: 600px;
        }
        
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        
        .blog-card {
          background: rgba(25, 25, 35, 0.6);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .blog-card-image {
          position: relative;
          height: 240px;
        }
        
        .blog-category {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(255, 140, 0, 0.9);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          z-index: 2;
        }
        
        .blog-card-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .blog-title-link {
          text-decoration: none;
          color: inherit;
        }
        
        .blog-card h2 {
          font-size: 1.5rem;
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.4;
          transition: color 0.2s ease;
        }
        
        .blog-card h2:hover {
          color: #ff8c00;
        }
        
        .blog-excerpt {
          font-size: 1rem;
          color: #aaa;
          margin: 0 0 1.5rem;
          line-height: 1.6;
          flex: 1;
        }
        
        .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .blog-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ddd;
          font-size: 0.9rem;
        }
        
        .blog-date {
          font-size: 0.85rem;
          color: #888;
        }
        
        .read-more-btn {
          display: inline-block;
          background: transparent;
          color: #ff8c00;
          border: 1px solid #ff8c00;
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        
        .read-more-btn:hover {
          background: rgba(255, 140, 0, 0.1);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .blog-hero {
            padding: 5rem 1.5rem 3rem;
          }
          
          .blog-hero h1 {
            font-size: 2.5rem;
          }
          
          .blog-hero p {
            font-size: 1rem;
          }
          
          .blog-container {
            padding: 3rem 1.5rem;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;