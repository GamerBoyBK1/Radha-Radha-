import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const reviews = [
  { title: "Excellent service!", text: "This is the best minecraft hosting I ever had...", user: "ᏚʟᴏX̸_ᗪᴇᴠᴊᴇᴇᴛ" },
  { title: "Budget Friendly", text: "this hosting best beacuse there plans its budget...", user: "Soumya Prakas" },
  { title: "Best Support", text: "Best Hosting I Have Ever Buyed Moderators Reply...", user: "One Gamer" }
];

export default function Home() {
  return (
    <div className="bg-white text-slate-800 min-h-screen translate-z-0 backface-hidden">
      
      {/* HERO SECTION */}
      <header className="relative py-24 lg:py-36 border-b border-slate-100 bg-slate-50 transform-gpu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7200FF]/10 text-[#7200FF] border border-[#7200FF]/20 mb-6">
              <Zap className="w-3.5 h-3.5 fill-[#7200FF]" /> Enterprise-Grade Hardware
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Premium Server <br />
              <span className="text-[#7200FF]">Hosting Solutions</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Experience ultra-low latency with 99.9% uptime guarantee and high-speed infrastructure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/game-hosting" className="bg-[#7200FF] hover:bg-[#6000dd] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-[#7200FF]/25 transition flex items-center gap-2 group">
                View Hosting Plans <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </Link>
              <a href="https://discord.gg/Bc26Mgmrum" target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-8 py-3.5 rounded-xl font-bold transition">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES SECTION - FIXED: Icons removed, text kept extra bold */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform-gpu">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Our Hosting Services</h2>
          <p className="mt-2 text-sm text-slate-500">Tailored hosting solutions optimized for peak scale and reliability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Game Hosting', 'Bot Hosting', 'VPS Hosting'].map((srv, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all flex flex-col justify-between items-start min-h-[250px]">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">{srv}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">High-performance custom configured environment optimized for instant provisioning.</p>
              </div>
              <Link to={i===0?'/game-hosting':i===1?'/bot-hosting':'/vps-hosting'} className="bg-slate-50 border border-slate-200 text-slate-700 w-full text-center py-3 rounded-xl font-bold text-sm transition hover:bg-[#7200FF] hover:text-white hover:border-transparent">
                View Plans
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTPILOT REVIEWS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 isolate will-change-transform transform-gpu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trustpilot Header */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="flex items-center gap-1 text-slate-900 font-extrabold text-2xl tracking-tight mb-2">
              <Star className="w-7 h-7 fill-[#00b67a] text-[#00b67a]" /> Trustpilot
            </div>
            <p className="text-sm font-semibold text-slate-500">
              Rated Excellent <span className="text-[#00b67a] font-bold">4.9/5</span> based on customer feedback
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between transform-gpu">
                <div>
                  {/* 5 Green Trustpilot Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="bg-[#00b67a] p-1 rounded-sm flex items-center justify-center">
                        <Star className="w-3.5 h-3.5 fill-white text-white" />
                      </div>
                    ))}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">"{rev.title}"</h4>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    {rev.text}
                  </p>
                </div>

                {/* User Info / Verified Badge */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">{rev.user}</span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#00b67a] bg-[#00b67a]/5 px-2 py-1 rounded-md">
                    <CheckCircle2 className="w-3 h-3 stroke-[3]" /> Verified User
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
