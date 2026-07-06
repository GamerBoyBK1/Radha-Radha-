import React from 'react';
import { Shield, FileText, RefreshCw, Mail, AlertTriangle, Clock, XCircle, CreditCard, Eye, Lock, Database } from 'lucide-react';

interface LegalPageProps {
  type: 'terms' | 'privacy' | 'refund' | 'support';
}

export default function LegalPage({ type }: LegalPageProps) {
  
  // RENDER TERMS OF SERVICE
  if (type === 'terms') {
    return (
      <div className="bg-white text-slate-800 min-h-screen font-sans pb-20">
        <section className="relative py-16 bg-slate-50 border-b border-slate-100 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.03),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-4 relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-3">
              <Shield className="w-3.5 h-3.5" /> Legal Agreements
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Please read these Terms carefully before using CoRamTix services.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">1. General</h2>
              <p>By purchasing or using any service provided by CoRamTix Hosting (“we”, “us”, or “our”), you agree to comply with and be bound by these Terms of Service. These terms apply to all users of our website, hosting services, and any related applications.</p>
              <p className="mt-2">We reserve the right to modify these Terms at any time without prior notice. Any changes will take effect immediately upon being posted on our website.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">2. Account Registration</h2>
              <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login details and all activities under your account. Sharing or reselling your account or server access is strictly prohibited.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">3. Service Usage</h2>
              <p>Our hosting services are intended for legal and ethical use only. You agree not to use our services for distributing malware, phishing, DDoS attacks, spamming, or hosting illegal content. Any violation may result in immediate suspension or termination of your account without refund.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">4. Payments and Billing</h2>
              <p>All payments to CoRamTix Hosting are processed securely through our payment gateways. Services are activated only after successful payment confirmation. You are responsible for ensuring timely payments to avoid service interruption.</p>
              <p className="mt-2">CoRamTix Hosting reserves the right to modify pricing or plans at any time, but existing users will be notified before any change affecting their active subscription.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">5. Refunds and Disputes</h2>
              <p>We offer refunds only in specific cases such as double payments or non-delivery of services. Refund requests must be made within 24 hours of purchase. No refunds are provided for violations of our Terms or for prepaid service periods already used.</p>
              <p className="mt-2 text-amber-600 font-medium flex items-start gap-1.5 bg-amber-50 border border-amber-100 p-3 rounded-xl text-xs sm:text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" /> Chargebacks or payment disputes without contacting our support team first will lead to permanent account termination.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">6. Cancellations</h2>
              <p>You may cancel your service at any time from your client dashboard. Once cancelled, all associated data may be permanently deleted. No refunds are given for the remaining time after cancellation unless otherwise stated in a promotional policy.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">7. Service Suspension and Termination</h2>
              <p>We reserve the right to suspend or terminate services immediately if we detect abusive or illegal activity, excessive resource usage, or violation of any of these terms. Reinstatement may require additional verification or fees.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">8. Data and Backups</h2>
              <p>While we take precautions to protect your data, CoRamTix Hosting is not responsible for data loss or corruption. Customers are encouraged to maintain their own backups. Backup services, if offered, are not guaranteed.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">9. Liability</h2>
              <p>CoRamTix Hosting shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability shall not exceed the amount paid by you for the service during the last 30 days.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">10. Support</h2>
              <p>We provide customer support through our official support channels only. Support is available for technical issues related to our hosting platform. We do not provide assistance with third-party software or configurations unless explicitly stated.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">11. Legal Use</h2>
              <p>All users must comply with applicable local, state, and international laws. Hosting of illegal material such as copyrighted content, hacking tools, or child exploitation content is strictly forbidden and will be reported to authorities.</p>
            </div>
            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <Mail className="w-5 h-5 text-[#7200FF]" /> Contact Legal Support
              </div>
              <a href="mailto:support@coramtix.in" className="text-xs sm:text-sm text-white bg-slate-900 px-4 py-2 rounded-xl font-semibold hover:bg-[#7200FF] transition">
                support@coramtix.in
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // RENDER PRIVACY POLICY
  if (type === 'privacy') {
    return (
      <div className="bg-white text-slate-800 min-h-screen font-sans pb-20">
        {/* HERO SECTION */}
        <section className="relative py-16 bg-slate-50 border-b border-slate-100 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.03),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-4 relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-3">
              <Eye className="w-3.5 h-3.5" /> Privacy & Security
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Your privacy is our priority at CoRamTix Hosting.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">General</h2>
              <p>At CoRamTix Hosting, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, hosting services, or related products.</p>
              <p className="mt-2">By using our services, you agree to the terms outlined in this Privacy Policy. We encourage you to review this page regularly to stay informed about any updates.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Information We Collect</h2>
              <p>We may collect the following information to provide and improve our services:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personal information such as your name, email address, and billing details.</li>
                <li>Account information including username, IP address, and login history.</li>
                <li>Payment details processed securely through third-party gateways.</li>
                <li>Technical information such as browser type, device data, and usage statistics.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">How We Use Your Information</h2>
              <p>Your information is used strictly for the following purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>To create and manage your hosting account.</li>
                <li>To process transactions and provide customer support.</li>
                <li>To communicate updates, offers, or important service notifications.</li>
                <li>To improve performance, security, and the overall user experience.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#7200FF]" /> Data Protection
              </h2>
              <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Sensitive data, such as payment information, is transmitted securely using encryption technologies.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Third-Party Services</h2>
              <p>We may use trusted third-party providers for payment processing, analytics, and technical support. These providers have access to limited personal data only to perform their functions and are obligated to protect it under strict confidentiality agreements.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, but some features of our site may not function properly without them.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Data Retention</h2>
              <p>We retain user data only as long as necessary to provide our services or as required by law. Once data is no longer needed, it is securely deleted or anonymized.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">User Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal information. For data-related requests, please contact our support team at <span className="text-[#7200FF] font-semibold">support@coramtix.in</span>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Refunds and Disputes</h2>
              <p>All refund and dispute policies are governed under our Terms of Service. We process eligible refunds according to the original payment method used during purchase. Unauthorized or fraudulent chargebacks may lead to account suspension.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-slate-600" /> Cancellations
              </h2>
              <p>Customers may cancel their hosting services at any time through the client portal. Please note that data associated with canceled accounts may be permanently deleted after termination.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Illegal Use</h2>
              <p>We strictly prohibit hosting or distribution of illegal, malicious, or copyrighted material without permission. Any accounts found in violation of our policies may be terminated without notice and reported to authorities if necessary.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Policy Updates</h2>
              <p>CoRamTix Hosting reserves the right to modify or update this Privacy Policy at any time. Any significant changes will be communicated via email or through our website.</p>
            </div>

            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <Mail className="w-5 h-5 text-[#7200FF]" /> Need Privacy Clarifications?
              </div>
              <a href="mailto:support@coramtix.in" className="text-xs sm:text-sm text-white bg-slate-900 px-4 py-2 rounded-xl font-semibold hover:bg-[#7200FF] transition">
                support@coramtix.in
              </a>
            </div>

          </div>
        </section>
      </div>
    );
  }

  // RENDER REFUND POLICY
  if (type === 'refund') {
    return (
      <div className="bg-white text-slate-800 min-h-screen font-sans pb-20">
        <section className="relative py-16 bg-slate-50 border-b border-slate-100 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,0,255,0.03),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-4 relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#7200FF]/10 text-[#7200FF] mb-3">
              <RefreshCw className="w-3.5 h-3.5" /> Trust Guarantee
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Refund Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Clear rules about subscription cancellations and system-side dispute resolution.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">General</h2>
              <p>At CoRamTix Hosting, customer satisfaction is our top priority. We always aim to deliver high-quality hosting services with maximum uptime and performance. However, in some rare cases, issues may occur due to server or system errors on our side.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#7200FF]" /> 1-Day Refund Policy
              </h2>
              <p>If any problem occurs from our side (such as server downtime, technical fault, or setup issue), customers are eligible for a 1-day refund policy. This means you can request a refund within 24 hours of your purchase if the issue is caused by CoRamTix Hosting.</p>
              <p className="mt-3 text-sm text-slate-500">Refund requests must be submitted through our official support system or by email at <span className="text-[#7200FF] font-semibold">billing@coramtix.in</span> within the given time frame.</p>
            </div>
            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-100">
              <h2 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" /> No Refund on VPS Hosting
              </h2>
              <p className="text-red-950/80">VPS Hosting services are non-refundable. Once the VPS server is deployed and active, no refunds will be provided under any circumstances. Please review your order carefully before completing the payment.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-500" /> Refund Credited
              </h2>
              <p>Approved refunds will be processed within 5–10 business days and credited to the same payment method used during the purchase.</p>
            </div>
            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <Mail className="w-5 h-5 text-[#7200FF]" /> Contact Billing Support
              </div>
              <a href="mailto:billing@coramtix.in" className="text-xs sm:text-sm text-white bg-slate-900 px-4 py-2 rounded-xl font-semibold hover:bg-[#7200FF] transition">
                billing@coramtix.in
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // FALLBACK FOR OTHER PLACEHOLDERS
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans flex flex-col items-center justify-center py-20 text-center px-4">
      <FileText className="w-12 h-12 text-[#7200FF] mb-4" />
      <h1 className="text-2xl font-black capitalize text-slate-900">{type.replace('-', ' ')} Page</h1>
      <p className="text-slate-500 text-sm mt-1 max-w-sm">This policy block is active. Please provide the policy document text to display here.</p>
    </div>
  );
}
