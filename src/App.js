import { useState } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import { list } from "./assets/list";

function App() {
  const [cardList, setCardList] = useState(list)
  const [currentCard, setCurrentCard] = useState(null);

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }
  return (
    <div className="App">
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Welcome to film quiz</h2>
      </header>
      <section className={styles.main}>
        <h2 className={styles.mainTitle}>
          Select pictures in correct order
        </h2>
        <div className={styles.content}>
          {cardList.sort(sortCards).map((item) => (
            <Card item={item} key={item.id}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              cardList={cardList}
              setCardList={setCardList} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
