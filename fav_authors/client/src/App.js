// import './App.css';
import React from "react";
import { Router } from "@reach/router";
import Main from './views/Main';
import Show from './views/Show';
import Update from './views/Update';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Show path="/"/>
        <Main path="/new"/>
        <ErrorPage path="/error"/>
        <Update path="/edit/:_id"/>
      </Router>
    </div>
  );
}

export default App;
