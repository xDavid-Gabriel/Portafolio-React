import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import NombreFunción from "ruta/Nombre_Archivo"
import Navegacion from "./components/Navegacion";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina2SobreMi from "./components/Pagina2SobreMi";

export default function App() {
  return (
    <>
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina2sobremi" element={<Pagina2SobreMi />} />
        </Routes>
      </Router>
    </>
  );
}
