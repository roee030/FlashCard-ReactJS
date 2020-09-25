import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
export default function Header() {
  return (
    <div className="header" style={styleHeader}>
      <Link to="/" style={btn}>
        Home
      </Link>
      <Link to="/manage" style={btn}>
        Manage
      </Link>
    </div>
  );
}
const styleHeader = {
  fontSize: "5rem",
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-around",
};
const btn = {
  color: "white",
  textDecoration: "none",
};
