import { Briefcase, GraduationCap, Layers } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { about, education, experiences, skills, profile, semester } from '../data'

// Angka dihitung dari data.js agar selalu sesuai isi
const stats = [
  { icon: GraduationCap, value: semester, label: 'Semester', desc: 'Sistem Informasi' },
  { icon: Briefcase, value: experiences.length, label: 'Pengalaman', desc: 'Magang, freelance, pelatihan' },
  { icon: Layers, value: skills.reduce((n, g) => n + g.items.length, 0), label: 'Skill', desc: 'Pemrograman, jaringan, media' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeader title="Tentang Saya" subtitle="Mahasiswa yang suka belajar komputer, jaringan, dan pengembangan web." />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-5">
          <h3 className="text-3xl font-bold sm:text-4xl">
            <span className="grad-text">Halo, saya</span>
            <span className="mt-2 block text-slate-200">{profile.name}</span>
          </h3>
          {about.map((p) => <p key={p} className="leading-relaxed text-slate-400 md:text-lg">{p}</p>)}
        </Reveal>

        <Reveal delay={200} className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold">
            <GraduationCap className="h-5 w-5 text-sky-300" /> Pendidikan
          </h3>
          <ol className="space-y-6 border-l border-white/10 pl-6">
            {education.map((e) => (
              <li key={e.school} className="relative">
                <span className="grad-bg absolute left-[-29.5px] top-1.5 h-2.5 w-2.5 rounded-full" />
                <p className="font-semibold text-slate-100">{e.school}</p>
                <p className="text-sm text-slate-400">{e.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {stats.map(({ icon: Icon, value, label, desc }, i) => (
          <Reveal key={label} delay={i * 150} className="glass rounded-2xl p-6 transition hover:border-sky-400/40">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><Icon className="h-6 w-6 text-sky-300" /></span>
              <span className="text-4xl font-bold">{value}</span>
            </div>
            <p className="font-medium text-slate-200">{label}</p>
            <p className="text-xs text-slate-400">{desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
