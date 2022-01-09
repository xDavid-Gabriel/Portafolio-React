import { Link } from "react-router-dom";
import imagenes from "../../assets/imagenes";

export default function P_02_DesarrolloView() {
  return (
    <>
      <section className="container-fluid ">
        <div className="row align-items-center align-content-center">
          <div
            className="my-5 d-flex align-items-center  col-md-6 col-lg-6 col-xl-4"
            data-aos="fade-right"
          >
            <div className=" lineas-azules col-3"></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">02</span>
              DESARROLLÓ
            </h4>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-5 " data-aos="fade-right">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>

          <div className="brawl mt-3 mb-1 col-12 col-md-6">
            <img className="img-fluid" src={imagenes.img36} alt="Publicacion" />
          </div>
          <div className="brawl mt-3 mb-1 col-12 col-md-6">
            <img className="img-fluid" src={imagenes.img37} alt="Publicacion" />
          </div>
          <div className="brawl mt-3 mb-1 col-12 col-md-6">
            <img className="img-fluid" src={imagenes.img38} alt="Publicacion" />
          </div>
          <div className="brawl mt-3 mb-1 col-12 col-md-6">
            <img className="img-fluid" src={imagenes.img39} alt="Publicacion" />
          </div>
        </div>

        <div className="my-4 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <a href="#regreso" className="btn btn-primary me-1 me-sm-3">
              <i className="fas fa-arrow-up"></i>
            </a>
            <p className="subir-next mb-0 font-serif text-secondary">Subir</p>
          </div>

        <div className="d-flex flex-column align-items-end flex-sm-row ">
        <div className="d-flex align-items-center mb-3 mb-sm-0 me-sm-3">
            <Link
              to="/pagina3mistrabajos"
              className="subir-next mb-0 font-serif text-secondary text-decoration-none"
            >
              Regresar
            </Link>
            <Link
              to="/pagina3mistrabajos"
              className="btn btn-primary order-1 ms-1 ms-sm-3"
            >
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <Link
              to="/proyecto3"
              className="btn btn-primary order-1 ms-1 ms-sm-3"
            >
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link
              to="/proyecto3"
              className="subir-next mb-0 font-serif text-secondary text-decoration-none"
            >
              Ver siguiente proyecto
            </Link>
          </div>


        </div>

        

        </div>
      </section>
    </>
  );
}
