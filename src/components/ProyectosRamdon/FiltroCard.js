import { Proyectos } from "../DataProyectos";
import { useState } from "react";

const FiltroCard = ({ setProyectos }) => {

  const [activo, setActivo] = useState({
    todos: true,
    portafolio: false,
    figma: false,
    frontendMentor: false,
  });

  const filtradoProyectos = (cateproyecto) => {
    const filtrado = Proyectos.filter((proy) => {
      return proy.category === cateproyecto;
    });
    setProyectos(filtrado);
  };

  return (
    <div className="filtro-container">
      <button className={activo.todos ? "proyecto-activo": "no-activo"}
        onClick={() => {
          setProyectos(Proyectos)
          setActivo({todos:true})
        }}
      >
        Todos
      </button>
      <button className={activo.portafolio ? "proyecto-activo": "no-activo"}
        onClick={() => {
          filtradoProyectos("portafolio");
          setActivo({portafolio:true})
        }}
      >
        Portafolio
      </button>
      <button className={activo.figma ? "proyecto-activo": "no-activo"}
        onClick={() => {
          filtradoProyectos("figma");
          setActivo({figma:true})
        }}
      >
        Figma
      </button>
      <button className={activo.frontendMentor ? "proyecto-activo": "no-activo"}
        onClick={() => {
          filtradoProyectos("frontendmentor");
          setActivo({frontendMentor:true})
        }}
      >
        Frontend Mentor
      </button>
    </div>
  );
};

export default FiltroCard;
