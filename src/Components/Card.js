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
    currentID: 0,
  };
  componentDidMount = async () => {
    await this.getData();
    await this.shuflleCard();
    await this.generateCard();
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
    if (this.state.shuffleCardDeck[this.state.currentID])
      this.setState((prevState) => ({
        currentID: prevState.currentID + 1,
        cardText: this.state.shuffleCardDeck[this.state.currentID].question,
      }));
    else {
      this.setState((prevState) => ({
        currentID: prevState.currentID + 1,
      }));
    }
    // if (this.state.shuffleCardDeck[this.state.currentID] == undefined) return;
  };
  guessComplete = () => {};
  render() {
    console.log(this.state.shuffleCardDeck.length, this.state.currentID);
    return (
      <div className="cardsWraper">
        <div className="questionCard">
          <CardBox cardText={this.state.cardText} />
        </div>

        {this.state.shuffleCardDeck.length > this.state.currentID - 1 ? (
          <div className="btns">
            <button onClick={this.generateCard}>New Card</button>
            <button onClick={this.revealAnswer}>Reveal Answer</button>
          </div>
        ) : (
          <button>Start Again</button>
        )}

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
