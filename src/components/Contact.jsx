import { ArrowUpRight, Github, Mail, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { profile } from '../data'

const contacts = [
  { icon: Mail, label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: 'WhatsApp', text: 'Kirim pesan', href: `https://wa.me/${profile.whatsapp}` },
  { icon: Github, label: 'GitHub', text: profile.github.replace('https://', ''), href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-16 px-6 py-24">
      <SectionHeader title="Hubungi Saya" subtitle="Silakan hubungi saya untuk berdiskusi atau bekerja sama." />
      <div className="space-y-4">
        {contacts.map(({ icon: Icon, label, text, href }, i) => (
          <Reveal key={label} delay={i * 120}>
            <a href={href} target="_blank" rel="noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-sky-400/50">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><Icon className="h-5 w-5 text-sky-300" /></span>
              <span className="flex-1">
                <span className="block text-xs text-slate-400">{label}</span>
                <span className="font-medium text-slate-100">{text}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
