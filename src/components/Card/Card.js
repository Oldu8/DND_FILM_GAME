import React from "react";
import styles from "./Card.module.scss"

const Card = ({ item }) => {
    return (
        <div className={styles.container} draggable={true}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.order}> {item.order} - order</p>
            <p className={styles.id}>{item.id} - id</p>
        </div>
    )
}

export default Card