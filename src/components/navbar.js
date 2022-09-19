import { Link } from 'gatsby'
import React from 'react'

function navbar() {
  return (
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/artists">For Artists</Link>
        <Link to="/fans">For Fans</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default navbar