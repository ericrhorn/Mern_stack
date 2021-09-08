import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        firstName={"Jane"} 
        lastName={"Doe"}
        age={"45"}
        hair={"Black"}/>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <Person 
        firstName={"John"} 
        lastName={"Smith"}
        age={"88"}
        hair={"Brown"}/>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <Person 
        firstName={"Millard"} 
        lastName={"Fillmore"}
        age={"50"}
        hair={"Brown"}/>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <Person 
        firstName={"Maria"} 
        lastName={"Smith"}
        age={"62"}
        hair={"Brown"}/>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </div>
  );
}

export default App;
