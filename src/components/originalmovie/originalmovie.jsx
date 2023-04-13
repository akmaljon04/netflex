import './originalmovie.css'
import React,{ useEffect, useState} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Originalmovie() {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=457378a61c7657d583afb794b5f60e44&query=john&page=2')
    .then(response => response.json())
    .then(json => 
      {
      const newArr = json.results.map(item => ({
        name:item.title,
        image:item.backdrop_path,
        id:item.id,
        description:item.overview,
        create:item.release_date
        }))
        setData(newArr)
      }
      )
    },[])
  const settings = {dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true};
  return (
    
    <div className='originalmovie'>
      <div className="container">
        <div className='slick'>
          <h2 className='slick-title'>Netflix Originals</h2>
          <Slider {...settings}>
            {data.map((post) => (
              <Link to={`/singlepage/`}>
                <div className='slick-box' key={post.id}>
                <img className='slick-img' src={`https://images.tmdb.org/t/p/original/${post.image}`} alt="logo" />
                <h3>{post.name}</h3>
              </div></Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Originalmovie