import {
  FiArrowRight,
  FiBriefcase,
  FiMail,
  FiMapPin,
  FiMonitor,
} from "react-icons/fi";
import type { Profile, SocialLink, Stat } from "../types";

type HeroSectionProps = {
  profile: Profile;
  stats: Stat[];
  socialLinks: SocialLink[];
};

export function HeroSection({
  profile,
  stats: _stats,
  socialLinks,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="section-stage section-stage--hero mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-[1100px] items-start px-5 pt-10 pb-8 md:min-h-[calc(100svh-4.5rem)] md:px-6 md:pt-12 md:pb-10 lg:px-8">
        <div className="hero-grid-overlay" />
        <div className="hero-radial-orb hero-radial-orb--violet" />
        <div className="hero-radial-orb hero-radial-orb--blue" />
        <div className="section-orb section-orb-sky left-[-6rem] top-14" />
        <div className="section-orb section-orb-violet right-[-4rem] top-28" />
        <div className="relative z-10 grid w-full items-start gap-8 pt-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:pt-6">
          <div className="reveal-on-scroll reveal-up max-w-[580px] pt-1">
            <h1 className="max-w-[12ch] text-4xl font-semibold tracking-[-0.055em] text-white md:text-6xl md:leading-[0.95]">
              Pujarani Sethy
            </h1>
            <p className="mt-4 max-w-[18ch] text-xl font-medium text-sky-200 md:text-[2rem] md:leading-tight">
              Frontend Developer (React.js)
            </p>
            <p className="mt-5 max-w-[56ch] text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              I build polished, responsive product interfaces with React, modern
              UI systems, and thoughtful interaction design that helps teams
              ship clean, usable experiences.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_20px_40px_rgba(59,130,246,0.24)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(59,130,246,0.32)]"
              >
                View Projects
                <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/10"
              >
                Contact Me
                <FiMail />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                <FiMapPin className="text-sky-300" />
                {profile.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                <FiBriefcase className="text-sky-300" />
                Product-focused frontend work
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-sky-300/25 hover:bg-white/[0.06]"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll reveal-right reveal-delay-2 flex justify-center lg:justify-end">
            <div className="hero-focus-card relative w-full max-w-[400px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_48px_rgba(2,12,28,0.24)] backdrop-blur-[20px] md:p-6">
              <div className="absolute -right-12 top-8 h-24 w-24 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="absolute -left-10 bottom-8 h-24 w-24 rounded-full bg-violet-400/10 blur-3xl" />
              <div className="relative space-y-5">
                <div className="mx-auto flex w-full max-w-[220px] justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/35 via-blue-500/30 to-cyan-300/25 blur-2xl opacity-70" />
                    <div className="relative rounded-full border border-white/10 bg-slate-900/80 p-2 shadow-[0_18px_40px_rgba(14,165,233,0.14)]">
                      <img
                        src={profile.profileImage}
                        alt={profile.name}
                        className="h-52 w-52 rounded-full object-cover object-top md:h-56 md:w-56"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  {/* <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Current Focus</p> */}
                  {/* <p className="text-xl font-semibold text-white">
                    {profile.availability}
                  </p> */}
                  <p className="mx-auto max-w-[28ch] text-sm leading-6 text-slate-300">
                    Frontend interfaces for product teams that care about
                    clarity, performance, and strong visual polish.
                  </p>
                </div>

                {/* <div className="grid gap-3 sm:grid-cols-2">
                  {primaryStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`content-card reveal-on-scroll reveal-zoom min-w-0 p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 ${
                        index === 1 ? "reveal-delay-1" : ""
                      }`}
                    >
                      <p className="text-lg font-semibold leading-tight text-white md:text-xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div> */}

                <div className="grid gap-3">
                  <div className="content-card flex items-center gap-3 p-4 text-left">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <FiMapPin />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {profile.location}
                      </p>
                    </div>
                  </div>
                  <div className="content-card flex items-center gap-3 p-4 text-left">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <FiMonitor />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Work Style
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Remote or on-site product teams
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
