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
  const [result, setResult] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);

  const rightOrderCards = (a, b) => a.order - b.order;

  const objMessage = {
    success: 'You are right!',
    danger: 'You are wrong',
  }


  function handleChange(e) {
    setChosenFilm(e);
    setRightList(filmList.find((item) => item.filmId === +e).filmdata);
    setCardList(filmList.find((item) => item.filmId === +e).filmdata.map((item) => {
      return { ...item, order: Math.floor((Math.random() - 0.5) * 100) }
    }))
  }

  function checkOrder() {
    for (let i = 0; i < rightList.length; i++) {
      if (rightList[i].id !== cardList[i].id) {
        setResult('danger');
        break;
      };
      setResult('success');
    }
  }

  function shuffle() {
    setCardList(cardList.map((item) => {
      return { ...item, order: Math.floor(Math.random() - 0.5) * 10 }
    }))
  }

  useEffect(() => {
    setResult(null)
  }, [chosenFilm])

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
            <Button className={styles.reshuffle} variant="secondary" onClick={shuffle}>
              Reshuffle
            </Button>
          </div>
          <div className={styles.resBlock}>
            {!!result && <Alert variant={result} className={styles.message}>{objMessage[result]}</Alert>}
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
          {cardList ?
            <div className={styles.btnBlock}>
              <Button variant="success" size="lg" onClick={checkOrder}>
                Check guess !
              </Button>
            </div> : null}
        </section>
      </section>
    </div>
  );
}

export default App;
