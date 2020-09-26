import React, { Component } from "react";
import Guess from "./Guess";
import axios from "axios";
import CardBox from "./CardBox";
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
    shuffleCardDeck: [],
    complete: 0,
    showReveal: false,
    cardText: "",
    currentQuestion: "",
    currentAnswer: "",
    currentID: "",
  };
  componentDidMount = async () => {
    await this.getData();
    await this.shuflleCard();
  };
  //get data from mockapi
  getData = async () => {
    const data = await axios.get(
      `https://5f636146363f0000162d8949.mockapi.io/ra/v1/card`
    );
    // console.log(data.data);
    this.setState({ myDataFromMockApi: data.data });
  };
  shuflleCard = () => {
    const arrAfterShufle = this.shuffle();
    console.log(arrAfterShufle);
    this.setState({ shuffleCardDeck: arrAfterShufle });
  };
  shuffle = (arr = this.state.myDataFromMockApi) => {
    for (
      var j, x, i = arr.length;
      i;
      j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  };
  revealAnswer = () => {
    this.setState({ showReveal: !this.state.showReveal });
  };
  generateCard = () => {
    this.shuflleCard();
  };
  guessComplete = () => {};
  render() {
    return (
      <div className="cardsWraper">
        <div className="questionCard">
          <CardBox cardText={this.state.cardText} />
        </div>
        <div className="btns">
          <button onClick={this.generateCard}>New Card</button>
          <button onClick={this.revealAnswer}>Reveal Answer</button>
        </div>
        {this.state.showReveal ? <Guess /> : null}
        <div className="completedQuestion">
          Completed <br></br>
          {this.state.complete}/
          {this.state.myDataFromMockApi
            ? this.state.myDataFromMockApi.length
            : "0"}
        </div>
      </div>
    );
  }
}
