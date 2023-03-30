import React from 'react'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h2>memory</h2>
        <div>
            <button className='restart'>Restart</button>
            <button>New Game</button>
        </div>
    </nav>
  )
}

export default Navbar