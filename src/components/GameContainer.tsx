import React, { useState, useEffect } from "react";
import Gameboard from "./Gameboard";
const GameContainer = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

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
  const handleClick = (e) => {
    if (e.target.innerHTML === "" && turn === "X") {
      e.target.innerHTML = turn;
      const newArry = board;
      newArry[e.target.id - 1] = turn;
      setBoard(newArry);
      setTurn("O");
    } else if (e.target.innerHTML === "" && turn === "O") {
      e.target.innerHTML = turn;
      const newArry = board;
      newArry[e.target.id - 1] = turn;
      setBoard(newArry);
      setTurn("X");
    }
  };
  useEffect(() => checkWinningCombo(), [handleClick]);

  const resetButton = (e) => {
    const boxes = document.querySelectorAll(".gameboard__box");

    boxes.forEach((element) => {
      element.innerHTML = "";
      element.style.pointerEvents = "auto";
    });
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    document.getElementById("winner").style.display = "none";
    document.getElementById("turn").style.display = "block";
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
        const boxes = document.querySelectorAll(".gameboard__box");
        boxes.forEach((element) => {
          element.style.pointerEvents = "none";
        });
        setWinner(board[combo[0]]);
        displayWinner();
        return turn;
      }
    });
  };

  const displayWinner = () => {
    if (winner !== null) {
      document.getElementById("winner").style.display = "block";
      document.getElementById("turn").style.display = "none";
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
