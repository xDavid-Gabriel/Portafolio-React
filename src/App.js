import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import NombreFunción from "ruta/Nombre_Archivo"
import Navegacion from "./components/Navegacion";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina2SobreMiView from "./view/Pagina2SobreMiView";
import Pagina3 from "./components/Pagina3";
//Trabajos
import Pagina3MisTrabajosView from "./view/Pagina3MisTrabajosView";
import Proyecto_2View from "./view/trabajos_proyecto-02/Proyecto_2View";
import Proyecto_3View from "./view/trabajos_proyecto-03/Proyecto_3View";
import ProyectosRamdonView from "./view/proyectos-ramdon/ProyectosRamdonView";

import Pagina4 from "./components/Pagina4";
import PaginaGracias from "./components/PaginaGracias";

import PdfView from "./view/PdfView";

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

          {/* Trabajos */}
          <Route
            path="/pagina3mistrabajos"
            element={<Pagina3MisTrabajosView />}
          />
          <Route path="/proyecto2" element={<Proyecto_2View />} />
          <Route path="/proyecto3" element={<Proyecto_3View />} />
          <Route path="/proyectosramdon" element={<ProyectosRamdonView />} />

          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/gracias" element={<PaginaGracias />} />
          <Route path="/pdf" element={<PdfView />} />
        </Routes>
      </Router>
    </>
  );
}
