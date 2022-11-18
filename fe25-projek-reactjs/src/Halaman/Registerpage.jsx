import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
  MDBBadge,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const SubmitForm = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("email tidak boleh kosong");
    } else if (password.length < 5){
      alert("password harus memiliki setidaknya 6 character");
    } 
    else if (password === "") {
      alert("password tidak boleh kosong");
    } else {
      try {
        const response = await axios.post(
          "https://634e3b4bf34e1ed82686101c.mockapi.io/USER_ACCOUNT",
          {
            email: email,
            password: password,
          }
        );
        alert("berhasil");
        navigate('/login')
      } catch (error) {
        alert("gagal register");
      }
    }
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      <MDBContainer className="container-fluid">
        <div className="d-flex flex-lg-row ">
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

          <div className="col align-self-center ">
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

              <MDBBtn className="me-1 mx-6 " type="submit" color="blue">
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
        </div>
      </MDBContainer>
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
