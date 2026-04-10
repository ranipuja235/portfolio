import { useEffect, useState } from 'react'
import type { NavItem } from '../types'

type NavbarProps = {
  activeSection: string
  items: NavItem[]
}

export function Navbar({ activeSection, items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'border-b border-white/10 bg-[rgba(4,8,20,0.85)] shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-[20px]'
          : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-0'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-3 md:px-6 lg:px-8">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 transition hover:border-sky-300/25 hover:bg-white/[0.05]"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-sky-300/25 bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-500 shadow-[0_10px_30px_rgba(14,165,233,0.28)]">
            <span className="absolute inset-[1px] rounded-[14px] bg-slate-950/90" />
            <span className="relative font-['Poppins'] text-sm font-semibold tracking-[0.18em] text-white">PS</span>
          </span>

          <span className="hidden sm:block">
            <span className="block font-['Poppins'] text-xs font-semibold uppercase tracking-[0.32em] text-white">
              Portfolio
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-sky-200/80">
              Frontend Developer
            </span>
          </span>
        </a>

        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:flex">
          {items.map((item) => (
            <NavLink key={item.href} item={item} activeSection={activeSection} />
          ))}
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 px-5 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-4">
            {items.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                activeSection={activeSection}
                className="rounded-2xl px-4 py-3 text-sm"
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

type NavLinkProps = {
  activeSection: string
  className?: string
  item: NavItem
  onClick?: () => void
}

function NavLink({ activeSection, className = '', item, onClick }: NavLinkProps) {
  const sectionId = item.href.replace('#', '')
  const isActive = activeSection === sectionId

  return (
    <a
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`inline-flex items-center rounded-full border px-3.5 py-2 text-sm font-medium transition ${
        isActive
          ? 'rounded-full border-sky-300/40 bg-slate-950/95 text-sky-100 shadow-[0_0_0_1px_rgba(125,211,252,0.18),0_8px_30px_rgba(14,165,233,0.18)]'
          : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white'
      } ${className}`.trim()}
    >
      {item.label}
    </a>
  )
}
