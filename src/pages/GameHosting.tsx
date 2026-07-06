import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Check, ArrowRight, Layers, Flame, Briefcase, Gamepad } from 'lucide-react';

// ऑल इन वन 10 प्लांस डेटा - CPU में vCPU और % दोनों जोड़ दिया है
const allPlans = [
  { name: "Budget Nano", basePrice: 99, ram: "1 GB", cpu: "1 vCPU (100%)", storage: "15 GB NVMe", type: "budget", bestFor: "Small Discord Bots & Test Servers" },
  { name: "Budget Lite", basePrice: 149, ram: "2 GB", cpu: "1 vCPU (100%)", storage: "25 GB NVMe", type: "budget", bestFor: "Lightweight Apps & Small Plugins" },
  { name: "Budget Plus", basePrice: 199, ram: "2 GB", cpu: "2 vCPU (200%)", storage: "35 GB NVMe", type: "budget", bestFor: "Basic Minecraft & Friends Servers", popular: true },
  
  { name: "Starter", basePrice: 349, ram: "4 GB", cpu: "2 vCPU (200%)", storage: "50 GB NVMe", type: "premium", bestFor: "Modded Minecraft & Small Communities" },
  { name: "Premium", basePrice: 549, ram: "6 GB", cpu: "3 vCPU (300%)", storage: "75 GB NVMe", type: "premium", bestFor: "FiveM, Rust & Medium Communities" },
  { name: "Premium Pro", basePrice: 799, ram: "8 GB", cpu: "4 vCPU (400%)", storage: "100 GB NVMe", type: "premium", bestFor: "Heavy Modpacks & Palworld Servers", popular: true },
  
  { name: "Business", basePrice: 1199, ram: "12 GB", cpu: "6 vCPU (600%)", storage: "150 GB NVMe", type: "business", bestFor: "Large Multi-server Networks" },
  { name: "Business Pro", basePrice: 1699, ram: "16 GB", cpu: "8 vCPU (800%)", storage: "200 GB NVMe", type: "business", bestFor: "Public Gaming Communities" },
  { name: "Enterprise", basePrice: 2499, ram: "24 GB", cpu: "10 vCPU (1000%)", storage: "300 GB NVMe", type: "business", bestFor: "Commercial Production Servers" },
  { name: "Ultimate", basePrice: 3999, ram: "32 GB", cpu: "12 vCPU (1200%)", storage: "500 GB NVMe", type: "business", bestFor: "Unrestricted Power & Scaling" }
];

const features = [
  "Instant Setup", "NVMe SSD", "DDoS Protection", "99.9% Uptime",
  "Full Control Panel", "FTP/File Manager", "Database", "Free Backups", "24/7 Support"
];

const games = [
  "Minecraft (Java & Bedrock)", "FiveM", "Rust", "Terraria", 
  "ARK: Survival Ascended", "Palworld", "Valheim", "CS2", 
  "Garry's Mod", "Project Zomboid", "Satisfactory", "Factorio"
];

export default function GameHosting() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'budget' | 'premium' | 'business'>('budget');
  const [currency, setCurrency] = useState({ symbol: "₹", rate: 1, label: "INR" });

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes('Asia/Kolkata') || tz.includes('Calcutta')) {
        setCurrency({ symbol: "₹", rate: 1, label: "INR" });
      } else if (tz.includes('Europe') || tz.includes('London') || tz.includes('Paris')) {
        setCurrency({ symbol: "€", rate: 0.011, label: "EUR" });
      } else {
        setCurrency({ symbol: "$", rate: 0.012, label: "USD" });
      }
    } catch (e) {
      setCurrency({ symbol: "$", rate: 0.012, label: "USD" });
    }
  }, []);

  const formatPrice = (basePrice: number) => {
    if (currency.symbol === "₹") {
      return `₹${basePrice.toLocaleString('en-IN')}`;
    } else {
      const converted = (basePrice * currency.rate).toFixed(2);
      return `${currency.symbol}${converted}`;
    }
  };

  const filteredPlans = allPlans.filter(plan => plan.type === activeTab);

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-4">
            <Zap className="w-3.5 h-3.5 fill-[#7200FF]" /> High-Tickrate Server Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Game Server Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful, reliable, and easy-to-use hosting for Minecraft, Rust, FiveM, and 50+ popular games. Instant setup with DDoS protection.
          </p>

          {/* CATEGORY TOGGLE TABS */}
          <div className="mt-12 inline-flex p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300/30 max-w-xl w-full flex-wrap sm:flex-nowrap gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('budget')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl transition-all ${
                activeTab === 'budget' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className={`w-4 h-4 ${activeTab === 'budget' ? 'text-[#7200FF]' : ''}`} />
              Budget
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl transition-all ${
                activeTab === 'premium' ? 'bg-[#7200FF] text-white shadow-md shadow-[#7200FF]/15' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="w-4 h-4 fill-current" />
              Premium
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl transition-all ${
                activeTab === 'business' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === 'business' ? 'text-purple-400' : ''}`} />
              Business
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {filteredPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-8 border transition-all flex flex-col justify-between relative ${
                plan.popular 
                  ? 'border-[#7200FF] shadow-xl shadow-[#7200FF]/5 ring-1 ring-[#7200FF]' 
                  : 'border-slate-200/80 shadow-md shadow-slate-100 hover:border-[#7200FF]/40'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#7200FF] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md shadow-[#7200FF]/25">
                  Most Popular
                </span>
              )}
              
              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <div className="my-5 flex items-baseline text-slate-900">
                  <span className="text-4xl font-black tracking-tight">{formatPrice(plan.basePrice)}</span>
                  <span className="text-sm font-semibold text-slate-500 ml-1">/mo</span>
                </div>
                
                <p className="text-xs font-bold text-[#7200FF] bg-[#7200FF]/5 rounded-lg px-3 py-2 inline-block mb-6">
                  {plan.bestFor}
                </p>

                <div className="space-y-4 border-t border-slate-100 pt-5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">RAM Allocation</span>
                    <span className="font-bold text-slate-800">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">CPU Resources</span>
                    <span className="font-bold text-slate-800">{plan.cpu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">NVMe SSD Storage</span>
                    <span className="font-bold text-slate-800">{plan.storage}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('/buy')}
                  className={`w-full py-3.5 font-bold rounded-xl transition flex items-center justify-center gap-2 text-sm ${
                    plan.popular
                      ? 'bg-[#7200FF] text-white hover:bg-[#6000dd] shadow-lg shadow-[#7200FF]/25'
                      : 'bg-slate-50 hover:bg-[#7200FF] border border-slate-200 text-slate-700 hover:text-white hover:border-transparent'
                  }`}
                >
                  Configure Server <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT INCLUDES SECTION */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-12">Every Plan Includes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                <div className="bg-[#7200FF]/10 text-[#7200FF] p-1.5 rounded-lg">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-bold text-sm text-slate-700">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTED GAMES SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <Gamepad className="w-7 h-7 text-[#7200FF]" /> Supported Apps & Games
          </h2>
          <p className="mt-2 text-sm text-slate-500">One-click installation profiles preconfigured inside our game panel environment.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {games.map((game, idx) => (
            <span 
              key={idx} 
              className="bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl hover:border-[#7200FF] hover:text-[#7200FF] transition shadow-sm cursor-default"
            >
              {game}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}
