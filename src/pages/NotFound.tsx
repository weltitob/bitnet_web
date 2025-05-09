import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b0b0b', color: '#fff' }}>
      <SEO 
        title="Page Not Found | BitNet"
        description="The page you are looking for could not be found. Return to the BitNet homepage for secure crypto wallet solutions."
        canonical="https://bitnet.ai/404"
      />
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="error-code mb-6 relative">
            <div 
              className="glow-effect absolute" 
              style={{
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0) 70%)',
                zIndex: 0,
                borderRadius: '50%'
              }}
            ></div>
            <h1 
              className="text-9xl font-bold relative z-10"
              style={{
                background: 'linear-gradient(135deg, #ff8c00, #ff5e00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              404
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="suggestions mb-10">
            <h3 className="text-lg font-semibold mb-4">You might want to check out:</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/" 
                className="suggestion-link p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="icon-container mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" width="24" height="24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span className="block">Home</span>
              </Link>
              
              <Link 
                to="/about" 
                className="suggestion-link p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="icon-container mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" width="24" height="24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <span className="block">About Us</span>
              </Link>
              
              <Link 
                to="/blog" 
                className="suggestion-link p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="icon-container mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" width="24" height="24">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <span className="block">Blog</span>
              </Link>
              
              <Link 
                to="/faq" 
                className="suggestion-link p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="icon-container mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" width="24" height="24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <span className="block">FAQ</span>
              </Link>
            </div>
          </div>
          
          <div className="search-or-contact mb-8">
            <Link 
              to="/#contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="bitcoin-animation">
            <div 
              className="bitcoin-symbol relative mx-auto"
              style={{
                width: '40px',
                height: '40px',
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff8c00" width="40" height="40">
                <path d="M11.5 11.5v-2.5h1c.55 0 1 .45 1 1s-.45 1-1 1h-1zm1 1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1v-3h1zm-2-7c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm1.5-5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5h1.5v1.5h-1.5v1.5z"/>
              </svg>
              
              <div 
                className="shadow absolute" 
                style={{
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70%',
                  height: '5px',
                  background: 'radial-gradient(ellipse at center, rgba(255, 140, 0, 0.3) 0%, rgba(255, 140, 0, 0) 70%)',
                  borderRadius: '50%',
                  animation: 'shadow 3s ease-in-out infinite',
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes shadow {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-50%) scale(0.7);
            opacity: 0.2;
          }
        }
        
        .text-9xl {
          font-size: 9rem;
          line-height: 1;
        }
        
        .text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        
        .text-lg {
          font-size: 1.125rem;
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
        
        .mb-6 {
          margin-bottom: 1.5rem;
        }
        
        .mb-8 {
          margin-bottom: 2rem;
        }
        
        .mb-10 {
          margin-bottom: 2.5rem;
        }
        
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        
        .py-4 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        
        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        
        .p-4 {
          padding: 1rem;
        }
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .rounded-full {
          border-radius: 9999px;
        }
        
        .flex {
          display: flex;
        }
        
        .flex-col {
          flex-direction: column;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-center {
          justify-content: center;
        }
        
        .text-center {
          text-align: center;
        }
        
        .relative {
          position: relative;
        }
        
        .absolute {
          position: absolute;
        }
        
        .z-10 {
          z-index: 10;
        }
        
        .max-w-md {
          max-width: 28rem;
        }
        
        .text-gray-400 {
          color: #9ca3af;
        }
        
        .bg-gray-900 {
          background-color: #111827;
        }
        
        .bg-gray-800 {
          background-color: #1f2937;
        }
        
        .hover\\:bg-gray-800:hover {
          background-color: #1f2937;
        }
        
        .from-orange-500 {
          --tw-gradient-from: #f97316;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 115, 22, 0));
        }
        
        .to-orange-600 {
          --tw-gradient-to: #ea580c;
        }
        
        .hover\\:from-orange-600:hover {
          --tw-gradient-from: #ea580c;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(234, 88, 12, 0));
        }
        
        .hover\\:to-orange-700:hover {
          --tw-gradient-to: #c2410c;
        }
        
        .transition-colors {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        
        .grid {
          display: grid;
        }
        
        .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        
        .gap-4 {
          gap: 1rem;
        }
        
        .block {
          display: block;
        }
        
        .inline-block {
          display: inline-block;
        }
        
        @media (max-width: 640px) {
          .text-9xl {
            font-size: 6rem;
          }
          
          .text-3xl {
            font-size: 1.5rem;
          }
          
          .grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;