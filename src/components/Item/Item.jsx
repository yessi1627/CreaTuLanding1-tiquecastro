import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #444",
      padding: "20px",
      borderRadius: "8px"
    }}>
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
