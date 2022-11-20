import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
  MDBBadge,
} from "mdb-react-ui-kit";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SubmitForm = async (e) => {
    e.preventDefault();

    if (email === "" && password === "") {
      toast.error("Kamu harus mengisi form terlebih dahulu", {
        autoClose: 1000,
        position: "top-center",
        transition: Zoom,
      });
    } else if (email === "") {
      toast.warning("Email tidak boleh kosong", {
        autoClose: 1000,
        position: "top-center",
        transition: Bounce,
      });
    } else if (password === "") {
      toast.warning("Password tidak boleh kosong", {
        autoClose: 1000,
        position: "top-center",
        transition: Bounce,
      });
    } else if (password.length < 5) {
      toast.warning("Password harus memiliki setidaknya 6 karakter", {
        autoClose: 1000,
        position: "top-center",
        transition: Bounce,
      });
    } else {
      try {
        const response = await axios.post(
          "https://634e3b4bf34e1ed82686101c.mockapi.io/USER_ACCOUNT",
          {
            autoClose: 1800,
            email: email,
            password: password,
          }
        );
        toast.success("selamat kamu berhasil membuat akun", {
          position: "top-center",
        });
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <motion.div

        className="d-flex"
      >
        <ToastContainer />
        <MDBContainer className="container-fluid">
          <div className="d-flex flex-lg-row ">
            <div className="col align-self-center m-5 " id="register1">
              <h3 className="mb-5">
                Create your account for unexpected experience
              </h3>
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
                  className="mb-3"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn className="me-1 mx-6 mb-3 " type="submit" color="blue">
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
            <div className="col align-self-center  ">
              <MDBCarousel showControls fade>
                <MDBCarouselItem
                  className="w-100 d-block carouselfoto"
                  itemId={1}
                  src="https://images.pexels.com/photos/2253813/pexels-photo-2253813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="..."
                />
                <MDBCarouselItem
                  className="w-100 d-block carouselfoto"
                  itemId={2}
                  src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </div>
  );
};

export default Registerpage;

// if (e.target.email.value === "" && e.target.password.value === "") {
//     alert("form tidak boleh kosong, silahkan isi form dibawah ini");
// } else {
//   alert("berhasil register").then((response)=>{
//       if(response){
//         console.log(response);
//         dispatch(Signup({
//           email: email,
//           password: password,
//         }))
//       }
//   })
// }
