import RenderCards from "../RenderCards/RenderCards";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import FilterBar from "../FilterBar/FilterBar";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const pokemons = useSelector((state) => state.pokemons);
  const [pokemonesOrdenados, setpokemonesOrdenados] = useState([...pokemons]);

  useEffect(() => {
    if (pokemons) setpokemonesOrdenados(pokemons);
    // eslint-disable-next-line
  }, [pokemons]);
  if (pokemonesOrdenados.length > 0 && pokemonesOrdenados["0"]["response"]) {
    const mensaje = pokemons["0"]["response"]["statusText"];
    const codigo = pokemons["0"]["response"]["status"];
    navigate(`/Error?mensaje=${mensaje}&codigo=${codigo}`);
  }

  if (pokemons.length === 0) return <Loading />;
  return (
    <>
      <FilterBar
        pokemons={pokemons}
        setpokemonesOrdenados={setpokemonesOrdenados}
        pokemonesOrdenados={pokemonesOrdenados}
      />
      <RenderCards pokemons={pokemonesOrdenados} />
    </>
  );
}
