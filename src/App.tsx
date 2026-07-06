import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';            
import Home from './pages/Home';                     
import GameHosting from './pages/GameHosting';
import WebHosting from './pages/WebHosting';         
import VpsHosting from './pages/VpsHosting';
import BotHosting from './pages/BotHosting';         
import LegalPage from './pages/LegalPage';
import Support from './pages/Support';
import Buy from './pages/Buy';

export default function App() {                        
  return (
    <Router>                                               
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#7200FF]/10 selection:text-[#7200FF]">                                          
        <Navbar />
        <main>
          <Routes>                                               
            <Route path="/" element={<Home />} />
            <Route path="/game-hosting" element={<GameHosting />} />
            <Route path="/web-hosting" element={<WebHosting />} />
            <Route path="/vps-hosting" element={<VpsHosting />} />
            <Route path="/bot-hosting" element={<BotHosting />} />
            <Route path="/terms-of-service" element={<LegalPage type="terms" />} />                                   
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/refund-policy" element={<LegalPage type="refund" />} />                                     
            <Route path="/support" element={<Support />} />
            <Route path="/buy" element={<Buy />} />                                        
          </Routes>                                          
        </main>
        <Footer />
      </div>                                             
    </Router>
  );
}
