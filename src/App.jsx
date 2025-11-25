import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import PartnersCarousel from './components/PartnersCarousel'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PartnersCarousel />
        <Services />
        <Pricing />
        <Testimonials />
        <Team />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

