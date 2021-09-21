import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import WordOrNum from "./components/WordOrNum";
import Color from "./components/Color";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <WordOrNum path="/:wordNum" />
        <Color path="/:word/:textColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
