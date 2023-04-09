import React from 'react'
import Population from '../population/population'
import BaseFilm from '../baseFilm/baseFilm'
import Originalmovie from '../originalmovie/originalmovie'
import Listem from '../listem/listem'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
function Netflex() {
  return (
    <>
      <Navbar/>
      <Population/>
      <BaseFilm/>
      <Originalmovie/>
      <Listem/>
      <Footer/>
    </>
      
  )
}

export default Netflex