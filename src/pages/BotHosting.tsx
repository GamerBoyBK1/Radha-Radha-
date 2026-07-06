import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Check, ArrowRight, Shield, Zap, Terminal } from 'lucide-react';

const botPlans = [
  { name: "Lite Node", price: "₹49", ram: "1 GB Performance RAM", storage: "10 GB NVMe Storage", cpu: "100% vCPU Core", support: "Node.js, Python, Java, Go", popular: false },
  { name: "Advanced Bot", price: "₹99", ram: "2 GB Performance RAM", storage: "20 GB NVMe Storage", cpu: "150% vCPU Core", support: "All Language Runtimes", popular: true },
  { name: "Pro Cluster", price: "₹199", ram: "4 GB Performance RAM", storage: "40 GB NVMe Storage", cpu: "200% vCPU Core", support: "Heavy Database & Multi-Shards", popular: false }
];

const botFeatures = [
  { icon: <Zap className="w-5 h-5 text-[#7200FF]" />, title: "24/7 Always On", desc: "Your scripts run non-stop with zero interruption or sleep overheads." },
  { icon: <Terminal className="w-5 h-5 text-[#7200FF]" />, title: "Pterodactyl Panel", desc: "Easy to use web console terminal to manage logs, files, and startup parameters." },
  { icon: <Shield className="w-5 h-5 text-[#7200FF]" />, title: "DDoS Shielded", desc: "Enterprise protection keeps your bots responsive even under network stress." }
];

export default function BotHosting() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-4">
            <Bot className="w-3.5 h-3.5" /> High-Performance Bot Instances
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Discord Bot Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Run JS, Python, or Java scripts 24/7 with zero interruption overhead.
          </p>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {botPlans.map((plan, idx) => (
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
                  <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-sm font-semibold text-slate-500 ml-1">/mo</span>
                </div>

                <div className="space-y-4 border-t border-slate-100 pt-5 text-sm">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-bold text-slate-700">{plan.ram}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-600">{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-600">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-500">{plan.support}</span>
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
                  Order Bot Instance <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOT FEATURES BENEFITS */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {botFeatures.map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#7200FF]/10 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm">{feat.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
