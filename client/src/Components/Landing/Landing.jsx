import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css";
import iniciar from "../../Assets/Iniciar.png";
const deployDirection = process.env.REACT_APP_DEPLOY_URL
export default function Landing() {
  return (
    <div className={styles.fondo}>
        <NavLink to={`${deployDirection}/MainPage`}>
          <button className={styles.boton}>
            <div className={styles.test}>
            <img className={styles.iniciar} src={iniciar} alt="" />
            </div>
          </button>
        </NavLink>
    </div>
  );
}
