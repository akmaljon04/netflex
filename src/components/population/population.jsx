import './population.css'
import React, { useEffect,useState} from "react";
import "swiper/swiper.min.css";
import Swiper from 'swiper/bundle';
import '../../../package.json'
import { Link } from "react-router-dom";
import logowatch from '../../image/play-fill.svg'


function Population() {
  const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/540/recommendations?api_key=457378a61c7657d583afb794b5f60e44&page=2')
      .then(response => response.json())
      .then(json => {
        const newArr = json.results.map(item => ({
          name:item.title,
          image:item.backdrop_path,
          id:item.id,
          description:item.overview,
          create:item.release_date
          }))
          setData(newArr)
        })
    },[])

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  },[])


  return (
    <div className='home'>
      <div className="container">
        <div className="base-home">
          <h1 className='movie-title'>Stay by my side</h1>
          <h2>Number 4 in Turkey Today</h2>
          <p className='message'>Emir, who learned to take care of himself at a young age and who worked hard and reached an important position in the business world, one day meets a girl who is a street singer and his life changes.</p>
          <button className='btn-white'><img src={logowatch} alt="logo" />   <a target='blank' href="https://www.netflix.com/uz/">Play</a></button>
          <button className='btn'><a style={{color:'white'}} target='blank' href="https://www.netflix.com/uz/">More information</a></button>
          <h2>Netflix Population</h2>
        </div>
        <div className="swipper-home">
           <div className="swiper-container mySwiper">
            <div className="swiper-wrapper" key={data.id}>
              {data.map((post) => (
                <div className="swiper-slide" key={post.id}>
                  <Link to={`/singlepage/`}><img className='swiper-img' src={`https://images.tmdb.org/t/p/original/${post.image}`} alt="logo" /></Link>
                  <h3 style={{color:'white'}}>{post.name}</h3>
                </div> 
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Population

