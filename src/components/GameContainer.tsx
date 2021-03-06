import React, { useState, useEffect } from "react";
import Gameboard from "./Gameboard";
const GameContainer = (): JSX.Element => {

  let winnerEl = document.getElementById("winner")
  let turnEl = document.getElementById("turn")

  const [turn, setTurn] = useState<string>("X");
  const [winner, setWinner] = useState<null | string>(null);
  const [board, setBoard] = useState<Array<String>>(["", "", "", "", "", "", "", "", ""]);

  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // eslint-disable-next-line no-use-before-define
  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as Element).innerHTML === "" && turn === "X") {
        (e.target as Element).innerHTML = turn;
      const newArry = board;
      newArry[e.target.id - 1] = turn;
      setBoard(newArry);
      setTurn("O");
    } else if ((e.target as Element).innerHTML === "" && turn === "O") {
        (e.target as Element).innerHTML = turn;
      const newArry = board;
      newArry[e.target.id - 1] = turn;
      setBoard(newArry);
      setTurn("X");
    }
  };
  useEffect(() => checkWinningCombo(), [handleClick]);

  const resetButton = (e: React.MouseEvent) => {
    const boxes = document.querySelectorAll<HTMLElement>(".gameboard__box");

    boxes.forEach((element) => {
      element.innerHTML = "";
      element.style.pointerEvents = "auto";
    });
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    if (turnEl !== null && winnerEl !== null) {
    winnerEl.style.display = "none";
    turnEl.style.display = "block";
    }
    setTurn("X");
  };

  const checkWinningCombo = () => {
    // eslint-disable-next-line array-callback-return
    return winningCombo.find((combo) => {
      if (
        board[combo[0]] !== "" &&
        board[combo[1]] !== "" &&
        board[combo[2]] !== "" &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]
      ) {
        const boxes = document.querySelectorAll<HTMLElement>(".gameboard__box");
        boxes.forEach((element) => {
          element.style.pointerEvents = "none";
        });
        setWinner(`${board[combo[0]]}`); //// check this when page loads
        displayWinner();
        return turn;
      }
    });
  };

  const displayWinner = () => {
    if (winner !== null && turnEl !== null && winnerEl !== null) {
      winnerEl.style.display = "block";
      turnEl.style.display = "none";
    }
  };
  return (
    <div>
      <Gameboard
        turn={turn}
        handleClick={handleClick}
        resetButton={resetButton}
        winner={winner}
      />
    </div>
  );
};

export default GameContainer;
