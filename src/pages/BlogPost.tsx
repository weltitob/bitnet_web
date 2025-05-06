import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
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
      
      <h2>Lightning Network and BitNet</h2>
      <p>At BitNet, we're leveraging the Lightning Network to provide our users with the fastest, most cost-effective Bitcoin transactions possible. Our wallet seamlessly integrates Lightning capabilities, allowing you to switch between on-chain and Lightning transactions depending on your needs.</p>
      
      <p>Whether you're making a large payment that requires the security of the main Bitcoin blockchain or sending a small tip to a content creator, BitNet's wallet gives you the flexibility to choose the right option for every situation.</p>
      
      <h2>The Future of Bitcoin Payments</h2>
      <p>As the Lightning Network grows, it's becoming an increasingly vital part of the Bitcoin ecosystem. The ability to conduct micro-transactions opens up new use cases for Bitcoin, from streaming money for content to machine-to-machine payments in the Internet of Things.</p>
      
      <p>With BitNet, you're not just using current technology – you're helping to build the future of finance, one block at a time.</p>
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
      
      <h2>The Three Pillars of Self-Custody</h2>
      <ol>
        <li><strong>Control</strong>: You have complete authority over your funds, with no intermediary able to freeze or confiscate them.</li>
        <li><strong>Security</strong>: When implemented correctly, self-custody can provide superior security compared to keeping funds on exchanges.</li>
        <li><strong>Privacy</strong>: Self-custody can enhance your financial privacy, as you don't need to share personal information with exchanges or comply with their surveillance policies.</li>
      </ol>
      
      <h2>Common Concerns with Self-Custody</h2>
      <p>Many people avoid self-custody because they worry about:</p>
      <ul>
        <li>Complexity of managing keys</li>
        <li>Fear of losing access to funds</li>
        <li>Technical challenges of securing their Bitcoin</li>
      </ul>
      
      <p>At BitNet, we believe self-custody shouldn't be intimidating. Our wallet is designed to provide the security benefits of self-custody with an intuitive user experience that anyone can navigate.</p>
      
      <h2>BitNet's Approach to Self-Custody</h2>
      <p>Our wallet puts you in control of your Bitcoin without technical complexity. We've built a user-friendly interface that guides you through secure key management, backup procedures, and safe usage practices.</p>
      
      <p>With BitNet, you get the best of both worlds – the security and freedom of self-custody with the convenience of a modern digital financial tool.</p>
      
      <h2>Getting Started with Self-Custody</h2>
      <p>Making the switch to self-custody doesn't have to happen all at once. You can start by moving a small amount of Bitcoin to your BitNet wallet, getting comfortable with the process, and gradually transitioning more of your holdings.</p>
      
      <p>Remember, self-custody is a journey, not a destination. It's about developing good security practices and taking responsibility for your financial sovereignty.</p>
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
      
      <h2>How Taproot Assets Works</h2>
      <p>Taproot Assets uses a combination of technologies to enable asset functionality on Bitcoin:</p>
      
      <ol>
        <li><strong>Taproot Commitments</strong>: Assets are created by committing asset data to Bitcoin transactions using Taproot's scripting capabilities.</li>
        <li><strong>Merkle Trees</strong>: Complex asset data is stored efficiently using Merkle trees, with only the Merkle root stored on-chain.</li>
        <li><strong>Lightning Network</strong>: Assets can be transferred instantly over Lightning, inheriting its speed and low-cost properties.</li>
      </ol>
      
      <p>This approach allows for scalable asset creation and transfer while maintaining Bitcoin's security properties.</p>
      
      <h2>BitNet's Integration with Taproot Assets</h2>
      <p>At BitNet, we're committed to bringing the best of Bitcoin technology to our users. Our wallet fully supports Taproot Assets, allowing you to:</p>
      
      <ul>
        <li>Create and issue your own digital assets</li>
        <li>View and manage your digital collectibles</li>
        <li>Send and receive assets instantly over Lightning</li>
        <li>Explore the emerging ecosystem of Bitcoin-native digital assets</li>
      </ul>
      
      <h2>The Future of Digital Assets on Bitcoin</h2>
      <p>Taproot Assets represents a significant evolution in Bitcoin's capabilities. By enabling complex digital assets without sacrificing Bitcoin's core principles, it opens new possibilities for creators, developers, and users.</p>
      
      <p>As the ecosystem grows, we expect to see innovative applications in areas like:</p>
      <ul>
        <li>Digital art and collectibles backed by Bitcoin's security</li>
        <li>Loyalty and reward programs with global reach and interoperability</li>
        <li>Decentralized identity solutions using Bitcoin's trusted infrastructure</li>
        <li>Asset tokenization with Lightning-fast transfers</li>
      </ul>
      
      <p>With BitNet, you'll be at the forefront of this exciting development in the Bitcoin ecosystem.</p>
    `
  }
];

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Find the post with the matching ID
  const post = BLOG_POSTS.find(p => p.id === postId);
  
  useEffect(() => {
    // If post doesn't exist, redirect to the blog page
    if (!post) {
      navigate('/blog');
      return;
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [post, navigate]);
  
  // If post isn't found, show loading (would normally redirect in useEffect)
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0b0b0b' }}>
      <SEO 
        title={`${post.title} | BitNet Blog`}
        description={post.description}
        canonical={`https://www.bitnet.com/blog/${post.id}`}
        keywords={post.tags.join(', ').toLowerCase()}
        image={post.image}
      />
      <Header />
      
      <main className="blog-post-page">
        <div className="blog-post-hero">
          <div className="post-category">{post.category}</div>
          <h1>{post.title}</h1>
          
          <div className="post-meta">
            <div className="post-author">
              <LazyImage 
                src={post.authorImage} 
                alt={post.author}
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
              <div className="author-info">
                <span className="author-name">{post.author}</span>
                <span className="author-title">{post.authorTitle}</span>
              </div>
            </div>
            <div className="post-date">{post.date}</div>
          </div>
        </div>
        
        <div className="blog-post-container">
          <Breadcrumbs 
            customPaths={[
              { path: '/blog', label: 'Blog' },
              { path: `/blog/${post.id}`, label: post.title }
            ]} 
            style={{ marginBottom: '2rem' }}
          />
          <div className="blog-post-image">
            <LazyImage 
              src={post.image} 
              alt={post.title}
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
          
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="blog-post-tags">
            {post.tags.map((tag, index) => (
              <Link key={index} to={`/blog/tag/${tag.toLowerCase()}`} className="post-tag">
                {tag}
              </Link>
            ))}
          </div>
          
          <div className="post-navigation">
            <Link to="/blog" className="back-to-blog">
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .blog-post-page {
          flex: 1;
          background: linear-gradient(180deg, #0b0b0b 0%, #141419 100%);
          color: #fff;
        }
        
        .blog-post-hero {
          padding: 6rem 2rem 2rem;
          text-align: center;
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), 
                      url('${post.image}') center/cover no-repeat;
          position: relative;
        }
        
        .blog-post-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(to top, #0b0b0b, transparent);
        }
        
        .post-category {
          display: inline-block;
          background: rgba(255, 140, 0, 0.9);
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 30px;
          margin-bottom: 1.5rem;
        }
        
        .blog-post-hero h1 {
          font-size: 3rem;
          background: linear-gradient(135deg, #ffffff, #aaaaaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 auto 2rem;
          line-height: 1.3;
          max-width: 900px;
        }
        
        .post-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .post-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .author-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        
        .author-name {
          font-size: 1.1rem;
          color: #fff;
          font-weight: 500;
        }
        
        .author-title {
          font-size: 0.9rem;
          color: #aaa;
        }
        
        .post-date {
          font-size: 0.95rem;
          color: #aaa;
        }
        
        .blog-post-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .blog-post-image {
          margin-bottom: 3rem;
        }
        
        .blog-post-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ddd;
        }
        
        .blog-post-content h2 {
          font-size: 2rem;
          color: #fff;
          margin: 2.5rem 0 1.5rem;
        }
        
        .blog-post-content p {
          margin-bottom: 1.5rem;
        }
        
        .blog-post-content ul, 
        .blog-post-content ol {
          padding-left: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .blog-post-content li {
          margin-bottom: 0.5rem;
        }
        
        .blog-post-content strong {
          color: #fff;
          font-weight: 600;
        }
        
        .blog-post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .post-tag {
          display: inline-block;
          background: rgba(255, 255, 255, 0.05);
          color: #ddd;
          padding: 0.4rem 1rem;
          border-radius: 30px;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .post-tag:hover {
          background: rgba(255, 140, 0, 0.1);
          color: #ff8c00;
        }
        
        .post-navigation {
          margin-top: 4rem;
          display: flex;
          justify-content: space-between;
        }
        
        .back-to-blog {
          display: inline-block;
          color: #ff8c00;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .back-to-blog:hover {
          transform: translateX(-5px);
        }
        
        @media (max-width: 768px) {
          .blog-post-hero {
            padding: 5rem 1.5rem 2rem;
          }
          
          .blog-post-hero h1 {
            font-size: 2.2rem;
          }
          
          .post-meta {
            flex-direction: column;
            gap: 1rem;
          }
          
          .blog-post-container {
            padding: 3rem 1.5rem;
          }
          
          .blog-post-content {
            font-size: 1rem;
          }
          
          .blog-post-content h2 {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;