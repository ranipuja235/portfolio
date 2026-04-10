import type { Skill } from '../types'
import { SectionHeading } from './SectionHeading'

type SkillsSectionProps = {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const topSkills = skills.slice(0, 4)
  const supportingSkills = skills.slice(4)

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-shell section-stage section-stage--skills">
        <div className="section-orb section-orb-cyan left-[-5rem] top-20" />
        <div className="section-orb section-orb-violet right-[-4rem] bottom-12" />

        <div className="px-2 md:px-3">
          <SectionHeading
            eyebrow="Skills"
            title="Core tools I use to ship polished frontend experiences"
            description="My toolkit centers on modern React development, robust state and data handling, responsive UI implementation, and secure API-driven workflows."
          />
        </div>

        <div className="grid gap-6 px-2 md:px-3 lg:grid-cols-[0.95fr_1.45fr]">
          <aside className="reveal-on-scroll reveal-left relative overflow-hidden rounded-[28px] border border-[#2a2d3e] bg-[#1a1d27] p-6">
            <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-[#00d4ff]/12 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#00d4ff]/35 to-transparent" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00d4ff]">Skill Snapshot</p>
            <h3 className="mt-4 max-w-[14ch] text-3xl font-bold leading-tight text-white">
              Frontend systems with product focus
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">
              I focus on shipping interfaces that feel polished in production: scalable React architecture, reliable data
              flows, responsive design, and secure API-connected workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#2a2d3e] bg-[#151923] px-4 py-2 text-sm text-slate-200">
                Component Architecture
              </span>
              <span className="rounded-full border border-[#2a2d3e] bg-[#151923] px-4 py-2 text-sm text-slate-200">
                API Integration
              </span>
              <span className="rounded-full border border-[#2a2d3e] bg-[#151923] px-4 py-2 text-sm text-slate-200">
                Responsive UI
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-[#2a2d3e] bg-[#151923] p-4">
                <p className="text-2xl font-bold text-white">8+</p>
                <p className="mt-1 text-sm text-slate-400">Core technologies used regularly</p>
              </div>
              <div className="rounded-2xl border border-[#2a2d3e] bg-[#151923] p-4">
                <p className="text-2xl font-bold text-white">90%</p>
                <p className="mt-1 text-sm text-slate-400">Average strength across primary stack</p>
              </div>
              <div className="rounded-2xl border border-[#2a2d3e] bg-[#151923] p-4">
                <p className="text-2xl font-bold text-white">UI + API</p>
                <p className="mt-1 text-sm text-slate-400">Best fit for product and dashboard teams</p>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {topSkills.map(({ name, level, icon: Icon }, index) => (
                <article
                  key={name}
                  className={`reveal-on-scroll reveal-up relative overflow-hidden rounded-[24px] border border-[#2a2d3e] bg-[#1a1d27] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-[#00d4ff]/60 ${
                    index % 2 === 1 ? 'reveal-delay-1' : ''
                  }`}
                >
                  <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-[#00d4ff]/10 blur-3xl" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2a2d3e] bg-[#151923] text-2xl text-[#00d4ff]">
                      <Icon />
                    </span>
                    <span className="rounded-full border border-[#2a2d3e] bg-[#151923] px-3 py-1 text-sm font-semibold text-white">
                      {level}%
                    </span>
                  </div>

                  <h3 className="mt-4 text-[20px] font-bold text-white">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Production-ready experience building interfaces and flows with this technology.
                  </p>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#10131b]">
                    <div
                      className="skill-meter h-full rounded-full bg-gradient-to-r from-[#00d4ff] via-cyan-300 to-white"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="reveal-on-scroll reveal-up rounded-[24px] border border-[#2a2d3e] bg-[#1a1d27] p-6 reveal-delay-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]">Supporting Stack</p>
                  <h3 className="mt-2 text-xl font-bold text-white">State, styling, data, and auth tools</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {supportingSkills.map(({ name, level, icon: Icon }) => (
                  <article
                    key={name}
                    className="rounded-[20px] border border-[#2a2d3e] bg-[#151923] p-5 transition duration-300 hover:border-[#00d4ff]/45"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00d4ff]/10 text-xl text-[#00d4ff]">
                        <Icon />
                      </span>
                      <div>
                        <h4 className="font-semibold text-white">{name}</h4>
                        <p className="text-sm text-slate-400">{level}% proficiency</p>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#10131b]">
                      <div
                        className="skill-meter h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-cyan-200"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
