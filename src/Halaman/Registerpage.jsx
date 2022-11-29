import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
  MDBBadge,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { SERVICES } from "../constants/services";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();
  const SubmitForm = async (e) => {
    e.preventDefault();
    
      try {
        console.log(fullname, email, password, confirmpassword);
        const response = await axios
          .post(SERVICES.register, {
            fullname: fullname,
            email: email,
            password: password,
            password_confirmation: confirmpassword,
          })
          .then(() => {
            toast.success("Kamu berhasil register ", {
              position: "top-center",
            });
            navigate("/login");
          })
          
      } catch (err) {
        console.log(err.response.data.errors[0].msg);
        toast.warning(err.response.data.errors[0].msg, {
          autoClose: 1000,
          position: "top-center",
          transition: Zoom,
        });
      }
 
  };
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const show = () => {
    type === "password" ? setType("text") : setType("password");
    icon === "fa-solid fa-eye"
      ? setIcon("fa-solid fa-eye-slash")
      : setIcon("fa-solid fa-eye");
  };

  return (
    <div className=" ">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 2, x: 0 }}
        exit={{ opacity: 2, x: 30 }}
        transition={{ duration: 1.2 }}
        className="container-xxl   "
        id="testerregis"
      >
        
        <motion.div className="d-flex align-items-center border border-1 py-5 px-5 shadow-5">
          <ToastContainer />
          <MDBContainer className="container-fluid ">
            <div className="d-flex flex-lg-row ">
              <div className="col align-self-center m-5 " id="register1">
                <h3 className="mb-5">
                  Create your account for unexpected experience
                </h3>
                <form onSubmit={SubmitForm}>
                  <label htmlFor="" className="mb-4">
                    Fullname
                  </label>
                  <MDBInput
                    label="Fullname"
                    className="mb-3"
                    size="lg"
                    id="typeEmail"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <label htmlFor="" className="mb-4">
                    Email
                  </label>
                  <MDBInput
                    label="Email input"
                    className="mb-3"
                    size="lg"
                    id="typeEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="" className="mb-4">
                    Password
                  </label>
                  <MDBInputGroup
                    className="mb-3"
                    size="lg"
                    textAfter={<i onClick={show} id="i" className={icon}></i>}
                  >
                    <input
                      className="form-control"
                      type={type}
                      placeholder="Password Input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MDBInputGroup>
                  <label htmlFor="" className="mb-4">
                    Confirm Password
                  </label>
                  <MDBInputGroup
                    className="mb-3"
                    size="lg"
                    textAfter={<i onClick={show} id="i" className={icon}></i>}
                  >
                    <input
                      className="form-control"
                      type={type}
                      placeholder="Confirm Password Input"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                  </MDBInputGroup>

                  <MDBBtn className="me-1 mx-6 mb-4" type="submit" color="blue">
                    Register
                  </MDBBtn>
                </form>

                <h6>
                  Your account is ready go to
                  <Link to="/login">
                    <MDBBadge className="ms-2">Login page</MDBBadge>
                  </Link>
                </h6>
              </div>
              <div className="col align-self-center container-fluid  ">
                <MDBCarousel showControls>
                  <MDBCarouselItem
                    className="w-100 d-block carouselfoto"
                    itemId={1}
                    src="https://images.pexels.com/photos/2253813/pexels-photo-2253813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="..."
                  />
                  <MDBCarouselItem
                    className="w-100 d-block carouselfoto"
                    itemId={2}
                    src="https://images.pexels.com/photos/11191124/pexels-photo-11191124.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="..."
                  />
                  <MDBCarouselItem
                    className="w-100 d-block carouselfoto"
                    itemId={3}
                    src="https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="..."
                  />
                </MDBCarousel>
              </div>
            </div>
          </MDBContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Registerpage;
