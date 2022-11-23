import { motion } from "framer-motion";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import { MDBBtn, MDBBadge, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Signin } from "../redux/action";
import { useState } from "react";
import { toast, Zoom } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Loginpage = () => {
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(Signin(email, password));
  }, []);

  const SubmitForm = (e) => {
    e.preventDefault();
    const cariAkun = user.find(
      (item) => item.email === email && item.password === password
    );

    if (cariAkun) {
      localStorage.setItem("user", JSON.stringify(cariAkun));
      toast.success(" Selamat kamu berhasil login!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        transition: Zoom,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/home");
    } else {
      toast.error("kamu belum punya akun", {
        autoClose: 1000,
        position: "top-center",
        transition: Zoom,
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 2, x: 0 }}
      exit={{ opacity: 2, x: 30 }}
      transition={{ duration: 1.2 }}
      className="container-xxl"
      id="testerregis2"
    >
      <motion.div className="d-flex align-items-center">
        <ToastContainer />
        <MDBContainer className="container-fluid">
          <div className="d-flex flex-lg-row ">
            <div className="col align-self-center m-5 " id="register2">
              <h3 className="mb-5 text-warning  fw-bolder " id="judullogin">Hola! <span className="text-black fw-light ">Welcome back</span></h3>
              <form onSubmit={SubmitForm}>
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
                <MDBInput
                  label="Password input"
                  id="typePassword"
                  size="lg"
                  className="mb-4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn className="me-1 mx-6 mb-4 " type="submit" color="blue">
                  Login
                </MDBBtn>
              </form>

              <h6>
                Dont have any account yet?
                <Link to="/register">
                  <MDBBadge className="ms-2">
                    Click here to make account
                  </MDBBadge>
                </Link>
              </h6>
            </div>
            <div className="col align-self-center container-fluid  ">
              <MDBCarousel showControls fade>
                <MDBCarouselItem
                  className="w-100 d-block carouselfoto"
                  itemId={1}
                  src="https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="..."
                />
                <MDBCarouselItem
                  className="w-100 d-block carouselfoto"
                  itemId={2}
                  src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="..."
                />
                <MDBCarouselItem
                  className="w-100 d-block carouselfoto"
                  itemId={3}
                  src="https://images.pexels.com/photos/3229454/pexels-photo-3229454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="..."
                />
              </MDBCarousel>
            </div>
          </div>
        </MDBContainer>
      </motion.div>
    </motion.div>
  );
};

export default Loginpage;
