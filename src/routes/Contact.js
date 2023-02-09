import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Form from '../components/Form'
const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact
