import imagenes from "../assets/imagenes";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  apellido: "",
  email: "",
  mensaje: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco ";
  }

  if (!form.apellido.trim()) {
    errors.apellido = "El campo 'Apellido' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  }

  // else if (!regexEmail.test(form.regexEmail.trim())) {
  //   errors.email = "El campo 'Email' es incorrecto ";
  // }

  if (!form.mensaje.trim()) {
    errors.mensaje = "El campo 'Mensaje' es requerido";
  }
  // else if (!regexComments.test(form.regexComments.trim())) {
  //   errors.mensaje = "El campo 'Mensaje' no debe exceder los 255 caracteres";
  // }

  return errors;
};

export default function Pagina4Contacto() {
  const {
    form,
    erros,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <section id="formulario" className="container-fluid">
      <div className="row align-items-center align-content-center pagina position-relative">
        <div className="col-md-6">
          <h2 className="text-primary my-4 display-3">CONTACTO</h2>

          {/* name="contacto" method="POST" data-netlify="true" action="/" */}
          <form onSubmit={handleSubmit}>
            {/* <input type="hidden" name="form-name" value="contact" /> */}
            <label className="text-primary fs-3 font-serif">Nombres</label>
            <input
              className="form-control my-3"
              type="text"
              placeholder="Ejem: Jorge"
              name="name"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
            />
            {erros.name && <p className="text-red fw-bold">{erros.name}</p>}

            <label className="text-primary fs-3 font-serif">Apellidos</label>
            <input
              className="form-control my-3"
              type="text"
              placeholder="Ejem: Perez"
              name="apellido"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.apellido}
            />
            {erros.apellido && (
              <p className="text-red fw-bold">{erros.apellido}</p>
            )}

            <label className="text-primary fs-3 font-serif">E-mail</label>
            <input
              className="form-control my-3"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
            />

            {erros.email && <p className="text-red fw-bold">{erros.email}</p>}

            <label className="text-primary fs-3 font-serif">Descripción</label>
            <textarea
              className=" my-3"
              type="text"
              placeholder="Esta es una descripcion..."
              name="mensaje"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.mensaje}
            />
            {erros.mensaje && (
              <p className="text-red fw-bold">{erros.mensaje}</p>
            )}

            <button
              type="submit"
              value="Enviar"
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
