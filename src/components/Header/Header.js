import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Welcome to quizz game!</h1>
            <h2 className={styles.title}>Select game you want to play, we have:</h2>
            <nav className={styles.nav}>
                <Link to='/'><span className={styles.homeLink}>Home</span></Link>
                <Link to='/film'><span className={styles.link}>Film quiz</span></Link>
                <Link to='/color'><span className={styles.link}>Color quiz</span></Link>
            </nav>
        </div>
    )
}
