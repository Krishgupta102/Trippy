import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">Trippy</div>
        <div className="links">
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/About'}>About</NavLink></li>
                <li><NavLink to={'/Contact'}>Contact</NavLink></li>
                <li><NavLink to={'/Service'}>Service</NavLink></li>
                <li><NavLink to={'/Service'}>SignUp</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
