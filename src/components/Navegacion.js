import { useState } from "react";
import { Ul } from "./Pagina1Elements";
import { Link } from "react-router-dom";
import imagenes from "../assets/imagenes";

export default function Navegacion() {
  const [barras, setBarras] = useState(false);
  return (
    <div className="container-fluid absolute-top d-flex justify-content-between align-items-center p-3">
      <Link
        onClick={() => setBarras(!barras)}
        to="/"
        className="text-decoration-none fs-4 text-white navegacion main-title mb-0 font-body position-relative"
      >
        David Gabriel
      </Link>
      <div className="social d-flex align-items-center d-none d-md-flex">
        <a
          href="https://www.facebook.com/david.betalleluz"
          className="text-white fs-4 me-3"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/gabriel_betalleluz"
          className="text-white fs-4 me-3"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/david-gabriel-cayllahua-betalleluz-i12637"
          className="text-white fs-4 me-3"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <Link
          to="/pagina4"
          className="text-white fs-4 font-serif text-decoration-none"
        >
          Contáctame
        </Link>
      </div>

      <nav className="main-nav">
        <span onClick={() => setBarras(!barras)} type="button">
          {barras ? (
            <img
              src={imagenes.img29}
              className="navegacion   position-relative"
            />
          ) : (
            <img
              src={imagenes.img28}
              className="navegacion   position-relative"
            />
          )}
        </span>

        <Ul open={barras}>
          <li className="menu--item" onClick={() => setBarras(!barras)}>
            <Link to="/pagina2" className="text-decoration-none">
              <span className="hover-link font-serif display-1"> SOBRE MI</span>
            </Link>
          </li>
          <li className="menu--item" onClick={() => setBarras(!barras)}>
            <Link to="/pagina3" className="text-decoration-none">
              <span className="hover-link font-serif display-1">
                MIS TRABAJOS
              </span>
            </Link>
          </li>
          <li className="menu--item" onClick={() => setBarras(!barras)}>
            <Link to="/pagina4" className="text-decoration-none">
              <span className="hover-link font-serif display-1">CONTACTO</span>
            </Link>
          </li>
        </Ul>
      </nav>
    </div>
  );
}
