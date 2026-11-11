// Latar tetap: gumpalan cahaya biru yang melayang pelan dan grid tipis
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="animate-float absolute -left-10 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-[128px] md:h-96 md:w-96" />
      <div className="animate-float absolute -right-10 top-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[128px]" style={{ animationDelay: '2s' }} />
      <div className="animate-float absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-[128px]" style={{ animationDelay: '4s' }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
