import { useState } from 'react'
import { profile } from '../data'
import useProfilePhoto from '../hooks/useProfilePhoto'


const canEdit = import.meta.env.DEV

export default function Avatar() {
  const { photo, upload } = useProfilePhoto()
  const [missing, setMissing] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-linear-to-tr from-sky-400/30 to-blue-600/30 blur-3xl" />
        <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white/15 bg-white/5 text-6xl font-bold text-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.25)] sm:h-80 sm:w-80">
          {missing && !photo ? (
            profile.initials
          ) : (
            // Urutan: foto unggahan, lalu file public/foto.jpg, lalu inisial
            <img src={photo || '/foto.jpg'} alt={`Foto ${profile.name}`} onError={() => setMissing(true)} className="h-full w-full object-cover" />
          )}
        </div>
      </div>
      {canEdit && (
        <label className="cursor-pointer text-xs text-slate-400 transition hover:text-sky-300">
          Ubah foto
          <input type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files[0])} />
        </label>
      )}
    </div>
  )
}
