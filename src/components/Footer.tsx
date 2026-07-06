import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 py-16 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-slate-900 font-bold mb-4">Services</h4>
          <ul className="space-y-2.5">
            <li><Link to="/game-hosting" className="hover:text-[#7200FF]">Game Hosting</Link></li>
            <li><Link to="/web-hosting" className="hover:text-[#7200FF]">Web Hosting</Link></li>
            <li><Link to="/vps-hosting" className="hover:text-[#7200FF]">VPS Hosting</Link></li>
            <li><Link to="/bot-hosting" className="hover:text-[#7200FF]">Bot Hosting</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-4">Support</h4>
          <ul className="space-y-2.5">
            <li><Link to="/support" className="hover:text-[#7200FF]">Contact / Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-4">Legal Policy</h4>
          <ul className="space-y-2.5">
            <li><Link to="/terms-of-service" className="hover:text-[#7200FF]">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#7200FF]">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-[#7200FF]">Refund Policy</Link></li>
          </ul>
        </div>
        <div className="md:text-right">
          <h3 className="text-[#7200FF] font-black text-lg">CORAMTIX</h3>
          <p className="text-xs text-slate-400 mt-2">&copy; 2026 CoRamTix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
