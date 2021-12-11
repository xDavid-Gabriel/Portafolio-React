import imagenes from "../assets/imagenes";
import { Section } from "./Pagina1Elements";
import { Link } from "react-router-dom";

export default function Pagina3() {
  return (
    <>
      <Section className="container-fluid">
        <div className="row align-items-center align-content-center pagina">
          <div className="d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
            <h4 className="text-numero text-white position-absolute">02</h4>
            <img
              className="img-fluid img-sm-fluid img-md-fluid"
              src={imagenes.img19}
              alt="HIDEB"
            />
          </div>

          <div className="presentacion mt-4 col-12 col-md-6">
            <h1 className="display-1">
              MIS
              <br />
              TRABAJOS
            </h1>
            <div className="lineas"></div>

            <div className="descripcion mt-4 ">
              <p className="text-white fs-5 mb-0 me-4 pe-5">
                A continuacion veremos unos de mis trabajos realizados
              </p>
              <Link
                to="/pagina3mistrabajos"
                className="mt-3 btn btn-secondary text-white font-serif"
              >
                Ver mas
              </Link>
            </div>
          </div>
        </div>
        <div className="rayas">
          <img
            className="img-fluid d-md-none"
            src={imagenes.img3}
            alt="Rayas"
          />
        </div>

        <div className="rayas-escritorio position-absolute">
          <img className="d-none d-md-block" src={imagenes.img5} alt="Rayas" />
        </div>
      </Section>
    </>
  );
}
