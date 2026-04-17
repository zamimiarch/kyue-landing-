'use client'

import { useState } from 'react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="beta" className="py-24 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-bg to-gold/8 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-coral/8 blur-[120px] pointer-events-none" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <p className="text-xs font-body uppercase tracking-widest text-coral mb-6">
            iOS Beta · 50 spots · Free while we build
          </p>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mb-6 leading-[1.05]">
            Done being
            <br />
            <span className="gradient-text">misread</span> by your
            <br />
            own devices?
          </h2>

          <p className="font-body text-lg text-cream-muted leading-relaxed mb-10 max-w-xl mx-auto">
            We're not looking for users. We're looking for women who are done
            blaming themselves for what their hormones are doing.
          </p>
        </div>

        {/* Form */}
        <div className="reveal delay-1">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <label htmlFor="beta-email" className="sr-only">Email address</label>
              <input
                id="beta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full bg-surface border border-white/10 text-cream placeholder:text-muted font-body text-sm focus:outline-none focus:border-coral/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-coral text-bg font-body font-semibold text-sm hover:bg-coral-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-coral/30 whitespace-nowrap"
              >
                Request Invite
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-6 px-6 py-5 rounded-full bg-surface border border-coral/30 text-center">
              <p className="font-body text-sm text-cream">
                You're on the list. TestFlight invite within{' '}
                <span className="text-coral font-medium">24 hours.</span>
              </p>
            </div>
          )}

          <p className="font-body text-xs text-muted">
            No credit card. No spam. TestFlight invite within 24 hours.
          </p>
        </div>

        {/* Trust signals */}
        <div className="reveal delay-2 mt-12 flex flex-wrap justify-center gap-6 text-xs font-body text-muted">
          {[
            '🔒 Data stays on your device',
            '🚫 No data selling',
            '📱 iOS only · TestFlight',
            '🆓 Free during beta',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
