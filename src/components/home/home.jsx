import React from 'react'
import './netflex.jsx'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Netflex from './netflex.jsx'
import Singlepage from '../pages/singlepage.jsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Netflex/>}/>
          <Route path='/singlepage' element={<Singlepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home