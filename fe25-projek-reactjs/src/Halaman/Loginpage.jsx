import { MDBBtn, MDBCol, MDBContainer, MDBInput,MDBCarousel,MDBCarouselItem } from "mdb-react-ui-kit";
const Loginpage = () => {
  return (
    <MDBContainer className="d-flex justify-content-between">
      <div>
        <h3>WELCOME BACK</h3>
        <h4>Email</h4>
        <MDBInput label="Email input" size="lg" id="typeEmail" type="email" />
        <MDBBtn className="me-1" color="secondary">
          Secondary
        </MDBBtn>
        <h3>Password</h3>
        <MDBInput label="Password input" id="typePassword" type="password" />
        <MDBBtn className="me-1" color="secondary">
          Secondary
        </MDBBtn>
      </div>
      <div>
      <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>
      </div>
    </MDBContainer>
  );
};

export default Loginpage;
