import { Section } from "./Pagina1Elements";
import imagenes from "../assets/imagenes";

export default function PaginaGracias() {
  return (
      <Section className="container-fluid">
          <div className="row overflow-hidden align-items-center align-content-center pagina">
             <div className="col-12 col-md-6" data-aos="fade-right">
           <h1 className="display-1">Gracias</h1>
           <p className="text-white fs-5">Por enviarme un mensaje, en breve me comunicaré con usted
 <br />
           Saludos de <span className="fs-3 text-secondary ms-3">David Gabriel</span> 
           </p>   
        </div>

           <div className="d-flex justify-content-center col-12 col-md-6" data-aos="zoom-in">
               <img className="mascota img-fluid" src={imagenes.img31} alt="mascota" />
           </div>

          </div>
      </Section>
  )
}
