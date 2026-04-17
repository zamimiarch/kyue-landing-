'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const PHASES = [
  { label: 'Menstrual', day: '1–5', color: '#8b5cf6', desc: 'Rest & restore' },
  { label: 'Follicular', day: '6–13', color: '#e8856a', desc: 'Build & create' },
  { label: 'Ovulatory', day: '14–16', color: '#c4a882', desc: 'Connect & lead' },
  { label: 'Luteal', day: '17–28', color: '#6b6475', desc: 'Focus & finish' },
]

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Intersection observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-coral/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-purple-900/10 blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — Copy */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="animate-fade-up flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse-slow" />
              <span className="text-xs font-body uppercase tracking-widest text-coral">
                Phase-aware copilot · iOS Beta
              </span>
            </div>

            {/* Headline — word-by-word stagger */}
            <h1
              ref={titleRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mb-6 leading-[1.05]"
            >
              {'Your wearable'.split(' ').map((word, i) => (
                <span
                  key={`a-${i}`}
                  className="inline-block animate-fade-up mr-[0.25em]"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {word}
                </span>
              ))}
              <br />
              {"isn't broken.".split(' ').map((word, i) => (
                <span
                  key={`b-${i}`}
                  className="inline-block animate-fade-up mr-[0.25em]"
                  style={{ animationDelay: `${(i + 2) * 80 + 80}ms` }}
                >
                  {word}
                </span>
              ))}
              <br />
              <span className="gradient-text">
                {"You're just late luteal.".split(' ').map((word, i) => (
                  <span
                    key={`c-${i}`}
                    className="inline-block animate-fade-up mr-[0.25em]"
                    style={{ animationDelay: `${(i + 4) * 80 + 160}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            {/* Subhead */}
            <p className="animate-fade-up delay-500 font-body text-lg text-cream-muted leading-relaxed mb-8 max-w-lg">
              Kyue connects your cycle phase to your wearable data — so you
              finally understand why your HRV tanks, your energy crashes, and
              some weeks you can do anything while others you can barely
              function.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-600 flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#beta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-coral text-bg font-body font-semibold text-base hover:bg-coral-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-coral/25 animate-glow-pulse"
              >
                Join the Beta — 50 Spots
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-cream-muted font-body text-base hover:border-white/20 hover:text-cream transition-all duration-300"
              >
                See how it works
              </a>
            </div>

            {/* Social proof strip */}
            <div className="animate-fade-up delay-700 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {['#e8856a','#c4a882','#8b5cf6','#6b9fd4'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-bg flex items-center justify-center text-xs font-bold text-bg"
                    style={{ backgroundColor: c }}
                    aria-hidden="true"
                  >
                    {['A','M','S','J'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm font-body text-cream-muted">
                <span className="text-cream font-medium">50 women</span> on the waitlist ·{' '}
                <span className="text-coral">iOS TestFlight</span>
              </div>
            </div>
          </div>

          {/* Right — Phone mockup */}
          <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-coral/10 blur-[60px] rounded-full scale-75" />

              {/* Phone frame */}
              <div className="relative w-[280px] h-[580px] rounded-[44px] bg-surface border border-white/10 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-bg rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="absolute inset-0 p-5 pt-12 flex flex-col gap-3">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo/echoed_curves_icon_final.png"
                        alt="Kyue"
                        width={22}
                        height={22}
                        className="rounded-md"
                      />
                      <div>
                        <p className="text-xs text-muted font-body">Good morning</p>
                        <p className="text-sm font-display text-cream">Day 26 · Late Luteal</p>
                      </div>
                    </div>
                    {/* Mini battery */}
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-4 rounded-sm border border-white/20 relative overflow-hidden">
                        <div className="absolute inset-y-0.5 left-0.5 w-[40%] rounded-sm bg-coral/70" />
                      </div>
                      <span className="text-[10px] text-muted font-body">42%</span>
                    </div>
                  </div>

                  {/* Reframe card */}
                  <div className="rounded-2xl bg-surface-2 border border-coral/20 p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-lg" aria-hidden="true">⌚</span>
                      <div>
                        <p className="text-[11px] text-coral font-body font-medium uppercase tracking-wide mb-1">Wearable Reframe</p>
                        <p className="text-xs text-cream-muted font-body leading-relaxed">
                          Your HRV dropped 18% overnight. You're late luteal — progesterone is falling. This resolves in ~72 hours.{' '}
                          <span className="text-cream">You did nothing wrong.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Battery card */}
                  <div className="rounded-2xl bg-surface-2 border border-white/5 p-3">
                    <p className="text-[11px] text-muted font-body uppercase tracking-wide mb-2">Today's Capacity</p>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-display text-cream">42</span>
                      <span className="text-sm text-muted font-body mb-1">/ 100</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-coral to-gold" />
                    </div>
                    <p className="text-[10px] text-muted font-body mt-1.5">Reserve energy for what matters most today</p>
                  </div>

                  {/* Phase pills */}
                  <div className="flex gap-1.5 flex-wrap">
                    {PHASES.map((p) => (
                      <div
                        key={p.label}
                        className={`px-2 py-1 rounded-full text-[10px] font-body border ${
                          p.label === 'Luteal'
                            ? 'border-coral/40 text-coral bg-coral/10'
                            : 'border-white/5 text-muted'
                        }`}
                      >
                        {p.label}
                      </div>
                    ))}
                  </div>

                  {/* Briefing snippet */}
                  <div className="rounded-2xl bg-surface-2 border border-white/5 p-3 flex-1">
                    <p className="text-[11px] text-muted font-body uppercase tracking-wide mb-2">Today's Briefing</p>
                    <p className="text-xs text-cream-muted font-body leading-relaxed">
                      Cognitive load is higher than usual. Your brain is running on lower estrogen and dopamine. Batch decisions before noon. Cancel anything optional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -right-8 top-24 bg-surface border border-white/10 rounded-2xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-muted font-body">HRV vs last week</p>
                <p className="text-lg font-display text-coral">−18%</p>
                <p className="text-[10px] text-cream-muted font-body">Normal for day 26</p>
              </div>

              {/* Floating phase badge */}
              <div className="absolute -left-10 bottom-32 bg-surface border border-white/10 rounded-2xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-muted font-body">Phase</p>
                <p className="text-sm font-display text-cream">Late Luteal</p>
                <p className="text-[10px] text-coral font-body">Day 26 of 28</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
