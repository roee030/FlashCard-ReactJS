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
    this.setState({
      cardText: this.state.shuffleCardDeck[this.state.currentID - 1].answer,
    });
  };
  generateCard = () => {
    this.setState((prevState) => ({
      showReveal: false,
    }));
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
  startNewGame = async () => {
    await this.getData();
    await this.shuflleCard();
    this.setState((prevState) => ({
      currentID: 0,
    }));
    await this.generateCard();
  };
  guessComplete = () => {
    try {
      this.state.shuffleCardDeck[this.state.currentID - 1].complete = true;
    } catch (e) {
      return;
    }
  };
  revealAnswer = () => {
    this.setState((prevState) => ({
      cardText: this.state.shuffleCardDeck[prevState.currentID - 1].answer,
      showReveal: true,
    }));
  };
  checkComplete = () => {
    try {
      const complete = this.state.shuffleCardDeck.filter(
        (e) => e.complete == true
      );
      return complete.length;
    } catch (e) {
      console.log("error inside checkComplete function");
    }
  };
  closeComponentOfReveal = () => {
    this.setState({
      showReveal: false,
    });
  };
  render() {
    console.log(
      this.state.currentID,
      this.state.shuffleCardDeck.length,
      this.state.currentID
    );
    return (
      <div className="cardsWraper">
        <div className="questionCard">
          <CardBox cardText={this.state.cardText} />
        </div>

        {this.state.shuffleCardDeck.length >= this.state.currentID ? (
          <div className="btns">
            <button onClick={this.generateCard}>New Card</button>
            <button onClick={this.revealAnswer}>Reveal Answer</button>
          </div>
        ) : (
          <button onClick={this.startNewGame}>Start Again</button>
        )}

        {this.state.showReveal ? (
          <Guess
            addComplete={this.guessComplete}
            closeComponent={this.closeComponentOfReveal}
          />
        ) : null}
        <div className="completedQuestion">
          Completed <br></br>
          {this.checkComplete()}/
          {this.state.myDataFromMockApi
            ? this.state.myDataFromMockApi.length
            : "0"}
        </div>
      </div>
    );
  }
}
