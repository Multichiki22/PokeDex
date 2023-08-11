import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { getPokemons } from "./Redux/actions/actions";
import { useEffect } from "react";
import {useDispatch } from "react-redux"
import Landing from "./Components/Landing/Landing.jsx";
import MainPage from "./Components/MainPage/MainPage";
import Detail from "./Components/Detail/Detail";
import CreatePokemon from "./Components/CreatePokemon/CreatePokemon";
import NavBAr from "./Components/NavBar/NavBar";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Loading from "./Components/Loading/Loading";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL
axios.defaults.baseURL = baseURL;
const deployDirection = process.env.REACT_APP_DEPLOY_URL
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPokemons(dispatch))
    // eslint-disable-next-line
   },[])

  return (
    <div className="App">
      <div className={useLocation().pathname === "/" ? "noRender" : "Render"}>
        <NavBAr/>
      </div>
      <Routes>
        <Route Exact path={`${deployDirection}/`} element={<Landing/>} />
        <Route Exact path={`${deployDirection}/MainPage/`} element={<MainPage/>}/>
        <Route Exact path={`${deployDirection}/Detail/:id`} element={<Detail/>}/>
        <Route Exact path={`${deployDirection}/CreatePokemon`} element={<CreatePokemon/>}/>
        <Route Exact path={`${deployDirection}/Error`} element={<ErrorPage/>}/>
        <Route Exact path={`${deployDirection}/Loading`} element={<Loading/>}/>
        <Route Exact path={`${deployDirection}/*`}element={<ErrorPage error="Pagina no encontrada" errorCode="404"/>}/>
      </Routes>
    </div>
  
  );
}

export default App;
