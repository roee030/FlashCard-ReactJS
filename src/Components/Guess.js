import React from "react";

export default function Guess(props) {
  return (
    <div>
      Did you get it right?
      <div className="btns">
        <button onClick={props.addComplete}>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}
