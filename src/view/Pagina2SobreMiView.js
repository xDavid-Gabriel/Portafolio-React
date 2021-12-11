import imagenes from "../assets/imagenes";
import { Section } from "../components/Pagina1Elements";
import Pg_2_1_QuienSoyView from "./Pg_2_1_QuienSoyView";

export default function Pagina2SobreMiView() {
  return (
    <>
      <Section className="container-fluid">
        <div className="row align-items-center align-content-center pagina">
          <div className="d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
            <img
              className="img-fluid img-sm-fluid img-md-fluid object-cover img-md-min-vh100"
              src={imagenes.img6}
              alt="Sobre mi"
            />
          </div>

          <div className="presentacion mt-4 col-12 col-md-6">
            <h1 className="display-1">SOBRE MI</h1>
            <div className="lineas"></div>

            <div className="descripcion mt-4 ">
              <p className="text-white fs-5 mb-0 me-4 pe-5">
                Amo el diseño, la tecnologia y seguir avanzando en esta vida
              </p>
              <button className="mt-3 btn btn-secondary text-white font-serif rounded-circle d-flex justify-content-center align-items-center">
                <i className="fas fa-arrow-down fs-4"></i>
              </button>
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
      <Pg_2_1_QuienSoyView />
    </>
  );
}
