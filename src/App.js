import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Manage from "./Components/Manage";
import Header from "./Components/Header";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/manage" component={Manage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
