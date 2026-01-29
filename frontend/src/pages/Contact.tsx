import { motion } from 'framer-motion'
import { Hero, ContactForm, CTASection } from '../components'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Hero
        headline="Get in Touch"
        subheadline="Questions about Fujin? We'd love to hear from you."
      />

      <section className="section-padding bg-midnight">
        <div className="container-full flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="heading-lg mb-6">Send us a Message</h2>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="heading-lg mb-6">Contact Information</h2>

            <div className="flex gap-4">
              <Mail className="text-fujin-orange flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-cloud mb-1">General Inquiries</h3>
                <a href="mailto:hello@fujin.com" className="text-slate hover:text-fujin-orange">
                  hello@fujin.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-fujin-orange flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-cloud mb-1">Sales Team</h3>
                <a href="tel:+18005551234" className="text-slate hover:text-fujin-orange">
                  +1 (800) 555-1234
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-fujin-orange flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-cloud mb-1">Support</h3>
                <p className="text-slate text-sm">
                  Response within 24 hours<br />
                  Mon-Fri, 9am-5pm EST
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-fujin-orange flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-cloud mb-1">Location</h3>
                <p className="text-slate text-sm">
                  San Diego, California<br />
                  USA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Join Our Community"
        buttonLabel="Follow Us"
        onButtonClick={() => window.open('https://twitter.com', '_blank')}
      />
    </div>
  )
}
