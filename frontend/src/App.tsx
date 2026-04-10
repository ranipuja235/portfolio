import { useEffect, useState } from 'react'
import {
  aboutHighlights,
  experienceItems,
  heroStats,
  navItems,
  profile,
  projects,
  skills,
  socialLinks,
} from './data/portfolio'
import { AboutSection } from './components/AboutSection'
import { ContactSectionEnhanced } from './components/ContactSectionEnhanced'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) {
      return
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140

      let currentSection = sections[0].id

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'))
    if (!revealElements.length) {
      return
    }

    const revealImmediatelyIfVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const isAlreadyVisible = rect.top < viewportHeight * 0.9 && rect.bottom > 0

      if (isAlreadyVisible) {
        element.classList.add('is-visible')
      }
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.08,
      },
    )

    revealElements.forEach((element) => {
      revealImmediatelyIfVisible(element)

      if (!element.classList.contains('is-visible')) {
        revealObserver.observe(element)
      }
    })

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  return (
    <div className="app-shell min-h-screen text-slate-100">
      <div className="app-shell__backdrop" />
      <div className="app-shell__backdrop app-shell__backdrop--secondary" />
      <div className="app-shell__backdrop app-shell__backdrop--tertiary" />
      <div className="app-shell__content">
        <Navbar items={navItems} activeSection={activeSection} />
        <main className="pt-14 md:pt-[72px]">
          <HeroSection profile={profile} stats={heroStats} socialLinks={socialLinks} />
          <AboutSection highlights={aboutHighlights} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experienceItems} />
          <ContactSectionEnhanced />
        </main>
        <Footer name={profile.name} />
      </div>
    </div>
  )
}

export default App
