import React, { Component } from "react";
import Guess from "./Guess";
import axios from "axios";
export default class Card extends Component {
  state = {
    myDataFromMockApi: null,
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
    showReveal: false,
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const data = await axios.get(
      `https://5f636146363f0000162d8949.mockapi.io/ra/v1/card`
    );
    // console.log(data.data);
    this.setState({ myDataFromMockApi: [data.data] }, () =>
      console.log(this.state.myDataFromMockApi)
    );
  };
  revealAnswer = () => {
    this.setState({ showReveal: !this.state.showReveal });
  };
  generateCard = () => {
    console.log("asdf");
  };
  render() {
    return (
      <div className="cardsWraper">
        <div className="questionCard">{this.state.qaa[0].q}</div>
        <div className="btns">
          <button onClick={this.generateCard}>New Card</button>
          <button onClick={this.revealAnswer}>Reveal Answer</button>
        </div>
        {this.state.showReveal ? <Guess /> : null}
        <div className="completedQuestion">
          Completed <br></br>
          {this.state.complete}/
          {this.state.myDataFromMockApi
            ? this.state.myDataFromMockApi[0].length
            : "0"}
        </div>
      </div>
    );
  }
}
