import Reveal from './Reveal'

export default function SectionHeader({ title, subtitle }) {
  return (
    <Reveal className="mb-12 text-center">
      <h2 className="grad-text inline-block text-4xl font-bold md:text-5xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 md:text-base">{subtitle}</p>
    </Reveal>
  )
}
