const ItemListContainer = ({ mensaje }) => {
  return (
    <section
      style={{
        padding: "80px",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "600"
      }}
    >
      {mensaje}
    </section>
  );
};

export default ItemListContainer;
