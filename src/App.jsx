import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="app-container">
      <NavBar />

      <main style={{ flex: 1 }}>
        <ItemListContainer
          mensaje="Bienvenidos a la tienda oficial de Yeison Jiménez"
        />
      </main>
    </div>
  );
}

export default App;
