import "./App.css";
import React from "react";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hair={"Black"}
      />
      <ClassComponent
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hair={"Brown"}
      />
      <ClassComponent
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={50}
        hair={"Brown"}
      />
      <ClassComponent
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hair={"Brown"}
      />
    </div>
  );
}

export default App;
