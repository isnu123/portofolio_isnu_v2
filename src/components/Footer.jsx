import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6">
      <hr className="border-white/10" />
      <p className="py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
