import { type ChangeEvent, type FormEvent, useState } from 'react'
import { SectionHeading } from './SectionHeading'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

type FormState = typeof initialFormState

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialFormState)
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL ?? 'http://localhost:5000'}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message ?? 'Unable to send your message right now.')
      }

      setStatus({
        type: 'success',
        message: result.message ?? 'Thanks for reaching out. Your message has been sent.',
      })
      setFormData(initialFormState)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong while sending the form.'

      setStatus({
        type: 'error',
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about frontend roles, product work, or collaboration"
            description="If you have an opportunity or project in mind, send a message through the form. The frontend is already connected to the backend contact API."
          />

          <div className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Best Fit</p>
            <p className="mt-3 text-lg font-semibold text-white">Frontend roles, dashboard products, and React.js projects</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This portfolio keeps the implementation practical and recruiter-friendly while still demonstrating a real contact form workflow using the Express backend.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel reveal-on-scroll reveal-delay-1 space-y-5 p-6 md:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              placeholder="Tell me a little about your project or role."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.type !== 'idle' ? (
            <p
              className={`rounded-2xl border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
                  : 'border-rose-400/30 bg-rose-400/10 text-rose-200'
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
