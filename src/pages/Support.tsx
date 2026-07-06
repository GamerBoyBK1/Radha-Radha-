import React from 'react';
import { MessageSquare, Mail, MessageCircle, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const contactMethods = [
  {
    icon: <MessageSquare className="w-6 h-6 text-[#7200FF]" />,
    title: "Discord Community",
    desc: "Join our active community to get instant peer-to-peer help, chat with staff, and check updates.",
    actionText: "Join Discord Server",
    link: "https://discord.gg/SFrxRVDkqv",
    color: "bg-[#7200FF]/5 hover:border-[#7200FF]/40"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
    title: "WhatsApp Chat",
    desc: "Got quick pre-sales queries or need immediate support? Chat with us directly on WhatsApp.",
    actionText: "Chat on WhatsApp",
    link: "https://wa.me/919064456592",
    color: "bg-emerald-500/5 hover:border-emerald-500/40"
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-500" />,
    title: "Email Support",
    desc: "For billing queries, business proposals, or official technical issues, drop us a mail anytime.",
    actionText: "Send an Email",
    link: "mailto:Support@coramtix.in",
    color: "bg-blue-500/5 hover:border-blue-500/40"
  }
];

export default function Support() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-4">
            <Clock className="w-3.5 h-3.5" /> Average Response Time: &lt; 15 Mins
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Help & Customer Support
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions or facing technical issues? Our team of server experts is available 24/7/365 to keep you online.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS GRID */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => (
            <div 
              key={idx} 
              className={`bg-white border border-slate-200 p-8 rounded-3xl transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${method.color}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{method.desc}</p>
              </div>
              
              <a 
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 font-bold rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm hover:bg-slate-900 hover:text-white hover:border-transparent transition"
              >
                {method.actionText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEE INFO SECTION */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 bg-[#7200FF]/10 text-[#7200FF] rounded-full mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Enterprise SLA Guarantee</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            We don't use automated basic bots for tickets. Every single response comes from real network engineers who understand server hosting inside out.
          </p>
        </div>
      </section>

    </div>
  );
}
