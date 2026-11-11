import { useEffect, useRef, useState } from 'react'

// Membungkus elemen agar muncul halus saat masuk layar
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${show ? 'show' : ''} ${className}`}>
      {children}
    </div>
  )
}
