import { useState } from "react";
import { Ul } from "./Pagina1Elements";
import { Link } from "react-router-dom";

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
        <a href="#" className="text-white fs-4 me-3">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white fs-4 me-3">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white fs-4 me-3">
          <i className="fab fa-linkedin"></i>
        </a>
        <Link
          to="/pagina4"
          className="text-white fs-4 font-serif text-decoration-none"
        >
          Contactame
        </Link>
      </div>

      <nav className="main-nav">
        <span onClick={() => setBarras(!barras)} type="button">
          {barras ? (
            <i className="navegacion text-white fs-4 fas fa-times position-relative"></i>
          ) : (
            <i className="navegacion text-white fs-4 fas fa-bars position-relative"></i>
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
