import { useState } from 'react'
import { Briefcase, Code2, ExternalLink, Layers } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { experiences, projects, skills } from '../data'

const tabs = [
  { id: 'projects', label: 'Proyek', icon: Code2 },
  { id: 'experience', label: 'Pengalaman', icon: Briefcase },
  { id: 'skills', label: 'Skill', icon: Layers },
]

const card = 'glass rounded-2xl p-6 transition hover:border-sky-400/40'
const chip = 'rounded-full bg-sky-400/10 px-3 py-1 text-sm text-sky-200'

function ProjectList() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article key={p.title} className={card}>
          <h3 className="grad-text text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className={chip}>{s}</span>)}</div>
          {(p.demo || p.github) && (
            <div className="mt-5 flex gap-5 text-sm font-medium text-sky-300">
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-sky-200">Demo <ExternalLink className="h-4 w-4" /></a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-sky-200">Kode <ExternalLink className="h-4 w-4" /></a>}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

function ExperienceList() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {experiences.map((x) => (
        <article key={x.role} className={card}>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-100">{x.role}</h3>
            <span className={chip}>{x.status}</span>
          </div>
          <p className="text-sm text-sky-300">{x.place}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300/80">{x.desc}</p>
        </article>
      ))}
    </div>
  )
}

function SkillList() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {skills.map((g) => (
        <div key={g.group} className={card}>
          <h3 className="text-lg font-semibold text-slate-100">{g.group}</h3>
          {g.level && <p className="text-sm text-slate-400">{g.level}</p>}
          <div className="mt-4 flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className={chip}>{i}</span>)}</div>
        </div>
      ))}
    </div>
  )
}

const panels = { projects: ProjectList, experience: ExperienceList, skills: SkillList }

export default function Portfolio() {
  const [active, setActive] = useState('projects')
  const Panel = panels[active]

  return (
    <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeader title="Portofolio" subtitle="Proyek, pengalaman, dan skill yang saya pelajari sejauh ini." />

      <Reveal>
        <div role="tablist" className="glass mb-8 grid grid-cols-3 gap-2 rounded-2xl p-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={active === id}
              onClick={() => setActive(id)}
              className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${active === id ? 'grad-bg text-black' : 'text-slate-400 hover:text-white'}`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div role="tabpanel" key={active}><Panel /></div>
    </section>
  )
}
