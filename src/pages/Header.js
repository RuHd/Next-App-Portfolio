import React from 'react'
import styles from '../styles/Header.module.css'
const Header = () => {
    return (
        <header>
            <h1>RUANDEV</h1>
            <nav className = {styles.navigation}>
                <a>HOME</a>
                <a>PROJECTS</a>
                <a>ABOUT ME</a>
            </nav>
        </header>
    )
}

export default Header
