import foto from "../../Assets/superBall.png";
import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={styles.container}>
      <img  className={styles.foto} src={foto} alt="" />
      <h1 className={styles.texto}>Cargando...</h1>
    </div>
  );
}
