import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <ItemListContainer mensaje="Bienvenidos a la tienda oficial de Yeison Jiménez" />
            }
          />

          {/* CATEGORIAS */}
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />

          {/* 404 */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
