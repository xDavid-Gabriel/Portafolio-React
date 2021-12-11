export default function Pagina4Contacto() {
  return (<section id="formulario" className="container-fluid">
      <div className="row align-items-center align-content-center pagina">
       <div className="col-md-6">   
      <h2 className="text-primary my-4 display-3">CONTACT</h2>
      <form>
          <label className="text-primary display-6 font-serif">Nombre</label>
          <input className="form-control my-3"  type="text" placeholder="Ejem: Jorge" />

          <label className="text-primary display-6 font-serif">Apellidos</label>
          <input className="form-control my-3"  type="text" placeholder="Ejem: Perez" />

          <label className="text-primary display-6 font-serif">E-mail</label>
          <input  className="form-control my-3" type="email" placeholder="example@gmail.com" />

          <label className="text-primary display-6 font-serif">Descripcion</label>
          <textarea className=" my-3" type="text" placeholder="Esta es una descripcion..." />

          <button type="submit" className="btn btn-secondary text-white font-serif fs-5">Enviar</button>
      </form>
      </div>
      </div>
  </section>
  );
}
