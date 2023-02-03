import axios from "axios";

import { GET_POKEMONS } from "./types";

const getPokemons = () => {
  return async function (dispatch) {
     axios.get("/pokemons")
      .then((response) => {
        return dispatch({
          type: GET_POKEMONS,
          payload: response.data,
        });
      })
      .catch((error) => {
      const nuevoError = [error]
      return dispatch({
          type: GET_POKEMONS,
          payload: nuevoError,
        })
      });
  };
};

export { getPokemons };
