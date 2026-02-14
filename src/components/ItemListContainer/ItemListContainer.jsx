import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Tienda Oficial Yeison Jiménez
        </h1>

        <p className={styles.message}>
          {mensaje}
        </p>
      </div>
    </main>
  );
};

export default ItemListContainer;
