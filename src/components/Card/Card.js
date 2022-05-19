import React from "react";
import styles from "./Card.module.scss"

const Card = ({ item }, currentCard, setCurrentCard, cardList, setCardList) => {
    function dragStartHandler(e, item) {
        console.log(item)
    }
    function dragEndHandler(e) {
        setCurrentCard = { item }
        e.target.style.background = 'rgb(204, 241, 241)'


    }
    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'lightgray'

    }
    function dropHandler(e, item) {
        e.preventDefault();
        console.log({ cardList })
        setCardList(cardList.map((c) => {
            if (c.id === item.id) {
                return { ...c, order: currentCard.order }
            }
            if (c.id === currentCard.id) {
                return { ...c, order: item.order }
            }
            console.log(cardList)
            return c;
        }))
        console.log(item)
    }

    return (
        <div className={styles.container} draggable={true}
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={e => dragEndHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDragOver={e => dragOverHandler(e)}
            onDrop={e => dropHandler(e, item)}
        >
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.order}> {item.order} - order</p>
            <p className={styles.id}>{item.id} - id</p>
        </div>
    )
}

export default Card