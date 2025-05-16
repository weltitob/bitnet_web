import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
      <SEO 
        title="Privacy Policy | BitNet Crypto Wallet"
        description="Learn how BitNet protects your privacy and handles your personal information when using our crypto wallet services."
        canonical="https://bitnet.ai/privacy-policy"
        keywords="cryptocurrency privacy policy, bitcoin wallet security, crypto data protection, BitNet privacy"
      />
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Last updated: May 9, 2025
          </p>
          
          <div className="policy-content space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Introduction</h2>
              <p className="text-gray-300 mb-4">
                BitNet ("we," "our," or "us") is committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This privacy policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services.
              </p>
              <p className="text-gray-300">
                By accessing or using BitNet, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect several types of information from and about users of our wallet services:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Information You Provide to Us</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Email address and contact information (when you sign up for our newsletter or contact support)</li>
                <li>Information you provide when creating an account (if applicable)</li>
                <li>Information you share when participating in community discussions, surveys, or contacting our support team</li>
                <li>User preferences and settings</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Usage data such as how you interact with our services</li>
                <li>Device information including IP address, browser type, operating system, and device identifiers</li>
                <li>Location information (with your consent)</li>
                <li>Cookies and similar tracking technologies (as described in our Cookie Policy)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Blockchain Information</h3>
              <p className="text-gray-300">
                Please note that blockchain transactions are public by nature. Information such as your wallet addresses and transaction history on public blockchains are publicly accessible and are not considered private information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect for various purposes, including:</p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Providing, operating, and maintaining our services</li>
                <li>Improving, personalizing, and expanding our services</li>
                <li>Understanding how users access and use our services</li>
                <li>Developing new products, services, features, and functionality</li>
                <li>Communicating with you about our services, updates, and customer support</li>
                <li>Protecting against, identifying, and preventing fraud and other illegal activities</li>
                <li>Complying with our legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Data Storage and Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption protocols and maintain strict access controls to our systems.
              </p>
              <p className="text-gray-300 mb-4">
                BitNet is a self-custody wallet, which means we do not have access to your private keys, recovery phrases, or funds. These are stored locally on your device and never transmitted to our servers. You are solely responsible for securing your private keys and recovery phrases.
              </p>
              <p className="text-gray-300">
                However, other personal information may be stored on our secure servers and will be protected in accordance with this privacy policy and applicable laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Sharing Your Information</h2>
              <p className="text-gray-300 mb-4">
                We do not sell your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who help us operate our services (such as cloud hosting providers or analytics services)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, legal process, or government requests</li>
                <li><strong>Protection of Rights:</strong> We may share information to protect our rights, privacy, safety, or property</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset</li>
                <li><strong>With Your Consent:</strong> We may share information with your consent or at your direction</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Your Choices and Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Accessing, updating, or deleting your personal information</li>
                <li>Objecting to our processing of your information</li>
                <li>Requesting restriction of processing</li>
                <li>Data portability</li>
                <li>Withdrawing consent (where processing is based on consent)</li>
              </ul>
              
              <p className="text-gray-300">
                To exercise these rights or if you have questions about your rights, please contact us at privacy@mybitnet.com.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can take appropriate action.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-300">Email: privacy@mybitnet.com</p>
                <p className="text-gray-300">Address: BitNet Inc., 123 Blockchain Ave, San Francisco, CA 94104, USA</p>
              </div>
            </section>
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
        
        .text-gray-300 {
          color: #d1d5db;
        }
        
        .text-gray-400 {
          color: #9ca3af;
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
        
        .p-6 {
          padding: 1.5rem;
        }
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .list-disc {
          list-style-type: disc;
        }
        
        .pl-6 {
          padding-left: 1.5rem;
        }
        
        .space-y-2 > * + * {
          margin-top: 0.5rem;
        }
        
        .space-y-8 > * + * {
          margin-top: 2rem;
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

export default PrivacyPolicy;