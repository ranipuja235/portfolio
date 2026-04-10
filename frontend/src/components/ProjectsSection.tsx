import { FiActivity, FiBriefcase, FiExternalLink, FiGithub, FiMap } from 'react-icons/fi'
import type { Project } from '../types'
import { SectionHeading } from './SectionHeading'

type ProjectsSectionProps = {
  projects: Project[]
}

const projectStyles = {
  enterprise: {
    label: 'Enterprise Product',
    icon: FiBriefcase,
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    glow: 'bg-cyan-400/25',
  },
  iot: {
    label: 'IoT Platform',
    icon: FiActivity,
    gradient: 'from-emerald-400 via-cyan-500 to-sky-600',
    glow: 'bg-emerald-300/20',
  },
  mobility: {
    label: 'Mobility System',
    icon: FiMap,
    gradient: 'from-fuchsia-500 via-violet-500 to-indigo-600',
    glow: 'bg-fuchsia-300/20',
  },
} satisfies Record<Project['category'], { label: string; icon: typeof FiGithub; gradient: string; glow: string }>

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-shell section-stage section-stage--projects">
        <div className="section-orb section-orb-violet left-[-6rem] top-24" />
        <div className="section-orb section-orb-cyan right-[-4rem] bottom-12" />

        <div className="px-2 md:px-3">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across dashboards, enterprise flows, and monitoring products"
            description="These projects reflect how I approach frontend engineering in practice: clear interfaces, reusable systems, and reliable product experiences connected to real business workflows."
          />
        </div>

        <div className="grid gap-6 px-2 md:px-3 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            (() => {
              const projectStyle = projectStyles[project.category]
              const ProjectIcon = projectStyle.icon

              return (
                <article
                  key={project.title}
                  className={`project-showcase reveal-on-scroll ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'} relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#2a2d3e] bg-[#1a1d27] transition duration-300 hover:-translate-y-1.5 hover:border-[#00d4ff]/60 ${index === 1 ? 'reveal-delay-1' : ''} ${
                    index === 2 ? 'reveal-delay-2' : ''
                  }`}
                >
                  <div className={`relative h-[168px] overflow-hidden bg-gradient-to-br ${projectStyle.gradient}`}>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_42%,rgba(10,14,22,0.24))]" />
                    <div className={`absolute -right-10 top-6 h-32 w-32 rounded-full ${projectStyle.glow} blur-3xl`} />
                    <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                      {projectStyle.label}
                    </div>
                    <div className="absolute inset-x-5 bottom-4 rounded-[24px] border border-white/15 bg-[#11141d]/35 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                          <ProjectIcon size={22} />
                        </div>
                        <span className="font-['Poppins'] text-sm font-semibold tracking-[0.24em] text-white/70">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-2.5 w-3/4 rounded-full bg-white/40" />
                        <div className="h-2.5 w-full rounded-full bg-white/20" />
                        <div className="h-2.5 w-2/3 rounded-full bg-white/15" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-[18px] font-bold leading-7 text-white">{project.title}</h3>
                    <p className="mt-3 overflow-hidden text-[15px] leading-7 text-slate-300 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#2a2d3e] bg-[#151923] px-3 py-1 text-xs font-medium text-[#c8d2e6]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#2a2d3e] bg-transparent px-4 py-3 text-sm font-medium text-white transition hover:border-[#00d4ff]/60 hover:text-[#00d4ff]"
                      >
                        <FiGithub size={16} />
                        GitHub
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#00d4ff] px-4 py-3 text-sm font-semibold text-[#081018] transition hover:brightness-110"
                      >
                        <FiExternalLink size={16} />
                        Live demo
                      </a>
                    </div>
                  </div>
                </article>
              )
            })()
          ))}
        </div>
      </div>
    </section>
  )
}
