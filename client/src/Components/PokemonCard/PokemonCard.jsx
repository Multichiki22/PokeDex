import TipoTag from "../TipoTag/TipoTag";
import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";
import fotoDefault from "../../Assets/Logo2.png";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const { Nombre, ID, Tipo, Ataque, Foto, Defensa, Vida, Velocidad } = pokemon;
  const Color = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  return (
    <div
      className={styles.container}
      style={{
        background: `radial-gradient(circle at 50% 00%, ${
          Color[Tipo[0]] ? Color[Tipo[0]] : "rgb(192, 198, 255)"
        } 50%, #ffffff 50%)`,
      }}
      key={ID}
    ><div className={styles.titulo}>
      
      <span className={styles.id}>{ID}</span>
      <span className={styles.spanVida}>
        <span className={styles.stats}>Vida: </span>
        <span title="Vida" className={styles.vida}>{Vida ? Vida : "?"}</span>
      </span>
    </div>
      <div className={styles.test}>
        <div className={styles.divFoto}>
          <Link to={"/Detail/" + ID}>
            <img
              className={styles.foto}
              src={Foto ? Foto : fotoDefault}
              alt="foto pokemon"
            />
          </Link>
        </div>
      </div>
      <span className={styles.nombre}>
        {Nombre ? Nombre[0].toUpperCase()+ Nombre.slice(1) : "No resgistrado"}
      </span>
      <div className={styles.divTipos}>
        {Tipo.map((tipo) => (
          <div className={styles.divTipo} key={tipo + ID}>
            <TipoTag tipo={tipo} />
          </div>
        ))}
      </div>
      <div className={styles.stats}>
        <div className={styles.divAtaque}>
          <span title="Ataque" className={styles.ataque}>{Ataque ?Ataque:"?"}</span>
          <span className={styles.spanStat}>Ataque:</span>
        </div>
        <div className={styles.divDefensa}>
          <span title="Defensa" className={styles.defensa}>{Defensa ? Defensa : "?"}</span>
          <span className={styles.spanStat}>Defensa:</span>
        </div>
        <div className={styles.divVelocidad}>
          <span title="Velocidad" className={styles.velocidad}>
            {Velocidad ? Velocidad : "?"}
          </span>
          <span className={styles.spanStat}>Velocidad:</span>
        </div>
      </div>
    </div>
  );
}
