import { useLocation } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import sad from "../../Assets/sad.png";
export default function ErrorPage(props) {
  const {error,errorCode} = props
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
  let mensajeDeError;
  let codigoDeError;
  if (error) {
    mensajeDeError = error;
    codigoDeError = errorCode;
  } else {
    mensajeDeError = parseQuery(location["search"])["mensaje"];
    codigoDeError = parseQuery(location["search"])["codigo"];
  }
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
