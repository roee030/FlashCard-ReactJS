import React, { Component } from "react";
import Guess from "./Guess";
export default class Card extends Component {
  state = {
    qaa: [
      {
        q: "What is my first name?",
        a: "Roee",
        id: 1,
      },
      {
        q: "What is my last name?",
        a: "Angel",
        id: 2,
      },
      {
        q: "What is my mom name?",
        a: "Yael",
        id: 3,
      },
    ],
    complete: 0,
  };
  render() {
    return (
      <div className="cardsWraper">
        <div className="questionCard">{this.state.qaa[0].q}</div>
        <div className="btns">
          <button>New Card</button>
          <button>Reveal Answer</button>
        </div>
        <Guess />
        <div className="completedQuestion">
          Completed <br></br>
          {this.state.complete}/{this.state.qaa.length}
        </div>
      </div>
    );
  }
}
