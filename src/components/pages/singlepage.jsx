import React from 'react'
import './singlepage.css'
import logowatch from '../../image/play-fill.svg'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Link } from "react-router-dom";

function Singlepage({item}) {

  return (
    <>
    <Navbar/>
      <div className='singlepage'>
        <div className="containerrr"  style={{backgroundImage:`url(${logowatch})`}}>
          <div className="big" >
            <h3>{item.create}</h3>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
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