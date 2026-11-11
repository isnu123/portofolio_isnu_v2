import { useState } from 'react'

const KEY = 'profile-photo'

const read = () => {
  try { return localStorage.getItem(KEY) } catch { return null }
}

// Perkecil gambar agar muat di localStorage
function resize(file, max = 480) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height))
      const canvas = document.createElement('canvas')
      canvas.width = img.width * scale
      canvas.height = img.height * scale
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}

// Foto hasil unggah disimpan di browser ini saja
export default function useProfilePhoto() {
  const [photo, setPhoto] = useState(read)

  const upload = async (file) => {
    if (!file) return
    const data = await resize(file)
    setPhoto(data)
    try { localStorage.setItem(KEY, data) } catch { /* penyimpanan penuh */ }
  }

  return { photo, upload }
}
