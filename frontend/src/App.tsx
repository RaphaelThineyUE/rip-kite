import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, Modal } from './components'
import {
  HomePage,
  TechnologyPage,
  SpecsPage,
  ComparePage,
  FAQPage,
  ContactPage,
  PressKitPage,
} from './pages'

function AppContent() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const trackPageView = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'pageview',
            page: location.pathname,
            ts: new Date().toISOString(),
          }),
        })
      } catch (error) {
        console.error('Failed to track page view:', error)
      }
    }
    trackPageView()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-midnight text-cloud">
      <Navbar onBuyClick={() => setIsBuyModalOpen(true)} />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/specs" element={<SpecsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/press-kit" element={<PressKitPage />} />
        </Routes>
      </main>

      <Footer />

      <Modal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        title="Coming Soon"
      >
        <p className="text-lg mb-4">Pre-orders launching in Q2 2025</p>
        <p className="text-slate">Join our waitlist to be notified when Fujin becomes available.</p>
      </Modal>
    </div>
  )
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
