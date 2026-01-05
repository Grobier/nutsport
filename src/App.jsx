import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load non-critical components for better performance
// This reduces initial bundle size by deferring Framer Motion hooks and animations
const PartnersCarousel = lazy(() => import('./components/PartnersCarousel'))
const Services = lazy(() => import('./components/Services'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Team = lazy(() => import('./components/Team'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))

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
        <Suspense fallback={<ComponentLoader />}>
          <PartnersCarousel />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Services />
        </Suspense>
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
      <Suspense fallback={<ComponentLoader />}>
        <WhatsAppButton />
      </Suspense>
    </div>
  )
}

export default App

