import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
      <SEO 
        title="Frequently Asked Questions | BitNet Crypto Wallet"
        description="Find answers to common questions about BitNet crypto wallet, Bitcoin transactions, security features, and support."
        canonical="https://bitnet.ai/faq"
        keywords="Bitcoin wallet FAQ, crypto wallet questions, BitNet help, Bitcoin wallet security, crypto support"
      />
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Find answers to common questions about BitNet and our services
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">General Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What is BitNet?</h3>
                  <p className="text-gray-300">
                    BitNet is a next-generation crypto wallet solution that makes Bitcoin and digital assets more accessible, secure, and practical. 
                    We combine self-custody security with lightning-fast transactions and a seamless user experience for both beginners and advanced users.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How is BitNet different from other wallets?</h3>
                  <p className="text-gray-300">
                    BitNet stands out by integrating Taproot Assets and advanced Bitcoin technologies into a user-friendly solution. 
                    We offer sub-second transaction times with minimal fees while maintaining complete self-custody of your assets. 
                    Our wallet also provides seamless access to the entire Bitcoin ecosystem including digital collectibles, DeFi applications, 
                    and Web3 integration all through a single intuitive interface.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Is BitNet available in my country?</h3>
                  <p className="text-gray-300">
                    BitNet is available globally as a self-custody wallet. However, certain features may be limited in some regions due to 
                    regulatory requirements. We're continually working to expand our services to more regions while maintaining compliance 
                    with local regulations.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Account & Security</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How does BitNet keep my assets secure?</h3>
                  <p className="text-gray-300">
                    BitNet employs multiple layers of security including advanced encryption, private key isolation, and multi-factor authentication. 
                    Most importantly, we use a true self-custody model where you maintain complete control of your assets at all times. 
                    Your private keys never leave your device and are never stored on our servers.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What happens if I lose my recovery phrase?</h3>
                  <p className="text-gray-300">
                    Your recovery phrase is the master key to your wallet and funds. If you lose it, BitNet cannot recover your assets. 
                    We strongly recommend storing your recovery phrase in multiple secure locations, such as on paper in a safe or using 
                    a specialized metal backup solution. Never store your recovery phrase digitally or share it with anyone.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Does BitNet require KYC verification?</h3>
                  <p className="text-gray-300">
                    As a self-custody wallet, BitNet does not require KYC verification for basic wallet functionality. 
                    However, certain enhanced features or integrations with regulated services may require identity verification 
                    in accordance with local regulations.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Transactions & Features</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How fast are BitNet transactions?</h3>
                  <p className="text-gray-300">
                    BitNet transactions typically settle in under a second. We leverage cutting-edge Lightning Network and Layer 2 
                    technologies to provide instant settlement while maintaining Bitcoin's security guarantees. This makes BitNet 
                    perfect for everyday payments and microtransactions.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What assets does BitNet support?</h3>
                  <p className="text-gray-300">
                    BitNet primarily focuses on Bitcoin and assets built on Bitcoin-based protocols like Taproot Assets. 
                    This includes BTC, digital collectibles (NFTs), and tokens issued on the Bitcoin network. We continuously 
                    add support for new asset types as the Bitcoin ecosystem evolves.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How can I convert between different assets?</h3>
                  <p className="text-gray-300">
                    BitNet includes integrated swap functionality that allows you to seamlessly convert between supported assets 
                    directly within the wallet. We connect to multiple liquidity providers to ensure competitive rates and minimal slippage.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Support & Troubleshooting</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How can I contact BitNet support?</h3>
                  <p className="text-gray-300">
                    You can reach our support team through the in-app chat, by emailing support@mybitnet.com, or by visiting our 
                    <a href="/contact" className="text-orange-500 hover:text-orange-400 ml-1">contact page</a>. 
                    We also have an extensive knowledge base and community forum where you can find answers to common questions.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What should I do if a transaction is taking too long?</h3>
                  <p className="text-gray-300">
                    Most BitNet transactions settle instantly. If you're experiencing delays, please check your internet connection 
                    and wallet status. For on-chain Bitcoin transactions during periods of network congestion, you may experience longer 
                    confirmation times. You can view transaction status in the activity section of your wallet.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Is BitNet open source?</h3>
                  <p className="text-gray-300">
                    Yes, core components of BitNet are open source, allowing the community to review and contribute to our codebase. 
                    We believe in transparency and collaborate with the broader Bitcoin ecosystem. You can find our repositories on 
                    GitHub and participate in our development.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
            <a 
              href="mailto:contact@mybitnet.com" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Our Support Team
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .text-transparent {
          color: transparent;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .bg-gradient-to-r {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        
        .from-orange-500 {
          --tw-gradient-from: #f97316;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 115, 22, 0));
        }
        
        .to-yellow-500 {
          --tw-gradient-to: #eab308;
        }
        
        .text-orange-500 {
          color: #f97316;
        }
        
        .text-orange-400 {
          color: #fb923c;
        }
        
        .text-gray-300 {
          color: #d1d5db;
        }
        
        .text-gray-400 {
          color: #9ca3af;
        }
        
        .text-gray-900 {
          color: #111827;
        }
        
        .bg-gray-900 {
          background-color: #111827;
        }
        
        .container {
          width: 100%;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .py-12 {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        
        .max-w-4xl {
          max-width: 56rem;
        }
        
        .text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        
        .text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        
        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        
        .font-bold {
          font-weight: 700;
        }
        
        .font-semibold {
          font-weight: 600;
        }
        
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        
        .mb-3 {
          margin-bottom: 0.75rem;
        }
        
        .mb-4 {
          margin-bottom: 1rem;
        }
        
        .mb-12 {
          margin-bottom: 3rem;
        }
        
        .ml-1 {
          margin-left: 0.25rem;
        }
        
        .mt-12 {
          margin-top: 3rem;
        }
        
        .p-6 {
          padding: 1.5rem;
        }
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .rounded-full {
          border-radius: 9999px;
        }
        
        .space-y-6 > * + * {
          margin-top: 1.5rem;
        }
        
        .space-y-8 > * + * {
          margin-top: 2rem;
        }
        
        .hover\\:opacity-90:hover {
          opacity: 0.9;
        }
        
        .transition-opacity {
          transition-property: opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        @media (min-width: 640px) {
          .text-4xl {
            font-size: 2.5rem;
            line-height: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ;