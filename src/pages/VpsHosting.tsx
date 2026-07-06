import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Server, Cpu, Shield, Zap, Terminal, Globe, ArrowRight } from 'lucide-react';

const vpsPlans = [
  { name: "Cloud-VPS 1", basePrice: 499, ram: "4 GB ECC", cpu: "2 vCPU Intel Xeon", storage: "80 GB Pure NVMe", port: "1 Gbps Shared Port", popular: false },
  { name: "Cloud-VPS 2", basePrice: 899, ram: "8 GB ECC", cpu: "4 vCPU Intel Xeon", storage: "150 GB Pure NVMe", port: "1 Gbps Shared Port", popular: true },
  { name: "Cloud-VPS 3", basePrice: 1699, ram: "16 GB ECC", cpu: "6 vCPU Intel Xeon", storage: "240 GB Pure NVMe", port: "1 Gbps Dedicated Port", popular: false },
  { name: "Cloud-VPS 4", basePrice: 2499, ram: "24 GB ECC", cpu: "8 vCPU AMD EPYC", storage: "350 GB Pure NVMe", port: "1 Gbps Dedicated Port", popular: false },
  { name: "Cloud-VPS 5", basePrice: 3899, ram: "32 GB ECC", cpu: "12 vCPU AMD EPYC", storage: "500 GB Pure NVMe", port: "10 Gbps Shared Port", popular: false },
  { name: "Enterprise-VPS", basePrice: 5499, ram: "48 GB ECC", cpu: "16 vCPU AMD EPYC", storage: "800 GB Pure NVMe", port: "10 Gbps Dedicated Port", popular: false }
];

const vpsFeatures = [
  { icon: <Terminal className="w-5 h-5 text-[#7200FF]" />, title: "Full Root Access", desc: "Complete SSH root control over your virtual instance to install any OS or package." },
  { icon: <Shield className="w-5 h-5 text-[#7200FF]" />, title: "DDoS Protection", desc: "Advanced filtering layers shield your VPS endpoints against volumetric server attacks." },
  { icon: <Zap className="w-5 h-5 text-[#7200FF]" />, title: "Instant Provisioning", desc: "Your virtual server arrays spin up and provision templates within seconds of payment." },
  { icon: <Globe className="w-5 h-5 text-[#7200FF]" />, title: "Dedicated IPv4", desc: "Every server instance comes packed with a clean, unblacklisted dedicated IPv4 address." }
];

export default function VpsHosting() {
  const navigate = useNavigate();
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

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-4">
            <Server className="w-3.5 h-3.5" /> KVM Virtualization Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            High-Performance VPS Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Blazing-fast, reliable, and scalable KVM virtual servers with full root access and NVMe SSDs for any project.
          </p>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vpsPlans.map((plan, idx) => (
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

                <div className="space-y-4 border-t border-slate-100 pt-5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">RAM Size</span>
                    <span className="font-bold text-slate-800">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">CPU Compute</span>
                    <span className="font-bold text-slate-800">{plan.cpu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">NVMe SSD</span>
                    <span className="font-bold text-slate-800">{plan.storage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Network Port</span>
                    <span className="font-bold text-slate-700 text-xs">{plan.port}</span>
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
                  Configure VPS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VPS FEATURES INFRASTRUCTURE SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Enterprise Infrastructure Benefits</h2>
            <p className="mt-2 text-sm text-slate-500">Every virtual machine operates inside isolated hypervisors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vpsFeatures.map((feat, i) => (
              <div key={i} className="flex gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#7200FF]/10 flex items-center justify-center shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{feat.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
