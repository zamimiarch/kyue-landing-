const TESTIMONIALS = [
  {
    quote: 'I thought my ADHD was getting worse. Turns out I\'m always late luteal when I crash.',
    name: 'Aisha M.',
    role: 'Product Manager · Oura user',
    initials: 'AM',
    color: '#e8856a',
  },
  {
    quote: 'I scheduled my performance review during my ovulatory phase on Kyue\'s suggestion. Got the raise.',
    name: 'Sarah K.',
    role: 'Software Engineer · Garmin user',
    initials: 'SK',
    color: '#c4a882',
  },
  {
    quote: 'Finally an app that explains my Oura scores instead of just judging them.',
    name: 'Mei L.',
    role: 'Designer · Oura user',
    initials: 'ML',
    color: '#8b5cf6',
  },
  {
    quote: 'The first time Kyue told me "your HRV is low because you\'re day 26, not because you failed" — something shifted.',
    name: 'Jordan R.',
    role: 'Athlete · Whoop user',
    initials: 'JR',
    color: '#6b9fd4',
  },
  {
    quote: 'I\'ve been tracking my cycle for years. This is the first app that actually does something with that data.',
    name: 'Priya S.',
    role: 'Data Scientist · Apple Watch user',
    initials: 'PS',
    color: '#e8856a',
  },
  {
    quote: 'Stopped blaming myself for the weeks I couldn\'t function. Turns out it was always day 24–27.',
    name: 'Clara B.',
    role: 'Founder · Garmin user',
    initials: 'CB',
    color: '#c4a882',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs font-body uppercase tracking-widest text-coral mb-3">Beta testers</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream">
            Women who stopped
            <br />
            <span className="text-muted">blaming themselves.</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 4) + 1} break-inside-avoid group rounded-3xl border border-white/5 bg-surface p-6 hover:bg-surface-2 hover:-translate-y-1 hover:border-white/10 transition-all duration-300`}
            >
              {/* Quote mark */}
              <div
                className="font-display text-6xl leading-none mb-3 opacity-30"
                style={{ color: t.color }}
                aria-hidden="true"
              >
                "
              </div>

              <p className="font-body text-cream leading-relaxed mb-5 text-sm">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-bg flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-cream">{t.name}</p>
                  <p className="font-body text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional moment */}
        <div className="reveal mt-10 rounded-3xl border border-coral/15 bg-gradient-to-br from-coral/5 to-transparent p-8 lg:p-12 text-center">
          <p className="font-display text-2xl sm:text-3xl text-cream max-w-2xl mx-auto leading-snug">
            "The first time a tool looked at your data and told you the truth
            instead of a score."
          </p>
          <p className="font-body text-sm text-muted mt-4">— Built by someone who got a red recovery score on day 26 one too many times.</p>
        </div>
      </div>
    </section>
  )
}
