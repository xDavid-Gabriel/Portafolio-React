import imagenes from "../assets/imagenes";
import Pg_2_2_MisPasionesView from "./Pg_2_2_MisPasionesView";

import { Link } from "react-router-dom";

export default function Pg_2_1_QuienSoyView() {
  return (
    <>
      <section className="container-fluid ">
        <div className="quien-soy overflow-hidden row align-items-baseline align-content-center pagina">
          <div
            className=" my-4 d-flex align-items-center col-12 col-md-6"
            data-aos="fade-right"
          >
            <div className=" lineas-azules col-4 "></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">01</span>
              QUIEN SOY
            </h4>
          </div>

          <div
            className="col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-primary fs-2">David Gabriel</h4>
            <p>
              Hola soy diseñador y desarrollador web, extrema damente motivado y
              apasionado, con altas capacidades creativas relacionadas con la
              innovación, hacia el diseño, prototipado y llevándolo a
              producción, manteniendo interés de desarrollo en áreas como el
              Marketing , Diseño y desarrollo web o maquetación web, también con
              conocimientos de Frontend Developer, Tengo capacidad para trabajar
              en grupos para proyectos corporativos, facilidad de aprendizaje,
              desempeñar labores de diseño, código concretos, y la capacidad de
              mantenerme actualizado en las tendencias nuevas de la tecnología
            </p>
            <img
              className="img-fluid "
              src={imagenes.img7}
              alt="David Gabriel Cayllahua Betalleluz"
            />
            <Link
              to="/pdf"
              className="btn btn-secondary text-white font-serif mt-4"
            >
              Ver CV
            </Link>
          </div>
        </div>
      </section>
      <Pg_2_2_MisPasionesView />
    </>
  );
}
