import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // Tandai menu sesuai section yang sedang terlihat
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 140
      const current = navLinks.filter((l) => document.getElementById(l.id)?.offsetTop <= y).pop()
      setActive(current ? current.id : 'home')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled || open ? 'bg-[#030014]/80 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Navigasi utama">
        <a href="#home" className="grad-text text-xl font-bold">{profile.name}</a>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={`relative py-2 text-sm font-medium transition ${active === l.id ? 'grad-text font-semibold' : 'text-sky-100/80 hover:text-white'}`}>
                {l.label}
                <span className={`grad-bg absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-300 ${active === l.id ? 'scale-x-100' : 'scale-x-0'}`} />
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka menu" className="p-2 text-sky-100 md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-4 px-6 pb-6 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={active === l.id ? 'grad-text font-semibold' : 'text-sky-100/80'}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
