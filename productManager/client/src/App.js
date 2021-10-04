import React from 'react';
import { Router } from "@reach/router";
import Main from './views/Main';
import Detail from './views/Details';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:_id"/>
      </Router>
    </div>
  );
}

export default App;
