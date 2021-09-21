import React from "react";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/"/>
        <Dashboard path="/route-two" />
      </Router>
    </div>
  );
}

export default App;
