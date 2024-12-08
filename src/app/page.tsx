
import AboutSection from '@/sections/AboutSection'
import ContactSection from '@/sections/ContactSection'
import FooterSection from '@/sections/FooterSection'
import Header from '@/sections/Header'
import HeroSection from '@/sections/HeroSection'
import Projects from '@/sections/Projects'
import TapeSection from '@/sections/Tape'
import { TestimonialsSection } from '@/sections/Testimonial'
import React from 'react'


function Home() {

  return (
    <div>
      <Header/>
     <section id="home">
    <HeroSection/>     
      </section>
     <section id="projects">
    <Projects/>
      </section>
     <section id="home">
    <TapeSection/>
      </section>
     <section id="home">
    <TestimonialsSection/>
      </section>
     <section id="about">
    <AboutSection/>
      </section>
      <section id="contact">
    <ContactSection/>
      </section>
      <section id="home">
    <FooterSection/>
      </section>

    </div>
  )
}

export default Home