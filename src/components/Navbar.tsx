import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-100 bg-white sticky top-0 z-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between bg-white relative z-50">
        
        {/* Logo Section */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 font-black text-xl tracking-wider text-slate-900">
          <img src="/favicon.svg" alt="Coramtix Logo" className="w-12 h-12 object-contain" />
          CORAMTIX
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#7200FF] transition">Home</Link>
          <Link to="/game-hosting" className="hover:text-[#7200FF] transition">Game Hosting</Link>
          <Link to="/web-hosting" className="hover:text-[#7200FF] transition">Web Hosting</Link>
          <Link to="/vps-hosting" className="hover:text-[#7200FF] transition">VPS Hosting</Link>
          <Link to="/bot-hosting" className="hover:text-[#7200FF] transition">Bot Hosting</Link>
        </div>

        {/* Client Area - FIXED: Changed hidden sm:flex to hidden lg:flex */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#client-area" className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition">
            Client Area
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden p-2 text-slate-600 hover:text-[#7200FF] transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 bg-white z-40 flex flex-col justify-start pt-12 px-6 lg:hidden">
          <div className="flex flex-col space-y-5 text-center">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xl font-bold text-slate-800 hover:text-[#7200FF] py-2 border-b border-slate-50 transition"
            >
              Home
            </Link>
            <Link 
              to="/game-hosting" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xl font-bold text-slate-800 hover:text-[#7200FF] py-2 border-b border-slate-50 transition"
            >
              Game Hosting
            </Link>
            <Link 
              to="/web-hosting" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xl font-bold text-slate-800 hover:text-[#7200FF] py-2 border-b border-slate-50 transition"
            >
              Web Hosting
            </Link>
            <Link 
              to="/vps-hosting" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xl font-bold text-slate-800 hover:text-[#7200FF] py-2 border-b border-slate-50 transition"
            >
              VPS Hosting
            </Link>
            <Link 
              to="/bot-hosting" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xl font-bold text-slate-800 hover:text-[#7200FF] py-2 border-b border-slate-50 transition"
            >
              Bot Hosting
            </Link>
            
            {/* Client Area button inside mobile menu */}
            <div className="pt-6">
              <a 
                href="#client-area" 
                onClick={() => setMobileMenuOpen(false)} 
                className="inline-block bg-[#7200FF] hover:bg-[#6000dd] text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-[#7200FF]/25 transition w-full max-w-xs"
              >
                Client Area
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
