import type { Experience } from '../types'
import { SectionHeading } from './SectionHeading'

type ExperienceSectionProps = {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-shell section-stage section-stage--experience">
        <div className="section-orb section-orb-sky left-[-5rem] bottom-10" />
        <div className="section-orb section-orb-violet right-[-3rem] top-20" />

        <div className="px-2 md:px-3">
          <SectionHeading
            eyebrow="Experience"
            title="Product-focused frontend experience with delivery impact"
            description="My work has centered on enterprise and dashboard products where frontend quality affects usability, operational clarity, and the speed of day-to-day workflows."
          />
        </div>

        <div className="relative space-y-6 px-2 before:absolute before:bottom-8 before:left-[27px] before:top-8 before:w-px before:bg-gradient-to-b before:from-[#00d4ff]/50 before:via-white/10 before:to-transparent md:px-3 md:before:left-[39px]">
          {experiences.map((experience, index) => (
            <div key={`${experience.company}-${experience.role}`} className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-7 h-10 w-10 rounded-full border border-[#00d4ff]/30 bg-[#0f1525] shadow-[0_0_0_6px_rgba(9,14,28,0.9)] md:h-14 md:w-14">
                <div className="absolute inset-[7px] rounded-full bg-gradient-to-br from-[#00d4ff] via-cyan-300 to-violet-400 md:inset-[10px]" />
              </div>

              <article className={`glass-panel experience-card reveal-on-scroll p-6 md:p-7 ${index === 1 ? 'reveal-delay-1' : ''}`}>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-sky-200">{experience.company}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">{experience.role}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {experience.duration}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{experience.summary}</p>

                {experience.projects?.length ? (
                  <div className="mt-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-sky-200">Project Coverage</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {experience.projects.map((project) => (
                        <span
                          key={project}
                          className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-5 grid gap-3 lg:grid-cols-2">
                  {experience.achievements.map((achievement) => (
                    <div key={achievement} className="content-card p-4 text-sm leading-7 text-slate-200">
                      {achievement}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
