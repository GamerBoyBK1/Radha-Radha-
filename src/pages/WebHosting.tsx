import React from 'react';
import { Globe, Check, ArrowRight, Shield, Zap, Cpu } from 'lucide-react';

const webPlans = [
  { name: "Personal Web", price: "₹99", websites: "1 Website", storage: "10 GB NVMe SSD", bandwidth: "100 GB Bandwidth", ssl: "Free SSL Certificate", panel: "cPanel Control Access", popular: false },
  { name: "Premium Web", price: "₹149", websites: "3 Websites", storage: "25 GB NVMe SSD", bandwidth: "Unmetered Bandwidth", ssl: "Free SSL Certificate", panel: "cPanel Control Access", popular: false },
  { name: "Business Cloud", price: "₹249", websites: "Unlimited Websites", storage: "50 GB NVMe SSD", bandwidth: "Unmetered Bandwidth", ssl: "Free SSL & Domain Transfer", panel: "cPanel + LiteSpeed Cache", popular: true },
  { name: "Unlimited Cloud", price: "₹449", websites: "Unlimited Websites", storage: "100 GB NVMe SSD", bandwidth: "Unmetered Bandwidth", ssl: "Free SSL & Premium Tools", panel: "cPanel + LiteSpeed Cache", popular: false }
];

const webFeatures = [
  { icon: <Zap className="w-5 h-5 text-[#7200FF]" />, title: "LiteSpeed Web Server", desc: "Up to 20x faster page loading speeds compared to traditional Apache web hosting setup." },
  { icon: <Shield className="w-5 h-5 text-[#7200FF]" />, title: "Free Let's Encrypt SSL", desc: "Automated, single-click zero cost SSL installation to secure all your website domains." },
  { icon: <Cpu className="w-5 h-5 text-[#7200FF]" />, title: "One-Click WordPress", desc: "Deploy WordPress, Joomla, or any custom CMS systems instantly via Softaculous script suite." }
];

export default function WebHosting() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-4">
            <Globe className="w-3.5 h-3.5" /> High-Speed LiteSpeed Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            LiteSpeed Web Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Blazing fast NVMe server architecture tailored for modern websites.
          </p>
        </div>
      </section>

      {/* PRICING CARDS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                plan.popular 
                  ? 'border-[#7200FF] shadow-xl shadow-[#7200FF]/5 ring-1 ring-[#7200FF]' 
                  : 'border-slate-200/80 shadow-md shadow-slate-100 hover:border-[#7200FF]/40'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#7200FF] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md shadow-[#7200FF]/25">
                  Most Popular
                </span>
              )}
              
              <div>
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <div className="my-4 flex items-baseline text-slate-900">
                  <span className="text-3xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-xs font-semibold text-slate-500 ml-1">/mo</span>
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-bold text-slate-700">{plan.websites}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-600">{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-600">{plan.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-600">{plan.ssl}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#7200FF] shrink-0 stroke-[3]" />
                    <span className="font-medium text-slate-500">{plan.panel}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className={`w-full py-3 font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-xs ${
                  plan.popular
                    ? 'bg-[#7200FF] text-white hover:bg-[#6000dd] shadow-lg shadow-[#7200FF]/25'
                    : 'bg-slate-50 hover:bg-[#7200FF] border border-slate-200 text-slate-700 hover:text-white hover:border-transparent'
                }`}>
                  Select Plan <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WEB FEATURES BENEFITS */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webFeatures.map((feat, i) => (
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
