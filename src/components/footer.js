import { Link } from 'gatsby'
import React from 'react'

function footer() {
  return (
    <main>
        <div className="footer-links">
            <Link to="">Footer Link 1</Link>
            <Link to="">Footer Link 2</Link>
            <Link to="">Footer Link 3</Link>
        </div>
    </main>
  )
}

export default footer