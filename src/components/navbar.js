import { Link } from 'gatsby'
import React from 'react'
import * as Navbar from '../styles/navbar.module.css'

function navbar() {
  return (
    <div className={Navbar.nav}>
        <Link to="/" className={Navbar.links}>About Us</Link>
        <Link to="/portfolio" className={Navbar.links}>Portfolio</Link>
        <Link to="/artists" className={Navbar.links}>For Artists</Link>
        <Link to="/fans" className={Navbar.links}>For Fans</Link>
        <Link to="/contact" className={Navbar.links}>Contact Us</Link>
    </div>
  )
}

export default navbar