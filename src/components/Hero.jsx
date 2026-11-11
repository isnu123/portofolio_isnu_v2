import { Github, Mail, MessageCircle, Sparkles } from 'lucide-react'
import Avatar from './Avatar'
import Reveal from './Reveal'
import useTypewriter from '../hooks/useTypewriter'
import { profile, roles, heroTech } from '../data'

const socials = [
  { icon: Github, label: 'GitHub', href: profile.github },
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}` },
]
const [firstName, ...lastName] = profile.name.split(' ')

const Cta = ({ href, primary, children }) => (
  <a href={href} className={`inline-flex items-center rounded-xl px-7 py-3 text-sm font-semibold transition ${primary ? 'grad-bg text-black hover:opacity-90' : 'glass hover:border-sky-400/50'}`}>
    {children}
  </a>
)

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pb-16 pt-28 lg:flex-row lg:justify-between">
      <div className="w-full max-w-xl space-y-6">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-sky-200">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            {profile.role}
          </span>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
            <span className="bg-linear-to-r from-white to-sky-200 bg-clip-text text-transparent">{firstName}</span>
            <br />
            <span className="grad-text">{lastName.join(' ')}</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="flex h-8 items-center text-xl font-light text-slate-200 md:text-2xl">
            {typed}
            <span className="animate-blink grad-bg ml-1 h-6 w-0.75" />
          </p>
        </Reveal>

        <Reveal delay={450}><p className="max-w-lg font-light leading-relaxed text-slate-400 md:text-lg">{profile.intro}</p></Reveal>

        <Reveal delay={600} className="hidden flex-wrap gap-3 sm:flex">
          {heroTech.map((t) => <span key={t} className="glass rounded-full px-4 py-2 text-sm text-slate-300">{t}</span>)}
        </Reveal>

        <Reveal delay={750} className="flex flex-wrap items-center gap-3">
          <Cta href="#portfolio" primary>Lihat Proyek</Cta>
          <Cta href="#contact">Hubungi Saya</Cta>
          <div className="ml-1 flex gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass rounded-xl p-3 text-slate-400 transition hover:border-sky-400/50 hover:text-white">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}><Avatar /></Reveal>
    </section>
  )
}
