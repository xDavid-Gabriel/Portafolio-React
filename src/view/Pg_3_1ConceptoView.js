import imagenes from "../assets/imagenes";
import Pg_3_2Desarrollo from "./Pg_3_2Desarrollo";

export default function Pg_3_1ConceptoView() {
  return (
    <>
      <section className="container-fluid ">
        <div className="row align-items-center align-content-center pagina">
          <div className="d-md-flex align-items-md-baseline">
            <div className="mt-4 col-12 col-md-3 col-lg-2">
              <h5 className="text-primary fs-3">ROLL</h5>
              <p>UI design/Codigo</p>
            </div>
            <div className="mt-3 col-12 col-md-3 col-lg-2">
              <h5 className="text-primary fs-3 col-8">FECHA</h5>
              <p>05/12/21</p>
            </div>
            <div className="mt-3 mb-4 col-12 col-md-3 col-lg-2 ">
              <h5 className="text-primary fs-3 col-8">DESCRIPCION</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the
              </p>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center">
            <img
              className="img-fluid img-md-personalisado"
              src={imagenes.img20}
              alt="Resvonsive"
            />
          </div>

          <div className="my-4 d-flex align-items-center  col-md-6 col-lg-6 col-xl-4">
            <div className=" lineas-azules col-3"></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">01</span>
              CONCEPTO
            </h4>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-5    ">
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
        <img className="w-100" src={imagenes.img21} alt="Banner de HIDEB" />
      </section>
      <Pg_3_2Desarrollo />
    </>
  );
}
