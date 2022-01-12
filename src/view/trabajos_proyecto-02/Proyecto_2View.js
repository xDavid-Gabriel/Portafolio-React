import imagenes from "../../assets/imagenes";
import { Section } from "../../components/Pagina1Elements";
import P_02_ConceptoView from "../trabajos_proyecto-02/P_02_ConceptoView";

export default function Proyecto_2View() {
  return (
    <>
      <Section id="regreso" className="container-fluid">
        <div className="row align-items-center align-content-center pagina">
          <div className="d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
            <img
              className="img-fluid img-sm-fluid img-md-fluid object-cover img-md-min-vh100"
              src={imagenes.img32}
              alt="Brawl Start"
            />
          </div>

          <div className="presentacion mt-4 col-12 col-md-6">
            <h1 className="display-1">
              BRAWL
              <br />
              MEMORI
            </h1>
            <div className="lineas"></div>

            <div className="descripcion mt-4 ">
              <p className="text-white fs-5 mb-0 me-4 pe-5">
                BRAWL MEMORI es uno de los proyectos, más divertidos que pude
                realizar.
              </p>
              <a
                href="https://xdavid-gabriel.github.io/Brawl-start-memori/"
                className="mt-3 btn btn-secondary text-white font-serif "
                target="_blank"
              >
                Visitar sitio
              </a>
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
      <P_02_ConceptoView />
    </>
  );
}
