import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServiceSteps from './pages/ServiceSteps'
import Clinics from './pages/Clinics'
import Rights from './pages/Rights'
import Contact from './pages/Contact'
import AfterTreatment from './pages/AfterTreatment'
import News from './pages/News'
import FAQ from './pages/FAQ'

type PageKey = 'home' | 'steps' | 'clinics' | 'rights' | 'after' | 'news' | 'faq' | 'contact'

function App() {
  const [page, setPage] = useState<PageKey>('home')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar current={page} onNavigate={(p: PageKey) => setPage(p)} />
      <main className="flex-1 container mx-auto px-4 py-8">
        {page === 'home' && <Home />}
        {page === 'steps' && <ServiceSteps />}
        {page === 'clinics' && <Clinics />}
        {page === 'rights' && <Rights />}
        {page === 'after' && <AfterTreatment />}
        {page === 'news' && <News />}
        {page === 'faq' && <FAQ />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}

export default App
