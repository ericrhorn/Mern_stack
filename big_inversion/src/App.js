import './App.css';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent
        firstName={"Jane"} 
        lastName={"Doe"}
        age={"45"}
        hair={"Black"}/>
        {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}
      <ClassComponent 
        firstName={"John"} 
        lastName={"Smith"}
        age={"88"}
        hair={"Brown"}/>
        {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}
      <ClassComponent 
        firstName={"Millard"} 
        lastName={"Fillmore"}
        age={"50"}
        hair={"Brown"}/>
        {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}
      <ClassComponent
        firstName={"Maria"} 
        lastName={"Smith"}
        age={"62"}
        hair={"Brown"}/>
        {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}
    </div>
  );
}

export default App;
