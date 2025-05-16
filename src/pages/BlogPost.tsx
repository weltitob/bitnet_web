import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

// Mock blog post data - would come from an API in a real app
const BLOG_POSTS = [
  {
    id: 'bitcoin-lightning-network',
    title: 'Understanding the Bitcoin Lightning Network',
    description: 'How the Lightning Network is revolutionizing Bitcoin payments with instant, low-cost transactions.',
    date: 'May 5, 2025',
    author: 'Tobias Welti',
    authorImage: '/src/assets/team/tobias.webp',
    authorTitle: 'Techlead, Founder & CEO',
    image: '/src/assets/genisisstone.webp',
    category: 'Technology',
    tags: ['Bitcoin', 'Lightning Network', 'Scalability'],
    content: `
      <p>The <strong>Lightning Network</strong> is a "layer 2" payment protocol that operates on top of the Bitcoin blockchain. It enables fast transactions between participating nodes and has been proposed as a solution to the bitcoin scalability problem.</p>
      
      <h2>How Does Lightning Network Work?</h2>
      <p>The Lightning Network allows for near-instant Bitcoin transactions by creating <em>payment channels</em> between users. These channels allow users to conduct an unlimited number of transactions without burdening the main blockchain with each transaction.</p>
      
      <p>Only channel-opening and channel-closing transactions need to be recorded on the Bitcoin blockchain. This significantly reduces the load on the blockchain and allows for microtransactions that were previously impractical due to fees and processing times.</p>
      
      <h2>Key Benefits of Lightning Network</h2>
      <ul>
        <li><strong>Speed</strong>: Transactions are nearly instantaneous, compared to 10+ minutes on the main Bitcoin blockchain.</li>
        <li><strong>Low fees</strong>: Transaction costs are a tiny fraction of a cent, making microtransactions feasible.</li>
        <li><strong>Scalability</strong>: The network can theoretically handle millions of transactions per second, compared to Bitcoin's 7 TPS limit.</li>
        <li><strong>Privacy</strong>: Lightning transactions are more private than on-chain transactions.</li>
      </ul>
    `
  },
  {
    id: 'self-custody-importance',
    title: 'Why Self-Custody Matters for Your Bitcoin',
    description: 'The importance of having full control over your Bitcoin and how to achieve it.',
    date: 'April 28, 2025',
    author: 'Izak Abdullah Al',
    authorImage: '/src/assets/team/izak.webp',
    authorTitle: 'Fullstack Developer',
    image: '/src/assets/hotdog.webp',
    category: 'Security',
    tags: ['Self-Custody', 'Security', 'Wallets'],
    content: `
      <p>In the world of cryptocurrencies, the phrase <strong>"not your keys, not your coins"</strong> has become a mantra for good reason. Self-custody means having complete control over your private keys, which gives you true ownership of your Bitcoin.</p>
      
      <h2>Why Self-Custody Matters</h2>
      <p>When you keep your Bitcoin on an exchange or other custodial service, you're essentially trusting that third party with your assets. History has shown that this trust can sometimes be misplaced, with numerous exchange hacks and bankruptcies resulting in users losing access to their funds.</p>
      
      <p>Self-custody eliminates this counterparty risk. When you control your private keys, you're not dependent on the security or integrity of any third party. Your Bitcoin is truly yours.</p>
    `
  },
  {
    id: 'taproot-assets-explained',
    title: 'Taproot Assets: Bringing Digital Collectibles to Bitcoin',
    description: 'How Taproot Assets enables digital collectibles and assets on the Bitcoin blockchain.',
    date: 'April 15, 2025',
    author: 'Edwin Daitche',
    authorImage: '/src/assets/team/ulrich.webp',
    authorTitle: 'IT Security & Infrastructure Specialist',
    image: '/src/assets/genisisstone-768.webp',
    category: 'Technology',
    tags: ['Taproot', 'Digital Assets', 'NFTs', 'Bitcoin'],
    content: `
      <p><strong>Taproot Assets</strong> (formerly Taro) is a protocol built on Bitcoin that allows for digital asset issuance and transfers on the Bitcoin blockchain, leveraging the Lightning Network for fast, secure, and private transactions.</p>
      
      <h2>What Makes Taproot Assets Special?</h2>
      <p>Taproot Assets brings digital collectibles to Bitcoin without requiring a separate blockchain. It leverages Bitcoin's security and decentralization while enabling advanced functionality through innovative use of the Taproot upgrade.</p>
      
      <p>The protocol allows for creating, transferring, and storing various digital assets on Bitcoin, including:</p>
      <ul>
        <li>Digital collectibles (similar to NFTs)</li>
        <li>Tokens and stablecoins</li>
        <li>Loyalty points and rewards</li>
        <li>Digital identity credentials</li>
      </ul>
    `
  }
];

// Simplified BlogPost component that doesn't rely on hooks
const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const navigate = useNavigate();
  
  // Find the post with the matching ID
  const post = BLOG_POSTS.find(p => p.id === postId);
  
  // If post isn't found, redirect to the blog list page
  if (!post) {
    // Use setTimeout to avoid immediate state updates during render
    setTimeout(() => navigate('/blog'), 0);
    
    // Show a loading state while redirecting
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#0b0b0b',
        color: 'white'
      }}>
        Redirecting to blog...
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      background: '#0b0b0b' 
    }}>
      <SEO 
        title={`${post.title} | BitNet Blog`}
        description={post.description}
        canonical={`https://bitnet.ai/blog/${post.id}`}
        keywords={post.tags.join(', ').toLowerCase()}
        image={post.image}
      />
      <Header />
      
      <main style={{
        flex: 1,
        background: 'linear-gradient(180deg, #0b0b0b 0%, #141419 100%)',
        color: '#fff'
      }}>
        <div style={{
          padding: '6rem 2rem 2rem',
          textAlign: 'center',
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${post.image}') center/cover no-repeat`,
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 140, 0, 0.9)',
            color: 'white',
            fontSize: '0.9rem',
            fontWeight: '600',
            padding: '0.4rem 1rem',
            borderRadius: '30px',
            marginBottom: '1.5rem'
          }}>{post.category}</div>
          
          <h1 style={{
            fontSize: '2.5rem',
            color: 'white',
            margin: '0 auto 2rem',
            lineHeight: '1.3',
            maxWidth: '900px'
          }}>{post.title}</h1>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative',
            zIndex: 2,
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <img 
                src={post.authorImage} 
                alt={post.author}
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}>
                <span style={{
                  fontSize: '1.1rem',
                  color: '#fff',
                  fontWeight: '500'
                }}>{post.author}</span>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#aaa'
                }}>{post.authorTitle}</span>
              </div>
            </div>
            <div style={{
              fontSize: '0.95rem',
              color: '#aaa'
            }}>{post.date}</div>
          </div>
        </div>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <Breadcrumbs 
            customPaths={[
              { path: '/blog', label: 'Blog' },
              { path: `/blog/${post.id}`, label: post.title }
            ]} 
            style={{ marginBottom: '2rem' }}
          />
          
          <div style={{
            marginBottom: '3rem'
          }}>
            <img 
              src={post.image} 
              alt={post.title}
              style={{ 
                width: '100%', 
                borderRadius: '12px',
                maxHeight: '400px',
                objectFit: 'cover' 
              }}
            />
          </div>
          
          <div 
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#ddd'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {post.tags.map((tag, index) => (
              <Link 
                key={index} 
                to={`/blog/tag/${tag.toLowerCase()}`} 
                style={{
                  display: 'inline-block',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#ddd',
                  padding: '0.4rem 1rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                {tag}
              </Link>
            ))}
          </div>
          
          <div style={{
            marginTop: '4rem'
          }}>
            <Link 
              to="/blog" 
              style={{
                display: 'inline-block',
                color: '#ff8c00',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;