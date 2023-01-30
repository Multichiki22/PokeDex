import PokemonCard from "../PokemonCard/PokemonCard";
import Paginado from "../Paginado/Paginado"
import styles from "./RenderCards.module.css"
import { useState,useEffect } from "react";


export default function RenderCards(props) {
  const { pokemons } = props;
  const [pokemonsRender, setPokemonsRender] = useState([...pokemons])
  useEffect(() => {
    if (pokemons) setPokemonsRender(pokemons.slice(0,12));
    // eslint-disable-next-line
  }, [pokemons]);
  

  return (
    <div>
      <div className={styles.allPokemons}>
      {pokemonsRender.map((pokemon) => (
        <div key={pokemon.ID} className={styles.pokemon}>{<PokemonCard pokemon={pokemon}/>}</div>
        ))}
      </div>
        <div className={styles.paginado}>
        <Paginado pokemons={pokemons} setPokemonsRender={setPokemonsRender}/>
        </div>
    </div>
  );
}
