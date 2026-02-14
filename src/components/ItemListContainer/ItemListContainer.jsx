import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Tienda Oficial Yeison Jiménez
        </h1>

        <p className={styles.message}>{mensaje}</p>
      </div>
    </section>
  );
};

export default ItemListContainer;
