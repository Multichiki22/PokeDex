import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import TipoTag from "../TipoTag/TipoTag";
import fotoDefault from "../../Assets/Logo2.png";
import styles from "./Detail.module.css";
export default function Detail() {
  const navigate= useNavigate()
  const { id } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    axios
      .get("/pokemons/" + id)
      .then((response) => {
        return setDetail(response.data);
      })
      .catch((error) => {
        const mensaje = error["response"]["data"]["error"];
        const codigo = error["response"]["status"];
       navigate(`/Error?mensaje=${mensaje}&codigo=${codigo}`);
      });
      // eslint-disable-next-line
  }, [id]);

  if (detail === undefined) return <Loading />;
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
  const {
    Nombre,
    Defensa,
    Velocidad,
    ID,
    Tipo,
    Ataque,
    Peso,
    Altura,
    Foto,
    Vida,
  } = detail;
  return (
    <div className={styles.container}>
      <div
        className={styles.carta}
        style={{
          background: `radial-gradient(circle at 50% 00%, ${
            Color[Tipo[0]] ? Color[Tipo[0]] : "rgb(192, 198, 255)"
          } 50%, #ffffff 50%)`,
        }}
      >
        <span className={styles.nombre}>{Nombre}</span>

        <div className={styles.divImagen}>
          <img
            className={styles.imagen}
            src={Foto ? Foto : fotoDefault}
            alt="foto pokemon"
          />
        </div>
        <span className={styles.stats}>Estadisticas: </span>
        <div className={styles.divStats}>
          <div className={styles.divEstadisticas}>
            <span className={styles.stat}> {Ataque ? Ataque: "?" }</span>
            <span className={styles.spanStat}> Ataque:</span>
          </div>
          <div className={styles.divEstadisticas}>
            <span className={styles.stat}>{Defensa ? Defensa: "?" }</span>
            <span className={styles.spanStat}> Defensa:</span>
          </div>
          <div className={styles.divEstadisticas}>
            <span className={styles.stat}>{Velocidad ? Velocidad: "?" }</span>
            <span className={styles.spanStat}> Velocidad:</span>
          </div>
          <div className={styles.divEstadisticas}>
            <span className={styles.stat}>{Vida ? Vida : "?" }</span>
            <span className={styles.spanStat}> Vida:</span>
          </div>
        </div>
        <span className={styles.caracteristicas}>Caracteristicas:</span>
        <div className={styles.divCaracteristicas}>
          <div className={styles.divCaracteristica}>
            <span className={styles.spanCaracteristica}>Peso:</span>
            <span className={styles.caracteristica}>{Peso?Peso:"?"} Lb</span>
          </div>
          <div className={styles.divCaracteristica}>
            <span className={styles.spanCaracteristica}>Altura:</span>
            <span className={styles.caracteristica}>{Altura?Altura:"?"} Pies</span>
          </div>
        </div>
        <div className={styles.divTipo}>
          {Tipo.map((tipo) => (
            <TipoTag tipo={tipo} key={tipo + ID} />
          ))}
        </div>
      </div>
    </div>
  );
}
