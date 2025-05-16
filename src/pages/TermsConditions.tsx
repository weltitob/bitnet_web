import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
      <SEO 
        title="Terms & Conditions | BitNet Crypto Wallet"
        description="Read BitNet's terms and conditions for using our crypto wallet services. Understand your rights, responsibilities, and our service terms."
        canonical="https://bitnet.ai/terms-conditions"
        keywords="crypto wallet terms, BitNet agreement, bitcoin wallet legal terms, cryptocurrency service agreement"
      />
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Last updated: May 9, 2025
          </p>
          
          <div className="terms-content space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you and BitNet ("we," "our," or "us") governing your access to and use of the BitNet website, mobile application, and services (collectively, the "Services").
              </p>
              <p className="text-gray-300">
                By accessing or using our Services, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">2. Service Description</h2>
              <p className="text-gray-300 mb-4">
                BitNet provides a self-custody cryptocurrency wallet service that allows users to store, send, receive, and manage digital assets. Our Services may include:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Digital asset storage and management</li>
                <li>Cryptocurrency transaction services</li>
                <li>Integration with third-party platforms and services</li>
                <li>Educational content and resources</li>
                <li>Community features and support</li>
              </ul>
              
              <p className="text-gray-300">
                We may update or modify our Services at any time without prior notice. We reserve the right to discontinue or limit access to any Services for any reason.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">3. Eligibility</h2>
              <p className="text-gray-300 mb-4">
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Are at least 18 years of age</li>
                <li>Have the legal capacity to enter into these Terms</li>
                <li>Are not located in, under the control of, or a citizen or resident of any country where use of our Services would be prohibited by applicable laws</li>
                <li>Will not use our Services if the laws of your country prohibit you from doing so</li>
                <li>Are not on any sanctions lists or prohibited from engaging in financial transactions</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">4. User Accounts</h2>
              <p className="text-gray-300 mb-4">
                Some features of our Services may require you to create an account. When you create an account, you agree to:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your information</li>
                <li>Keep your password and recovery phrase secure and confidential</li>
                <li>Be solely responsible for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              
              <p className="text-gray-300">
                We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or no longer current, or if we believe you have violated these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">5. Self-Custody and User Responsibility</h2>
              <p className="text-gray-300 mb-4">
                BitNet is a self-custody wallet service, which means:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>You have full control and ownership of your private keys and digital assets</li>
                <li>We do not have access to your private keys, recovery phrase, or funds</li>
                <li>We cannot recover your wallet if you lose your recovery phrase</li>
                <li>We cannot reverse transactions once they are broadcast to the blockchain</li>
                <li>You are solely responsible for securing your private keys and recovery phrase</li>
              </ul>
              
              <p className="text-gray-300 font-semibold">
                IMPORTANT: If you lose your recovery phrase, you will permanently lose access to your digital assets. We strongly recommend storing your recovery phrase in multiple secure locations.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">6. Prohibited Activities</h2>
              <p className="text-gray-300 mb-4">
                When using our Services, you agree not to:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use our Services for illegal activities, including money laundering, terrorist financing, or fraud</li>
                <li>Attempt to gain unauthorized access to our Services or other users' accounts</li>
                <li>Interfere with or disrupt the operation of our Services</li>
                <li>Introduce malware, viruses, or other harmful code</li>
                <li>Engage in market manipulation or other deceptive practices</li>
                <li>Scrape, data mine, or extract data from our Services without permission</li>
                <li>Use our Services to violate any third-party terms of service</li>
              </ul>
              
              <p className="text-gray-300">
                We reserve the right to investigate and take appropriate action against any suspected violations of these prohibitions, including terminating your account and reporting you to law enforcement authorities.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">7. Fees and Transactions</h2>
              <p className="text-gray-300 mb-4">
                While BitNet aims to provide low-cost services, certain aspects of our Services may involve fees:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Network fees: Blockchain transactions require network fees that are paid directly to network validators/miners</li>
                <li>Service fees: We may charge fees for certain advanced features or services</li>
                <li>Third-party fees: Integrations with third-party services may involve additional fees</li>
              </ul>
              
              <p className="text-gray-300 mb-4">
                You are responsible for:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Checking all transaction details before confirming</li>
                <li>Ensuring you have sufficient funds to cover transaction amounts and fees</li>
                <li>Understanding that blockchain transactions are irreversible once confirmed</li>
              </ul>
              
              <p className="text-gray-300">
                Fee schedules may change at any time. Current fee information will be available within the application.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">8. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content and materials available through our Services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of BitNet or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-300 mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use our Services for your personal, non-commercial use, subject to these Terms.
              </p>
              <p className="text-gray-300">
                You may not modify, reproduce, distribute, create derivative works from, publicly display, publicly perform, republish, download, store, transmit, or otherwise exploit any content from our Services without our express written consent.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">9. Disclaimers and Limitations of Liability</h2>
              <p className="text-gray-300 mb-4 font-semibold">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, we disclaim all warranties, including but not limited to:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement</li>
                <li>Warranties that our Services will meet your requirements or be available uninterrupted, timely, secure, or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any information obtained through our Services</li>
              </ul>
              
              <p className="text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BITNET BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Your access to or use of or inability to access or use our Services</li>
                <li>Any conduct or content of any third party on our Services</li>
                <li>Loss of your digital assets, private keys, or recovery phrases</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Fluctuations in cryptocurrency value</li>
                <li>Technical failures or security breaches</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">10. Dispute Resolution</h2>
              <p className="text-gray-300 mb-4">
                Any dispute arising from these Terms or your use of our Services shall be resolved through:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Informal negotiation: First attempt to resolve any dispute informally by contacting us</li>
                <li>Mediation: If informal negotiation fails, the dispute will be submitted to mediation</li>
                <li>Arbitration: If mediation fails, the dispute will be settled by binding arbitration</li>
              </ul>
              
              <p className="text-gray-300">
                Any legal action related to these Terms must be brought within one year after the cause of action arises. These dispute resolution provisions will survive termination of these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">11. Changes to Terms</h2>
              <p className="text-gray-300">
                We may update these Terms at any time by posting the revised version on our website with an updated effective date. Your continued use of our Services after the effective date of the revised Terms constitutes your acceptance of the changes. It is your responsibility to check for updates to these Terms regularly.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-300">Email: legal@mybitnet.com</p>
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

export default TermsConditions;