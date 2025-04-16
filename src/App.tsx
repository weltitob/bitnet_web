import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MissionSection from './components/MissionSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutSection from './components/AboutSection'
import CareersSection from './components/CareersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import EarlybirdPage from './pages/Earlybird'
import EarlybirdMobilePage from './pages/EarlybirdMobile'
import InvestorRelations from './pages/InvestorRelations'
import './App.css'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <TestimonialsSection />
        <AboutSection />
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
        <Route path="/mobile/earlybird" element={<EarlybirdMobilePage />} />
        <Route path="/investors" element={<InvestorRelations />} />
      </Routes>
    </Router>
  );
}

export default App