import React, { Component } from "react";
import Card from "./Card";
import Welcome from "./Welcome";
export default class Home extends Component {
  state = {
    start: false,
  };
  startGame = () => {
    this.setState({
      start: true,
    });
  };
  render() {
    return (
      <div style={wraper}>
        {this.state.start ? (
          <Card />
        ) : (
          <Welcome handleStartGame={this.startGame} />
        )}
      </div>
    );
  }
}

const wraper = {
  display: "flex",
  height: "60vh",
  justifyContent: "center",
};
