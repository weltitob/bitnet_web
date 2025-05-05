
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const APIDocumentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
      <Header />
      
      <main style={{ flex: '1', paddingTop: '2rem' }}>
        <div className="api-container">
          <div className="api-sidebar">
            <h3>Documentation</h3>
            <nav className="api-nav">
              <ul>
                <li className={activeSection === 'introduction' ? 'active' : ''}>
                  <a href="#introduction" onClick={() => setActiveSection('introduction')}>Introduction</a>
                </li>
                <li className={activeSection === 'authentication' ? 'active' : ''}>
                  <a href="#authentication" onClick={() => setActiveSection('authentication')}>Authentication</a>
                </li>
                <li className={activeSection === 'endpoints' ? 'active' : ''}>
                  <a href="#endpoints" onClick={() => setActiveSection('endpoints')}>Endpoints</a>
                </li>
                <li className={activeSection === 'examples' ? 'active' : ''}>
                  <a href="#examples" onClick={() => setActiveSection('examples')}>Examples</a>
                </li>
                <li className={activeSection === 'libraries' ? 'active' : ''}>
                  <a href="#libraries" onClick={() => setActiveSection('libraries')}>Libraries & SDKs</a>
                </li>
                <li className={activeSection === 'rate-limits' ? 'active' : ''}>
                  <a href="#rate-limits" onClick={() => setActiveSection('rate-limits')}>Rate Limits</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="api-content">
            <section id="introduction" className={activeSection === 'introduction' ? 'active' : ''}>
              <h1>BitNet API <span className="api-version">v1.0</span></h1>
              <p className="api-description">
                Build innovative Bitcoin applications with BitNet's powerful and developer-friendly API.
              </p>
              
              <div className="api-card">
                <h2>Getting Started</h2>
                <p>
                  The BitNet API provides a simple and elegant way to interact with the Bitcoin network, manage wallets, 
                  process transactions, and retrieve blockchain data. Our RESTful API is designed with modern application 
                  development in mind, following best practices that developers expect.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu 
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla 
                  enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
                
                <div className="code-example">
                  <pre><code>{`// Example API request with JavaScript
const response = await fetch('https://api.mybitnet.com/v1/transactions', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}</code></pre>
                </div>
              </div>
            </section>
            
            <section id="authentication" className={activeSection === 'authentication' ? 'active' : ''}>
              <h1>Authentication</h1>
              <div className="api-card">
                <h2>API Keys</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu 
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla 
                  enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
                
                <div className="code-example">
                  <pre><code>{`// API Key Authentication
const apiKey = 'YOUR_API_KEY';

fetch('https://api.mybitnet.com/v1/wallets', {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`
  }
})`}</code></pre>
                </div>
              </div>
            </section>
            
            <section id="endpoints" className={activeSection === 'endpoints' ? 'active' : ''}>
              <h1>API Endpoints</h1>
              
              <div className="api-card">
                <h2>Transactions</h2>
                <div className="endpoint">
                  <div className="method get">GET</div>
                  <div className="path">/v1/transactions</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu 
                  sed erat molestie vehicula.
                </p>
                
                <div className="endpoint">
                  <div className="method post">POST</div>
                  <div className="path">/v1/transactions</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu 
                  sed erat molestie vehicula.
                </p>
              </div>
              
              <div className="api-card">
                <h2>Wallets</h2>
                <div className="endpoint">
                  <div className="method get">GET</div>
                  <div className="path">/v1/wallets</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                </p>
                
                <div className="endpoint">
                  <div className="method post">POST</div>
                  <div className="path">/v1/wallets</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                </p>
              </div>
            </section>
            
            <section id="examples" className={activeSection === 'examples' ? 'active' : ''}>
              <h1>Code Examples</h1>
              
              <div className="api-card">
                <h2>JavaScript</h2>
                <div className="code-example">
                  <pre><code>{`// Create a new wallet
const createWallet = async (name, type) => {
  const response = await fetch('https://api.mybitnet.com/v1/wallets', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      type
    })
  });
  
  return await response.json();
};

// Example usage
const newWallet = await createWallet('My Bitcoin Wallet', 'bitcoin');
console.log(newWallet);`}</code></pre>
                </div>
              </div>
              
              <div className="api-card">
                <h2>Python</h2>
                <div className="code-example">
                  <pre><code>{`import requests

# Fetch transaction history
def get_transactions(wallet_id, limit=50):
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    
    params = {
        'wallet_id': wallet_id,
        'limit': limit
    }
    
    response = requests.get(
        'https://api.mybitnet.com/v1/transactions',
        headers=headers,
        params=params
    )
    
    return response.json()

# Example usage
transactions = get_transactions('wallet_12345', limit=10)
print(transactions)`}</code></pre>
                </div>
              </div>
            </section>
            
            <section id="libraries" className={activeSection === 'libraries' ? 'active' : ''}>
              <h1>Libraries & SDKs</h1>
              
              <div className="api-card">
                <h2>Official SDKs</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu 
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
                
                <div className="sdk-list">
                  <div className="sdk-item">
                    <h3>JavaScript</h3>
                    <p>npm install bitnet-api</p>
                  </div>
                  
                  <div className="sdk-item">
                    <h3>Python</h3>
                    <p>pip install bitnet-api</p>
                  </div>
                  
                  <div className="sdk-item">
                    <h3>Java</h3>
                    <p>Maven/Gradle package</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="rate-limits" className={activeSection === 'rate-limits' ? 'active' : ''}>
              <h1>Rate Limits</h1>
              
              <div className="api-card">
                <h2>Request Limits</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu 
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
                
                <table className="rate-limit-table">
                  <thead>
                    <tr>
                      <th>Plan</th>
                      <th>Requests per minute</th>
                      <th>Requests per day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Developer</td>
                      <td>60</td>
                      <td>10,000</td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td>300</td>
                      <td>100,000</td>
                    </tr>
                    <tr>
                      <td>Enterprise</td>
                      <td>1,000</td>
                      <td>Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .api-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .api-sidebar {
          width: 250px;
          padding-right: 2rem;
          position: sticky;
          top: 100px;
          align-self: flex-start;
          height: calc(100vh - 100px);
        }
        
        .api-sidebar h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        
        .api-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .api-nav li {
          margin-bottom: 0.8rem;
        }
        
        .api-nav a {
          color: #aaa;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          display: block;
          padding: 0.5rem 0;
        }
        
        .api-nav li.active a {
          color: #ff8c00;
          font-weight: 500;
        }
        
        .api-nav a:hover {
          color: #ff8c00;
        }
        
        .api-content {
          flex: 1;
          min-width: 0;
        }
        
        .api-content section {
          display: none;
          padding-bottom: 3rem;
        }
        
        .api-content section.active {
          display: block;
        }
        
        .api-content h1 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
        }
        
        .api-version {
          font-size: 1rem;
          font-weight: 500;
          color: #ff8c00;
          background: rgba(255, 140, 0, 0.1);
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          margin-left: 1rem;
        }
        
        .api-description {
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 2rem;
          font-weight: 300;
        }
        
        .api-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }
        
        .api-card h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        
        .api-card p {
          color: #bbb;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .code-example {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          padding: 1.5rem;
          overflow: auto;
          margin-top: 1rem;
        }
        
        .code-example pre {
          margin: 0;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        }
        
        .code-example code {
          color: #e0e0e0;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .endpoint {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
        }
        
        .method {
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-right: 1rem;
          min-width: 60px;
          text-align: center;
        }
        
        .method.get {
          background-color: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }
        
        .method.post {
          background-color: rgba(52, 211, 153, 0.2);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.1);
        }
        
        .path {
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          color: #d1d5db;
          font-size: 0.95rem;
        }
        
        .sdk-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .sdk-item {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .sdk-item h3 {
          font-size: 1.2rem;
          margin-top: 0;
          margin-bottom: 0.8rem;
          color: #ff8c00;
        }
        
        .sdk-item p {
          margin: 0;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 0.85rem;
          color: #aaa;
        }
        
        .rate-limit-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        
        .rate-limit-table th {
          text-align: left;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-weight: 500;
        }
        
        .rate-limit-table th:first-child {
          border-top-left-radius: 8px;
        }
        
        .rate-limit-table th:last-child {
          border-top-right-radius: 8px;
        }
        
        .rate-limit-table td {
          padding: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: #bbb;
        }
        
        @media (max-width: 900px) {
          .api-container {
            flex-direction: column;
          }
          
          .api-sidebar {
            width: 100%;
            position: relative;
            top: 0;
            height: auto;
            margin-bottom: 2rem;
          }
          
          .api-nav ul {
            display: flex;
            flex-wrap: wrap;
          }
          
          .api-nav li {
            margin-right: 1rem;
          }
        }
        
        @media (max-width: 600px) {
          .api-card {
            padding: 1.5rem;
          }
          
          .code-example {
            padding: 1rem;
          }
          
          .api-content h1 {
            font-size: 1.8rem;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .api-version {
            margin-left: 0;
            margin-top: 0.5rem;
          }
          
          .endpoint {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .method {
            margin-bottom: 0.5rem;
          }
          
          .sdk-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default APIDocumentation;
