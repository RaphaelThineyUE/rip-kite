interface CTASectionProps {
  headline: string
  subheadline?: string
  buttonLabel: string
  onButtonClick: () => void
  secondary?: boolean
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline,
  subheadline,
  buttonLabel,
  onButtonClick,
  secondary,
}) => {
  return (
    <section
      className={`section-padding text-center ${
        secondary
          ? 'bg-midnight border-t border-slate/20'
          : 'bg-gradient-to-r from-fujin-orange/10 to-fujin-orange/5'
      }`}
    >
      <div className="container-full">
        <h2 className="heading-lg mb-4">{headline}</h2>
        {subheadline && <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">{subheadline}</p>}
        <button onClick={onButtonClick} className="button-primary">
          {buttonLabel}
        </button>
      </div>
    </section>
  )
}
