import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/boxForm';
import BoxDis from './components/boxDis';

function App() {

const [colorArr, setColorArr] = useState([]);

// const createColor = (newColor) => {
//   setCurrentColor(newColor);


  return (
    <div className="App">
      <BoxForm colorArr = {colorArr} setColorArr = {setColorArr}/>
      <BoxDis colorArr = {colorArr}/>
    </div>
  );
}

export default App;
