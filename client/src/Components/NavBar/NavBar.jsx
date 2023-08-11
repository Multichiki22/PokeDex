import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../Assets/Pokeball.png";
import styles from "./NavBar.module.css";
const deployDirection = process.env.REACT_APP_DEPLOY_URL
export default function NavBAr() {
  const [busqueda, setBusqueda] = useState("");

  const navigate = useNavigate();
  const handleChange = (evento) => {
    setBusqueda(evento.target.value);
  };

  const buscar = () => {
    if (busqueda===""){
      alert("Introduzca el nombre del pokemon")
    }else{
      navigate("/Loading")
      axios
        .get("/pokemons?name=" + busqueda.toLowerCase())
        .then((response) => {
          navigate("/Detail/" + response.data.ID);
        })
        .catch((error) => {
          const mensaje = error.response.data.error
          const codigo =  error.response.status
          navigate(`/Error?mensaje=${mensaje}&codigo=${codigo}`);
        });
    }
  };
  const crearPokemon = ()=>{
    navigate("/CreatePokemon")
  }
  return (
    <div className={styles.container}>
      <div className={styles.divLogo}>
        <Link to={`${deployDirection}/MainPage/`}>
          <img className={styles.logo} src={Logo} alt="" />
        </Link>
      </div>
      <div className={styles.divSpan}>
     
        <button className={styles.botonCrear} onClick={crearPokemon}>
          <span className={styles.spanCrear}>Crea tu Pokemon</span>
        </button>
     
        
      </div>
      <div className={styles.searchBar}>
        <input
        className={styles.input}
          type="text"
          onChange={handleChange}
          placeholder="Busca tu pokemon"
          value={busqueda}
          onKeyDown={(evento) => {
            if (evento.key === "Enter") {
              buscar();
            }
          }}
        ></input>
        <button className={styles.boton} onClick={buscar}>Buscar</button>
      </div>
    </div>
  );
}
