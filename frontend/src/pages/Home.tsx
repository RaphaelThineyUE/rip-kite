import { motion } from 'framer-motion'
import { Zap, Wind, Shield, Feather, TrendingUp, Layers } from 'lucide-react'
import { Hero, FeatureGrid, CTASection } from '../components'

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: Wind,
      title: 'Aerodynamic Design',
      description: 'Engineered for minimal water resistance and maximum performance in all conditions.',
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Responsive buckle system transfers power directly to your board.',
    },
    {
      icon: Shield,
      title: 'Durable Construction',
      description: 'Military-grade materials tested in extreme conditions.',
    },
    {
      icon: Feather,
      title: 'Ultra-Light',
      description: 'Weighs less than competitor models without compromising strength.',
    },
    {
      icon: TrendingUp,
      title: 'Performance First',
      description: 'Used by professional kiteboarders around the world.',
    },
    {
      icon: Layers,
      title: 'Premium Materials',
      description: 'Space-age composites meet traditional craftsmanship.',
    },
  ]

  return (
    <div className="pt-20">
      <Hero
        headline="Born from the Wind"
        subheadline="Engineered by experts. Trusted by professionals."
        cta={{ label: 'Explore Now', onClick: () => window.scrollTo({ top: 800, behavior: 'smooth' }) }}
      />

      <section className="section-padding bg-midnight">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Why Choose Fujin?
          </motion.h2>
          <FeatureGrid features={features} />
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-full grid md:grid-cols-3 gap-8">
          {[
            { label: 'Pro Kiteboarders', value: '500+' },
            { label: 'Space Force Uses', value: '✓' },
            { label: 'Weight Advantage', value: '40%' },
          ].map((proof, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border border-slate/20 rounded-lg"
            >
              <div className="text-4xl font-bold text-fujin-orange mb-2">{proof.value}</div>
              <p className="text-slate">{proof.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-midnight">
        <div className="container-full max-w-2xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-fujin-orange pl-6 text-xl text-slate italic"
          >
            "After years of engineering harnesses for extreme environments, we created Fujin for the sport we love. This isn't just gear—it's a commitment to your performance."
            <footer className="text-sm text-cloud mt-4 not-italic">— Our Engineering Team</footer>
          </motion.blockquote>
        </div>
      </section>

      <CTASection
        headline="Ready to Experience the Difference?"
        subheadline="Join hundreds of professional kiteboarders who trust Fujin"
        buttonLabel="Pre-Order Now"
        onButtonClick={() => alert('Pre-orders launching in Q2 2025')}
      />
    </div>
  )
}
