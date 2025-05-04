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
import FixBitcoin from './pages/FixBitcoin'
import AIStrategy from './pages/AIStrategy'
import APIDocumentation from './pages/APIDocumentation'
import DeveloperPortal from './pages/DeveloperPortal'
import IdeasSubmission from './pages/IdeasSubmission'; // Added IdeasSubmission page
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
        <Route path="/investors" element={<InvestorRelations />} />
        <Route path="/fixbitcoin" element={<FixBitcoin />} />
        <Route path="/aistrategy" element={<AIStrategy />} />
        <Route path="/api" element={<APIDocumentation />} />
        <Route path="/developer-portal" element={<DeveloperPortal />} />
        <Route path="/ideas" element={<IdeasSubmission />} /> {/* Added route for IdeasSubmission */}
      </Routes>
    </Router>
  );
}

export default App

// Placeholder for IdeasSubmission.tsx -  Requires Firebase integration
//This component needs a more complete implementation with Firebase integration for database interaction.
//This is a basic placeholder.
const IdeasSubmission = () => {
    return (
      <div>
        <h1>Submit Your Idea</h1>
        <form>
          {/* Add form elements here */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default IdeasSubmission;