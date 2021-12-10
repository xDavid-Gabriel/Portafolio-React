import imagenes from "../assets/imagenes";
import { Section } from "./Pagina1Elements";

export default function Pagina1() {
  return (
    <Section className="container-fluid">
      <div className="row align-items-center align-content-center pagina">
        <div className="foco-idea d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
          <h4 className="text-portafolio text-secondary position-absolute">
            PORTAFOLIO
          </h4>
          <img src={imagenes.img2} alt="Foco de ideas" />
        </div>

        <div className="presentacion  col-12 col-md-6">
          <h1 className="display-1">
            DAVID <br />
            GABRIEL
          </h1>
          <div className="lineas"></div>

          <div className="descripcion mt-4 d-flex  align-items-center">
            <p className="text-white fs-5  mb-0 me-4">
              diseñador <br />
              desarrollador
            </p>
            <h3 className="fs-1">WEB /</h3>
          </div>
        </div>
      </div>

      <div className="rayas position-absolute">
        <img className="img-fluid d-md-none" src={imagenes.img3} alt="Rayas" />
      </div>

      <div className="rayas-escritorio position-absolute">
        <img className="d-none d-md-block" src={imagenes.img5} alt="Rayas" />
      </div>
    </Section>
  );
}
