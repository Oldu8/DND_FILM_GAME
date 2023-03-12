import React, { useEffect, useState } from "react";
import styles from "./ColorPage.module.scss";
import { Button } from "react-bootstrap";

export default function ColorPage() {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [counter, setCounter] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  enum Result {
    Correct,
    Wrong,
  }

  const generateColor = () => {
    const correctColor = getRandomColor();
    setColor(correctColor);
    setAnswers(
      [correctColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };
  const getRandomColor = () => {
    const arr = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let color = new Array(6)
      .fill("")
      .map(() => arr[Math.floor(Math.random() * arr.length)])
      .join("");
    return `#${color}`;
  };

  useEffect(() => {
    generateColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkBest() {
    if (counter > bestScore) {
      setBestScore(counter);
    } else return;
  }
  function handelClick(answer: string) {
    if (answer === color) {
      setResult(Result.Correct);
      setCounter(counter + 1);
      checkBest();
      generateColor();
    } else {
      setResult(Result.Wrong);
      checkBest();
      setCounter(0);
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.mainTitle}>Guess HEX of the shown color</div>
      <section className={styles.content}>
        <div className={styles.score}>
          <span className={styles.counter}>Best score:{bestScore} </span>
          <span className={styles.counter}>Current score: {counter}</span>
        </div>
        <div
          className={styles.guessMe}
          style={{ backgroundColor: color }}
        ></div>
        <div className={styles.buttons}>
          {answers.map((answer) => {
            return (
              <Button
                variant="info"
                key={answer}
                onClick={() => handelClick(answer)}
              >
                {answer}
              </Button>
            );
          })}
        </div>
        {result === Result.Wrong && (
          <p className={styles.wrong}>Wrong answer!</p>
        )}
        {result === Result.Correct && (
          <p className={styles.correct}>Correct!</p>
        )}
      </section>
    </div>
  );
}
