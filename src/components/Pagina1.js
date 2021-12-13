import { useEffect } from "react";
import { gsap, Power4 } from "gsap/all";
import imagenes from "../assets/imagenes";
import { Section } from "./Pagina1Elements";

export default function Pagina1() {
  const timeLine = gsap.timeline({
    defaults: {
      opacity: 0,
      y: 50,
      duration: 1.4,
      ease: Power4.easeOut,
    },
  });
  useEffect(() => {
    const animation = document.querySelectorAll(".animation");
    const animation2 = document.querySelectorAll(".animation-2");
    const images = document.querySelectorAll(".images");

    timeLine
      .from(animation, {
        x: 50,
        stagger: 0.3,
      })
      .from(animation2, { x: -50, stagger: 0.3 }, "-=1.3")
      .from(images, { y: 60, stagger: 0.3 }, "-=1.5");
  }, []);
  return (
    <Section className="container-fluid">
      <div className="row align-items-center align-content-center pagina">
        <div className="foco-idea d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
          <h4 className="text-portafolio text-secondary position-absolute images">
            PORTAFOLIO
          </h4>
          <img className="images" src={imagenes.img2} alt="Foco de ideas" />
        </div>

        <div className="presentacion  col-12 col-md-6">
          <h1 className="display-1 animation">
            DAVID <br />
            GABRIEL
          </h1>
          <div className="lineas animation"></div>

          <div className="descripcion mt-4 d-flex  align-items-center">
            <p className="text-white fs-5  mb-0 me-4 animation-2">
              diseñador <br />
              desarrollador
            </p>
            <h3 className="fs-1 animation">WEB /</h3>
          </div>
        </div>
      </div>

      <div className="rayas">
        <img className="img-fluid d-md-none" src={imagenes.img3} alt="Rayas" />
      </div>

      <div className="rayas-escritorio position-absolute">
        <img className="d-none d-md-block" src={imagenes.img5} alt="Rayas" />
      </div>
    </Section>
  );
}
