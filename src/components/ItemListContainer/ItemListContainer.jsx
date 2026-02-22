import { useEffect, useState } from "react";
import { getProducts } from "../../data/products";
import ItemList from "../ItemList/ItemList";
import Slider from "../Slider/Slider";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);

  return (
    <>
      <Slider />
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
