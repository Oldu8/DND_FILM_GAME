import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import { list } from "./assets/list";
import { Button, Alert, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [filmList, setFilmList] = useState(list)
  const [chosenFilm, setChosenFilm] = useState('');
  const [rightList, setRightList] = useState('');
  const [cardList, setCardList] = useState(null)
  const [currentCard, setCurrentCard] = useState(null);

  const rightOrderCards = (a, b) => a.order - b.order;

  function handleChange(e) {
    setChosenFilm(e);
    setRightList(filmList.find((item) => item.filmId === +e).filmdata);
    setCardList(filmList.find((item) => item.filmId === +e).filmdata.map((item) => {
      return { ...item, order: Math.floor((Math.random() - 0.5) * 100) }
    }))
  }

  function checkOrder() {
    console.log('check')
    console.log(rightList);
    const isCorrect = rightList.map((item, index) => {
      if (item.id !== cardList[index].id) {
        return console.log(item.id, cardList[index].id, 'wrong')
      }
      console.log(item.id, cardList[index].id, 'right')
    })
  }

  function shuffle() {
    setCardList(cardList.map((item) => {
      return { ...item, order: Math.floor(Math.random() - 0.5) * 100 }
    }))
  }

  useEffect(() => { console.log(cardList) }, [cardList])

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
            <Button variant="secondary" onClick={shuffle}>
              Reshuffle
            </Button>
          </div>
          <div className={styles.content}>
            {cardList ?
              cardList.sort(rightOrderCards).map((item) => (
                <Card item={item} key={item.id}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard}
                  cardList={cardList}
                  setCardList={setCardList} />
              ))
              : null}
          </div>
          <div className={styles.btnBlock}>
            <Button variant="success" size="lg" onClick={checkOrder}>
              Check guess !
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
