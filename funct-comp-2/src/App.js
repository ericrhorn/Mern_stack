import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        firstName={"Jane"} 
        lastName={"Doe"}
        currentAge={45}
        hair={"Black"}/>
        
      <Person 
        firstName={"John"} 
        lastName={"Smith"}
        currentAge={88}
        hair={"Brown"}/>
        
      <Person 
        firstName={"Millard"} 
        lastName={"Fillmore"}
        currentAge={50}
        hair={"Brown"}/>
        
      <Person 
        firstName={"Maria"} 
        lastName={"Smith"}
        currentAge={62}
        hair={"Brown"}/>
        
    </div>
  );
}

export default App;
