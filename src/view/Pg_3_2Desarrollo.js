import { Link } from "react-router-dom";

export default function Pg_3_2Desarrollo() {
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
              Este Proyecto fue realizado en React, se usó axios para traer la
              API de la página Rapid API, este proyecto es muy interactiva y
              funcional, se implementó el modo dark y el cambio de colores a
              gusto del usuario.
            </p>
          </div>

          <div className="mt-3 mb-1 col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/J5HWKHt/home-completa.png"
              alt="Publicacion"
            />
          </div>
          <div className="mt-3 mb-1 col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/gTMTtyP/detalle-completa.png"
              alt="Publicacion"
            />
          </div>
        </div>

        <div className="my-4 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <a href="#regreso" className="btn btn-primary me-1 me-sm-3">
              <i className="fas fa-arrow-up"></i>
            </a>
            <p className="subir-next mb-0 font-serif text-secondary">Subir</p>
          </div>
          <div className="d-flex align-items-center">
            <Link
              to="/proyecto2"
              className="btn btn-primary order-1 ms-1 ms-sm-3"
            >
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link
              to="/proyecto2"
              className="subir-next mb-0 font-serif text-secondary text-decoration-none"
            >
              Ver siguiente proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
