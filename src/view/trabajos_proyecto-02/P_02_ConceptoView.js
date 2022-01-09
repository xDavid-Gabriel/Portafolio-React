import imagenes from "../../assets/imagenes";
import P_02_DesarrolloView from "./P_02_DesarrolloView";

export default function P_02_ConceptoView() {
  return (
    <>
      <section className="container-fluid ">
        <div className="row overflow-hidden align-items-center align-content-center pagina">
          <div
            className="d-md-flex align-items-md-baseline"
            data-aos="fade-right"
          >
            <div className="mt-4 col-12 col-md-3 col-lg-2">
              <h5 className="text-primary fs-3">ROLL</h5>
              <p>Game/Codigo</p>
            </div>
            <div className="mt-3 col-12 col-md-3 col-lg-2">
              <h5 className="text-primary fs-3 col-8">FECHA</h5>
              <p>06/01/22</p>
            </div>
            <div className="mt-3 mb-4 col-12 col-md-3 col-lg-2 ">
              <h5 className="text-primary fs-3 col-8">DESCRIPCIÓN</h5>
              <p>Encuentra a los brawlers</p>
            </div>
          </div>

          
      <div className="container">
          <div
            className="row align-items-center"
            data-aos="zoom-in"
          >
              <div className="d-flex justify-content-center col-12 col-md-5">
            <img
              className="img-brawl object-cover"
              src={imagenes.img33}
              alt="Resvonsive"
              data-aos-delay="200"
            />
              </div>

          <div className="my-5 d-flex justify-content-center col-12 col-md-7">
            <img className="img-brawl object-cover" src={imagenes.img34} alt="celular tablet" data-aos-delay="400"/>
          </div>

          </div>
      </div>

          <div
            className="my-4 d-flex align-items-center  col-md-6 col-lg-6 col-xl-4"
            data-aos="fade-left"
            data-aos-delay="400"
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
      </section>
      <section className="my-5 banner container-fluid">
        <img className="w-100" src={imagenes.img35} alt="Banner de Brawl Start" />
      </section>
      <P_02_DesarrolloView/>
    </>
  );
}
