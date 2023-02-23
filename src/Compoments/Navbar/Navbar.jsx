//ESTILOS EN LINEA
//ESTILOS CSS
// import "./Navbar.css"
//MODULOS DE CSS
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {

  return (
    <div className={styles.containerNavbar}>
      <img src="https://res.cloudinary.com/dkyr4y8ho/image/upload/v1677126357/IMG_6115_lncrab.jpg" 
      alt="" 
      style={{width: "20%", objectFit: "cover"}} />
      <ul className={styles.containerList}>
        <li><a href="">Bestsellers</a></li>
        <li><a href="">Lipsticks</a></li>
        <li><a href="">Foundation</a></li>
      </ul>
      <CartWidget />
    </div>
  );
};
