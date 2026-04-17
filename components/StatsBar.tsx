const STATS = [
  {
    number: '75–90%',
    label: 'of women feel physically and psychologically worse in the 2 weeks before their period',
    source: 'The Period Brain, 3.3M women across 109 countries',
  },
  {
    number: '18%',
    label: 'average HRV drop in late luteal vs follicular — your wearable calls this "low readiness"',
    source: 'ROAR, Stacy Sims PhD',
  },
  {
    number: '39%',
    label: 'of exercise research participants are women. The other 61% are men.',
    source: 'In the FLO, Alisa Vitti',
  },
  {
    number: '0',
    label: 'major wearable companies that model the menstrual cycle in their recovery algorithms',
    source: 'Garmin · Oura · Whoop · Apple Watch',
  },
]

export default function StatsBar() {
  return (
    <section className="py-20 border-y border-white/5 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral/3 via-transparent to-gold/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="reveal text-xs font-body uppercase tracking-widest text-muted text-center mb-12">
          The data your wearable ignores
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} flex flex-col gap-2`}
            >
              <span className="font-display text-5xl lg:text-6xl gradient-text leading-none">
                {s.number}
              </span>
              <p className="font-body text-sm text-cream leading-snug">{s.label}</p>
              <p className="font-body text-xs text-muted italic">{s.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
