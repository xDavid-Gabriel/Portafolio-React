import { useEffect } from "react";
import { gsap, Power4 } from "gsap/all";

import imagenes from "../assets/imagenes";
import { Section } from "./Pagina1Elements";
import { Link } from "react-router-dom";

export default function Pagina3() {
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
      .from(images, { y: 60, stagger: 0.3 }, "-=1.9");
  }, []);
  return (
    <>
      <Section className="container-fluid">
        <div className="overflow-hidden row align-items-center align-content-center pagina">
          <div className="d-flex justify-content-center position-relative order-md-1 col-12 col-md-6">
            <h4 className="text-numero text-white position-absolute animation">
              02
            </h4>
            <img
              className="img-fluid img-sm-fluid img-md-fluid images"
              src={imagenes.img19}
              alt="HIDEB"
            />
          </div>

          <div className="presentacion mt-4 col-12 col-md-6">
            <h1 className="display-1 animation">
              MIS
              <br />
              TRABAJOS
            </h1>
            <div className="lineas animation"></div>

            <div className="descripcion mt-4 ">
              <p className="text-white fs-5 mb-0 me-4 pe-5 animation">
                A continuacion veremos unos de mis trabajos realizados
              </p>
              <Link
                to="/pagina3mistrabajos"
                className="mt-3 btn btn-secondary text-white font-serif animation-2"
              >
                Ver mas
              </Link>
            </div>
          </div>
        </div>
        <div className="rayas">
          <img
            className="img-fluid d-md-none"
            src={imagenes.img3}
            alt="Rayas"
          />
        </div>

        <div className="rayas-escritorio position-absolute">
          <img className="d-none d-md-block" src={imagenes.img5} alt="Rayas" />
        </div>
      </Section>
    </>
  );
}
