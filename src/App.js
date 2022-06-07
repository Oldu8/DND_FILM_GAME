import { useState } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import { list } from "./assets/list";
import { Button, Alert, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
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
    setChosenFilm(e);
    getFilm(e)
  }

  function getFilm(id) {
    setCardList(filmList.find((item) => item.filmId === +id).filmdata)
  }

  return (
    <div className={styles.app}>
      <section className="container">
        <section className={styles.main}>
          <Alert className={styles.mainTitle}>
            Set pictures in correct order
          </Alert>
          <div className={styles.choseBlock}>
            <DropdownButton id="dropdown-basic-button" title="Select film to play " size="lg" onSelect={(e) => handleChange(e)}>
              {filmList.map((film) => (
                <Dropdown.Item key={film.film} eventKey={film.filmId} title={film.film}>{film.film}</Dropdown.Item>
              ))}
            </DropdownButton>
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
          <div className={styles.btnBlock}>
            <Button variant="success" size="lg">
              Check guess !
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
