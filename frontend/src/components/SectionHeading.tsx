type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <div className={`reveal-on-scroll reveal-up mb-8 md:mb-10 ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-[680px]'}`}>
      <p className={`section-label ${isCentered ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl md:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg md:leading-8">{description}</p>
    </div>
  )
}
