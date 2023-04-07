import React from 'react'
import './footer.css'
import vektor from '../../image/Vector.png'
import vektor1 from '../../image/Vector (1).png'
import vektor2 from '../../image/Vector (2).png'
import vektor3 from '../../image/Vector (3).png'
function Footer() {
  return (
    <>
      <footer>
      <div className="cont">
        <div className="cart1">
          <div className="logoCart">
            <a href="https://www.facebook.com"  target='blank'>
              <img src={vektor} alt="vektor" />
            </a>
            <a href="https://www.instagram.com" target='blank'>
              <img src={vektor1} alt="vektor" />
            </a>
            <a href="https://www.twitter.com" target='blank'>
              <img src={vektor2} alt="vektor" />
            </a>
            <a href="https://www.youtube.com" target='blank'>
              <img src={vektor3} alt="vektor" />
            </a>
          </div>
          <ul>
            <li>
              <a href="https://www.netflix.com" target='blank'>Audio and Subtitles</a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>Media Center</a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>Security</a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>Contact Us</a>
            </li>
            <li>  
              <button className='btn-footer'>Service Code</button>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                © 1997-2021 Netflix, Inc.  i-062d573a0ee099242
              </a>
            </li>
          </ul>
        </div>
        <div className="cart2">
          <ul className='ul-list'>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Audio Description
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Investor Relations
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Legal Provisions
              </a>
            </li>
          </ul>
        </div>
        <div className="cart3">
          <ul className='ul-list'>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Help center
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Job Oppurtunities
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>
        <div className="cart4">
          <ul className='ul-list'>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Gift Cards
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com" target='blank'>
                Corporate Information
              </a>
              </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer