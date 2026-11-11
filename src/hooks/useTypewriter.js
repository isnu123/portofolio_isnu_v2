import { useEffect, useState } from 'react'

// Mengetik dan menghapus kata secara bergantian. `words` harus array yang stabil (konstanta).
export default function useTypewriter(words, { type = 90, erase = 45, pause = 1800 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const full = !deleting && text === word
    const timer = setTimeout(() => {
      if (full) setDeleting(true)
      else if (deleting && text === '') { setDeleting(false); setIndex((index + 1) % words.length) }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, full ? pause : deleting ? erase : type)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, type, erase, pause])

  return text
}
