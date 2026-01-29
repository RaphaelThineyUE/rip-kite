import { motion } from 'framer-motion'
import { Hero, SpecTable, CTASection } from '../components'

export const SpecsPage: React.FC = () => {
  const mainSpecs = [
    ['Property', 'Value', 'Unit'],
    ['Weight', '280', 'grams'],
    ['Material', 'Carbon Fiber Composite', '-'],
    ['Max Load', '2000', 'N'],
    ['Buckle Type', 'Titanium Alloy', '-'],
    ['Padding', 'Memory Foam', '-'],
    ['Colors', 'Midnight Black, Ocean Blue', '-'],
    ['Warranty', '2 Years', 'Full Coverage'],
    ['Made in', 'USA', '-'],
    ['Certification', 'ISO 9001', '-'],
  ]

  const sizing = [
    ['Size', 'Chest (cm)', 'Best For'],
    ['XS', '75-85', 'Kids & Petite Adults'],
    ['S', '85-95', 'Small Frame'],
    ['M', '95-110', 'Average Frame'],
    ['L', '110-125', 'Large Frame'],
    ['XL', '125+', 'Extra Large'],
  ]

  const inBox = [
    ['Item', 'Quantity', 'Description'],
    ['Fujin Harness', '1', 'Main harness unit'],
    ['Adjustment Guide', '1', 'Quick start manual'],
    ['Care Kit', '1', 'Cleaning & maintenance'],
    ['Carry Bag', '1', 'Premium storage bag'],
  ]

  return (
    <div className="pt-20">
      <Hero
        headline="Technical Specifications"
        subheadline="Complete details about your Fujin harness"
      />

      <section className="section-padding bg-midnight">
        <div className="container-full space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Main Specifications</h2>
            <SpecTable
              columns={mainSpecs[0] as string[]}
              rows={mainSpecs.slice(1) as (string | number)[][]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Sizing Guide</h2>
            <SpecTable
              columns={sizing[0] as string[]}
              rows={sizing.slice(1) as (string | number)[][]}
            />
            <div className="mt-6 p-4 bg-charcoal/50 border border-fujin-orange/20 rounded">
              <p className="text-slate text-sm">
                💡 <span className="font-semibold">Pro Tip:</span> Measure your chest at the widest point while wearing a t-shirt. All sizes are adjustable ±5cm.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">What's in the Box</h2>
            <SpecTable
              columns={inBox[0] as string[]}
              rows={inBox.slice(1) as (string | number)[][]}
            />
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Questions About Sizing?"
        buttonLabel="Contact Our Team"
        onButtonClick={() => window.location.href = '/#/contact'}
      />
    </div>
  )
}
