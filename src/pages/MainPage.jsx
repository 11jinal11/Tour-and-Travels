import React from 'react'
import Navbar from '../componants/Navbar'
import Home from './Home'
import Card from "../componants/Card"
import WhyChooseUs from '../componants/Whychoosus'
import VacationSection from '../componants/VactionSection'
import Footer from '../componants/Footer'
import { Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'

const MainPage = () => {
  return (
   <>
   <Navbar/>
      <Home />
      <Card/>
      <WhyChooseUs />
      <VacationSection />
      <Footer/>
   
   </>
  )
}

export default MainPage
