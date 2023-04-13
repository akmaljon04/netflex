import React,{useState,useEffect} from 'react'
import './listem.css'
import { Link } from "react-router-dom";
function Listem() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=457378a61c7657d583afb794b5f60e44&page=2')
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


  return (
    <div className='listem'>
      <div className="container">
        <h2>Listem</h2>
        <div className="list" key={data.id}>
          {data.map((post) => (
            <Link to={`/singlepage/`}><div className="cart">
            <div className="top-cart">
              <img className='cart-foto' src={`https://images.tmdb.org/t/p/original/${post.image}`} alt="logo" />
            </div>
            <div className="bottom-cart">
                <h3 style={{color:'white'}} className='cart-title'>
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

export default Listem