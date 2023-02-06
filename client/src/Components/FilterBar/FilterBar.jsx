import { useEffect,useState } from "react";
import styles from "./FilterBar.module.css"
export default function FilterBar(props) {
  const { pokemons,setpokemonesOrdenados,pokemonesOrdenados } = props;
  const [Orden, setOrden] = useState("Ascendente");
  const [OrdenPor, setOrdenPor] = useState("Ordenar por");
  const [Mostrar, setMostrar] = useState("Mostar todos");
  useEffect(() => {
    ordenar();
    // eslint-disable-next-line
  }, [Orden, OrdenPor, Mostrar]);

  const filtrar = (evento) => {
    const filtro = evento.target.value;
    switch (filtro) {
      case "Mostar Pokemons existentes":
        setpokemonesOrdenados(
          pokemons.filter((pokemon) => pokemon.ID[0] !== "C")
        );
        setMostrar(filtro);
        break;
      case "Mostrar Pokemons creados":
        setpokemonesOrdenados(
          pokemons.filter((pokemon) => pokemon.ID[0] === "C")
        );
        setMostrar(filtro);
        break;
      default:
        setMostrar(filtro);
        setpokemonesOrdenados(pokemons);
        break;
    }
  };
  const ordenar = () => {
    if (Orden === "Ascendente") {
      const ordenAscendente = pokemonesOrdenados.sort(function (a, b) {
        if (a[OrdenPor] > b[OrdenPor]) return 1;
        if (a[OrdenPor] < b[OrdenPor]) return -1;
        return 0;
      });
      setpokemonesOrdenados([...ordenAscendente]);
    } else if (Orden === "Descendente") {
      const ordenDescendente = pokemonesOrdenados.sort(function (a, b) {
        if (a[OrdenPor] > b[OrdenPor]) return -1;
        if (a[OrdenPor] < b[OrdenPor]) return 1;
        return 0;
      });
      setpokemonesOrdenados([...ordenDescendente]);
    }
  };
  const AscDes = (evento) => setOrden(evento.target.value);
  const NomAta = (evento) => setOrdenPor(evento.target.value);

  return (
    <div className={styles.container}>
      <select className={styles.selectMostrar} value={Mostrar} onChange={filtrar}>
        <option>Mostrar todos</option>
        <option>Mostar Pokemons existentes</option>
        <option>Mostrar Pokemons creados</option>
      </select>
    
      <select className={styles.selectOrdenarPor} value={OrdenPor} onChange={NomAta}>
        <option disabled selected>
          Ordenar por
        </option>
        <option value="Nombre">Nombre</option>
        <option value="Ataque">Ataque</option>
      </select>
 
      <select className={styles.selectOrden} value={Orden} onChange={AscDes}>
        <option disabled selected>
          Orden
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </div>
  );
}
