import React, { useEffect, useState } from "react";

function App({name= "pikachu"}){
  const [pokemonInfo, setPokemonInfo] = useState(null)

  useEffect(
    () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(pokemon => {
        console.log(pokemon)
        setPokemonInfo(pokemon)
      });
     
    },[name]
  )
  return(
    pokemonInfo && (
      <span>
        La pokeId es {pokemonInfo.id} y su nombre es {pokemonInfo.name}
      </span>
    )
  )
}
export default App;
