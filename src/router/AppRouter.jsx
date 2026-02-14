import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <ItemListContainer mensaje="Bienvenidos a la tienda oficial de Yeison Jiménez" />
            }
          />

          {/* Categorías */}
          <Route
            path="/categoria/:categoryId"
            element={<ItemListContainer />}
          />

          {/* Detalle producto (lo crearemos luego) */}
          <Route
            path="/item/:itemId"
            element={<h2>Detalle del producto</h2>}
          />

          {/* 404 */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
