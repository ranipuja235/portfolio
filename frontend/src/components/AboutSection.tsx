import { FiBriefcase, FiCode, FiGlobe } from 'react-icons/fi'
import type { Highlight } from '../types'
import { SectionHeading } from './SectionHeading'

const icons = [FiCode, FiBriefcase, FiGlobe]

type AboutSectionProps = {
  highlights: Highlight[]
}

export function AboutSection({ highlights }: AboutSectionProps) {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-shell section-stage section-stage--about">
        <div className="section-orb section-orb-sky left-[-5rem] top-16" />
        <div className="section-orb section-orb-cyan right-[-3rem] bottom-10" />

        <div className="px-2 md:px-3">
          <SectionHeading
            eyebrow="About"
            title="Frontend engineering shaped by product thinking"
            description="I build modern product interfaces with a strong bias toward clarity, scale, and usability. My work combines clean component architecture, dependable API integrations, and polished user-facing experiences."
          />
        </div>

        <div className="grid gap-6 px-2 md:px-3 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length]

            return (
              <article
                key={highlight.title}
                className={`glass-panel reveal-on-scroll ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'} about-card p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-300/25`}
              >
                <div className="inline-flex rounded-2xl border border-white/10 bg-sky-400/10 p-3 text-xl text-sky-300 shadow-[0_14px_34px_rgba(56,189,248,0.12)]">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{highlight.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
