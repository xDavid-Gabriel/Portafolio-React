import { Proyectos } from "../../components/DataProyectos";
import ProyectosCard from "../../components/ProyectosRamdon/ProyectosCard";
import FiltroCard from "../../components/ProyectosRamdon/FiltroCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function P_RamdonConceptoView() {
  const [proyectos, setProyectos] = useState(Proyectos);

  return (
    <>
      <section className="container">
          <div
            className="d-md-flex align-items-md-baseline my-5"
            data-aos="fade-right"
          >
            <div className="mt-4 col-12 col-md-3 col-lg-1">
              <h5 className="text-primary fs-3">ROLL</h5>
              <p>UI/Codigo</p>
            </div>

            <div className="mt-3 mb-4 col-12 col-md-3 col-lg-2 ">
              <h5 className="text-primary fs-3 col-8">DESCRIPCIÓN</h5>
              <p>
                Proyectos maquetados hechos con las tecnologías HTML, CSS,
                JAVASCRIPTS
              </p>
            </div>
          </div>

          <FiltroCard setProyectos={setProyectos} />
       <motion.div layout className="row">

         <AnimatePresence>
            {proyectos.map((proyecto) => {
              return <ProyectosCard key={proyecto.id} proyecto={proyecto} />;
            })}
         </AnimatePresence>
       </motion.div>  
      </section>

      <div className="container-fluid">
        <div className="row overflow-hidden align-items-center align-content-center p_concepto">
          <div
            className="my-4 d-flex align-items-center col-md-6 col-lg-6 col-xl-4"
          >
            <div className="lineas-azules col-3"></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">01</span>
              CONCEPTO
            </h4>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-5"
            
          >
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid my-4 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <a href="#regreso" className="btn btn-primary me-1 me-sm-3">
            <i className="fas fa-arrow-up"></i>
          </a>
          <p className="subir-next mb-0 font-serif text-secondary">Subir</p>
        </div>

        <div className="d-flex flex-column align-items-end flex-sm-row ">
          <div className="d-flex align-items-center">
            <Link
              to="/proyecto3"
              className="subir-next mb-0 font-serif text-secondary text-decoration-none "
            >
              Regresar
            </Link>
            <Link
              to="/proyecto3"
              className="btn btn-primary order-1 ms-1 ms-sm-3 "
            >
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
