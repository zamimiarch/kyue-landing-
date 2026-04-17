const BENEFITS = [
  {
    icon: '⌚',
    tag: 'Wearable Reframe',
    title: 'Your wearable, finally honest',
    body: 'When your HRV drops on day 26, Kyue doesn\'t say "rest more." It says: you\'re late luteal, progesterone is falling, this resolves in 72 hours. You did nothing wrong.',
    detail: 'Works with Garmin · Oura · Whoop · Apple Watch',
    accent: 'coral',
  },
  {
    icon: '🔋',
    tag: 'Load Budget',
    title: 'Your capacity, before your day starts',
    body: 'Not a prediction — a budget. Kyue computes how much you actually have today for work, for people, for yourself. Based on your phase, your biometrics, and your cycle history.',
    detail: 'Updated every morning · Adapts to your cycle length',
    accent: 'gold',
  },
  {
    icon: '✍️',
    tag: 'Communication Drafts',
    title: 'Your words, when you have none',
    body: 'One tap drafts the sick day email, the reschedule request, the deadline extension. When executive function is at zero, Kyue acts on your behalf.',
    detail: 'Coming in Beta v1 · English + Chinese',
    accent: 'purple',
  },
]

const accentMap: Record<string, string> = {
  coral: 'border-coral/20 hover:border-coral/40 text-coral',
  gold: 'border-gold/20 hover:border-gold/40 text-gold',
  purple: 'border-purple-500/20 hover:border-purple-500/40 text-purple-400',
}

const glowMap: Record<string, string> = {
  coral: 'bg-coral/5',
  gold: 'bg-gold/5',
  purple: 'bg-purple-500/5',
}

export default function Benefits() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — asymmetric */}
        <div className="reveal grid lg:grid-cols-2 gap-6 mb-16 items-end">
          <div>
            <p className="text-xs font-body uppercase tracking-widest text-coral mb-3">
              What Kyue does
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream">
              Not a period tracker.
              <br />
              <span className="text-muted">A copilot.</span>
            </h2>
          </div>
          <p className="reveal delay-1 font-body text-cream-muted leading-relaxed lg:text-right">
            No symptom logging. No "listen to your body" without telling you what it's saying.
            Kyue reads your wearable data through the lens of your cycle phase — and tells you the truth.
          </p>
        </div>

        {/* Feature cards — staggered, not a boring grid */}
        <div className="flex flex-col gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} group relative rounded-3xl border bg-surface ${accentMap[b.accent]} transition-all duration-300 hover:bg-surface-2 overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 ${glowMap[b.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative p-8 lg:p-10 grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-10 items-start">
                {/* Icon */}
                <div className="text-4xl w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>

                {/* Main copy */}
                <div>
                  <p className={`text-xs font-body uppercase tracking-widest mb-2 ${accentMap[b.accent].split(' ').pop()}`}>
                    {b.tag}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-cream mb-3">
                    {b.title}
                  </h3>
                  <p className="font-body text-cream-muted leading-relaxed">
                    {b.body}
                  </p>
                </div>

                {/* Detail */}
                <div className="lg:text-right">
                  <p className="font-body text-xs text-muted leading-relaxed border border-white/5 rounded-xl px-4 py-3 inline-block">
                    {b.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Science callout */}
        <div className="reveal mt-10 rounded-3xl border border-white/5 bg-surface p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-body uppercase tracking-widest text-gold mb-3">The science</p>
              <h3 className="font-display text-2xl sm:text-3xl text-cream mb-4">
                Your body runs on a 28-day clock.
                <br />
                <span className="text-muted">Your wearable runs on a 24-hour one.</span>
              </h3>
              <p className="font-body text-cream-muted leading-relaxed">
                In the days before your period, your core temperature rises ~0.3°C — wearables read this as poor sleep.
                Your blood plasma volume drops 8% — wearables call this "low readiness."
                Your metabolic rate increases by 100–300 calories — wearables say nothing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '0.3°C', label: 'Core temp rise in luteal phase', note: 'Wearables: "poor sleep"' },
                { val: '8%', label: 'Blood plasma drop premenstrually', note: 'Wearables: "low readiness"' },
                { val: '+300', label: 'Extra calories burned at rest', note: 'Wearables: silence' },
                { val: '18%', label: 'HRV drop late luteal vs follicular', note: 'Wearables: "rest more"' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-surface-2 border border-white/5 p-4">
                  <p className="font-display text-2xl text-coral mb-1">{item.val}</p>
                  <p className="font-body text-xs text-cream leading-snug mb-1">{item.label}</p>
                  <p className="font-body text-[10px] text-muted italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
