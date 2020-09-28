import React from "react";

export default function Welcome(props) {
  return (
    <div className="overlay">
      <div className="newCardForm">
        <p>
          Welcome to Flash card App<br></br>
          Rise to your challenge. Flashcards for serious learners.
        </p>
        <button onClick={props.handleStartGame}>Start</button>
      </div>
    </div>
  );
}
