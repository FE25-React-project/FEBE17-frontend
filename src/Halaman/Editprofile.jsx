import { motion } from "framer-motion";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBInputGroup, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Editprofile = () => {
  const User = JSON.parse(localStorage.getItem("user"));
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 2, x: 0 }}
      exit={{ opacity: 2, x: 30 }}
      transition={{ duration: 1.2 }}
      className='container-xl'
    >
      <div className="d-flex ">
<div
        id="containereditprofile"
        style={{}}
        className="  container-xl  h-100 d-flex align-items-center  shadow-5  justify-content-center border border-1"
      >
        <div id="containereditprofile" className="row container-fluid d-flex align-items-start  ">
          <div className="">
            <div className=" d-flex align-items-start">
              <div className=" px-5 text-start ">
                <div className=" inputuser text-end my-3 d-flex ">
                  <h3>{User.fullname}</h3>
                </div>
                <div className=" inputuser mt-1 d-flex  ">
                  <label className="mx-5 fw-bold" htmlFor="">
                    Username
                  </label>
                  <MDBInput
                    className="inputanfield"
                    label="Username"
                    id="typeText"
                    type="text"
                  />
                </div>
                <div className=" inputuser mt-3 d-flex">
                  <label className="mx-5 fw-bold" htmlFor="">
                    First name
                  </label>
                  <MDBInput
                    className="inputanfield"
                    label="First name"
                    id="typeText"
                    type="text"
                  />
                </div>
                <div className=" inputuser mt-3 d-flex">
                  <label className="mx-5 fw-bold" htmlFor="">
                    Last name
                  </label>
                  <MDBInput
                    className="inputanfield"
                    label="Last name"
                    id="typeText"
                    type="text"
                  />
                </div>
                <div className="inputuser my-3 d-flex ">
                  <h3>Contact info</h3>
                </div>
                <div className="inputuser mt-3 d-flex">
                  <label className="mx-5 fw-bold" htmlFor="">
                    User email
                  </label>
                  <MDBInput
                    className="inputanfield"
                    label="Email"
                    id="typeText"
                    type="text"
                  />
                </div>
                <div className=" inputuser mt-3 d-flex">
                  <label className="mx-5 fw-bold" htmlFor="">
                    Password
                  </label>
                  <MDBInput
                    className="inputanfield"
                    label="Password"
                    id="typeText"
                    type="text"
                  />
                </div>
                <div className="inputuser my-3 d-flex ">
                  <MDBBtn>Save change</MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
     
      </div>
      
    </motion.div>
  );
};

export default Editprofile;
