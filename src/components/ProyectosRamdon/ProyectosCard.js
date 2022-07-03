import { motion } from "framer-motion";

const ProyectosCard = ({proyecto}) => {
  return (
    <motion.div
    className="d-flex align-content-center flex-column col-12 col-sm-6 col-md-4 col-lg-3 my-3"
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    layout
  >
    <div className="work_card">
    <img className="img-fluid " src={proyecto.image} alt={proyecto.title} />
    <span>{proyecto.title}</span>
    <a
      href={proyecto.href}
      className=" btn btn-secondary text-white m-auto"
      target="_blank"
    >
      {proyecto.link}
    </a>
    </div>
  </motion.div>
  )
}

export default ProyectosCard