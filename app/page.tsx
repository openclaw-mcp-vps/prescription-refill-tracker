export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Never miss prescription refills again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-8">
          Smart reminders that account for pharmacy processing times — so your medications are always ready when you need them.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Pricing */}
      <section className="flex justify-center px-4 pb-24">
        <div className="border border-[#30363d] rounded-2xl p-8 max-w-sm w-full bg-[#161b22] text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay on track</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prescriptions",
              "Smart refill reminders via email & SMS",
              "Pharmacy processing time buffer",
              "Caregiver sharing & access",
              "Refill history & reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the smart reminder system work?</h3>
            <p className="text-[#8b949e] text-sm">You enter your prescription details and your pharmacy's typical processing time. We automatically calculate when to remind you so your refill is ready before you run out.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can caregivers manage medications for family members?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can invite caregivers or family members to view and manage prescriptions under your account, making it easy to coordinate care for loved ones.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my health data kept private and secure?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Your data is encrypted at rest and in transit. We never sell or share your personal health information with third parties.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Prescription Refill Tracker. All rights reserved.
      </footer>
    </main>
  );
}
