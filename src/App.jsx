import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import PartnersCarousel from './components/PartnersCarousel'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy load non-critical components for better performance
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Team = lazy(() => import('./components/Team'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

// Fallback component for suspense
const ComponentLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse text-neutral-400">Cargando...</div>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PartnersCarousel />
        <Services />
        <Suspense fallback={<ComponentLoader />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Team />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={<ComponentLoader />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  )
}

export default App

