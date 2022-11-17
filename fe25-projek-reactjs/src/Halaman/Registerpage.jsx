import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBCarousel,
  MDBCarouselItem,
  MDBBadge,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Registerpage = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] =useState('')
  const dispatch = useDispatch()

  const SubmitForm = (e) =>{
    e.preventDefault()
    

    if(e.target.email.value === "" && e.target.password.value === "" ){
        alert('form tidak boleh kosong, silahkan isi form dibawah ini')
    }
    else{
        alert('gagal')
    }
  }
  // const SubmitForm = (event) =>{
  //   event.preventDefault()
  //   if(s){

  //   }
  //   else{

  //   }
  // }
  return (
    <div className="container-fluid">
      <ToastContainer/>
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
            <form >
              <label htmlFor="" className="mb-4">
              Email
            </label>
            <MDBInput
              label="Email input"
              className="mb-3"
              size="lg"
              id="typeEmail"
              type="email"
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
