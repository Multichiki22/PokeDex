import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css";
import iniciar from "../../Assets/Iniciar.png"
export default function Landing() {
  return (
    <div className={styles.fondo}>
        <NavLink to="/MainPage">
          <button className={styles.boton}>
            <div className={styles.test}>
            <img className={styles.iniciar} src={iniciar} alt="" />
            </div>
          </button>
        </NavLink>
    </div>
  );
}
