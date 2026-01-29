import { motion } from 'framer-motion'
import { Hero, CompareTable, CTASection } from '../components'

export const ComparePage: React.FC = () => {
  const comparison = [
    { feature: 'Weight', fujin: true, competitor: false },
    { feature: 'Comfort Rating', fujin: 'Excellent', competitor: 'Good' },
    { feature: 'Buckle Response', fujin: true, competitor: false },
    { feature: 'Weather Resistant', fujin: true, competitor: 'Partial' },
    { feature: 'Lifetime Support', fujin: true, competitor: false },
    { feature: 'Made in USA', fujin: true, competitor: false },
    { feature: '2-Year Warranty', fujin: true, competitor: false },
    { feature: 'Padding Quality', fujin: 'Premium', competitor: 'Standard' },
    { feature: 'Price', fujin: '$299', competitor: '$399' },
  ]

  const advantages = [
    {
      title: 'Lighter Weight',
      description: '40% lighter than competitors without sacrificing durability or comfort.',
    },
    {
      title: 'Longer Lasting',
      description: 'Military-grade materials mean years of reliable performance in any condition.',
    },
    {
      title: 'Better Comfort',
      description: 'Adaptive padding adjusts to your body, reducing fatigue on long sessions.',
    },
  ]

  return (
    <div className="pt-20">
      <Hero
        headline="How Fujin Compares"
        subheadline="See why professionals choose Fujin over the competition"
      />

      <section className="section-padding bg-midnight">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Feature Comparison
          </motion.h2>
          <CompareTable items={comparison} />
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Why Fujin Wins
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-midnight rounded-lg border border-slate/20"
              >
                <h3 className="heading-md mb-3">{adv.title}</h3>
                <p className="text-slate">{adv.description}</p>
              </motion.div>
            ))}
          </div>
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
            "I've tried every harness on the market. Fujin is simply better. Lighter, more responsive, and actually comfortable after 8 hours on the water."
            <footer className="text-sm text-cloud mt-4 not-italic">— Marcus K., Pro Kiteboarder</footer>
          </motion.blockquote>
        </div>
      </section>

      <CTASection
        headline="Ready to Upgrade?"
        buttonLabel="Pre-Order Fujin"
        onButtonClick={() => alert('Pre-orders launching in Q2 2025')}
      />
    </div>
  )
}
