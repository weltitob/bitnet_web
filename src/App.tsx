import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MissionSection from './components/MissionSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutSection from './components/AboutSection'
import CareersSection from './components/CareersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SEO from './components/SEO'
import EarlybirdPage from './pages/Earlybird'
import InvestorRelations from './pages/InvestorRelations'
import FixBitcoin from './pages/FixBitcoin'
import AIStrategy from './pages/AIStrategy'
import APIDocumentation from './pages/APIDocumentation'
import DeveloperPortal from './pages/DeveloperPortal'
import IdeasSubmission from './pages/IdeasSubmission'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import NotFound from './pages/NotFound'
import './App.css'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO />
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <TestimonialsSection />
        <CareersSection />
        <ContactSection />
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
        <Route path="/earlybird" element={<EarlybirdPage />} />
        <Route path="/investors" element={<InvestorRelations />} />
        <Route path="/fixbitcoin" element={<FixBitcoin />} />
        <Route path="/aistrategy" element={<AIStrategy />} />
        <Route path="/api" element={<APIDocumentation />} />
        <Route path="/developer-portal" element={<DeveloperPortal />} />
        <Route path="/ideas" element={<IdeasSubmission />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App