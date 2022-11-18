import {
  MDBBtn,
  MDBBadge,
  MDBContainer,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Signin } from "../redux/action";
import { useState } from "react";
const Loginpage = () => {
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
      alert("berhasil");
    } else {
      alert("gagal");
    }
  };

  return (
    <MDBContainer className="container-fluid">
      <div className="d-flex">
        <div className="col align-self-center">
          <h3 className="mb-5">WELCOME BACK</h3>
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
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn className="me-1 mx-6 " color="blue">
              Login
            </MDBBtn>
          </form>

          <h6>
            Dont have any account yet?
            <Link to="/register">
              <MDBBadge className="ms-2">Click here to make account </MDBBadge>
            </Link>
          </h6>
        </div>
        <div className="col align-self-center">
          <MDBCarousel showControls fade>
            <MDBCarouselItem
              className="w-100 d-block carouselfoto"
              itemId={1}
              src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block carouselfoto"
              itemId={2}
              src="https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
  );
};

export default Loginpage;
