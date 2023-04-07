import './navbar.css'
import logo from '../../image/NetflixLogoSvg.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <img className='brand' src={logo} alt="logo" />
      <form>
        <input type="text" placeholder='search' className='search' />
        <i class="fa-solid fa-magnifying-glass"></i>
      </form>
      <button className='LogOut'>Sign Out</button>
    </nav>
  )
}
