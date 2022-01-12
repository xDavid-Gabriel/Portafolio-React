import imagenes from "../assets/imagenes";
import Pg_2_3_MisHabilidadesView from "./Pg_2_3_MisHabilidadesView";

export default function Pg_2_2_MisPasionesView() {
  return (
    <>
      <section className="container-fluid ">
        <div className="overflow-hidden row align-items-baseline align-content-center pagina">
          <div
            className=" my-4  d-flex align-items-center col-12 col-md-7 col-lg-9"
            data-aos="fade-left"
          >
            <div className=" lineas-azules col-4 "></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">02</span>
              MIS PASIONES
            </h4>
          </div>

          <div
            className="mt-5 overflow-hidden  d-flex flex-column align-items-center col-sm-6 col-lg-4 "
            data-aos="fade-up"
          >
            <img
              className="img-fluid"
              src={imagenes.img8}
              alt="Desarrollo web"
            />
            <h5 className="text-secondary text-center my-3">
              DISEÑO Y DESARROLLO WEB
            </h5>
            <p className="col-lg-10 col-xl-8">
              ¡Vamos no solo te quedes con la típica página con poca
              información!, hacer tu verdadera página web, será un buen reto, se
              diseñara, desarrollara, haciéndola adaptable para distintos
              dispositivos con Responsive Web Design, haz que tus ideas estén en
              la web.
            </p>
          </div>

          <div
            className="mt-5 overflow-hidden d-flex flex-column align-items-center col-sm-6 col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img className="img-fluid" src={imagenes.img9} alt="Tecnologia" />
            <h5 className="text-secondary text-center my-3">TECNOLOGÍA</h5>
            <p className="col-lg-10 col-xl-8">
              Soy amante de la tecnología y quiero compartir mi ADN digital con
              ustedes, siempre aprendiendo cada día y así poder especializarme
              cada vez más.
            </p>
          </div>

          <div
            className="mt-5 overflow-hidden d-flex flex-column align-items-center col-sm-12 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img className="img-fluid" src={imagenes.img10} alt="Creatividad" />
            <h5 className="text-secondary text-center my-3">CREATIVIDAD</h5>
            <p className="col-sm-6 col-lg-10 col-xl-8">
              Construyo tu página web, enfocada en mostrar y seguir toda tu
              línea gráfica, para así generar buena confianza y conversión de
              tus visitantes.
            </p>
          </div>
        </div>
      </section>
      <Pg_2_3_MisHabilidadesView />
    </>
  );
}
