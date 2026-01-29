import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {features.map((feature, idx) => {
        const Icon = feature.icon
        return (
          <motion.div
            key={idx}
            variants={item}
            className="p-6 rounded-lg border border-slate/20 hover:border-fujin-orange/50 hover:shadow-lg hover:shadow-fujin-orange/10 transition-all duration-300"
          >
            <Icon className="text-fujin-orange mb-4" size={32} />
            <h3 className="font-semibold text-cloud mb-2">{feature.title}</h3>
            <p className="text-slate text-sm">{feature.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
