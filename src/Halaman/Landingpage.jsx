import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 2, y: 0 }}
      exit={{ opacity: 2, y: -30 }}
      transition={{ duration: 1.5 }}
    >
      <div className=" d-flex align-items-center" id="landingpage">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className=" fw-bold mb-4 text-opacity-60">
                Explore dan tingkatkan bakat senimu tanpa batas
              </h1>
              <p className="text-warning mb-5  text-opacity-100" id="p-header
              " >
              Art is never finished, only abandoned.<br/>
―  Leonardo da Vinci
              </p>
              <Link
                to={"/login"}
                className="btn btn-primary btn-lg rounded-1 mt-3"
              >
                Click me to continue!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landingpage;
