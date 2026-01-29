import { motion } from 'framer-motion'

interface HeroProps {
  headline: string
  subheadline: string
  imageSrc?: string
  cta?: { label: string; onClick: () => void }
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  imageSrc,
  cta,
}) => {
  return (
    <section
      className="pt-20 pb-12 md:pb-24 bg-gradient-to-b from-charcoal to-midnight relative overflow-hidden"
      style={
        imageSrc
          ? {
              backgroundImage: `url('${imageSrc}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 to-midnight/60" />
      )}
      <div className="container-full relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-xl mb-4"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate max-w-2xl mx-auto mb-8"
        >
          {subheadline}
        </motion.p>
        {cta && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={cta.onClick}
            className="button-primary"
          >
            {cta.label}
          </motion.button>
        )}
      </div>
    </section>
  )
}
