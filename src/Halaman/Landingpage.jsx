import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <motion.div
      animate={{
        x: "0",
        opacity: 1,
      }}
      initial={{ opacity: 0, x: -60 }}
      exit={{ opacity: 1, x: 60 }}
      transition={{
        type: "tween",
        duration: 1.3,
      }}
    >
      <div className=" d-flex align-items-center" id="landingpage">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1
                className=" fw-bold mb-4 text-opacity-60"
                style={{
                  fontSize: "43px",
                  color: "rgba(54, 255, 54, 0.8)",
                }}
              >
                Explore dan tingkatkan bakat senimu tanpa batas
              </h1>

              <p
                className=" mb-5   text-opacity-80"
                style={{
                  fontSize: "23px",
                  color: "white",
                }}
              >
                Art is never finished, only abandoned.
                <br />― Leonardo da Vinci
              </p>
              <motion.div
                whileHover={{ scale: 1.2, duration: 1.5 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 400,
                  duration: 1.5,
                }}
                className="btn-white rounded-3 p-2"
              >
                <Link
                  to={"/login"}
                  style={{
                    fontSize: "14px",
                    color: "white",
                  }}
                  className="p-2 mt-3 fw-bold  "
                >
                  Click me to explore!
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landingpage;
