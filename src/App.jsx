import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        mensaje="Bienvenidos a la tienda oficial de Yeison Jiménez"
      />
    </>
  );
}

export default App;
