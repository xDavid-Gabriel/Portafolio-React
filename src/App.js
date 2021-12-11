import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import NombreFunción from "ruta/Nombre_Archivo"
import Navegacion from "./components/Navegacion";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina2SobreMiView from "./view/Pagina2SobreMiView";
import Pagina3 from "./components/Pagina3";
import Pagina3MisTrabajosView from "./view/Pagina3MisTrabajosView";
import Pagina4 from "./components/Pagina4";

export default function App() {
  return (
    <>
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina2sobremi" element={<Pagina2SobreMiView />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route
            path="/pagina3mistrabajos"
            element={<Pagina3MisTrabajosView />}
          />
          <Route path="/pagina4" element={<Pagina4 />} />
        </Routes>
      </Router>
    </>
  );
}
