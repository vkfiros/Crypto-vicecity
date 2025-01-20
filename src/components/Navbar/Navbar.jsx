import React from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        Crypto Vicecity Nav
        {/* <img src={getImageUrl("/")} /> */}
    </nav>
  )
}

export default Navbar