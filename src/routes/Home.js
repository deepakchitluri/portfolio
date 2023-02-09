import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from "../components/Work"
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
const home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default home
