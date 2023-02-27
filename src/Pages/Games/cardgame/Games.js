import React, { useState, useEffect } from "react";
import MemoryCard from "./components/MemoryCard";
import { createMatrix } from './helper/shuffle';
// import { Stopwatch } from "./settimer";

import './games.css';

export const Games = () => {
  const [grid, setGrid] = useState(createMatrix());
  const [matched, setMatched] = useState([]);
  const [focused, setFocused] = useState([]);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const resetGame = () => {
    setMatched([]);
    setFocused([]);
    setGrid(createMatrix());
  };
    
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
  

  const handleClickCard = (event) => {
    // logic for persisting the card(s) if matched otherwise hide them
    const cardPosition = parseInt(event.target.getAttribute("data-cell-index"));
    // user cannot select more than two cards
    if (focused.length > 1) return;

    // 'cardPosition' is NaN, when user click the same card frequently
    if (isNaN(cardPosition))  return;

    if (
      focused.indexOf(cardPosition) === -1 &&
      matched.indexOf(cardPosition) === -1
    ) {
      // user clicks the first or second card
      if (!focused.length) {
        // first card is selected
        let selection = [cardPosition];
        setGrid(
          grid.map((ele) =>
            ele.id === cardPosition || matched.indexOf(ele.id) > -1
              ? { ...ele, revealed: true }
              : { ...ele }
          )
        );
        setFocused(selection);
        setRunning(true);
      } else if (focused.length === 1) {
        // second card is selected
        let prevSelection = focused[0];
        let selection = [prevSelection, cardPosition];
        setFocused(selection);
        if (grid[prevSelection].face === grid[cardPosition].face) {
          // cards have matched
          const paired = matched.concat(...selection);
          setGrid(
            grid.map((ele) =>
              paired.indexOf(ele.id) > -1
                ? { ...ele, revealed: true }
                : { ...ele, revealed: false }
            )
          );
          setMatched(paired);
          setFocused([]);
		  // alert box to reset game   
          if (paired.length === 12) {
            setTimeout(() => {
              alert(
                "Selamat, Anda resmi menjadi wibu!!!"
              );
              resetGame();
              setRunning(false);
              setTime(0);
            },);
          }
        } else {
          // show only matched and previously selected card. Hide selection after 2s
          setGrid(
            grid.map((ele) =>
              selection.indexOf(ele.id) > -1 || matched.indexOf(ele.id) > -1
                ? { ...ele, revealed: true }
                : { ...ele, revealed: false }
            )
          );
          setTimeout(() => {
            setGrid(
              grid.map((ele) =>
                matched.indexOf(ele.id) > -1
                  ? { ...ele, revealed: true }
                  : { ...ele, revealed: false }
              )
            );
            setFocused([]);
          }, 2000);
        }
      }
    }
  };

  return (
    <div>
      <section className="memory-game">
        {grid.map((cell, index) => (
          <MemoryCard
            key={cell.face + index}
            data={cell}
            handleClickCard={handleClickCard}
          />
        ))}
      </section>
      <div className="timer">
      <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
    </div>
  );
}

