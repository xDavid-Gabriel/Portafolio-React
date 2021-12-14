import imagenes from "../assets/imagenes";
import Pg_2_3_MisHabilidadesView from "./Pg_2_3_MisHabilidadesView";

export default function Pg_2_2_MisPasionesView() {
  return (
    <>
      <section className="container-fluid ">
        <div className=" row align-items-baseline align-content-center pagina">
          <div className=" my-4 d-flex align-items-center col-12 col-md-7 col-lg-9">
            <div className=" lineas-azules col-4 "></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">02</span>
              MIS PASIONES
            </h4>
          </div>

          <div className="mt-5 d-flex flex-column align-items-center col-sm-6 col-lg-4">
            <img
              className="img-fluid"
              src={imagenes.img8}
              alt="Desarrollo web"
            />
            <h5 className="text-secondary text-center my-3">
              DISEÑO Y DESARROLLO WEB
            </h5>
            <p className="col-lg-10 col-xl-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>

          <div className="mt-5 d-flex flex-column align-items-center col-sm-6 col-lg-4">
            <img className="img-fluid" src={imagenes.img9} alt="Tecnologia" />
            <h5 className="text-secondary text-center my-3">TECNOLOGIA</h5>
            <p className="col-lg-10 col-xl-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>

          <div className="mt-5 d-flex flex-column align-items-center col-sm-12 col-lg-4">
            <img className="img-fluid" src={imagenes.img10} alt="Creatividad" />
            <h5 className="text-secondary text-center my-3">CREATIVIDAD</h5>
            <p className="col-sm-6 col-lg-10 col-xl-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
        </div>
      </section>
      <Pg_2_3_MisHabilidadesView />
    </>
  );
}
