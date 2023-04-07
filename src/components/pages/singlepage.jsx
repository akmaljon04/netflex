import React from 'react'
import './singlepage.css'
import logowatch from '../../image/play-fill.svg'
import logo from '../../image/netflex-clone-logo.jpg'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Link } from "react-router-dom";

function Singlepage() {

  return (
    <>
    <Navbar/>
      <div className='singlepage'>
        <div className="containerrr"  style={{backgroundImage:`url(${logo})`}}>
          <div className="big" >
            <h3>Create deta</h3>
            <h1>Movie name</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa maiores ipsam aperiam! Dicta quia ab repellat quos laboriosam corrupti.</h2>
            <button className='watch-btn'><img src={logowatch} alt="logo" /> WATCH</button>
            <Link to={'/'}><button className='add-list'>HOME PAGE</button></Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}


export default Singlepage