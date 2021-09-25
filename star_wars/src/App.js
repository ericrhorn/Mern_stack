import React from "react";
import {Router} from "@reach/router";
import People from "./components/People";
import Form from "./components/Form";
import Planets from "./components/Planets";
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Form/>
      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
