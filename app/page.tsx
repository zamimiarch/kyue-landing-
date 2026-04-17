import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Header />
      <Hero />
      <StatsBar />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
