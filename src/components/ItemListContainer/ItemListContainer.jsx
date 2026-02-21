import { useEffect, useState } from "react";
import { getProducts } from "../../data/products";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <section>
      <h2>Catálogo de productos</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ItemListContainer;
