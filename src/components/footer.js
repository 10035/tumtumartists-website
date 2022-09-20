import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/footer.module.css'

function footer() {
  return (
    <main>
        <div className={styles.footer}>
            <Link to="" className={styles.links}>Footer Link 1</Link>
            <Link to="" className={styles.links}>Footer Link 2</Link>
            <Link to="" className={styles.links}>Footer Link 3</Link>
        </div>
    </main>
  )
}

export default footer