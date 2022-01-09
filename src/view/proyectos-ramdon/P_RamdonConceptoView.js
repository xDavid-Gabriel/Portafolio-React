import imagenes from "../../assets/imagenes";

export default function P_RamdonConceptoView() {
  return (
    <>
      <section className="container-fluid ">
        <div className="row overflow-hidden align-items-center align-content-center pagina">
          <div
            className="d-md-flex align-items-md-baseline"
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

          <div
            className="d-flex align-content-center  flex-column col-12 col-md-6 my-3"
            data-aos="zoom-in"
          >
            <img className="img-fluid " src={imagenes.img48} alt="Resvonsive" />
            <a
              href="#"
              className="mt-3 btn btn-secondary text-white font-serif m-auto"
            >
              Visitar sitio
            </a>
          </div>
          <div
            className="d-flex align-content-center  flex-column col-12 col-md-6 my-3"
            data-aos="zoom-in"
            alt="Resvonsive"
          >
            <img className="img-fluid " src={imagenes.img49} />

            <a
              href="#"
              className="mt-3 btn btn-secondary text-white font-serif m-auto"
            >
              Visitar sitio
            </a>
          </div>
          <div
            className="d-flex align-content-center  flex-column col-12 col-md-6 my-3"
            data-aos="zoom-in"
          >
            <img className="img-fluid " src={imagenes.img50} alt="Resvonsive" />
            <a
              href="#"
              className="mt-3 btn btn-secondary text-white font-serif m-auto"
            >
              Visitar sitio
            </a>
          </div>
          <div
            className="d-flex align-content-center  flex-column col-12 col-md-6 my-3"
            data-aos="zoom-in"
          >
            <img className="img-fluid " src={imagenes.img51} alt="Resvonsive" />

            <a
              href="https://xdavid-gabriel.github.io/proyecto-reto-semana-3/"
              className="mt-3 btn btn-secondary text-white font-serif m-auto"
            >
              Visitar sitio
            </a>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row overflow-hidden align-items-center align-content-center p_concepto">
          <div
            className="my-4 d-flex align-items-center col-md-6 col-lg-6 col-xl-4"
            data-aos="fade-left"
          >
            <div className="lineas-azules col-3"></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">01</span>
              CONCEPTO
            </h4>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-5"
            data-aos="fade-left"
            data-aos-delay="400"
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
    </>
  );
}
