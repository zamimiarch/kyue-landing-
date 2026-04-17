'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'What wearables does Kyue support?',
    a: 'Garmin, Oura, Whoop, and Apple Watch. We read HRV, sleep scores, readiness scores, and activity data — then reframe them through your current cycle phase.',
  },
  {
    q: 'Is this a period tracker?',
    a: 'No. Kyue is a phase-aware copilot. You log your period start date and cycle length once — Kyue does the rest. No daily symptom logging, no mood diaries. Just context for the data you\'re already collecting.',
  },
  {
    q: 'How is this different from Clue or Flo?',
    a: 'Clue and Flo track your cycle. Kyue connects your cycle to your wearable data and your daily capacity. The difference: Clue tells you when your period is coming. Kyue tells you why your Oura score is red today and what to do about it.',
  },
  {
    q: 'What if my cycle is irregular?',
    a: 'Kyue supports irregular cycles and unknown cycle lengths. The phase resolver uses your basal body temperature data (if available) alongside your logged dates to refine phase predictions over time.',
  },
  {
    q: 'What is a "phase-aware copilot"?',
    a: 'A copilot acts on your behalf. Kyue doesn\'t just show you data — it reframes your wearable scores, computes your daily capacity budget, and (in Beta v1) drafts communications when your executive function is at zero. It\'s the difference between a dashboard and a partner.',
  },
  {
    q: 'Is my data private?',
    a: 'Yes. Your cycle data and biometrics never leave your device without your explicit consent. We don\'t sell data. We don\'t train models on your personal health information.',
  },
  {
    q: 'When will it be available on Android?',
    a: 'iOS only for now. We\'re building for depth, not breadth. Android is on the roadmap after we nail the iOS experience.',
  },
  {
    q: 'How do I get a TestFlight invite?',
    a: 'Join the waitlist below. We\'re accepting 50 women for the first beta cohort. You\'ll receive a TestFlight invite within 24 hours of being accepted. No credit card. No spam.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left — sticky label */}
          <div className="reveal">
            <p className="text-xs font-body uppercase tracking-widest text-coral mb-3">FAQ</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">
              Questions
              <br />
              <span className="text-muted">answered.</span>
            </h2>
            <p className="font-body text-cream-muted text-sm leading-relaxed">
              Still have questions?{' '}
              <a
                href="mailto:hello@kyueapp.com"
                className="text-coral hover:underline"
              >
                Email us
              </a>{' '}
              or find us at{' '}
              <a
                href="https://twitter.com/kyueapp"
                className="text-coral hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @kyueapp
              </a>
            </p>
          </div>

          {/* Right — accordion */}
          <div className="reveal delay-1 flex flex-col divide-y divide-white/5">
            {FAQS.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-body font-medium text-cream group-hover:text-coral transition-colors duration-200 text-sm sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      open === i ? 'border-coral bg-coral/10 rotate-45' : 'group-hover:border-white/40'
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={open === i ? 'text-coral' : 'text-muted'} />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-sm text-cream-muted leading-relaxed pr-8">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
