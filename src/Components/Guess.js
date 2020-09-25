import React, { Component } from "react";

export default class Guess extends Component {
  render() {
    return (
      <div>
        Did you get it right?
        <div className="btns">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    );
  }
}
