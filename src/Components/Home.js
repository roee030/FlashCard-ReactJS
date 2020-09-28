import React, { Component } from "react";
import Card from "./Card";
export default class Home extends Component {
  render() {
    return (
      <div style={wraper}>
        <Card></Card>
      </div>
    );
  }
}

const wraper = {
  display: "flex",
  height: "60vh",
  justifyContent: "center",
};
