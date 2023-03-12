import React from 'react'
import styles from './HomePage.module.scss'
import filmQuiz from '../../assets/banners/filmQuiz.png'
import colorQuiz from '../../assets/banners/colorQuiz.png'

import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>This is app in which you can find several simple games and try you skills in it.</h1>
            <ul className={styles.list}>
                <li className="card" style={{ width: '23rem' }}>
                    <img className="card-img-top" src={filmQuiz} alt="Card banner cap" />
                    <div className="card-body">
                        <h5 className="card-title">Film quiz</h5>
                        <p className="card-text">This is a simple game in which you can choose any saga from list. You will see posters of different films in random order. You goal is to drag it to the correct order and make guess. Good luck!</p>
                        <Link to='/film'><button className="btn btn-primary">Try Film quiz</button></Link>
                    </div>
                </li>
                <li className="card" style={{ width: '23rem' }}>
                    <img className="card-img-top" src={colorQuiz} alt="Card banner cap" />
                    <div className="card-body">
                        <h5 className="card-title">Color quiz</h5>
                        <p className="card-text">This game looks like super simple but it's real hard to do. You will see random color and few variants of HEX of this color. Do as much guesses as you can!
                        </p>
                        <Link to='/film'><button className="btn btn-primary">Try Color game</button></Link>
                    </div>
                </li>

            </ul>
        </div >
    )
}
