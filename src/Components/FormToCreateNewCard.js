import React from "react";

export default function FormToCreateNewCard(props) {
  return (
    <div className="overlay">
      <div className="newCardForm">
        <div className="newCardFormTextArea">
          <p>Write your next card question</p>
          <textarea rows="10" cols="30"></textarea>
          <p>And the answer as well</p>
          <textarea rows="10" cols="30"></textarea>
          <div>
            <button>Confirm</button>
            <button onClick={props.colapce}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
