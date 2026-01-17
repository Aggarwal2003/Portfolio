import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Journey from '../components/Journey'
import Contactme from '../components/Contactme'
import Fotter from '../components/Fotter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Journey/>
      <Contactme/>
      <Fotter/>
    </div>
  )
}

export default Home
