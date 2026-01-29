import { motion } from 'framer-motion'
import { Hero, CTASection } from '../components'
import { Download, FileText } from 'lucide-react'

export const PressKitPage: React.FC = () => {
  const mediaAssets = [
    { title: 'Logo Suite', description: 'Full color, white, and black variants' },
    { title: 'Product Photos', description: 'High-res images (4K) for press' },
    { title: 'Founder Headshots', description: 'Professional photography' },
    { title: 'Brand Guidelines', description: 'Complete style guide' },
  ]

  return (
    <div className="pt-20">
      <Hero
        headline="Press Kit"
        subheadline="Resources for media and journalists"
      />

      <section className="section-padding bg-midnight">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12"
          >
            Media Assets
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaAssets.map((asset, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-charcoal rounded-lg border border-slate/20 hover:border-fujin-orange/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-cloud">{asset.title}</h3>
                    <p className="text-slate text-sm">{asset.description}</p>
                  </div>
                  <Download className="text-fujin-orange flex-shrink-0" size={20} />
                </div>
                <button className="text-fujin-orange hover:text-fujin-orange/80 text-sm font-medium">
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            About Fujin
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <ul className="space-y-2 text-slate">
                <li>✓ Founded by aerospace engineers</li>
                <li>✓ Manufactured in San Diego, USA</li>
                <li>✓ Used by 500+ professional kiteboarders</li>
                <li>✓ Military-grade materials</li>
                <li>✓ 2-year warranty</li>
                <li>✓ Patented buckle technology</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-midnight rounded-lg border border-slate/20"
            >
              <h3 className="font-semibold text-cloud mb-4">Mission</h3>
              <p className="text-slate">
                To create the world's most advanced kiteboard harness. Every detail is engineered for performance, durability, and comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-midnight">
        <div className="container-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-12"
          >
            Press Release
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal p-8 rounded-lg border border-slate/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-fujin-orange flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-cloud">Fujin Launches Revolutionary Kiteboard Harness</h3>
                <p className="text-slate text-sm">January 2025</p>
              </div>
            </div>
            <p className="text-slate mb-4">
              San Diego, CA – Today, Fujin announced the launch of its next-generation kiteboard harness, engineered by aerospace professionals for performance at the highest level.
            </p>
            <p className="text-slate">
              With 40% lighter weight, military-grade durability, and our patented buckle technology, Fujin represents a paradigm shift in kiteboard equipment design.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Press Inquiries?"
        buttonLabel="Contact Our Team"
        onButtonClick={() => window.location.href = '/#/contact'}
      />
    </div>
  )
}
