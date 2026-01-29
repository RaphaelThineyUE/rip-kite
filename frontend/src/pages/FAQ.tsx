import { motion } from 'framer-motion'
import { Hero, FAQAccordion, CTASection } from '../components'

export const FAQPage: React.FC = () => {
  const faqs = [
    { question: 'What sizes are available?', answer: 'We offer 5 sizes: XS, S, M, L, XL. See our Specs page for detailed sizing information.' },
    { question: 'Is Fujin suitable for beginners?', answer: 'Absolutely! Fujin is designed for all skill levels. The responsive buckle actually makes it easier for beginners to maintain control.' },
    { question: 'What materials is Fujin made from?', answer: 'Fujin uses aerospace-grade carbon fiber, titanium alloy buckles, and premium memory foam padding.' },
    { question: 'How long does a harness typically last?', answer: 'With proper care, a Fujin harness will last 5-7 years of regular use. We back it with a 2-year full warranty.' },
    { question: 'Can I adjust the fit?', answer: 'Yes! All sizes are adjustable ±5cm. The harness conforms to your body over time with our adaptive padding.' },
    { question: 'Is it waterproof?', answer: 'Fujin is water-resistant and salt-resistant. All materials are treated with UV protection and marine-grade coatings.' },
    { question: 'How do I care for my Fujin?', answer: 'Rinse with fresh water after each session. Air dry completely. A care kit is included with your purchase.' },
    { question: 'Where is Fujin manufactured?', answer: 'Fujin harnesses are manufactured in the USA using locally-sourced materials whenever possible.' },
    { question: 'What\'s your return policy?', answer: '30-day money-back guarantee. If you\'re not completely satisfied, we\'ll refund your purchase in full.' },
    { question: 'Do you offer shipping outside the US?', answer: 'Yes! We ship to 50+ countries. Standard international shipping takes 7-14 business days.' },
  ]

  return (
    <div className="pt-20">
      <Hero
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about Fujin"
      />

      <section className="section-padding bg-midnight">
        <div className="container-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={faqs} />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Still Have Questions?
          </motion.h2>
          <p className="text-slate mb-6 max-w-xl mx-auto">
            Our support team is here to help. Reach out directly and we'll get back to you within 24 hours.
          </p>
          <a href="/#/contact" className="button-primary">
            Contact Support
          </a>
        </div>
      </section>
    </div>
  )
}
