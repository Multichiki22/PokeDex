import { render } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom"
import PokemonCard from '../Components/PokemonCard/PokemonCard';
import { BrowserRouter } from 'react-router-dom';
import pokemones from './TestPokemons';


describe("CardPokemon",()=>{
  pokemones.forEach((pokemon)=>{
    describe(`Pokemon renderiza toda su informacions`,()=>{
      let card;
      beforeEach(()=>{
        card = render(<BrowserRouter><PokemonCard pokemon={pokemon}/></BrowserRouter>)
      })
      test(`Encuentra los titulos ${pokemon["ID"]}`,()=>{
        expect(card.getByText("Ataque:")).toBeInTheDocument(),
        expect(card.getByText("Defensa:")).toBeInTheDocument(),
        expect(card.getByText("Velocidad:")).toBeInTheDocument(),
        expect(card.getByText("Vida:")).toBeInTheDocument()
      })
    
      test(`encuentra el nombre del pokemon:${pokemon["ID"]}`,()=>{
        expect(card.getByText(pokemon["Nombre"])).toBeInTheDocument()
      })
      test(`encuentra el id del pokemon:${pokemon["ID"]}`,()=>{
        expect(card.getByText(pokemon["ID"])).toBeInTheDocument()
      })
      test(`encuentra el ataque del pokemon:${pokemon["ID"]}`,()=>{
        if (pokemon["Ataque"] == "") expect(card.getByTitle("Ataque").textContent).toBe("?")
        else expect(card.getByTitle("Ataque").textContent).toBe(pokemon["Ataque"].toString())
      })
      test(`encuentra la defensa del pokemon:${pokemon["ID"]}`,()=>{
        if (pokemon["Defensa"] == "") expect(card.getByTitle("Defensa").textContent).toBe("?")
        else expect(card.getByTitle("Defensa").textContent).toBe(pokemon["Defensa"].toString())
      })
      test(`encuentra el ataque del pokemon:${pokemon["ID"]}`,()=>{
        if (pokemon["Velocidad"] == "") expect(card.getByTitle("Velocidad").textContent).toBe("?")
        else expect(card.getByTitle("Velocidad").textContent).toBe(pokemon["Velocidad"].toString())
      })
      test(`encuentra el ataque del pokemon:${pokemon["ID"]}`,()=>{
        if (pokemon["Vida"] == "") expect(card.getByTitle("Vida").textContent).toBe("?")
        else expect(card.getByTitle("Vida").textContent).toBe(pokemon["Vida"].toString())
      })
      test(`genera los tipos del pokemon:${pokemon["ID"]}`,()=>{
        pokemon["Tipo"].forEach(tipo => {
          expect(card.getByText(tipo)).toBeInTheDocument()  
        });
      })
    })
  })
})







