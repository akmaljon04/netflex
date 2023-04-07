import React,{useState,useEffect} from 'react'
import './baseFilm.css'
import { Link } from "react-router-dom";
function BaseFilm() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=457378a61c7657d583afb794b5f60e44')
    .then(response => response.json())
    .then(json => {
      const newArr = json.results.map(item => ({
        name:item.title,
        image:item.backdrop_path,
        id:item.id
        }))
        setData(newArr)
      })
    },[])

  return (
    <div className='basefilm'>
      <div className="container">
        <h2>Kemal Keep Watching</h2>
        <div className="nextfilm">
          {data.map((post) => (
            <Link to='/singlepage'><div className="box" key={post.id}>
            <div className="top-box">
              <img className='box-foto' src={`https://images.tmdb.org/t/p/original/${post.image}`} alt="logo" />
              
            </div>
            <div className="bottom-box">
              <h3 style={{color:'white'}} className='box-title'>
                {post.name}
              </h3>
              
            </div>
          </div></Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default BaseFilm