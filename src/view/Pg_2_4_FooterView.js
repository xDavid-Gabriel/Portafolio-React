import { Link } from "react-router-dom";

export default function Pg_2_4_FooterView() {
  return (
    <footer className="container-fluid">
      <div className=" row align-items-center align-content-center py-5 ">
        <a
          className="text-center text-decoration-none text-white fs-5"
          href="mailto:davidbetalleluz31@gmail.com"
        >
          davidbetalleluz31@gmail.com
        </a>
        <Link
          className="text-center text-decoration-none text-white fs-5"
          to="/pagina4"
        >
          Contáctame
        </Link>
      </div>
    </footer>
  );
}
