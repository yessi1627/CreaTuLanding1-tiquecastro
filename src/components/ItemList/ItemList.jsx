import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px"
    }}>
      {products.map(prod => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
