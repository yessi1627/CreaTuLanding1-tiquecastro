import styles from "./ItemList.module.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map(prod => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
