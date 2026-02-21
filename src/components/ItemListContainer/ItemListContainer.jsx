import { useEffect, useState } from "react";
import { getProducts } from "../../data/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);

  return (
    <section>
      <h2>Catálogo de productos</h2>

      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
