import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Subcontent from "./components/Subcontent";
import Adverts from "./components/Adverts";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main>
          <Subcontent/>
          <Subcontent/>
          <Subcontent/>
          <Adverts/>
      </Main>
    </div>
  );
}

export default App;
