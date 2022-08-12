import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App