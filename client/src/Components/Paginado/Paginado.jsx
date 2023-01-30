import { useEffect, useState } from "react"
import styles from "./Paginado.module.css"

export default function Paginado(props){
    const {pokemons, setPokemonsRender} = props
    const [pag,setPag] =useState(0)
    useEffect(()=>{
        pokemonsRender()
        // eslint-disable-next-line
    },[pag])
    useEffect(()=>{
        setPag(0)
    },[pokemons])
    const pokemonsRender = () =>{
        const indice = pag*12
        setPokemonsRender(pokemons.slice(indice,indice+12))
    }
    const nextPage= ()=>{
        setPag(pag+1)
    }
    const prevPage = ()=>{
        setPag(pag-1)   
    }
    const maxpage =  Math.ceil(pokemons.length/12)
    return (
        <div className={styles.container}>
        {pag>0 && <button onClick={prevPage} className={styles.boton}>← Anterior</button>}
        <span className={styles.span}>Pagina: {pag+1} de {maxpage}</span>
        {pag<maxpage-1 && <button onClick={nextPage} className={styles.boton}>Siguiente →</button>}
        
        </div>
    )
}

