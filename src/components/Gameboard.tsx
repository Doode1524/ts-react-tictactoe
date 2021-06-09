
import React, {MouseEvent} from "react";
import "../CSS/Gameboard.css";

const Gameboard = () => {
  const handleClick = (e: MouseEvent) => {

  }
  const resetButton = (e: MouseEvent) => {
      
  }

  return (
    <div className="gameboard">
      {/* <h1 id="turn">Player Turn: {turn}</h1>
      <h1 id="winner" style={{ display: "none" }}>Winner: {winner}!!!</h1> */}

      <div className="gameboard__container">
        <div className="gameboard__row">
          <div className="gameboard__box" id="1" onClick={(e) => handleClick(e)}></div>
          <div className="gameboard__box" id="2" onClick={(e) => handleClick(e)}></div>
          <div className="gameboard__box" id="3" onClick={(e) => handleClick(e)}></div>
        </div>

        <div className="gameboard__row">
          <div className="gameboard__box" id="4" onClick={(e) => handleClick(e)}></div>
          <div className="gameboard__box" id="5" onClick={(e) => handleClick(e)}></div>
          <div className="gameboard__box" id="6" onClick={(e) => handleClick(e)}></div>
        </div>

        <div className="gameboard__row">
          <div className="gameboard__box" id="7" onClick={(e) => handleClick(e)}></div>
          <div className="gameboard__box" id="8" onClick={(e) => handleClick(e)}></div>
          <div className="gameboard__box" id="9" onClick={(e) => handleClick(e)}></div>
        </div>
      </div>
      <button type="button" onClick={(e) => resetButton(e)} >Reset</button>

    </div>
  );
};

export default Gameboard;
