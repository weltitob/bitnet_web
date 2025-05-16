import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// Import components used on the homepage directly to optimize first paint
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import SEO from './components/SEO'
// Use lazy loading for other components and pages
const MissionSection = lazy(() => import('./components/MissionSection'))
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'))
const WalletFeatureSection = lazy(() => import('./components/WalletFeatureSection'))

const AboutSection = lazy(() => import('./components/AboutSection'))
const CareersSection = lazy(() => import('./components/CareersSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
// Lazy load all pages
const EarlybirdPage = lazy(() => import('./pages/Earlybird'))
const InvestorRelations = lazy(() => import('./pages/InvestorRelations'))
const FixBitcoin = lazy(() => import('./pages/FixBitcoin'))
const AIStrategy = lazy(() => import('./pages/AIStrategy'))
const APIDocumentation = lazy(() => import('./pages/APIDocumentation'))
const DeveloperPortal = lazy(() => import('./pages/DeveloperPortal'))
const IdeasSubmission = lazy(() => import('./pages/IdeasSubmission'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const FAQ = lazy(() => import('./pages/FAQ'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const NotFound = lazy(() => import('./pages/NotFound'))
import './App.css'

// Simple loading indicator
const LoadingIndicator = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    width: '100%'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(255, 140, 0, 0.1)',
      borderTopColor: '#ff8c00',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  </div>
)

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO />
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingIndicator />}>
          <MissionSection />
          <WalletFeatureSection />
          <TestimonialsSection />
          <CareersSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/earlybird" element={
          <Suspense fallback={<LoadingIndicator />}>
            <EarlybirdPage />
          </Suspense>
        } />
        <Route path="/investors" element={
          <Suspense fallback={<LoadingIndicator />}>
            <InvestorRelations />
          </Suspense>
        } />
        <Route path="/fixbitcoin" element={
          <Suspense fallback={<LoadingIndicator />}>
            <FixBitcoin />
          </Suspense>
        } />
        <Route path="/aistrategy" element={
          <Suspense fallback={<LoadingIndicator />}>
            <AIStrategy />
          </Suspense>
        } />
        <Route path="/api" element={
          <Suspense fallback={<LoadingIndicator />}>
            <APIDocumentation />
          </Suspense>
        } />
        <Route path="/developer-portal" element={
          <Suspense fallback={<LoadingIndicator />}>
            <DeveloperPortal />
          </Suspense>
        } />
        <Route path="/ideas" element={
          <Suspense fallback={<LoadingIndicator />}>
            <IdeasSubmission />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingIndicator />}>
            <AboutUs />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<LoadingIndicator />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/blog/:postId" element={
          <Suspense fallback={<LoadingIndicator />}>
            <BlogPost />
          </Suspense>
        } />
        <Route path="/faq" element={
          <Suspense fallback={<LoadingIndicator />}>
            <FAQ />
          </Suspense>
        } />
        <Route path="/privacy-policy" element={
          <Suspense fallback={<LoadingIndicator />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms-conditions" element={
          <Suspense fallback={<LoadingIndicator />}>
            <TermsConditions />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingIndicator />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App