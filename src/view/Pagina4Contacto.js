import imagenes from "../assets/imagenes";

export default function Pagina4Contacto() {
  return (
    <section id="formulario" className="container-fluid">
      <div className="row align-items-center align-content-center pagina position-relative">
        <div className="col-md-6">
          <h2 className="text-primary my-4 display-3">CONTACTO</h2>
          <form name="contacto" data-netlify="true">
            <label className="text-primary fs-3 font-serif">Nombres</label>
            <input
              className="form-control my-3"
              type="text"
              placeholder="Ejem: Jorge"
              name="nombre"
              required
            />

            <label className="text-primary fs-3 font-serif">Apellidos</label>
            <input
              className="form-control my-3"
              type="text"
              placeholder="Ejem: Perez"
              name="apellido"
              required
            />

            <label className="text-primary fs-3 font-serif">E-mail</label>
            <input
              className="form-control my-3"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              required
            />

            <label className="text-primary fs-3 font-serif">Descripción</label>
            <textarea
              className=" my-3"
              type="text"
              placeholder="Esta es una descripcion..."
              name="mensaje"
              required
            />

            <button
              type="submit"
              className="btn btn-secondary text-white font-serif fs-5 mb-4"
            >
              Enviar
            </button>
          </form>
        </div>
        <a
          href="https://wa.me/51988848573"
          className="position-absolute wassap"
        >
          <img src={imagenes.img30} alt="WhatsApp" />
        </a>
      </div>
    </section>
  );
}
