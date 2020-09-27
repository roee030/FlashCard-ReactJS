import React, { Component } from "react";

export default class FormToCreateNewCard extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="newCardForm">
          <div className="newCardFormTextArea">
            <p>Write your next card question</p>
            <textarea rows="10" cols="30"></textarea>
            <p>And the answer as well</p>
            <textarea rows="10" cols="30"></textarea>
            <div>
              <button onClick={this.props.addCardToDeck}>Confirm</button>
              <button onClick={this.props.colapce}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
