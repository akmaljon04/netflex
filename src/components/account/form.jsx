import React,{useState} from 'react'
import Signupform from './signupform'
import Home from '../home/home'

function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const submitForm = () => {
    setFormSubmitted(true)
  }
  return (
    <div className='form'>
      {!formSubmitted ? <Signupform submitForm={submitForm} /> : <Home/>}
    </div>
  )
}

export default Form