import { useEffect, useState } from 'react'
import { profile } from '../data'

// Layar pembuka singkat sebelum website tampil
export default function WelcomeScreen({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const fade = setTimeout(() => setLeaving(true), 2200)
    const done = setTimeout(onDone, 2900)
    return () => { clearTimeout(fade); clearTimeout(done) }
  }, [onDone])

  return (
    <div className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#030014] px-6 text-center transition-opacity duration-700 ${leaving ? 'opacity-0' : 'opacity-100'}`}>
      <p className="text-sm text-slate-400">Selamat datang di</p>
      <h1 className="grad-text mt-3 text-4xl font-bold md:text-6xl">Portofolio Saya</h1>
      <p className="mt-4 text-slate-300">{profile.name}</p>
      <div className="mt-8 h-0.5 w-40 overflow-hidden rounded bg-white/10">
        <div className="loadbar grad-bg h-full" />
      </div>
    </div>
  )
}
