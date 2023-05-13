import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NotFound from "paginas/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />

        </Route>
        <Route path="post/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Rodape />

    </BrowserRouter>
  );
}

export default AppRoutes;
