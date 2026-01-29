import { motion } from 'framer-motion'
import { Hero, CTASection } from '../components'

export const TechnologyPage: React.FC = () => {
  const materials = [
    { title: 'Advanced Composites', description: 'Aerospace-grade carbon fiber weave' },
    { title: 'Titanium Alloy', description: 'Military specification Ti-6Al-4V' },
    { title: 'Smart Padding', description: 'Memory foam engineered for impact' },
    { title: 'Weather-Resistant', description: 'Salt and UV protected coating' },
  ]

  const deepDives = [
    {
      title: 'Load Path Engineering',
      description: 'Every curve is calculated to distribute force evenly. Our finite element analysis optimized for both strength and comfort across 10,000+ load scenarios.',
      points: ['Force distribution modeling', 'Fatigue testing', 'Real-world simulation'],
    },
    {
      title: 'Buckle Mechanics',
      description: 'Our proprietary buckle system transfers 99.7% of your power to the board. No slip, no delay, just pure response.',
      points: ['Instant engagement', 'Zero micromotion', 'Tested to 2000N load'],
    },
    {
      title: 'Comfort First',
      description: 'Engineered padding adapts to your body over time. Pressure distribution reduces fatigue by up to 60% on long sessions.',
      points: ['Memory foam composite', 'Breathable mesh', 'Ergonomic curves'],
    },
  ]

  return (
    <div className="pt-20">
      <Hero
        headline="The Engineering Story"
        subheadline="Built by engineers. Tested by athletes. Perfected through obsession."
      />

      <section className="section-padding bg-midnight">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Materials & Specifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((mat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-charcoal rounded-lg border border-slate/20"
              >
                <h3 className="font-semibold text-cloud mb-2">{mat.title}</h3>
                <p className="text-slate text-sm">{mat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {deepDives.map((dive, idx) => (
        <section key={idx} className={`section-padding ${idx % 2 === 0 ? 'bg-charcoal' : 'bg-midnight'}`}>
          <div className="container-full">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:[&>*]:order-2' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-md mb-4">{dive.title}</h3>
                <p className="text-slate mb-6">{dive.description}</p>
                <ul className="space-y-2">
                  {dive.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-3 text-slate">
                      <span className="w-2 h-2 bg-fujin-orange rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-fujin-orange/10 to-fujin-orange/5 rounded-lg h-64 flex items-center justify-center"
              >
                <div className="text-6xl text-fujin-orange/20">[Image]</div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Discover Performance"
        buttonLabel="View Full Specs"
        onButtonClick={() => window.location.href = '/#/specs'}
      />
    </div>
  )
}
