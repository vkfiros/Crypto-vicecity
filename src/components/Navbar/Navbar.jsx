import React from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        Navbar sample
        {/* <img src={getImageUrl("/")} /> */}
    </nav>
  )
}

export default Navbar