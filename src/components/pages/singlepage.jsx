import React from 'react'
import './singlepage.css'
import logowatch from '../../image/play-fill.svg'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Singlepage() {
  const { name,image,create,description } = useParams('');

  return (
    <>
    <Navbar/>
      <div className='singlepage'>
        <div className="containerrr"  style={{backgroundImage:`url(${image})`}}>
          <div className="big" >
            <h3>{create}</h3>
            <h1>{name}</h1>
            <h2>{description}</h2>
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