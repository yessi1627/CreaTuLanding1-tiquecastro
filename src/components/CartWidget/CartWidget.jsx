import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cartContainer}>
      <span className={styles.icon}>🛒</span>
      <span className={styles.counter}>0</span>
    </div>
  );
};

export default CartWidget;
