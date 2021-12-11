import imagenes from "../assets/imagenes";
import Pg_2_4_FooterView from "./Pg_2_4_FooterView";

export default function Pg_2_3_MisHabilidadesView() {
  return (
    <>
      <section className="container-fluid ">
        <div className=" row align-items-center align-content-center pagina">
          <div className="my-5 d-flex align-items-center  col-md-7 col-lg-9">
            <div className=" lineas-azules col-4"></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">03</span>
              MIS HABILIDADES
            </h4>
          </div>

          <div className="my-4 col-sm-6 d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img11} alt="Ilustraitor" />
          </div>
          <div className="my-4 col-sm-6  d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img12} alt="Photoshop" />
          </div>
          <div className="my-4 col-sm-6 d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img13} alt="Figma" />
          </div>
          <div className="my-4 col-sm-6  d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img14} alt="Bootstrap" />
          </div>
          <div className="my-4 col-sm-6  d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img15} alt="HTML CSS" />
          </div>
          <div className="my-4 col-sm-6  d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img16} alt="Javascripts" />
          </div>
          <div className="my-4 col-sm-6  d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img17} alt="React" />
          </div>
          <div className="mt-4 mb-5 col-sm-6  d-flex justify-content-center">
            <img className="img-fluid" src={imagenes.img18} alt="Sass" />
          </div>
        </div>
      </section>
      <Pg_2_4_FooterView />
    </>
  );
}
