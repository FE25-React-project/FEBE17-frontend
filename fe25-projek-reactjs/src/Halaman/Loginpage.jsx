import { MDBBtn, MDBCol, MDBContainer, MDBInput,MDBCarousel,MDBCarouselItem } from "mdb-react-ui-kit";
const Loginpage = () => {
  return (
    <MDBContainer className="container-fluid">
      <div className="d-flex" >
         <div className="col align-self-center" >
        <h3 className="mb-5">WELCOME BACK</h3>
        <label htmlFor="" className="mb-4">Email</label>
        <MDBInput label="Email input" className="mb-3" size="lg" id="typeEmail" type="email" />

        <label htmlFor="" className="mb-4">Password</label>
        <MDBInput label="Password input" id="typePassword" size="lg" className="mb-3" type="password" />
        <MDBBtn className="me-1 mx-6 " color="blue">
          Login
        </MDBBtn>
      </div>
      <div className="col align-self-center" >
      <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block carouselfoto'
        itemId={1}
        src='https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block carouselfoto'
        itemId={2}
        src='https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block carouselfoto'
        
        itemId={3}
        src='https://images.pexels.com/photos/3229454/pexels-photo-3229454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='...'
      />
    </MDBCarousel>
      </div>
      </div>
     
    </MDBContainer>
  );
};

export default Loginpage;
