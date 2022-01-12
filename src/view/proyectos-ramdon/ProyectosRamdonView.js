import imagenes from "../../assets/imagenes";
import { Section } from "../../components/Pagina1Elements";
import P_RamdonConceptoView from "./P_RamdonConceptoView";

export default function ProyectosRamdonView() {
  return (
    <>
      <Section id="regreso" className="container-fluid">
        <div className="row align-items-center align-content-center pagina">
          <div className="d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
            <img
              className="img-fluid img-sm-fluid img-md-fluid object-cover img-md-min-vh100"
              src={imagenes.img47}
              alt="Ken"
            />
          </div>

          <div className="presentacion mt-4 col-12 col-md-6">
            <h1 className="display-1">Proyectos</h1>
            <div className="lineas"></div>

            <div className="descripcion mt-4 ">
              <p className="text-white fs-5 mb-0 me-4 pe-5">
                A continuación, mostraré mis demás proyectos realizados.
              </p>
              <div className="mt-3 bg-secondary text-white font-serif rounded-circle d-flex justify-content-center align-items-center">
                <i className="fas fa-arrow-down fs-4"></i>
              </div>
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
      <P_RamdonConceptoView />
    </>
  );
}
