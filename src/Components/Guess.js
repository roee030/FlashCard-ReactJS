import React from "react";

export default function Guess(props) {
  return (
    <div>
      Did you get it right?
      <div className="btns">
        <button
          onClick={() => {
            props.addComplete();
            props.closeComponent();
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            props.closeComponent();
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
