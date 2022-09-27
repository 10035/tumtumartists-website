import { Link } from 'gatsby'
import React from 'react'
import * as Navbar from '../styles/navbar.module.css'
import Logo from '../images/logo.png'

function navbar() {
  return (
    <nav>
    <h2>TumTum Artists</h2>
    <div className="styles">
        <Link to="/">About Us</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/forartists">For Artists</Link>
        <Link to="/forfans">For Fans</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
    </nav>
  )
}

export default navbar