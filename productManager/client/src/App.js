import React from 'react';
import { Router } from "@reach/router";
import Main from './views/Main';
import Detail from './views/Details';
import './App.css';
import Update from './views/Update';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:_id"/>
        <Update path="/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
