import React, {useState,useEffect} from 'react'
import Validation from './validation'
import './signupform.css'
import logo from '../../image/NetflixLogoSvg.png'
import { Link } from 'react-router-dom'

function Signupform({submitForm}) {
  const [value,setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  })
  const handleChange = (even) => {
    setValue({
      ...value,[even.target.name]:even.target.value,
    })
  }
  const [error, setError] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleFormSubmit = (even) => {
    even.preventDefault();
    setError(Validation(value))
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if(Object.keys(error).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  }, [error]);



  return (
    <>
    
    <div className='containerr'>
      <nav>
      <img className='logo' src={logo} alt="logo" />
    </nav>
      <div className="app-wrapper">
        <h2 className='title'>
          Sign In
        </h2>
      <form className='form-wrapper'>
        <div className="name">
          <input type="text" name="fullname" value={value.fullname} 
          onChange={handleChange} placeholder='Fullname'
          className='inputs' />
          {error.fullname && <p className='error'>{error.fullname}</p> }
        </div>
        <div className="email">
          <input type="email" name="email" value={value.email} 
          onChange={handleChange} placeholder='Email'
          className='inputs' />
          {error.email && <p className='error'>{error.email}</p> }
        </div>
        <div className="password">
          <input type="password" name="password" value={value.password} 
          onChange={handleChange}
          placeholder='Password'
          className='inputs' />
          {error.password && <p className='error'>{error.password}</p> }
        </div>
        <div>
            <button className='submit' onClick={handleFormSubmit} >
              Sign In</button>
        </div>
      </form>
      </div>
    </div></>
  )
}

export default Signupform