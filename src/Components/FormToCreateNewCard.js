import React, { Component } from "react";
import CheckEmptyObject from "./CheckEmptyObject";
export default class FormToCreateNewCard extends Component {
  state = {
    q: "",
    a: "",
    handleErr: false,
  };
  handleChangeAnswer = (e) => {
    this.setState({
      a: e.target.value,
    });
  };
  handleChangeQuestion = (e) => {
    this.setState({
      q: e.target.value,
    });
  };
  handleConfirm = () => {
    this.state.a.length == 0 || this.state.q.length == 0
      ? this.setState({ handleErr: true })
      : this.props.addCardToDeck(this.state.q, this.state.a);
  };
  render() {
    return (
      <div className="overlay">
        <div className="newCardForm">
          <div className="newCardFormTextArea">
            <p>Write your question</p>
            <textarea
              onChange={this.handleChangeQuestion}
              rows="10"
              cols="30"
            ></textarea>
            <p>And the answer as well</p>
            <textarea
              onChange={this.handleChangeAnswer}
              rows="10"
              cols="30"
            ></textarea>
            {this.state.handleErr ? <CheckEmptyObject /> : ""}
            <div>
              <button onClick={this.handleConfirm}>Confirm</button>
              <button onClick={this.props.colapce}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//onClick
