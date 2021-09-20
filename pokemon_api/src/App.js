import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {pokemon.map((pokemon, index) => {
        return <div key={index}>{pokemon.name}</div>;
      })}
    </div>
  );
}

export default App;
