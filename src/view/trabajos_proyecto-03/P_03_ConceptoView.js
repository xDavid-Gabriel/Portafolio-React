import imagenes from "../../assets/imagenes";
import P_03_Desarrollo from "./P_03_Desarrollo";

export default function P_03_ConceptoView() {
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
              <p>UI/Codigo</p>
            </div>
            <div className="mt-3 col-12 col-md-3 col-lg-2">
              <h5 className="text-primary fs-3 col-8">FECHA</h5>
              <p>05/07/22</p>
            </div>
            <div className="mt-3 mb-4 col-12 col-md-3 col-lg-2 ">
              <h5 className="text-primary fs-3 col-8">DESCRIPCIÓN</h5>
              <p>Dashboard</p>
            </div>
          </div>

          <div
            className="col-12 d-flex justify-content-center"
            data-aos="zoom-in"
          >
            <img
              className="img-fluid img-md-personalisado"
              src={imagenes.img41}
              alt="Resvonsive"
              data-aos-delay="200"
            />
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
            El proyecto fue realizado con motivos, para poder reutilizar componentes en futuros proyectos y así poder implementarlas fácilmente.
            </p>
          </div>
        </div>
      </section>
      <section className="my-5 banner container-fluid">
        <img
          className="w-100"
          src={imagenes.img42}
          alt="Banner de Brawl Start"
        />
      </section>
      <P_03_Desarrollo />
    </>
  );
}
