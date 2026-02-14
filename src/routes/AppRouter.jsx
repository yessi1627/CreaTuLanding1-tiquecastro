import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje="Bienvenidos a la tienda oficial de Yeison Jiménez" />}
          />

          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
