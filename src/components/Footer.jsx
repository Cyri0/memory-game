import React from 'react'
import './css/Footer.css'

const Footer = (props) => {
  return (
    <footer>
        <div className='footer-data-holder'>
            <span>Time</span>
            <span className="footer-data">0:00</span>
        </div>
        <div className='footer-data-holder'>
            <span>Moves</span>
            <span className="footer-data">{props.moves}</span>
        </div>
    </footer>
  )
}

export default Footer