import { useLocation } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import sad from "../../Assets/sad.png";
export default function ErrorPage() {
  const location = useLocation();
  //esta funcion la copieliteral de internet XD
  const parseQuery = (queryString) => {
    var query = {};
    var pairs = (
      queryString[0] === "?" ? queryString.substr(1) : queryString
    ).split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  };
  const mensajeDeError = parseQuery(location["search"])["mensaje"];
  const codigoDeError = parseQuery(location["search"])["codigo"];

  console.log(mensajeDeError, codigoDeError);

  return (
    <div className={styles.container}>
      <div className={styles.fondo}>
        <h1 className={styles.codigo}>Error: {codigoDeError}</h1>
        <h3 className={styles.mensaje}>{mensajeDeError}</h3>
        <img className={styles.imagen} src={sad} alt="Imagen" />
      </div>
    </div>
  );
}
