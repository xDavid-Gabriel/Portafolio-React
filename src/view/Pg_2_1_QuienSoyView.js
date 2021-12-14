import { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import imagenes from "../assets/imagenes";
import Pg_2_2_MisPasionesView from "./Pg_2_2_MisPasionesView";

gsap.registerPlugin(ScrollTrigger);
export default function Pg_2_1_QuienSoyView() {
  const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".quien-soy",
      pin: true,
      start: "top top",
      toggleActions: "restart complete  reset",
    },
  });
  useEffect(() => {
    const scroll = document.querySelectorAll(".scroll");
    const scroll2 = document.querySelectorAll(".scroll-2");
    const images = document.querySelectorAll(".images");

    timeLine
      .from(scroll, { y: 100, opacity: 0, duration: 0.8 }, "-=1.5")
      .from(scroll2, { x: 300, opacity: 0, duration: 1 }, "-=1")

      .from(images, { x: 300, opacity: 0, stagger: 0.3 }, "-=0.5");
  }, []);

  return (
    <>
      <section className="container-fluid ">
        <div className="quien-soy overflow-hidden row align-items-baseline align-content-center pagina">
          <div className="scroll my-4 d-flex align-items-center col-12 col-md-6">
            <div className=" lineas-azules col-4 "></div>
            <h4 className="text-primary fs-2 col-8">
              <span className="text-secondary display-1 me-2">01</span>
              QUIEN SOY
            </h4>
          </div>

          <div className="col-12 col-md-6 scroll-2">
            <h4 className="text-primary fs-2">David Gabriel</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              nesciunt laudantium sit adipisci non rem ducimus fuga unde fugiat
              quidem ipsum quaerat repudiandae, vero deleniti corporis neque
              quod ab a praesentium. Repudiandae et delectus alias.
            </p>
            <img
              className="img-fluid "
              src={imagenes.img7}
              alt="David Gabriel Cayllahua Betalleluz"
            />
          </div>
        </div>
      </section>
      <Pg_2_2_MisPasionesView />
    </>
  );
}
