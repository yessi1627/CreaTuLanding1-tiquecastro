import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png"; 

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo Yeison Jiménez" className={styles.logo} />

      <div className={styles.menu}>
        <a href="#">Accesorios</a>
        <a href="#">Sombreros</a>
        <a href="#">Ropa</a>
        <a href="#">Contacto</a>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
