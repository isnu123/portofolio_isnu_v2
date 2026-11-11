import { useState } from 'react'
import Background from './components/Background'
import WelcomeScreen from './components/WelcomeScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [welcome, setWelcome] = useState(true)

  return (
    <div className="min-h-screen font-sans antialiased">
      <Background />
      {welcome ? (
        <WelcomeScreen onDone={() => setWelcome(false)} />
      ) : (
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  )
}
