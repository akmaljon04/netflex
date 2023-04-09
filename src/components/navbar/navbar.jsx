import './navbar.css'
import logo from '../../image/NetflixLogoSvg.png'


export default function Navbar() {


  return (
    <nav className='navbar'>
      <img className='brand' src={logo} alt="logo" />
      <button className='LogOut'>Sign Out</button>
    </nav>
  )
}
