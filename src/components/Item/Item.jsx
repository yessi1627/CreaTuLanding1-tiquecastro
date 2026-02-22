import styles from "./Item.module.css";

const Item = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button>Ver detalle</button>
    </div>
  );
};

export default Item;
