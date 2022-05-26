import { useState } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import { list } from "./assets/list";

function App() {
  const [filmList, setFilmList] = useState(list)
  const [chosenFilm, setChosenFilm] = useState('');
  const [cardList, setCardList] = useState(null)
  const [currentCard, setCurrentCard] = useState(null);

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  function handleChange(e) {
    setChosenFilm(e.target.value);
    getFilm(e.target.value)
  }

  function getFilm(id) {
    setCardList(filmList.find((item) => item.filmId === +id).filmdata)
  }

  return (
    <div className="App">
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Welcome to film quiz</h2>
      </header>
      <section className={styles.main}>
        <h2 className={styles.mainTitle}>
          Set pictures in correct order
        </h2>
        <div className={styles.choseBlock}>
          <h4 className={styles.choseTitle}>
            Chose film to play
          </h4>
          <select name="film" onChange={handleChange}>
            {filmList.map((film) => (
              <option value={film.filmId} key={film.film}>{film.film}</option>
            ))}
          </select>
        </div>
        <div className={styles.content}>
          {cardList ?
            cardList.sort(sortCards).map((item) => (
              <Card item={item} key={item.id}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                cardList={cardList}
                setCardList={setCardList} />
            ))
            : null}
        </div>
      </section>
    </div>
  );
}

export default App;
