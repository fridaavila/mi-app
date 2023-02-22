//ESTILOS EN LINEA
//ESTILOS CSS
// import "./Navbar.css"
//MODULOS DE CSS
import styles from "./Navbar.module.css";

export const Navbar = () => {
  let nombre = "frida";

  return (
    <div className={styles.containerNavbar}>
      <h3>Logo</h3>
      <ul className={styles.containerList}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <h3 style={{ backgroundColor: "red", padding: "10px" }}>Carrito</h3>
    </div>
  );
};
