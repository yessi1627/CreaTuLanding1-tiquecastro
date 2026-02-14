import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>

      <img src={logo} alt="Yeison Jimenez Store" className={styles.logo} />

      <div className={styles.menu}>
        <a href="#">Ropa</a>
        <a href="#">Accesorios</a>
        <a href="#">Lentes</a>
        <a href="#">Sombreros</a>
      </div>

      <CartWidget />

    </nav>
  );
};


