import {
  FiClock,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhoneCall,
} from "react-icons/fi";
import { SectionHeading } from "./SectionHeading";

const directContacts = [
  {
    label: "Email",
    value: "ranipuja235@gmail.com",
    href: "mailto:ranipuja235@gmail.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "+91 8260337459",
    href: "tel:+918260337459",
    icon: FiPhoneCall,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pujarani-sethy-63a70225b",
    href: "https://linkedin.com/in/pujarani-sethy-63a70225b",
    icon: FiLinkedin,
  },
];

export function ContactSectionEnhanced() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="contact-stage section-shell">
        <div className="contact-wave contact-wave-one" />
        <div className="contact-wave contact-wave-two" />

        <div className="contact-grid grid gap-8 px-2 md:px-3 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s connect about frontend roles, product work, and strong UI teams"
              description="I’m open to frontend opportunities where product quality, thoughtful UX, and engineering discipline all matter. If that matches your team, I’d be glad to connect."
            />

            <div className="reveal-on-scroll reveal-left grid gap-4 sm:grid-cols-3">
              <div className="contact-signal-card">
                <FiMapPin className="text-sky-300" />
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Ahmedabad, India
                </p>
              </div>
              <div className="contact-signal-card">
                <FiClock className="text-sky-300" />
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Availability
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Immediate Availability
                </p>
              </div>
              <div className="contact-signal-card">
                <FiMonitor className="text-sky-300" />
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Role Type
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Remote or on-site
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-panel reveal-on-scroll reveal-right reveal-delay-1 p-6 md:p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Direct Contact
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Easy ways to reach me
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Hiring manager or recruiter? You can contact me directly using the
              details below for frontend opportunities, interviews, or
              product-focused roles.
            </p>

            <div className="mt-6 space-y-4">
              {directContacts.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "LinkedIn" ? "_blank" : undefined}
                  rel={label === "LinkedIn" ? "noreferrer" : undefined}
                  className="contact-link-card group"
                >
                  <span className="contact-link-icon">
                    <Icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                      {label}
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-white transition group-hover:text-sky-100">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
