import React from 'react';
import { CreditCard, MessageSquare, ShieldCheck, Clock, CheckCircle2, AlertTriangle, ArrowRight, Globe } from 'lucide-react';

export default function Buy() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans pb-20">
      
      {/* HERO / HEADER SECTION */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-100 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.03),transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-3">
            <Globe className="w-3.5 h-3.5" /> English
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Your Purchase
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Select the option that suits you best to activate your server setup.
          </p>
        </div>
      </section>

      {/* MAIN CHECKOUT CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-xs uppercase tracking-widest font-black text-[#7200FF]">Our Service</h2>
          <p className="text-slate-900 font-bold text-lg mt-1">Choose your preferred payment method below:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OPTION 1: MAIN GATEWAY WITH MAINTENANCE WARNING */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7200FF]/5 flex items-center justify-center mb-6 border border-[#7200FF]/10">
                <CreditCard className="w-6 h-6 text-[#7200FF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Gateway</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Instant deployment and activation after successful automated system payment.
              </p>
              
              {/* WARNING BOX */}
              <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 flex gap-3 text-amber-800 text-xs sm:text-sm mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Billing Maintenance:</span> The automatic gateway is undergoing routine system updates. Please proceed via Discord for active assistance.
                </div>
              </div>
            </div>

            <a 
              href="https://discord.gg/SFrxRVDkqv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 font-bold rounded-xl bg-amber-500 text-white text-sm hover:bg-amber-600 transition shadow-sm shadow-amber-500/10"
            >
              Continue to Discord <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* OPTION 2: DISCORD TICKET (MANUAL PAYMENTS) */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between border-l-2 border-l-[#7200FF] hover:border-[#7200FF]/40 transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 border border-emerald-100">
                <MessageSquare className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Create Support Ticket</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Get manual billing assistance from our technicians for custom invoice requests, local UPI, crypto, or alternative payment procedures.
              </p>

              {/* HIGHLIGHT POINTS */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#7200FF]" /> Custom Specifications Supported
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#7200FF]" /> Direct Staff Peer-to-Peer Interaction
                </div>
              </div>
            </div>

            <a 
              href="https://discord.gg/SFrxRVDkqv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 font-bold rounded-xl bg-slate-900 text-white text-sm hover:bg-[#7200FF] transition shadow-sm"
            >
              Create Ticket via Discord <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* FOOTER BADGES */}
        <div className="grid grid-cols-2 gap-4 mt-12 border-t border-slate-100 pt-8 max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-100 py-3 rounded-2xl">
            <ShieldCheck className="w-4 h-4 text-[#7200FF]" /> Secure payments
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-100 py-3 rounded-2xl">
            <Clock className="w-4 h-4 text-[#7200FF]" /> 24/7 Support
          </div>
        </div>

      </section>

    </div>
  );
}
