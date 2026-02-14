import MainLayout from "./components/layouts/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="app-container">
      <MainLayout>
        <ItemListContainer mensaje="Bienvenidos a la tienda oficial de Yeison Jiménez" />
      </MainLayout>
    </div>
  );
}

export default App;
