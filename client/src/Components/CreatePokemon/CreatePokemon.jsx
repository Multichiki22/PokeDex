import { useState } from "react";
import { validateAll, validateInput, validateTypes } from "./Validations";
import styles from "./CreatePokemon.module.css";
import axios from "axios";

export default function CreatePokemon() {
  const [nuevoPokemon, setNuevoPokemon] = useState({
    Nombre: "",
    Vida: "",
    Ataque: "",
    Defensa: "",
    Velocidad: "",
    Altura: "",
    Peso: "",
    Tipo: [""],
  });
  const [errores, setErrores] = useState({});
  const [tipos, setTipos] = useState([""]);
  //
  const cambioTipos = (evento, index) => {
    const cambio = evento.target.value;
    const array = [...tipos];
    array[index] = cambio;
    setTipos([...array]);
  };
  //remove de tipo
  const handleRemove = (index) => {
    const array = [...tipos];
    array.splice(index, 1);
    setTipos(array);
  };
  //add tipo
  const handleAdd = () => {
    const nuevoTipo = "";
    const array = [...tipos, nuevoTipo];
    setTipos([...array]);
  };
  //contol estado de los campos
  const handlePokemonInfo = (evento) => {
    const propiedad = evento.target.name;
    const valor = evento.target.value;
    const aux = { ...nuevoPokemon };
    aux[propiedad] = valor;
    setNuevoPokemon(aux);
  };
  //control de errores
  const handleBlur = (evento) => {
    const input = evento.target.name;
    const valor = evento.target.value;
    const resultadoValidacion = validateInput(input, valor);
    const aux = { ...errores, [input]: resultadoValidacion };
    if (resultadoValidacion !== true) {
      setErrores(aux);
    } else {
      delete aux.input;
      setErrores(aux);
    }
  };
  //control de errores de los tipos
  const handleBlurTypes = () => {
    const resultadoValidacion = validateTypes(tipos);
    console.log(resultadoValidacion);
    const aux = { ...errores, Tipos: resultadoValidacion };
    if (resultadoValidacion !== true) {
      setErrores(aux);
    } else {
      delete aux.Tipos;
      setErrores(aux);
    }
  };
  //POST
  const enviarInfo = (evento) => {
    evento.preventDefault();
    const confirmation = validateAll(nuevoPokemon, tipos);
    if (Object.keys(confirmation).length !== 0) {
      let erroes = "";
      for (const propiedad in confirmation) {
        erroes = erroes + confirmation[propiedad] + "\n";
      }
      alert(`Debes corregir los siguientes errores: \n\n${erroes}`);
    } else {
      const pokemon = { ...nuevoPokemon, Tipo: tipos };
      axios
        .post("http://localhost:3000/pokemons", pokemon)
        .then(() => {
          alert("Se envio la info");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error)
          alert(error.response.data.error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={enviarInfo} className={styles.form}>
        <div className={styles.divCaracteristicas}>
          <div className={styles.divNombre}>
            <span className={styles.spanNombre}>Nombre: </span>
            <input
              className={styles.inputNombre}
              pattern="[a-z]+"
              type="text"
              name="Nombre"
              placeholder="Nombre del Pokemon"
              onBlur={handleBlur}
              value={nuevoPokemon.Nombre}
              onChange={handlePokemonInfo}
            />
          </div>
          <div className={styles.divAltura}>
            <span className={styles.spanAltura}>Altura: </span>
            <input
              className={styles.inputAltura}
              name="Altura"
              type="number"
              placeholder="Altura en pies"
              onBlur={handleBlur}
              value={nuevoPokemon.Altura}
              onChange={handlePokemonInfo}
            />
          </div>
          <div className={styles.divPeso}>
            <span className={styles.spanPeso}>Peso: </span>
            <input
              className={styles.inputPeso}
              name="Peso"
              type="number"
              placeholder="Peso en lb"
              onBlur={handleBlur}
              value={nuevoPokemon.Peso}
              onChange={handlePokemonInfo}
            />
          </div>
        </div>
        <div className={styles.erroresCaracteristicas}>
          {errores["Nombre"] !== undefined && (
            <span className={styles.errorNombre}>{errores["Nombre"]}</span>
          )}
        </div>
        
        <div className={styles.divStats}>

          <div className={styles.divAtaque}>
            <span className={styles.spanAtaque}>Ataque: </span>
            <input
            oninput="this.nextElementSibling.value = this.value"
              className={styles.inputAtaque}
              step="1"
              name="Ataque"
              type="range"
              min="0"
              max="200"
              onBlur={handleBlur}
              value={nuevoPokemon.Ataque}
              onChange={handlePokemonInfo}
            />
           <output className={styles.output}>{nuevoPokemon.Ataque}</output>
          </div>
          <div className={styles.divVida}>
            <span className={styles.spanVida}>Vida: </span>
            <input
              className={styles.inputVida}
              name="Vida"
              type="range"
              min=""
              max="200"
              onBlur={handleBlur}
              value={nuevoPokemon.Vida}
              onChange={handlePokemonInfo}
            />
          <output className={styles.output}>{nuevoPokemon.Vida}</output>
          </div>
          <div className={styles.divDefensa}>
            <span className={styles.spanDefensa}>Defensa: </span>
            <input
              className={styles.inputDefensa}
              name="Defensa"
              type="range"
              min="0"
              max="200"
              onBlur={handleBlur}
              value={nuevoPokemon.Defensa}
              onChange={handlePokemonInfo}
            />
            <output className={styles.output}>{nuevoPokemon.Defensa}</output>
          </div>
          <div className={styles.divVelocidad}>
            <span className={styles.spanVelocidad}>Velocidad: </span>
            <input
              className={styles.inputVelocidad}
              name="Velocidad"
              type="range"
              min="0"
              max="200"
              onBlur={handleBlur}
              value={nuevoPokemon.Velocidad}
              onChange={handlePokemonInfo}
            />
            <output className={styles.output}>{nuevoPokemon.Velocidad}</output>
          </div>
        </div>
        {errores["Ataque"] !== undefined && <p>{errores["Ataque"]}</p>}
        <div className={styles.containerTipos}>
          <div className={styles.divTipos}>
            
          {tipos.map((tipo, index) => {
            return (
              <div key={index} className={styles.divTipo}>
                <input
                className={styles.inputTipo}
                  type="text"
                  name="Tipo"
                  placeholder="Tipo"
                  value={tipo}
                  onBlur={handleBlurTypes}
                  onChange={(evento) => cambioTipos(evento, index)}
                />
                <button type="button" className={styles.botonTipo} onClick={() => handleRemove(index) }>
                  X
                </button>
              </div>
            );
          })}
          </div>

          {tipos.length < 4 && (
            <button type="button" onClick={handleAdd} className={styles.agregarTipo}>
              Agregar tipo
            </button>
          )}
          
        </div>
        {errores["Tipos"] !== undefined && <p>{errores["Tipos"]}</p>}
        <button className={styles.crearPokemon}>Crear pokemon</button>
      </form>
    </div>
  );
}
