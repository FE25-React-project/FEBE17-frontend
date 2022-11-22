import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import Landingpagesection from "../components/Landingpagesection";
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
                className=" fw-bold mb-4 text-opacity-60 hover-shadow"
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
                whileHover={{ scale: 1.1, duration: 1.5 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 600,
                  duration: 1.5,
                }}
                className="btn-white rounded-3 p-2 box"
              >
                <Link
                  to={"/login"}
                  style={{
                    fontSize: "9px",
                    color: "white",
                  }}
                  className="p-2 mt-3 fw-bold  "
                >
                  <MDBBtn rippleRadius={10} size="lg">
                    Click me to start exploring
                  </MDBBtn>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Landingpagesection className="mask" />
    </motion.div>
  );
};

export default Landingpage;
